import { QueryResult, QueryRequest, IS_WORKER, IDB_SUPPORT } from '@src/common'
import QueryManager from '@src/executors/query_manager'

export default class DatabaseHelper {

  private isworker = true;
  private _worker: Worker;
  private queryManager: QueryManager
  private requestQueue: Array < QueryRequest > = [];
  private isCodeExecuting = false;

  constructor(worker ? : Worker) {
    if (worker) {
      this._worker = worker;
      this._worker.onmessage = this.processFinished.bind(this);
    } else {
      this.queryManager = new QueryManager(this.onResponse.bind(this));
      this.isworker = false;
    }
  }

  private processFinished(response: any) {
    this.onResponse(response.data);
  }

  private onResponse(response: QueryResult) {

    this.proceedRequest();
  }

  protected addQuery < T > (query: QueryRequest) {
    return new Promise<T>((resolve, reject) => {
      this.requestQueue.push(query);
      this.proceedRequest();
    })
  }

  private proceedRequest() {
    if (!this.isCodeExecuting) {
      if (this.requestQueue.length != 0) {
        this.postRequest(this.requestQueue.shift() as QueryRequest);
      }
    }
  }

  private postRequest(query: QueryRequest) {
    if (IS_WORKER) {
      this._worker.postMessage(query);
    } else {
      this.queryManager.execute(query);
    }
  }
}

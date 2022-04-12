import { QueryResult } from '@src/common'
import QueryManager from '@src/executors/query_manager'

export class Connection {

  private isworker = true;
  private _worker: Worker;
  private queryManager: QueryManager

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

  }
}
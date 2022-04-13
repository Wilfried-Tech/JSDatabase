import { Database, Logger } from './main'
import QueryManager from './executors/query_manager'
import { IS_WORKER, IDB_SUPPORT, QueryRequest, ERROR } from './common'

var workerUrl: string;

if (IS_WORKER) {
  (self as any).onmessage = function(data: QueryRequest) {
    new QueryManager().execute(data);
  }
} else {
  workerUrl = (document as any).currentScript.getAttribute('src');
}

export function Connection() {
  if (IDB_SUPPORT) {
    return new Database(new Worker(workerUrl));
  } else {
    new Logger(ERROR.IDB_UNSUPPORTED).throw();
  }
}
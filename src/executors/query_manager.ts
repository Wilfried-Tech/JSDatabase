import { QueryRequest, QueryResult } from '@src/common'

export default class QueryManager {
  
  private processFinishedCallback: Function;
  
  constructor(processFinishedCallback?: Function) {
    this.processFinishedCallback = (processFinishedCallback)? processFinishedCallback : (res:QueryResult)=>{
      (self as any).postMessage(res);
    }
  }
  
  public execute(req: QueryRequest){
    
  }
}
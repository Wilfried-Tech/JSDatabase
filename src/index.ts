import { fullSupportDatabases } from './utils'
import Error_Msg from './constants/'


export function Connect() {
  if(!fullSupportDatabases){
    throw new Error(Error_Msg.UNSUPPORTED_DB)
  }
}

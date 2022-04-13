import { ERROR, IError } from '@src/common'


export class Logger implements IError {

  type: ERROR
  message: string
  
  private info;
  
  constructor(type: ERROR, info ? ) {
    this.info = info;
  }
  
  throw(){
    throw this.get();
  }
  
  get(){
    return {
      type: this.type,
      message: this.getMsg()
    } as IError;
  }
  
  private getMsg() {

    switch (this.type) {
      case ERROR.IDB_UNSUPPORTED:
        return "Your Browser does not support IndexedDB"
    }
  }
}

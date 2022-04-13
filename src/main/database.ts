import DatabaseHelper from './database_helper'

export class Database extends DatabaseHelper {

  constructor(worker ? : Worker) {
    super(worker);
  }
  
  
  
  openOrCreateDatabase(dbname: string){
    return this.addQuery({
      
    });
  }
  
}

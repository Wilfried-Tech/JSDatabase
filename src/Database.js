const fields = new WeakMap();

/**
 * Database object
 * @class
 */

export default class Database {

  /**
   * @constructor
   * @param {IDBDatabase} idb the database
   * @param {Boolean} created indicate if database is opened or created
   */
  constructor(idb, created) {
    var _hidden = {
      IDB: idb,
      name: idb.name,
      status: created ? 'created' : 'opened',
      version: idb.version,
      tables: Array.prototype.map.call(idb.objectStoreNames, name => name)
    };
    fields.set(this, _hidden);
  }
  /**
   * @returns {String}
   */
  get name() {
    return fields.get(this).name;
  }

  /**
   * @returns {Number}
   */
  get version() {
    return fields.get(this).version;
  }

  /**
   * @returns {Array<String>}
   */
  get tableNames() {
    return fields.get(this).tables;
  }
  
  /**
   * @returns {String=op}
   */
   get status() {
     return fields.get(this).status;
   }
}

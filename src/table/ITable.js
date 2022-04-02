import DataType from './DataType.js'
import parseTableStruct from './tableParser.js'


var fields = new WeakMap();

/**
 * @class
 */
export default class ITable {

  /**
   * @constructor
   * @param {String} name name of table
   * @param {Object} table table représentation
   */
  constructor(table) {
    var _hidden = {};
    if (table) {
      try {
        table = parseTableStruct(table);
      } catch (e) {
        throw new Error(e.message);
        return;
      }
    }
    fields.set(this, _hidden);
  }

  get name() {
    return fields.get(this).name;
  }

}
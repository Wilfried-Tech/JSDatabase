/**
 * Check if indexedDB can run on this browser
 * @returns Boolean
 */

export function fullSupportDatabases() {
  if (!window.indexedDB) {
    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
    window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange
  }

  return (!window.indexedDB) ? false : true;
}

/**
 * merge two or more object
 * @param {Array<Object>} args
 * @return {Object}
 */
export function merge(args) {
  if (args.length) {
    var obj = {};
    for (var i = 0; i < args.length; i++) {
      Object.keys(args[i]).forEach(key => {
        obj[key] = args[i][key]
      })
    }
    return obj
  }
}

/**
 * return the type of his parameter
 * @param {*} arg variable
 * @returns {String} 
 */
export function type(arg) {
  var s = Object.prototype.toString.call(arg);
  /\[object (\w+)\]/i.exec(s);
  return RegExp.$1.replace(/HTML|Element/g, '').toLowerCase();
}

export * from './promise.js'

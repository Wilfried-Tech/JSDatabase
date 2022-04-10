/**
 * Check if indexedDB can run on this browser
 * @returns Boolean
 */

export function fullSupportDatabases() {
  try {
    if (!indexedDB) {
      indexedDB = (self as any).mozIndexedDB || (self as any).webkitIndexedDB || (self as any).msIndexedDB;
    }
    if (indexedDB) {
      IDBTransaction = IDBTransaction || (self as any).webkitIDBTransaction || (self as any).msIDBTransaction;
      (self as any).IDBKeyRange = (self as any).IDBKeyRange || (self as any).webkitIDBKeyRange || (self as any).msIDBKeyRange;
    }
    else {
      return false;
    }
  } catch (ex) {
    return false;
  }
  return true;
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
export function type(arg): string {
  var s = Object.prototype.toString.call(arg);
  /\[object (\w+)\]/i.exec(s);
  return RegExp.$1.replace(/HTML|Element/g, '').toLowerCase();
}

export * from './promise'

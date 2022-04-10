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
export * from './is_db_support'

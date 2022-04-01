/**
 * resolve a promise
 * @param {Object} response value to resolve
 * @returns {Promise<Object>}
 */

export function resolve(response) {
  return new Promise((_resolve) => { _resolve(response) })
}

/**
 * reject a promise
 * @param {Object} reason value to resolve
 * @returns {Promise<void>}
 */

export function reject(reason) {
  return new Promise((_reject) => { _reject(reason) })
}

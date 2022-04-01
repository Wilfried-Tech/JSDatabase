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

export * from './promise.js'

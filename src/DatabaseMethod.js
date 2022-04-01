import Database from './Database.js'
import { reject, resolve } from './utils'

/**
 * Open Database 
 * @param {String} dbname database name
 * @returns Database
 */

export function openDatabase(dbname) {
  if (/[^\w-]/.test(dbname)) {
    return reject("Database name could not contain character like: \n\t space and punctuation ")
  }

  var created = false,
    req = indexedDB.open(dbname);
  return new Promise((revolve, reject) => {
    req.onerror = req.onblocked = function(e) {
      reject('An Error occurs when we are opening Database !');
    }
    req.onsuccess = function(e) {
      //console.log('onsuccess');
      if (!created) revolve(new Database(this.result, created));
    }
    req.onupgradeneeded = function(arg) {
      created = true;
      revolve(new Database(this.result, created));
    }
  })
}

export function dropDatabase(dbname) {
  var req = indexedDB.deleteDatabase(dbname);
  return new Promise((revolve, reject) => {
    req.onsuccess = function(e) {
      revolve(`Database ${dbname} deleted !`);
    }
    req.onerror = req.onblocked = function(e) {
      reject(`An Error occurred when dropping Database ${dbname}\n Please close navigator tabs and retry !`)
    }
  })
}

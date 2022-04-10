import { resolve, reject } from "../utils"

/**
 * Drop if exists the specified database
 * @param {String} dbname database name
 * @returns {Promise<String>}
 */

export default function dropDatabase(dbname: string) {
  var req = indexedDB.deleteDatabase(dbname);
  return new Promise < String > ((revolve, reject) => {
    req.onsuccess = function(e) {
      revolve(`Database ${dbname} deleted !`);
    }
    req.onerror = function(e) {
      reject(`An Error occurred when dropping Database ${dbname}\n Please close navigator tabs and retry !`)
    }
    
    req.onblocked = function(e) {
      reject(`An Error occurred when dropping Database ${dbname}\n Please close navigator tabs and retry !`)
    }
  })
}

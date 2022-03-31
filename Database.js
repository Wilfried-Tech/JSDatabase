(function(window) {
  'use strict'
  if (!window.indexedDB) {
    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
    window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange
  }
  if (!window.indexedDB) {
    console.error("Votre navigateur ne supporte pas une version stable d'IndexedDB. Quelques fonctionnalités ne seront pas disponibles.")
    return;
  }

  function checkTableStruct(table) {
    var template = {
      primaryKey: false,
      autoIncrement: false,
      notNull: false
    }
  }

  function typeOf(obj) {
    /\[object (\w+)\]/i.exec(Object.prototype.toString.call(obj));
    return RegExp.$1.toLowerCase();
  }

  function reject(reason) {
    return new Promise((rev, err) => { err(reason); })
  }

  function revolve(value) {
    return new Promise((rev, err) => { rev(value); })
  }

  window.DatabaseJS = new Object();

  DatabaseJS.Type = {
    Number: 'number',
    String: 'string',
    Boolean: 'boolean',
    Date: 'date',
    Object: 'object',
    Array: 'array'
  }

  DatabaseJS.openOrCreate = async function(name) {
    // console.log(await DatabaseJS.dropDatabase(name))

    var created = false,
      req = indexedDB.open(name);
    return new Promise((revolve, reject) => {
      req.onerror = function(e) {
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

  DatabaseJS.dropDatabase = function(dbname) {
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


  function Database(db, created) {
    this.db = db;
    this.name = db.name;
    this.version = db.version;
    this.store = {};
    this.status = (created) ? 'created' : 'opened'
    if (this.status == 'opened') {
      for (var name of this.db.objectStoreNames) {
        this.store[name] = this.db.transaction(name).objectStore(name)
      }
    }
    this.db.onerror = this.onerror;
  }
  Database.prototype.onerror = function(e) { console.log(e); }

  Database.prototype.createTable = function(table) {
    if (!table.name || typeOf(table.name) != 'string') {
      return reject('the table name are not present or is not correct')
    }
    if (table.name in this.store) {
      return reject(`the table ${table.name} already exists !`);
    }
    var $this = this;
    return new Promise((revolve, reject) => {

      if ($this.status == 'opened') {
        $this.db.close();
        var req = indexedDB.open($this.name, $this.version + 1);
        req.onerror = function(e) {
          $this.onerror(e)
        }
        req.onupgradeneeded = function() {
          $this.db = req.result;
          $this.version = $this.db.version;
          var store = $this.db.createObjectStore(table.name, { keyPath: table.primaryKey, autoIncrement: table.columns[table.primaryKey].autoIncrement });
          for (var column in table.columns) {
            store.createIndex(column, column, { unique: table.columns[column].unique })
          }
          store.transaction.oncomplete = function(e) {
            $this.store[table.name] = store;
            revolve(`table ${table.name} created !`)
          }
        }
      } else {
        var store = $this.db.createObjectStore(table.name, { keyPath: table.primaryKey, autoIncrement: table.columns[table.primaryKey].autoIncrement });
        for (var column in table.columns) {
          store.createIndex(column, column, { unique: table.columns[column].unique })
        }
        store.transaction.oncomplete = function(e) {
          $this.store[table.name] = store;
          revolve(`table ${table.name} created !`)
        }
      }
    })
  }

  Database.prototype.insert = function(req) {
    var store = this.db.transaction(req.into, 'readwrite').objectStore(req.into);
    var inserted = 0;
    for (var value of req.values) {
      store.add(value);
      inserted++;
    }
    return revolve(inserted);
  }

  Database.prototype.delete = function(req) {
    var store = this.db.transaction(req.from, 'readwrite').objectStore(req.from);
    var deleted = 0;
    for (var key in req.where) {
      store.delete(req.where[key]);
      deleted++;
    }
    revolve(deleted);
  }

  Database.prototype.update = function(req) {
    var store = this.db.transaction(req.table, 'readwrite').objectStore(req.table);
    var row = store.get(req.where.id)
    return new Promise((revolve, reject) => {
      row.onsuccess = function(e) {
        var rowres = row.result;
        for (var key in req.set) {
          rowres[key] = req.set[key];
        }
        var putReq = store.put(rowres);
        putReq.onsuccess = function(e) {
          revolve('updated succefully')
        }
      }
    });
  }

  Database.prototype.select = function(req) {
    if (req.rows == '*') {
      return new Promise((rev, rej) => {
        var getReq = this.db.transaction(req.from).objectStore(req.from).getAll();

        getReq.onsuccess = function() {
          rev(getReq.result);
        }

      })
    }
  }

})(window)

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Database.js":
/*!*************************!*\
  !*** ./src/Database.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Database)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var fields = new WeakMap();
/**
 * Database object
 * @class
 */

var Database = /*#__PURE__*/function () {
  /**
   * @constructor
   * @param {IDBDatabase} idb the database
   * @param {Boolean} created indicate if database is opened or created
   */
  function Database(idb, created) {
    _classCallCheck(this, Database);

    var _hidden = {
      IDB: idb,
      name: idb.name,
      status: created ? 'created' : 'opened',
      version: idb.version,
      tables: Array.prototype.map.call(idb.objectStoreNames, function (name) {
        return name;
      })
    };
    fields.set(this, _hidden);
  }
  /**
   * @returns {String}
   */


  _createClass(Database, [{
    key: "name",
    get: function get() {
      return fields.get(this).name;
    }
    /**
     * @returns {Number}
     */

  }, {
    key: "version",
    get: function get() {
      return fields.get(this).version;
    }
    /**
     * @returns {Array<String>}
     */

  }, {
    key: "tableNames",
    get: function get() {
      return fields.get(this).tables;
    }
    /**
     * @returns {String=op}
     */

  }, {
    key: "status",
    get: function get() {
      return fields.get(this).status;
    }
  }]);

  return Database;
}();



/***/ }),

/***/ "./src/DatabaseMethod.js":
/*!*******************************!*\
  !*** ./src/DatabaseMethod.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "openDatabase": () => (/* binding */ openDatabase),
/* harmony export */   "dropDatabase": () => (/* binding */ dropDatabase)
/* harmony export */ });
/* harmony import */ var _Database_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Database.js */ "./src/Database.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils/index.js");


/**
 * Open Database 
 * @param {String} dbname database name
 * @returns Database
 */

function openDatabase(dbname) {
  if (/[^\w-]/.test(dbname)) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.reject)("Database name could not contain character like: \n\t space and punctuation ");
  }

  var created = false,
      req = indexedDB.open(dbname);
  return new Promise(function (revolve, reject) {
    req.onerror = req.onblocked = function (e) {
      reject('An Error occurs when we are opening Database !');
    };

    req.onsuccess = function (e) {
      //console.log('onsuccess');
      if (!created) revolve(new _Database_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.result, created));
    };

    req.onupgradeneeded = function (arg) {
      created = true;
      revolve(new _Database_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.result, created));
    };
  });
}
function dropDatabase(dbname) {
  var req = indexedDB.deleteDatabase(dbname);
  return new Promise(function (revolve, reject) {
    req.onsuccess = function (e) {
      revolve("Database ".concat(dbname, " deleted !"));
    };

    req.onerror = req.onblocked = function (e) {
      reject("An Error occurred when dropping Database ".concat(dbname, "\n Please close navigator tabs and retry !"));
    };
  });
}

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fullSupportDatabases": () => (/* binding */ fullSupportDatabases),
/* harmony export */   "merge": () => (/* binding */ merge),
/* harmony export */   "type": () => (/* binding */ type),
/* harmony export */   "reject": () => (/* reexport safe */ _promise_js__WEBPACK_IMPORTED_MODULE_0__.reject),
/* harmony export */   "resolve": () => (/* reexport safe */ _promise_js__WEBPACK_IMPORTED_MODULE_0__.resolve)
/* harmony export */ });
/* harmony import */ var _promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promise.js */ "./src/utils/promise.js");
/**
 * Check if indexedDB can run on this browser
 * @returns Boolean
 */
function fullSupportDatabases() {
  if (!window.indexedDB) {
    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
    window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
  }

  return !window.indexedDB ? false : true;
}
/**
 * merge two or more object
 * @param {Array<Object>} args
 * @return {Object}
 */

function merge(args) {
  if (args.length) {
    var obj = {};

    for (var i = 0; i < args.length; i++) {
      Object.keys(args[i]).forEach(function (key) {
        obj[key] = args[i][key];
      });
    }

    return obj;
  }
}
/**
 * return the type of his parameter
 * @param {*} arg variable
 * @returns {String} 
 */

function type(arg) {
  var s = Object.prototype.toString.call(arg);
  /\[object (\w+)\]/i.exec(s);
  return RegExp.$1.replace(/HTML|Element/g, '').toLowerCase();
}


/***/ }),

/***/ "./src/utils/promise.js":
/*!******************************!*\
  !*** ./src/utils/promise.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resolve": () => (/* binding */ resolve),
/* harmony export */   "reject": () => (/* binding */ reject)
/* harmony export */ });
/**
 * resolve a promise
 * @param {Object} response value to resolve
 * @returns {Promise<Object>}
 */
function resolve(response) {
  return new Promise(function (_resolve) {
    _resolve(response);
  });
}
/**
 * reject a promise
 * @param {Object} reason value to resolve
 * @returns {Promise<void>}
 */

function reject(reason) {
  return new Promise(function (_reject) {
    _reject(reason);
  });
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DatabaseMethod_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DatabaseMethod.js */ "./src/DatabaseMethod.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils/index.js");



if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__.fullSupportDatabases)()) {
  window.DatabaseJS = {
    openOrCreate: _DatabaseMethod_js__WEBPACK_IMPORTED_MODULE_0__.openDatabase,
    dropDatabase: _DatabaseMethod_js__WEBPACK_IMPORTED_MODULE_0__.dropDatabase,
    deviceFullSupports: _utils__WEBPACK_IMPORTED_MODULE_1__.fullSupportDatabases
  };
} else {
  window.DatabaseJS = {
    deviceFullSupports: _utils__WEBPACK_IMPORTED_MODULE_1__.fullSupportDatabases
  };
  console.error("This Browser do not support a stable version of Database.\nPlease update your browser !");
}
})();

/******/ })()
;
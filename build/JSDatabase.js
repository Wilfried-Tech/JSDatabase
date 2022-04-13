/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/common/constants.ts":
/*!*********************************!*\
  !*** ./src/common/constants.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IDB_SUPPORT": () => (/* binding */ IDB_SUPPORT),
/* harmony export */   "IS_WORKER": () => (/* binding */ IS_WORKER)
/* harmony export */ });
/* harmony import */ var _src_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/utils */ "./src/utils/index.ts");

var IDB_SUPPORT = (0,_src_utils__WEBPACK_IMPORTED_MODULE_0__.fullSupportDatabases)();
var IS_WORKER = typeof self.alert === "undefined";


/***/ }),

/***/ "./src/common/enums.ts":
/*!*****************************!*\
  !*** ./src/common/enums.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataType": () => (/* binding */ DataType),
/* harmony export */   "ERROR": () => (/* binding */ ERROR)
/* harmony export */ });
var DataType;
(function (DataType) {
    DataType["Number"] = "number";
    DataType["String"] = "string";
    DataType["Boolean"] = "boolean";
    DataType["Date"] = "date";
    DataType["Object"] = "object";
    DataType["Array"] = "array";
    DataType["JSON"] = "json";
})(DataType || (DataType = {}));
var ERROR;
(function (ERROR) {
    ERROR["IDB_UNSUPPORTED"] = "idb_not_supported";
})(ERROR || (ERROR = {}));


/***/ }),

/***/ "./src/common/index.ts":
/*!*****************************!*\
  !*** ./src/common/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IDB_SUPPORT": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.IDB_SUPPORT),
/* harmony export */   "IS_WORKER": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.IS_WORKER),
/* harmony export */   "DataType": () => (/* reexport safe */ _enums__WEBPACK_IMPORTED_MODULE_3__.DataType),
/* harmony export */   "ERROR": () => (/* reexport safe */ _enums__WEBPACK_IMPORTED_MODULE_3__.ERROR)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/common/constants.ts");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interfaces */ "./src/common/interfaces.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./src/common/types.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enums */ "./src/common/enums.ts");






/***/ }),

/***/ "./src/common/interfaces.ts":
/*!**********************************!*\
  !*** ./src/common/interfaces.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./src/common/types.ts":
/*!*****************************!*\
  !*** ./src/common/types.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./src/executors/query_manager.ts":
/*!****************************************!*\
  !*** ./src/executors/query_manager.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var QueryManager = /** @class */ (function () {
    function QueryManager(processFinishedCallback) {
        this.processFinishedCallback = (processFinishedCallback) ? processFinishedCallback : function (res) {
            self.postMessage(res);
        };
    }
    QueryManager.prototype.execute = function (req) {
        this.processFinishedCallback("test okay");
    };
    return QueryManager;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QueryManager);


/***/ }),

/***/ "./src/main/database.ts":
/*!******************************!*\
  !*** ./src/main/database.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Database": () => (/* binding */ Database)
/* harmony export */ });
/* harmony import */ var _database_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./database_helper */ "./src/main/database_helper.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Database = /** @class */ (function (_super) {
    __extends(Database, _super);
    function Database(worker) {
        return _super.call(this, worker) || this;
    }
    Database.prototype.openOrCreateDatabase = function (dbname) {
        return;
    };
    return Database;
}(_database_helper__WEBPACK_IMPORTED_MODULE_0__["default"]));



/***/ }),

/***/ "./src/main/database_helper.ts":
/*!*************************************!*\
  !*** ./src/main/database_helper.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/common */ "./src/common/index.ts");
/* harmony import */ var _src_executors_query_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/executors/query_manager */ "./src/executors/query_manager.ts");


var DatabaseHelper = /** @class */ (function () {
    function DatabaseHelper(worker) {
        this.isworker = true;
        this.requestQueue = [];
        this.isCodeExecuting = false;
        if (worker) {
            this._worker = worker;
            this._worker.onmessage = this.processFinished.bind(this);
        }
        else {
            this.queryManager = new _src_executors_query_manager__WEBPACK_IMPORTED_MODULE_1__["default"](this.onResponse.bind(this));
            this.isworker = false;
        }
    }
    DatabaseHelper.prototype.processFinished = function (response) {
        this.onResponse(response.data);
    };
    DatabaseHelper.prototype.onResponse = function (response) {
        this.proceedRequest();
    };
    DatabaseHelper.prototype.addQuery = function (query) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.requestQueue.push(query);
            _this.proceedRequest();
        });
    };
    DatabaseHelper.prototype.proceedRequest = function () {
        if (!this.isCodeExecuting) {
            if (this.requestQueue.length != 0) {
                this.postRequest(this.requestQueue.shift());
            }
        }
    };
    DatabaseHelper.prototype.postRequest = function (query) {
        if (_src_common__WEBPACK_IMPORTED_MODULE_0__.IS_WORKER) {
            this._worker.postMessage(query);
        }
        else {
            this.queryManager.execute(query);
        }
    };
    return DatabaseHelper;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DatabaseHelper);


/***/ }),

/***/ "./src/main/index.ts":
/*!***************************!*\
  !*** ./src/main/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Database": () => (/* reexport safe */ _database__WEBPACK_IMPORTED_MODULE_0__.Database),
/* harmony export */   "Logger": () => (/* reexport safe */ _logger__WEBPACK_IMPORTED_MODULE_1__.Logger)
/* harmony export */ });
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./database */ "./src/main/database.ts");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger */ "./src/main/logger.ts");




/***/ }),

/***/ "./src/main/logger.ts":
/*!****************************!*\
  !*** ./src/main/logger.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Logger": () => (/* binding */ Logger)
/* harmony export */ });
/* harmony import */ var _src_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/common */ "./src/common/index.ts");

var Logger = /** @class */ (function () {
    function Logger(type, info) {
        this.info = info;
    }
    Logger.prototype.throw = function () {
        throw this.get();
    };
    Logger.prototype.get = function () {
        return {
            type: this.type,
            message: this.getMsg()
        };
    };
    Logger.prototype.getMsg = function () {
        switch (this.type) {
            case _src_common__WEBPACK_IMPORTED_MODULE_0__.ERROR.IDB_UNSUPPORTED:
                return "Your Browser does not support IndexedDB";
        }
    };
    return Logger;
}());



/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "merge": () => (/* binding */ merge),
/* harmony export */   "type": () => (/* binding */ type),
/* harmony export */   "reject": () => (/* reexport safe */ _promise__WEBPACK_IMPORTED_MODULE_0__.reject),
/* harmony export */   "resolve": () => (/* reexport safe */ _promise__WEBPACK_IMPORTED_MODULE_0__.resolve),
/* harmony export */   "fullSupportDatabases": () => (/* reexport safe */ _is_db_support__WEBPACK_IMPORTED_MODULE_1__.fullSupportDatabases)
/* harmony export */ });
/* harmony import */ var _promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promise */ "./src/utils/promise.ts");
/* harmony import */ var _is_db_support__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is_db_support */ "./src/utils/is_db_support.ts");
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

/***/ "./src/utils/is_db_support.ts":
/*!************************************!*\
  !*** ./src/utils/is_db_support.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fullSupportDatabases": () => (/* binding */ fullSupportDatabases)
/* harmony export */ });
/**
 * Check if indexedDB can run on this browser
 * @returns { Boolean }
 */
function fullSupportDatabases() {
    try {
        if (!indexedDB) {
            indexedDB = self.mozIndexedDB || self.webkitIndexedDB || self.msIndexedDB;
        }
        if (indexedDB) {
            IDBTransaction = IDBTransaction || self.webkitIDBTransaction || self.msIDBTransaction;
            self.IDBKeyRange = self.IDBKeyRange || self.webkitIDBKeyRange || self.msIDBKeyRange;
        }
        else {
            return false;
        }
    }
    catch (ex) {
        return false;
    }
    return true;
}


/***/ }),

/***/ "./src/utils/promise.ts":
/*!******************************!*\
  !*** ./src/utils/promise.ts ***!
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
    return new Promise(function (_resolve) { _resolve(response); });
}
/**
 * reject a promise
 * @param {Object} reason value to resolve
 * @returns {Promise<void>}
 */
function reject(reason) {
    return new Promise(function (_reject) { _reject(reason); });
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
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Connection": () => (/* binding */ Connection)
/* harmony export */ });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/main/index.ts");
/* harmony import */ var _executors_query_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./executors/query_manager */ "./src/executors/query_manager.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "./src/common/index.ts");



var workerUrl;
if (_common__WEBPACK_IMPORTED_MODULE_2__.IS_WORKER) {
    self.onmessage = function (data) {
        new _executors_query_manager__WEBPACK_IMPORTED_MODULE_1__["default"]().execute(data);
    };
}
else {
    workerUrl = document.currentScript.getAttribute('src');
}
function Connection() {
    if (_common__WEBPACK_IMPORTED_MODULE_2__.IDB_SUPPORT) {
        return new _main__WEBPACK_IMPORTED_MODULE_0__.Database(new Worker(workerUrl));
    }
    else {
        new _main__WEBPACK_IMPORTED_MODULE_0__.Logger(_common__WEBPACK_IMPORTED_MODULE_2__.ERROR.IDB_UNSUPPORTED).throw();
    }
}

})();

window.DatabaseJS = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=JSDatabase.js.map
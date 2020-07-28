/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/context/index.js":
/*!******************************!*\
  !*** ./src/context/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar UiSdkContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);\n/* harmony default export */ __webpack_exports__[\"default\"] = (UiSdkContext);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dC9pbmRleC5qcz9kMWI3Il0sIm5hbWVzIjpbIlVpU2RrQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxJQUFNQSxZQUFZLGdCQUFHQyw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLElBQXBCLENBQXJCO0FBRWVGLDJFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbnRleHQvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBVaVNka0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuXG5leHBvcnQgZGVmYXVsdCBVaVNka0NvbnRleHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/index.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./provider */ \"./src/provider.js\");\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-intl */ \"./node_modules/react-intl/lib/index.es.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./context */ \"./src/context/index.js\");\n/* harmony import */ var _ayx_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ayx/ui-core */ \"./node_modules/@ayx/ui-core/index.es.js\");\n\n\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nvar actionTypes = ['UPDATE_PALETTE', 'UPDATE_THEME', 'UPDATE_LOCALE', 'UPDATE_MODEL', 'UPDATE_DATA_ENVELOPE'];\nvar messages = {\n  en: {\n    'example.label': 'super awesome string'\n  },\n  fr: {\n    'example.label': 'ficelle super génial'\n  },\n  de: {\n    'example.label': 'super tolle Saite'\n  },\n  es: {\n    'example.label': 'cadena super impresionante'\n  },\n  pt: {\n    'example.label': 'corda super incrível'\n  },\n  ja: {\n    'example.label': '超素晴らしい文字列'\n  },\n  zh: {\n    'example.label': '超棒的弦'\n  }\n};\n\nvar App = /*#__PURE__*/function (_React$Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(App, _React$Component);\n\n  var _super = _createSuper(App);\n\n  function App() {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, App);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    _this.handleClick = function (value, updateContext) {\n      var newModel = _objectSpread({}, value);\n\n      newModel.count++;\n      updateContext(newModel);\n    };\n\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(App, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_provider__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_10__[\"default\"].Consumer, null, function (model, updateContext) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ayx_ui_core__WEBPACK_IMPORTED_MODULE_11__[\"Grid\"], {\n          container: true\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ayx_ui_core__WEBPACK_IMPORTED_MODULE_11__[\"Card\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ayx_ui_core__WEBPACK_IMPORTED_MODULE_11__[\"Grid\"], {\n          item: true\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ayx_ui_core__WEBPACK_IMPORTED_MODULE_11__[\"Typography\"], null, \"This message changes with my locale:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ayx_ui_core__WEBPACK_IMPORTED_MODULE_11__[\"Typography\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__[\"FormattedMessage\"], {\n          id: \"example.label\"\n        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ayx_ui_core__WEBPACK_IMPORTED_MODULE_11__[\"Button\"], {\n          variant: \"contained\",\n          onClick: function onClick() {\n            return _this2.handleClick(model, updateContext);\n          }\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ayx_ui_core__WEBPACK_IMPORTED_MODULE_11__[\"Typography\"], null, \"Click me to increment my parent app's count!\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ayx_ui_core__WEBPACK_IMPORTED_MODULE_11__[\"Typography\"], {\n          variant: \"h2\"\n        }, \" This count is coming from my parent: \", model.count, \" \")));\n      }));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);\n\nObject(react_dom__WEBPACK_IMPORTED_MODULE_7__[\"render\"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(App, null), document.getElementById('app'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6WyJhY3Rpb25UeXBlcyIsIm1lc3NhZ2VzIiwiZW4iLCJmciIsImRlIiwiZXMiLCJwdCIsImphIiwiemgiLCJBcHAiLCJoYW5kbGVDbGljayIsInZhbHVlIiwidXBkYXRlQ29udGV4dCIsIm5ld01vZGVsIiwiY291bnQiLCJtb2RlbCIsIlJlYWN0IiwiQ29tcG9uZW50IiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHLENBQ2xCLGdCQURrQixFQUVsQixjQUZrQixFQUdsQixlQUhrQixFQUlsQixjQUprQixFQUtsQixzQkFMa0IsQ0FBcEI7QUFRQSxJQUFNQyxRQUFRLEdBQUc7QUFDZkMsSUFBRSxFQUFFO0FBQ0YscUJBQWlCO0FBRGYsR0FEVztBQUlmQyxJQUFFLEVBQUU7QUFDRixxQkFBaUI7QUFEZixHQUpXO0FBT2ZDLElBQUUsRUFBRTtBQUNGLHFCQUFpQjtBQURmLEdBUFc7QUFVZkMsSUFBRSxFQUFFO0FBQ0YscUJBQWlCO0FBRGYsR0FWVztBQWFmQyxJQUFFLEVBQUU7QUFDRixxQkFBaUI7QUFEZixHQWJXO0FBZ0JmQyxJQUFFLEVBQUU7QUFDRixxQkFBaUI7QUFEZixHQWhCVztBQW1CZkMsSUFBRSxFQUFFO0FBQ0YscUJBQWlCO0FBRGY7QUFuQlcsQ0FBakI7O0lBd0JNQyxHOzs7Ozs7Ozs7Ozs7Ozs7O1VBQ0pDLFcsR0FBYyxVQUFDQyxLQUFELEVBQVFDLGFBQVIsRUFBMEI7QUFDdEMsVUFBTUMsUUFBUSxxQkFBUUYsS0FBUixDQUFkOztBQUNBRSxjQUFRLENBQUNDLEtBQVQ7QUFDQUYsbUJBQWEsQ0FBQ0MsUUFBRCxDQUFiO0FBQ0QsSzs7Ozs7Ozs2QkFFUTtBQUFBOztBQUNQLDBCQUNFLDJEQUFDLGlEQUFELHFCQUNFLDJEQUFDLGlEQUFELENBQWUsUUFBZixRQUNHLFVBQUNFLEtBQUQsRUFBUUgsYUFBUjtBQUFBLDRCQUNDLDJEQUFDLGtEQUFEO0FBQU0sbUJBQVM7QUFBZix3QkFDRSwyREFBQyxrREFBRCxxQkFDRSwyREFBQyxrREFBRDtBQUFNLGNBQUk7QUFBVix3QkFDRSwyREFBQyx3REFBRCwrQ0FERixlQUlFLDJEQUFDLHdEQUFELHFCQUNFLDJEQUFDLDJEQUFEO0FBQWtCLFlBQUUsRUFBQztBQUFyQixVQURGLENBSkYsQ0FERixlQVNFLDJEQUFDLG9EQUFEO0FBQVEsaUJBQU8sRUFBQyxXQUFoQjtBQUE0QixpQkFBTyxFQUFFO0FBQUEsbUJBQU0sTUFBSSxDQUFDRixXQUFMLENBQWlCSyxLQUFqQixFQUF3QkgsYUFBeEIsQ0FBTjtBQUFBO0FBQXJDLHdCQUNFLDJEQUFDLHdEQUFELHVEQURGLENBVEYsZUFZRSwyREFBQyx3REFBRDtBQUFZLGlCQUFPLEVBQUM7QUFBcEIscURBQWdFRyxLQUFLLENBQUNELEtBQXRFLE1BWkYsQ0FERixDQUREO0FBQUEsT0FESCxDQURGLENBREY7QUF5QkQ7Ozs7RUFqQ2VFLDRDQUFLLENBQUNDLFM7O0FBb0N4QkMsd0RBQU0sZUFDSiwyREFBQyxHQUFELE9BREksRUFFSkMsUUFBUSxDQUFDQyxjQUFULENBQXdCLEtBQXhCLENBRkksQ0FBTiIsImZpbGUiOiIuL3NyYy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFByb3ZpZGVyIGZyb20gJy4vcHJvdmlkZXInXG5pbXBvcnQgeyBGb3JtYXR0ZWRNZXNzYWdlIH0gZnJvbSAncmVhY3QtaW50bCc7XG5pbXBvcnQgVWlTZGtQcm92aWRlciBmcm9tICcuL2NvbnRleHQnXG5pbXBvcnQgeyBBeXhBcHBXcmFwcGVyLCBCdXR0b24sIFR5cG9ncmFwaHksIEdyaWQsIENhcmQgfSBmcm9tICdAYXl4L3VpLWNvcmUnXG5cbmNvbnN0IGFjdGlvblR5cGVzID0gW1xuICAnVVBEQVRFX1BBTEVUVEUnLFxuICAnVVBEQVRFX1RIRU1FJyxcbiAgJ1VQREFURV9MT0NBTEUnLFxuICAnVVBEQVRFX01PREVMJyxcbiAgJ1VQREFURV9EQVRBX0VOVkVMT1BFJ1xuXVxuXG5jb25zdCBtZXNzYWdlcyA9IHtcbiAgZW46IHtcbiAgICAnZXhhbXBsZS5sYWJlbCc6ICdzdXBlciBhd2Vzb21lIHN0cmluZydcbiAgfSxcbiAgZnI6IHtcbiAgICAnZXhhbXBsZS5sYWJlbCc6ICdmaWNlbGxlIHN1cGVyIGfDqW5pYWwnXG4gIH0sXG4gIGRlOiB7XG4gICAgJ2V4YW1wbGUubGFiZWwnOiAnc3VwZXIgdG9sbGUgU2FpdGUnXG4gIH0sXG4gIGVzOiB7XG4gICAgJ2V4YW1wbGUubGFiZWwnOiAnY2FkZW5hIHN1cGVyIGltcHJlc2lvbmFudGUnXG4gIH0sXG4gIHB0OiB7XG4gICAgJ2V4YW1wbGUubGFiZWwnOiAnY29yZGEgc3VwZXIgaW5jcsOtdmVsJ1xuICB9LFxuICBqYToge1xuICAgICdleGFtcGxlLmxhYmVsJzogJ+i2hee0oOaZtOOCieOBl+OBhOaWh+Wtl+WIlydcbiAgfSxcbiAgemg6IHtcbiAgICAnZXhhbXBsZS5sYWJlbCc6ICfotoXmo5LnmoTlvKYnXG4gIH1cbn07XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGhhbmRsZUNsaWNrID0gKHZhbHVlLCB1cGRhdGVDb250ZXh0KSA9PiB7XG4gICAgY29uc3QgbmV3TW9kZWwgPSB7IC4uLnZhbHVlIH1cbiAgICBuZXdNb2RlbC5jb3VudCsrXG4gICAgdXBkYXRlQ29udGV4dChuZXdNb2RlbClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFByb3ZpZGVyPlxuICAgICAgICA8VWlTZGtQcm92aWRlci5Db25zdW1lcj5cbiAgICAgICAgICB7KG1vZGVsLCB1cGRhdGVDb250ZXh0KSA9PiAoXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XG4gICAgICAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgVGhpcyBtZXNzYWdlIGNoYW5nZXMgd2l0aCBteSBsb2NhbGU6IFxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwiZXhhbXBsZS5sYWJlbFwiIC8+XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2xpY2sobW9kZWwsIHVwZGF0ZUNvbnRleHQpfT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PkNsaWNrIG1lIHRvIGluY3JlbWVudCBteSBwYXJlbnQgYXBwJ3MgY291bnQhPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiPiBUaGlzIGNvdW50IGlzIGNvbWluZyBmcm9tIG15IHBhcmVudDoge21vZGVsLmNvdW50fSA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICl9XG4gICAgICAgIDwvVWlTZGtQcm92aWRlci5Db25zdW1lcj5cbiAgICAgICAgICBcbiAgICAgIDwvUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5yZW5kZXIoXG4gIDxBcHAvPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXG4pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/provider.js":
/*!*************************!*\
  !*** ./src/provider.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../Context'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _ayx_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ayx/ui-core */ \"./node_modules/@ayx/ui-core/index.es.js\");\n\n\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar actionTypes = ['UPDATE_PALETTE', 'UPDATE_THEME', 'UPDATE_LOCALE', 'UPDATE_MODEL', 'UPDATE_DATA_ENVELOPE'];\nvar messages = {\n  en: {\n    'example.label': 'super awesome string'\n  },\n  fr: {\n    'example.label': 'ficelle super génial'\n  },\n  de: {\n    'example.label': 'super tolle Saite'\n  },\n  es: {\n    'example.label': 'cadena super impresionante'\n  },\n  pt: {\n    'example.label': 'corda super incrível'\n  },\n  ja: {\n    'example.label': '超素晴らしい文字列'\n  },\n  zh: {\n    'example.label': '超棒的弦'\n  }\n};\n\nvar Provider = /*#__PURE__*/function (_React$Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Provider, _React$Component);\n\n  var _super = _createSuper(Provider);\n\n  function Provider(props) {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Provider);\n\n    _this = _super.call(this, props);\n\n    _this.postMessage = function (data) {\n      window.parent.postMessage(data);\n    };\n\n    _this.receiveMessageEnvelope = function (_ref) {\n      var data = _ref.data;\n\n      if (actionTypes.find(function (t) {\n        return t === data.type;\n      })) {\n        _this.setState(_objectSpread({}, data.payload));\n      }\n    };\n\n    _this.updateContext = function (context) {\n      _this.setState(_objectSpread({}, context));\n    };\n\n    _this.state = {\n      meta: null,\n      info: null,\n      darkMode: false\n    };\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Provider, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var dataEnvelope = window.dataEnvelope;\n      this.setState(_objectSpread({}, dataEnvelope));\n      window.addEventListener('message', this.receiveMessageEnvelope);\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      window.removeEventListener('message', this.receiveMessageEnvelope);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$state = this.state,\n          darkMode = _this$state.darkMode,\n          productTheme = _this$state.productTheme,\n          locale = _this$state.locale;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ayx_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"AyxAppWrapper\"], {\n        paletteType: darkMode ? 'dark' : 'light',\n        productTheme: productTheme,\n        locale: locale\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../Context'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).Provider, {\n        updateContext: this.updateContext,\n        model: this.state.model\n      }, this.props.children));\n    }\n  }]);\n\n  return Provider;\n}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Provider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcHJvdmlkZXIuanM/YTFkOSJdLCJuYW1lcyI6WyJhY3Rpb25UeXBlcyIsIm1lc3NhZ2VzIiwiZW4iLCJmciIsImRlIiwiZXMiLCJwdCIsImphIiwiemgiLCJQcm92aWRlciIsInByb3BzIiwicG9zdE1lc3NhZ2UiLCJkYXRhIiwid2luZG93IiwicGFyZW50IiwicmVjZWl2ZU1lc3NhZ2VFbnZlbG9wZSIsImZpbmQiLCJ0IiwidHlwZSIsInNldFN0YXRlIiwicGF5bG9hZCIsInVwZGF0ZUNvbnRleHQiLCJjb250ZXh0Iiwic3RhdGUiLCJtZXRhIiwiaW5mbyIsImRhcmtNb2RlIiwiZGF0YUVudmVsb3BlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJwcm9kdWN0VGhlbWUiLCJsb2NhbGUiLCJtb2RlbCIsImNoaWxkcmVuIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHLENBQ2xCLGdCQURrQixFQUVsQixjQUZrQixFQUdsQixlQUhrQixFQUlsQixjQUprQixFQUtsQixzQkFMa0IsQ0FBcEI7QUFRQSxJQUFNQyxRQUFRLEdBQUc7QUFDZkMsSUFBRSxFQUFFO0FBQ0YscUJBQWlCO0FBRGYsR0FEVztBQUlmQyxJQUFFLEVBQUU7QUFDRixxQkFBaUI7QUFEZixHQUpXO0FBT2ZDLElBQUUsRUFBRTtBQUNGLHFCQUFpQjtBQURmLEdBUFc7QUFVZkMsSUFBRSxFQUFFO0FBQ0YscUJBQWlCO0FBRGYsR0FWVztBQWFmQyxJQUFFLEVBQUU7QUFDRixxQkFBaUI7QUFEZixHQWJXO0FBZ0JmQyxJQUFFLEVBQUU7QUFDRixxQkFBaUI7QUFEZixHQWhCVztBQW1CZkMsSUFBRSxFQUFFO0FBQ0YscUJBQWlCO0FBRGY7QUFuQlcsQ0FBakI7O0lBeUJNQyxROzs7OztBQUNKLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOOztBQURpQixVQVNuQkMsV0FUbUIsR0FTTCxVQUFDQyxJQUFELEVBQVU7QUFDdEJDLFlBQU0sQ0FBQ0MsTUFBUCxDQUFjSCxXQUFkLENBQTBCQyxJQUExQjtBQUNELEtBWGtCOztBQUFBLFVBYW5CRyxzQkFibUIsR0FhTSxnQkFBYztBQUFBLFVBQVhILElBQVcsUUFBWEEsSUFBVzs7QUFDckMsVUFBSVosV0FBVyxDQUFDZ0IsSUFBWixDQUFpQixVQUFBQyxDQUFDO0FBQUEsZUFBSUEsQ0FBQyxLQUFLTCxJQUFJLENBQUNNLElBQWY7QUFBQSxPQUFsQixDQUFKLEVBQTRDO0FBQzFDLGNBQUtDLFFBQUwsbUJBQ0tQLElBQUksQ0FBQ1EsT0FEVjtBQUdEO0FBQ0YsS0FuQmtCOztBQUFBLFVBcUJuQkMsYUFyQm1CLEdBcUJILFVBQUNDLE9BQUQsRUFBYTtBQUMzQixZQUFLSCxRQUFMLG1CQUNLRyxPQURMO0FBR0QsS0F6QmtCOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsVUFBSSxFQUFFLElBREs7QUFFWEMsVUFBSSxFQUFFLElBRks7QUFHWEMsY0FBUSxFQUFFO0FBSEMsS0FBYjtBQUZpQjtBQU9sQjs7Ozt3Q0FvQm1CO0FBQ2xCLFVBQU1DLFlBQVksR0FBR2QsTUFBTSxDQUFDYyxZQUE1QjtBQUNBLFdBQUtSLFFBQUwsbUJBQW1CUSxZQUFuQjtBQUNBZCxZQUFNLENBQUNlLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DLEtBQUtiLHNCQUF4QztBQUNEOzs7MkNBRXNCO0FBQ3JCRixZQUFNLENBQUNnQixtQkFBUCxDQUEyQixTQUEzQixFQUFzQyxLQUFLZCxzQkFBM0M7QUFDRDs7OzZCQUVRO0FBQUEsd0JBQ29DLEtBQUtRLEtBRHpDO0FBQUEsVUFDQ0csUUFERCxlQUNDQSxRQUREO0FBQUEsVUFDV0ksWUFEWCxlQUNXQSxZQURYO0FBQUEsVUFDeUJDLE1BRHpCLGVBQ3lCQSxNQUR6QjtBQUdQLDBCQUNFLDJEQUFDLDBEQUFEO0FBQWUsbUJBQVcsRUFBRUwsUUFBUSxHQUFHLE1BQUgsR0FBWSxPQUFoRDtBQUF5RCxvQkFBWSxFQUFFSSxZQUF2RTtBQUFxRixjQUFNLEVBQUVDO0FBQTdGLHNCQUNFLDJEQUFDLG9JQUFELENBQWMsUUFBZDtBQUF1QixxQkFBYSxFQUFFLEtBQUtWLGFBQTNDO0FBQTBELGFBQUssRUFBRSxLQUFLRSxLQUFMLENBQVdTO0FBQTVFLFNBQ0csS0FBS3RCLEtBQUwsQ0FBV3VCLFFBRGQsQ0FERixDQURGO0FBT0Q7Ozs7RUFoRG9CQyw0Q0FBSyxDQUFDQyxTOztBQW1EZDFCLHVFQUFmIiwiZmlsZSI6Ii4vc3JjL3Byb3ZpZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBVaVNka0NvbnRleHQgZnJvbSAnLi4vQ29udGV4dCc7XG5pbXBvcnQgeyBBeXhBcHBXcmFwcGVyLCBCdXR0b24sIFR5cG9ncmFwaHksIEdyaWQsIENhcmQgfSBmcm9tICdAYXl4L3VpLWNvcmUnXG5cbmNvbnN0IGFjdGlvblR5cGVzID0gW1xuICAnVVBEQVRFX1BBTEVUVEUnLFxuICAnVVBEQVRFX1RIRU1FJyxcbiAgJ1VQREFURV9MT0NBTEUnLFxuICAnVVBEQVRFX01PREVMJyxcbiAgJ1VQREFURV9EQVRBX0VOVkVMT1BFJ1xuXVxuXG5jb25zdCBtZXNzYWdlcyA9IHtcbiAgZW46IHtcbiAgICAnZXhhbXBsZS5sYWJlbCc6ICdzdXBlciBhd2Vzb21lIHN0cmluZydcbiAgfSxcbiAgZnI6IHtcbiAgICAnZXhhbXBsZS5sYWJlbCc6ICdmaWNlbGxlIHN1cGVyIGfDqW5pYWwnXG4gIH0sXG4gIGRlOiB7XG4gICAgJ2V4YW1wbGUubGFiZWwnOiAnc3VwZXIgdG9sbGUgU2FpdGUnXG4gIH0sXG4gIGVzOiB7XG4gICAgJ2V4YW1wbGUubGFiZWwnOiAnY2FkZW5hIHN1cGVyIGltcHJlc2lvbmFudGUnXG4gIH0sXG4gIHB0OiB7XG4gICAgJ2V4YW1wbGUubGFiZWwnOiAnY29yZGEgc3VwZXIgaW5jcsOtdmVsJ1xuICB9LFxuICBqYToge1xuICAgICdleGFtcGxlLmxhYmVsJzogJ+i2hee0oOaZtOOCieOBl+OBhOaWh+Wtl+WIlydcbiAgfSxcbiAgemg6IHtcbiAgICAnZXhhbXBsZS5sYWJlbCc6ICfotoXmo5LnmoTlvKYnXG4gIH1cbn07XG5cblxuY2xhc3MgUHJvdmlkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbWV0YTogbnVsbCxcbiAgICAgIGluZm86IG51bGwsXG4gICAgICBkYXJrTW9kZTogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgcG9zdE1lc3NhZ2UgPSAoZGF0YSkgPT4ge1xuICAgIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2UoZGF0YSlcbiAgfVxuXG4gIHJlY2VpdmVNZXNzYWdlRW52ZWxvcGUgPSAoeyBkYXRhIH0pID0+IHtcbiAgICBpZiAoYWN0aW9uVHlwZXMuZmluZCh0ID0+IHQgPT09IGRhdGEudHlwZSkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAuLi5kYXRhLnBheWxvYWRcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlQ29udGV4dCA9IChjb250ZXh0KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAuLi5jb250ZXh0XG4gICAgfSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IGRhdGFFbnZlbG9wZSA9IHdpbmRvdy5kYXRhRW52ZWxvcGVcbiAgICB0aGlzLnNldFN0YXRlKHsgLi4uZGF0YUVudmVsb3BlIH0pXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLnJlY2VpdmVNZXNzYWdlRW52ZWxvcGUpXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMucmVjZWl2ZU1lc3NhZ2VFbnZlbG9wZSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhcmtNb2RlLCBwcm9kdWN0VGhlbWUsIGxvY2FsZSB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxBeXhBcHBXcmFwcGVyIHBhbGV0dGVUeXBlPXtkYXJrTW9kZSA/ICdkYXJrJyA6ICdsaWdodCd9IHByb2R1Y3RUaGVtZT17cHJvZHVjdFRoZW1lfSBsb2NhbGU9e2xvY2FsZX0+XG4gICAgICAgIDxVaVNka0NvbnRleHQuUHJvdmlkZXIgdXBkYXRlQ29udGV4dD17dGhpcy51cGRhdGVDb250ZXh0fSBtb2RlbD17dGhpcy5zdGF0ZS5tb2RlbH0+XG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvVWlTZGtDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgPC9BeXhBcHBXcmFwcGVyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvdmlkZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/provider.js\n");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ }),

/***/ 1:
/*!*****************************************!*\
  !*** ../locale-data/index.js (ignored) ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbG9jYWxlLWRhdGEvaW5kZXguanMgKGlnbm9yZWQpPzk4YTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** ./lib/locales (ignored) ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvbG9jYWxlcyAoaWdub3JlZCk/NDg5ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** ./lib/locales (ignored) ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvbG9jYWxlcyAoaWdub3JlZCk/MjFlMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ })

/******/ });
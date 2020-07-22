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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-intl */ \"./node_modules/react-intl/lib/index.es.js\");\n/* harmony import */ var _ayx_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ayx/ui-core */ \"./node_modules/@ayx/ui-core/index.es.js\");\n\n\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar actionTypes = ['UPDATE_PALETTE', 'UPDATE_THEME', 'UPDATE_LOCALE', 'UPDATE_MODEL', 'UPDATE_DATA_ENVELOPE'];\nvar messages = {\n  en: {\n    'example.label': 'super awesome string'\n  },\n  fr: {\n    'example.label': 'ficelle super génial'\n  },\n  de: {\n    'example.label': 'super tolle Saite'\n  },\n  es: {\n    'example.label': 'cadena super impresionante'\n  },\n  pt: {\n    'example.label': 'corda super incrível'\n  },\n  ja: {\n    'example.label': '超素晴らしい文字列'\n  },\n  zh: {\n    'example.label': '超棒的弦'\n  }\n};\n\nvar Provider = /*#__PURE__*/function (_React$Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Provider, _React$Component);\n\n  var _super = _createSuper(Provider);\n\n  function Provider(props) {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Provider);\n\n    _this = _super.call(this, props);\n\n    _this.receiveMessageEnvelope = function (_ref) {\n      var data = _ref.data;\n\n      if (actionTypes.find(function (t) {\n        return t === data.type;\n      })) {\n        _this.setState(_objectSpread({}, data.payload));\n      }\n    };\n\n    _this.updateModelCount = function () {\n      var newModel = _objectSpread({}, _this.state.model);\n\n      newModel.count++;\n      window.parent.postMessage({\n        type: 'UPDATE_MODEL',\n        payload: {\n          model: newModel\n        }\n      });\n    };\n\n    _this.state = {\n      meta: null,\n      info: null,\n      darkMode: false\n    };\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Provider, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var dataEnvelope = window.dataEnvelope;\n      this.setState(_objectSpread({}, dataEnvelope));\n      window.addEventListener('message', this.receiveMessageEnvelope);\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      window.removeEventListener('message', this.receiveMessageEnvelope);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$state = this.state,\n          darkMode = _this$state.darkMode,\n          productTheme = _this$state.productTheme,\n          model = _this$state.model,\n          locale = _this$state.locale;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ayx_ui_core__WEBPACK_IMPORTED_MODULE_9__[\"AyxAppWrapper\"], {\n        locale: locale,\n        messages: messages,\n        theme: productTheme,\n        paletteType: darkMode ? 'dark' : 'light'\n      }, this.state && model ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ayx_ui_core__WEBPACK_IMPORTED_MODULE_9__[\"Grid\"], {\n        container: true\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ayx_ui_core__WEBPACK_IMPORTED_MODULE_9__[\"Card\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ayx_ui_core__WEBPACK_IMPORTED_MODULE_9__[\"Grid\"], {\n        item: true\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ayx_ui_core__WEBPACK_IMPORTED_MODULE_9__[\"Typography\"], null, \"This message changes with my locale:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ayx_ui_core__WEBPACK_IMPORTED_MODULE_9__[\"Typography\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__[\"FormattedMessage\"], {\n        id: \"example.label\"\n      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ayx_ui_core__WEBPACK_IMPORTED_MODULE_9__[\"Button\"], {\n        variant: \"contained\",\n        onClick: this.updateModelCount\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ayx_ui_core__WEBPACK_IMPORTED_MODULE_9__[\"Typography\"], null, \"Click me to increment my parent app's count!\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ayx_ui_core__WEBPACK_IMPORTED_MODULE_9__[\"Typography\"], {\n        variant: \"h2\"\n      }, \" This count is coming from my parent: \", model.count, \" \"))) : null);\n    }\n  }]);\n\n  return Provider;\n}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);\n\nObject(react_dom__WEBPACK_IMPORTED_MODULE_7__[\"render\"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Provider, null), document.getElementById('app'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6WyJhY3Rpb25UeXBlcyIsIm1lc3NhZ2VzIiwiZW4iLCJmciIsImRlIiwiZXMiLCJwdCIsImphIiwiemgiLCJQcm92aWRlciIsInByb3BzIiwicmVjZWl2ZU1lc3NhZ2VFbnZlbG9wZSIsImRhdGEiLCJmaW5kIiwidCIsInR5cGUiLCJzZXRTdGF0ZSIsInBheWxvYWQiLCJ1cGRhdGVNb2RlbENvdW50IiwibmV3TW9kZWwiLCJzdGF0ZSIsIm1vZGVsIiwiY291bnQiLCJ3aW5kb3ciLCJwYXJlbnQiLCJwb3N0TWVzc2FnZSIsIm1ldGEiLCJpbmZvIiwiZGFya01vZGUiLCJkYXRhRW52ZWxvcGUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInByb2R1Y3RUaGVtZSIsImxvY2FsZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHLENBQ2xCLGdCQURrQixFQUVsQixjQUZrQixFQUdsQixlQUhrQixFQUlsQixjQUprQixFQUtsQixzQkFMa0IsQ0FBcEI7QUFRQSxJQUFNQyxRQUFRLEdBQUc7QUFDZkMsSUFBRSxFQUFFO0FBQ0YscUJBQWlCO0FBRGYsR0FEVztBQUlmQyxJQUFFLEVBQUU7QUFDRixxQkFBaUI7QUFEZixHQUpXO0FBT2ZDLElBQUUsRUFBRTtBQUNGLHFCQUFpQjtBQURmLEdBUFc7QUFVZkMsSUFBRSxFQUFFO0FBQ0YscUJBQWlCO0FBRGYsR0FWVztBQWFmQyxJQUFFLEVBQUU7QUFDRixxQkFBaUI7QUFEZixHQWJXO0FBZ0JmQyxJQUFFLEVBQUU7QUFDRixxQkFBaUI7QUFEZixHQWhCVztBQW1CZkMsSUFBRSxFQUFFO0FBQ0YscUJBQWlCO0FBRGY7QUFuQlcsQ0FBakI7O0lBd0JNQyxROzs7OztBQUNKLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOOztBQURpQixVQVNuQkMsc0JBVG1CLEdBU00sZ0JBQWM7QUFBQSxVQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQ3JDLFVBQUlaLFdBQVcsQ0FBQ2EsSUFBWixDQUFpQixVQUFBQyxDQUFDO0FBQUEsZUFBSUEsQ0FBQyxLQUFLRixJQUFJLENBQUNHLElBQWY7QUFBQSxPQUFsQixDQUFKLEVBQTRDO0FBQzFDLGNBQUtDLFFBQUwsbUJBQ0tKLElBQUksQ0FBQ0ssT0FEVjtBQUdEO0FBQ0YsS0Fma0I7O0FBQUEsVUF1Qm5CQyxnQkF2Qm1CLEdBdUJBLFlBQU07QUFDdkIsVUFBTUMsUUFBUSxxQkFBUSxNQUFLQyxLQUFMLENBQVdDLEtBQW5CLENBQWQ7O0FBQ0FGLGNBQVEsQ0FBQ0csS0FBVDtBQUNBQyxZQUFNLENBQUNDLE1BQVAsQ0FBY0MsV0FBZCxDQUEwQjtBQUFFVixZQUFJLEVBQUUsY0FBUjtBQUF3QkUsZUFBTyxFQUFFO0FBQUVJLGVBQUssRUFBRUY7QUFBVDtBQUFqQyxPQUExQjtBQUNELEtBM0JrQjs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hNLFVBQUksRUFBRSxJQURLO0FBRVhDLFVBQUksRUFBRSxJQUZLO0FBR1hDLGNBQVEsRUFBRTtBQUhDLEtBQWI7QUFGaUI7QUFPbEI7Ozs7d0NBVW1CO0FBQ2xCLFVBQU1DLFlBQVksR0FBR04sTUFBTSxDQUFDTSxZQUE1QjtBQUNBLFdBQUtiLFFBQUwsbUJBQW1CYSxZQUFuQjtBQUNBTixZQUFNLENBQUNPLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DLEtBQUtuQixzQkFBeEM7QUFDRDs7OzJDQVFzQjtBQUNyQlksWUFBTSxDQUFDUSxtQkFBUCxDQUEyQixTQUEzQixFQUFzQyxLQUFLcEIsc0JBQTNDO0FBQ0Q7Ozs2QkFFUTtBQUFBLHdCQUMyQyxLQUFLUyxLQURoRDtBQUFBLFVBQ0NRLFFBREQsZUFDQ0EsUUFERDtBQUFBLFVBQ1dJLFlBRFgsZUFDV0EsWUFEWDtBQUFBLFVBQ3lCWCxLQUR6QixlQUN5QkEsS0FEekI7QUFBQSxVQUNnQ1ksTUFEaEMsZUFDZ0NBLE1BRGhDO0FBRVAsMEJBQ0UsMkRBQUMsMERBQUQ7QUFBZSxjQUFNLEVBQUVBLE1BQXZCO0FBQStCLGdCQUFRLEVBQUVoQyxRQUF6QztBQUFtRCxhQUFLLEVBQUUrQixZQUExRDtBQUF3RSxtQkFBVyxFQUFFSixRQUFRLEdBQUcsTUFBSCxHQUFZO0FBQXpHLFNBQ0csS0FBS1IsS0FBTCxJQUFjQyxLQUFkLGdCQUNDLDJEQUFDLGlEQUFEO0FBQU0saUJBQVM7QUFBZixzQkFDRSwyREFBQyxpREFBRCxxQkFDRSwyREFBQyxpREFBRDtBQUFNLFlBQUk7QUFBVixzQkFDRSwyREFBQyx1REFBRCwrQ0FERixlQUlFLDJEQUFDLHVEQUFELHFCQUNFLDJEQUFDLDJEQUFEO0FBQWtCLFVBQUUsRUFBQztBQUFyQixRQURGLENBSkYsQ0FERixlQVNFLDJEQUFDLG1EQUFEO0FBQVEsZUFBTyxFQUFDLFdBQWhCO0FBQTRCLGVBQU8sRUFBRSxLQUFLSDtBQUExQyxzQkFDRSwyREFBQyx1REFBRCx1REFERixDQVRGLGVBWUUsMkRBQUMsdURBQUQ7QUFBWSxlQUFPLEVBQUM7QUFBcEIsbURBQWdFRyxLQUFLLENBQUNDLEtBQXRFLE1BWkYsQ0FERixDQURELEdBaUJJLElBbEJQLENBREY7QUFzQkQ7Ozs7RUExRG9CWSw0Q0FBSyxDQUFDQyxTOztBQTZEN0JDLHdEQUFNLGVBQ0osMkRBQUMsUUFBRCxPQURJLEVBRUpDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUF4QixDQUZJLENBQU4iLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IEZvcm1hdHRlZE1lc3NhZ2UgfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCB7IEF5eEFwcFdyYXBwZXIsIEJ1dHRvbiwgVHlwb2dyYXBoeSwgR3JpZCwgQ2FyZCB9IGZyb20gJ0BheXgvdWktY29yZSdcblxuY29uc3QgYWN0aW9uVHlwZXMgPSBbXG4gICdVUERBVEVfUEFMRVRURScsXG4gICdVUERBVEVfVEhFTUUnLFxuICAnVVBEQVRFX0xPQ0FMRScsXG4gICdVUERBVEVfTU9ERUwnLFxuICAnVVBEQVRFX0RBVEFfRU5WRUxPUEUnXG5dXG5cbmNvbnN0IG1lc3NhZ2VzID0ge1xuICBlbjoge1xuICAgICdleGFtcGxlLmxhYmVsJzogJ3N1cGVyIGF3ZXNvbWUgc3RyaW5nJ1xuICB9LFxuICBmcjoge1xuICAgICdleGFtcGxlLmxhYmVsJzogJ2ZpY2VsbGUgc3VwZXIgZ8OpbmlhbCdcbiAgfSxcbiAgZGU6IHtcbiAgICAnZXhhbXBsZS5sYWJlbCc6ICdzdXBlciB0b2xsZSBTYWl0ZSdcbiAgfSxcbiAgZXM6IHtcbiAgICAnZXhhbXBsZS5sYWJlbCc6ICdjYWRlbmEgc3VwZXIgaW1wcmVzaW9uYW50ZSdcbiAgfSxcbiAgcHQ6IHtcbiAgICAnZXhhbXBsZS5sYWJlbCc6ICdjb3JkYSBzdXBlciBpbmNyw612ZWwnXG4gIH0sXG4gIGphOiB7XG4gICAgJ2V4YW1wbGUubGFiZWwnOiAn6LaF57Sg5pm044KJ44GX44GE5paH5a2X5YiXJ1xuICB9LFxuICB6aDoge1xuICAgICdleGFtcGxlLmxhYmVsJzogJ+i2heajkueahOW8pidcbiAgfVxufTtcblxuY2xhc3MgUHJvdmlkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbWV0YTogbnVsbCxcbiAgICAgIGluZm86IG51bGwsXG4gICAgICBkYXJrTW9kZTogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgcmVjZWl2ZU1lc3NhZ2VFbnZlbG9wZSA9ICh7IGRhdGEgfSkgPT4ge1xuICAgIGlmIChhY3Rpb25UeXBlcy5maW5kKHQgPT4gdCA9PT0gZGF0YS50eXBlKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIC4uLmRhdGEucGF5bG9hZFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBkYXRhRW52ZWxvcGUgPSB3aW5kb3cuZGF0YUVudmVsb3BlXG4gICAgdGhpcy5zZXRTdGF0ZSh7IC4uLmRhdGFFbnZlbG9wZSB9KVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5yZWNlaXZlTWVzc2FnZUVudmVsb3BlKVxuICB9XG5cbiAgdXBkYXRlTW9kZWxDb3VudCA9ICgpID0+IHtcbiAgICBjb25zdCBuZXdNb2RlbCA9IHsgLi4udGhpcy5zdGF0ZS5tb2RlbCB9XG4gICAgbmV3TW9kZWwuY291bnQrK1xuICAgIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2UoeyB0eXBlOiAnVVBEQVRFX01PREVMJywgcGF5bG9hZDogeyBtb2RlbDogbmV3TW9kZWwgfSB9KVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLnJlY2VpdmVNZXNzYWdlRW52ZWxvcGUpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkYXJrTW9kZSwgcHJvZHVjdFRoZW1lLCBtb2RlbCwgbG9jYWxlIH0gPSB0aGlzLnN0YXRlXG4gICAgcmV0dXJuIChcbiAgICAgIDxBeXhBcHBXcmFwcGVyIGxvY2FsZT17bG9jYWxlfSBtZXNzYWdlcz17bWVzc2FnZXN9IHRoZW1lPXtwcm9kdWN0VGhlbWV9IHBhbGV0dGVUeXBlPXtkYXJrTW9kZSA/ICdkYXJrJyA6ICdsaWdodCd9PlxuICAgICAgICB7dGhpcy5zdGF0ZSAmJiBtb2RlbCA/IFxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgVGhpcyBtZXNzYWdlIGNoYW5nZXMgd2l0aCBteSBsb2NhbGU6IFxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwiZXhhbXBsZS5sYWJlbFwiIC8+XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIG9uQ2xpY2s9e3RoaXMudXBkYXRlTW9kZWxDb3VudH0+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+Q2xpY2sgbWUgdG8gaW5jcmVtZW50IG15IHBhcmVudCBhcHAncyBjb3VudCE8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDJcIj4gVGhpcyBjb3VudCBpcyBjb21pbmcgZnJvbSBteSBwYXJlbnQ6IHttb2RlbC5jb3VudH0gPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgOiBudWxsfVxuICAgICAgPC9BeXhBcHBXcmFwcGVyPlxuICAgICk7XG4gIH1cbn1cblxucmVuZGVyKFxuICA8UHJvdmlkZXIvPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXG4pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

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
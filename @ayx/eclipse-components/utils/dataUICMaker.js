"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _lodash = require("lodash");

var dataUICMaker = function dataUICMaker(Component, componentName) {
  var WrappedComponent = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
    return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
      ref: ref
    }, props, {
      "data-uic": (0, _lodash.kebabCase)(componentName)
    }));
  });

  WrappedComponent.muiName = Component.muiName ? Component.muiName : componentName;
  WrappedComponent.displayName = Component.displayName;
  return WrappedComponent;
};

var _default = dataUICMaker;
exports.default = _default;
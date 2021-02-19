"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "useFormControl", {
  enumerable: true,
  get: function get() {
    return _FormControl.useFormControl;
  }
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _FormControl = _interopRequireWildcard(require("@material-ui/core/FormControl"));

var _utils = require("../utils");

var StandardFormControl = function StandardFormControl(props) {
  return /*#__PURE__*/_react.default.createElement(_FormControl.default, (0, _extends2.default)({}, props, {
    variant: "standard"
  }));
};

var _default = (0, _utils.dataUICMaker)(StandardFormControl, 'StandardFormControl');

exports.default = _default;
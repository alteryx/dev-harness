"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var MToolbar = function MToolbar(theme) {
  return {
    regular: (0, _defineProperty2.default)({}, theme.breakpoints.up('sm'), {
      minHeight: 44
    }),
    dense: (0, _defineProperty2.default)({}, theme.breakpoints.up('sm'), {
      minHeight: 40
    })
  };
};

var _default = function _default(theme) {
  return {
    MuiToolbar: MToolbar(theme)
  };
};

exports.default = _default;
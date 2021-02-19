"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var MuiSvgIcon = function MuiSvgIcon(_ref) {
  var typography = _ref.typography;
  return {
    root: {
      fontSize: typography.pxToRem(14)
    },
    fontSizeSmall: {
      fontSize: typography.pxToRem(12)
    }
  };
};

var _default = function _default(theme) {
  return {
    MuiSvgIcon: MuiSvgIcon(theme)
  };
};

exports.default = _default;
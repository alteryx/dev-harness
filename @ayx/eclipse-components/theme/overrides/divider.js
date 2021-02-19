"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("../../styles");

var MDivider = function MDivider(_ref) {
  var palette = _ref.palette;
  return {
    root: {
      backgroundColor: palette.type === 'dark' ? (0, _styles.fade)(palette.grey[400], 0.12) : (0, _styles.fade)(palette.blueGrey[500], 0.2)
    },
    light: {
      backgroundColor: palette.type === 'dark' ? (0, _styles.fade)(palette.grey[400], 0.07) : (0, _styles.fade)(palette.blueGrey[500], 0.1)
    },
    middle: {
      marginLeft: 20,
      marginRight: 20
    }
  };
};

var _default = function _default(theme) {
  return {
    MuiDivider: MDivider(theme)
  };
};

exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("../../styles");

var MSkeleton = function MSkeleton(_ref) {
  var palette = _ref.palette;
  return {
    root: {
      backgroundColor: (0, _styles.fade)(palette.blueGrey[500], 0.15)
    }
  };
};

var _default = function _default(theme) {
  return {
    MuiSkeleton: MSkeleton(theme)
  };
};

exports.default = _default;
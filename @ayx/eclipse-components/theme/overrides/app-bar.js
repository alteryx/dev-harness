"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var MAppBar = function MAppBar(theme) {
  return {
    root: {},
    colorDefault: {
      backgroundColor: theme.palette.background.paper
    }
  };
};

var _default = function _default(theme) {
  return {
    MuiAppBar: MAppBar(theme)
  };
};

exports.default = _default;
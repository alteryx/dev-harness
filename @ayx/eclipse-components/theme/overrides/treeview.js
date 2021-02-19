"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var MTreeItem = function MTreeItem(theme) {
  return {
    content: {
      height: 28
    }
  };
};

var _default = function _default(theme) {
  return {
    MuiTreeItem: MTreeItem(theme)
  };
};

exports.default = _default;
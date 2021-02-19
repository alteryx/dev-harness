"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var MModal = function MModal() {
  return {
    root: {
      '&:focus': {
        outline: 'none'
      }
    }
  };
};

var _default = function _default() {
  return {
    MuiModal: MModal()
  };
};

exports.default = _default;
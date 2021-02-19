"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _global = _interopRequireDefault(require("./global"));

var MuiFormControl = {};
var MuiFormLabel = {
  root: {
    padding: 0,
    '&$focused': {
      color: _global.default.typography.inputLabel // leave the label color alone

    },
    '&$disabled': {
      color: _global.default.palette.text.disabled
    },
    '&$error': {
      color: _global.default.typography.inputLabel // leave the label color alone

    }
  }
};
var MuiFormControlLabel = {};
var MuiFormHelperText = {
  root: {
    marginTop: 5,
    // 8
    minHeight: 0,
    // 1em
    fontSize: _global.default.typography.pxToRem(12),
    fontWeight: 'normal',
    lineHeight: 'none',
    color: _global.default.palette.text.secondary,
    '&$error': {
      color: _global.default.palette.error.main
    },
    '&$disabled': {
      color: _global.default.palette.text.disabled
    }
  }
};
var _default = {
  MuiFormControl: MuiFormControl,
  MuiFormLabel: MuiFormLabel,
  MuiFormControlLabel: MuiFormControlLabel,
  MuiFormHelperText: MuiFormHelperText
};
exports.default = _default;
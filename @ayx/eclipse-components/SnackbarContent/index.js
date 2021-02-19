"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../utils");

var _SnackbarContent = _interopRequireDefault(require("./SnackbarContent"));

var _default = (0, _utils.dataUICMaker)(_SnackbarContent.default, 'SnackbarContent');

exports.default = _default;
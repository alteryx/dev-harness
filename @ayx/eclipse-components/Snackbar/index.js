"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../utils");

var _Snackbar = _interopRequireDefault(require("./Snackbar"));

var _default = (0, _utils.dataUICMaker)(_Snackbar.default, 'Snackbar');

exports.default = _default;
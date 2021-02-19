"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _utils = require("../utils");

var _default = (0, _utils.dataUICMaker)(_Dialog.default, 'Dialog');

exports.default = _default;
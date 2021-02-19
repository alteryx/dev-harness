"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _DialogContentText = _interopRequireDefault(require("@material-ui/core/DialogContentText"));

var _utils = require("../utils");

var _default = (0, _utils.dataUICMaker)(_DialogContentText.default, 'DialogContentText');

exports.default = _default;
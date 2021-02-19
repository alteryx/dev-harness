"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CardContent = _interopRequireDefault(require("@material-ui/core/CardContent"));

var _utils = require("../utils");

var _default = (0, _utils.dataUICMaker)(_CardContent.default, 'CardContent');

exports.default = _default;
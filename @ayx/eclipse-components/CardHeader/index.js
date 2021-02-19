"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CardHeader = _interopRequireDefault(require("@material-ui/core/CardHeader"));

var _utils = require("../utils");

var _default = (0, _utils.dataUICMaker)(_CardHeader.default, 'CardHeader');

exports.default = _default;
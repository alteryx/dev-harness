"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../utils");

var _Tooltip = _interopRequireDefault(require("./Tooltip"));

var _default = (0, _utils.dataUICMaker)(_Tooltip.default, 'Tooltip');

exports.default = _default;
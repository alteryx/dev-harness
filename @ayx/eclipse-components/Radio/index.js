"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Radio = _interopRequireDefault(require("./Radio"));

var _utils = require("../utils");

var _default = (0, _utils.dataUICMaker)(_Radio.default, 'Radio');

exports.default = _default;
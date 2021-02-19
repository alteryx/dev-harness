"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../utils");

var _Box = _interopRequireDefault(require("./Box"));

var _default = (0, _utils.dataUICMaker)(_Box.default, 'Box');

exports.default = _default;
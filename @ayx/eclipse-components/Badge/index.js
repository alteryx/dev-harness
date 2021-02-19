"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../utils");

var _Badge = _interopRequireDefault(require("./Badge"));

var _default = (0, _utils.dataUICMaker)(_Badge.default, 'Badge');

exports.default = _default;
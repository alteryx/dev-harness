"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../utils");

var _ButtonGroup = _interopRequireDefault(require("./ButtonGroup"));

var _default = (0, _utils.dataUICMaker)(_ButtonGroup.default, 'ButtonGroup');

exports.default = _default;
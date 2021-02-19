"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../utils");

var _Select = _interopRequireDefault(require("./Select"));

var _default = (0, _utils.dataUICMaker)(_Select.default, 'Select');

exports.default = _default;
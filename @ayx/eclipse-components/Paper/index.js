"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _utils = require("../utils");

var _default = (0, _utils.dataUICMaker)(_Paper.default, 'Paper');

exports.default = _default;
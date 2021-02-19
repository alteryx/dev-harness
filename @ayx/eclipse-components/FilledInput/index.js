"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _FilledInput = _interopRequireDefault(require("@material-ui/core/FilledInput"));

var _utils = require("../utils");

var _default = (0, _utils.dataUICMaker)(_FilledInput.default, 'FilledInput');

exports.default = _default;
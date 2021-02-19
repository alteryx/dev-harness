"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

var _utils = require("../utils");

var _default = (0, _utils.dataUICMaker)(_CircularProgress.default, 'CircularProgress');

exports.default = _default;
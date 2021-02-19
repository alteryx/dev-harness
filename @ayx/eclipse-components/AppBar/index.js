"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _utils = require("../utils");

var _default = (0, _utils.dataUICMaker)(_AppBar.default, 'AppBar');

exports.default = _default;
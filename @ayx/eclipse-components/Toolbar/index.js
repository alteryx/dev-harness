"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _utils = require("../utils");

var _default = (0, _utils.dataUICMaker)(_Toolbar.default, 'Toolbar');

exports.default = _default;
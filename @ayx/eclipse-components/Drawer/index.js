"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Drawer = _interopRequireDefault(require("@material-ui/core/Drawer"));

var _utils = require("../utils");

var _default = (0, _utils.dataUICMaker)(_Drawer.default, 'Drawer');

exports.default = _default;
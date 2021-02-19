"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../utils");

var _AyxAppWrapper = _interopRequireDefault(require("./AyxAppWrapper"));

var _default = (0, _utils.dataUICMaker)(_AyxAppWrapper.default, 'AyxAppWrapper');

exports.default = _default;
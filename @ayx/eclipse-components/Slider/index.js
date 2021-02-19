"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Slider = _interopRequireDefault(require("@material-ui/core/Slider"));

var _utils = require("../utils");

// eslint-disable-next-line import/no-extraneous-dependencies
var _default = (0, _utils.dataUICMaker)(_Slider.default, 'Slider');

exports.default = _default;
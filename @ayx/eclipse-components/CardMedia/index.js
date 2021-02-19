"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CardMedia = _interopRequireDefault(require("@material-ui/core/CardMedia"));

var _utils = require("../utils");

var _default = (0, _utils.dataUICMaker)(_CardMedia.default, 'CardMedia');

exports.default = _default;
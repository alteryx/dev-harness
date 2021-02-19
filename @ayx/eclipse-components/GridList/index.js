"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _GridList = _interopRequireDefault(require("@material-ui/core/GridList"));

var _utils = require("../utils");

var _default = (0, _utils.dataUICMaker)(_GridList.default, 'GridList');

exports.default = _default;
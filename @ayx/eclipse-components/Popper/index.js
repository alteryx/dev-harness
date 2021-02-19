"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Popper = _interopRequireDefault(require("@material-ui/core/Popper"));

var _utils = require("../utils");

var _default = (0, _utils.dataUICMaker)(_Popper.default, 'Popper');

exports.default = _default;
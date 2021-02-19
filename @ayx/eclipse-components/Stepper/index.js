"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Stepper = _interopRequireDefault(require("@material-ui/core/Stepper"));

var _utils = require("../utils");

var _default = (0, _utils.dataUICMaker)(_Stepper.default, 'Stepper');

exports.default = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _MobileStepper = _interopRequireDefault(require("@material-ui/core/MobileStepper"));

var _utils = require("../utils");

var _default = (0, _utils.dataUICMaker)(_MobileStepper.default, 'MobileStepper');

exports.default = _default;
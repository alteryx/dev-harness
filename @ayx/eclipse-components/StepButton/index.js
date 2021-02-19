"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _StepButton = _interopRequireDefault(require("@material-ui/core/StepButton"));

var _utils = require("../utils");

var _default = (0, _utils.dataUICMaker)(_StepButton.default, 'StepButton');

exports.default = _default;
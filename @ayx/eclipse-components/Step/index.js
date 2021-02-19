"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Step = _interopRequireDefault(require("@material-ui/core/Step"));

var _utils = require("../utils");

var _default = (0, _utils.dataUICMaker)(_Step.default, 'Step');

exports.default = _default;
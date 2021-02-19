"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Accordion = _interopRequireDefault(require("@material-ui/core/Accordion"));

var _utils = require("../utils");

var _default = (0, _utils.dataUICMaker)(_Accordion.default, 'Accordion');

exports.default = _default;
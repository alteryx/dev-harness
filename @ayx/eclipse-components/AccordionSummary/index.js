"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AccordionSummary = _interopRequireDefault(require("@material-ui/core/AccordionSummary"));

var _utils = require("../utils");

var _default = (0, _utils.dataUICMaker)(_AccordionSummary.default, 'AccordionSummary ');

exports.default = _default;
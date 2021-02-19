"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AccordionDetails = _interopRequireDefault(require("@material-ui/core/AccordionDetails"));

var _utils = require("../utils");

var _default = (0, _utils.dataUICMaker)(_AccordionDetails.default, 'AccordionDetails');

exports.default = _default;
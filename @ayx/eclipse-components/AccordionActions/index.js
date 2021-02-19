"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AccordionActions = _interopRequireDefault(require("@material-ui/core/AccordionActions"));

var _utils = require("../utils");

var _default = (0, _utils.dataUICMaker)(_AccordionActions.default, 'AccordionActions');

exports.default = _default;
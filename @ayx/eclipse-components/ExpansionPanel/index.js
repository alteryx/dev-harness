"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ExpansionPanel = _interopRequireDefault(require("@material-ui/core/ExpansionPanel"));

var _utils = require("../utils");

var _default = (0, _utils.dataUICMaker)(_ExpansionPanel.default, 'ExpansionPanel');

exports.default = _default;
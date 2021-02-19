"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _utils = require("../utils");

var _default = (0, _utils.dataUICMaker)(_Card.default, 'Card');

exports.default = _default;
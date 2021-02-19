"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CardActions = _interopRequireDefault(require("@material-ui/core/CardActions"));

var _utils = require("../utils");

var _default = (0, _utils.dataUICMaker)(_CardActions.default, 'CardActions');

exports.default = _default;
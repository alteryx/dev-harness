"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _utils = require("../utils");

var _default = (0, _utils.dataUICMaker)(_Button.default, 'Button');

exports.default = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Popover = _interopRequireDefault(require("@material-ui/core/Popover"));

var _utils = require("../utils");

var _default = (0, _utils.dataUICMaker)(_Popover.default, 'Popover');

exports.default = _default;
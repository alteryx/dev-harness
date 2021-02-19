"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Tabs = _interopRequireDefault(require("@material-ui/core/Tabs"));

var _utils = require("../utils");

var _default = (0, _utils.dataUICMaker)(_Tabs.default, 'Tabs');

exports.default = _default;
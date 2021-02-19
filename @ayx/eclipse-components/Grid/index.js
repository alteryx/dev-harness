"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _utils = require("../utils");

var _default = (0, _utils.dataUICMaker)(_Grid.default, 'Grid');

exports.default = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Table = _interopRequireDefault(require("@material-ui/core/Table"));

var _utils = require("../utils");

var _default = (0, _utils.dataUICMaker)(_Table.default, 'Table');

exports.default = _default;
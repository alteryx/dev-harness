"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _NativeSelect = _interopRequireDefault(require("@material-ui/core/NativeSelect"));

var _utils = require("../utils");

var _default = (0, _utils.dataUICMaker)(_NativeSelect.default, 'NativeSelect');

exports.default = _default;
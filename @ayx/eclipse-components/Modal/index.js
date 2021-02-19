"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Modal = _interopRequireDefault(require("@material-ui/core/Modal"));

var _utils = require("../utils");

var _default = (0, _utils.dataUICMaker)(_Modal.default, 'Modal');

exports.default = _default;
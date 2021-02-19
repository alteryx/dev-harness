"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _FormGroup = _interopRequireDefault(require("@material-ui/core/FormGroup"));

var _utils = require("../utils");

var _default = (0, _utils.dataUICMaker)(_FormGroup.default, 'FormGroup');

exports.default = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TextareaAutosize = _interopRequireDefault(require("@material-ui/core/TextareaAutosize"));

var _utils = require("../utils");

var _default = (0, _utils.dataUICMaker)(_TextareaAutosize.default, 'TextareaAutosize');

exports.default = _default;
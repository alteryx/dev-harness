"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions"));

var _utils = require("../utils");

var _default = (0, _utils.dataUICMaker)(_DialogActions.default, 'DialogActions');

exports.default = _default;
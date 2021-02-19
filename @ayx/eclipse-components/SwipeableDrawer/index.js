"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _SwipeableDrawer = _interopRequireDefault(require("@material-ui/core/SwipeableDrawer"));

var _utils = require("../utils");

var _default = (0, _utils.dataUICMaker)(_SwipeableDrawer.default, 'SwipeableDrawer');

exports.default = _default;
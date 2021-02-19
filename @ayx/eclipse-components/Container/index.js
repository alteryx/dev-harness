"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../utils");

var _Container = _interopRequireDefault(require("./Container"));

var _default = (0, _utils.dataUICMaker)(_Container.default, 'Container');

exports.default = _default;
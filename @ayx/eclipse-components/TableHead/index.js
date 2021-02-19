"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TableHead = _interopRequireDefault(require("@material-ui/core/TableHead"));

var _utils = require("../utils");

var _default = (0, _utils.dataUICMaker)(_TableHead.default, 'TableHead');

exports.default = _default;
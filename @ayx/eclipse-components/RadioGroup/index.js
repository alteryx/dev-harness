"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "useRadioGroup", {
  enumerable: true,
  get: function get() {
    return _useRadioGroup.default;
  }
});
exports.default = void 0;

var _RadioGroup = _interopRequireDefault(require("@material-ui/core/RadioGroup"));

var _utils = require("../utils");

var _useRadioGroup = _interopRequireDefault(require("@material-ui/core/RadioGroup/useRadioGroup"));

var _default = (0, _utils.dataUICMaker)(_RadioGroup.default, 'RadioGroup');

exports.default = _default;
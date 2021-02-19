"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _ayxColors = _interopRequireDefault(require("../ayx-colors"));

var MPopover = function MPopover(_ref) {
  var _extends2;

  var palette = _ref.palette,
      zDepth = _ref.zDepth,
      breakpoints = _ref.breakpoints;
  return {
    paper: (0, _extends3.default)((_extends2 = {
      borderRadius: 3,
      border: 'solid 1px',
      borderColor: palette.type === 'dark' ? _ayxColors.default['border-dark'] : palette.blueGrey[200],
      margin: 0
    }, (0, _defineProperty2.default)(_extends2, breakpoints.up('sm'), {
      margin: 0
    }), (0, _defineProperty2.default)(_extends2, "maxWidth", 'inherit'), (0, _defineProperty2.default)(_extends2, "transform", 'scaleY(1) translateZ(0px) !important'), (0, _defineProperty2.default)(_extends2, "transformOrigin", '50% 0px 0px !important'), _extends2), zDepth.for('popover'))
  };
};

var _default = function _default(theme) {
  return {
    MuiPopover: MPopover(theme)
  };
};

exports.default = _default;
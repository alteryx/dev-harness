"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _ayxColors = _interopRequireDefault(require("../ayx-colors"));

var tooltipPlacementMargin = function tooltipPlacementMargin(theme) {
  return {
    topOrBottom: (0, _defineProperty2.default)({
      margin: "".concat(theme.spacing(2), "px 0")
    }, theme.breakpoints.up('sm'), {
      margin: "".concat(theme.spacing(1), "px 0")
    }),
    leftOrRight: (0, _defineProperty2.default)({
      margin: "0 ".concat(theme.spacing(2), "px")
    }, theme.breakpoints.up('sm'), {
      margin: "0 ".concat(theme.spacing(1), "px")
    })
  };
};

var MTooltip = function MTooltip(_ref) {
  var zDepth = _ref.zDepth,
      palette = _ref.palette,
      typography = _ref.typography,
      spacing = _ref.spacing;
  return {
    tooltip: (0, _extends2.default)({
      fontSize: typography.pxToRem(12),
      fontWeight: 'normal',
      lineHeight: 1.33,
      backgroundColor: palette.type === 'dark' ? palette.background.paper : palette.brand.deepSpace,
      color: palette.type === 'dark' ? palette.blueGrey[50] : palette.info.contrastText,
      padding: "4px ".concat(spacing(2), "px"),
      borderRadius: "".concat(spacing(1), "px"),
      border: "solid 1px",
      borderColor: palette.type === 'dark' ? _ayxColors.default['border-dark'] : 'transparent'
    }, zDepth.for('tooltip')),
    popper: {
      opacity: 1
    },

    /* Styles applied to the tooltip (label wrapper) element if `placement` contains "left". */
    tooltipPlacementLeft: (0, _extends2.default)({
      transformOrigin: 'right center'
    }, tooltipPlacementMargin.leftOrRight),

    /* Styles applied to the tooltip (label wrapper) element if `placement` contains "right". */
    tooltipPlacementRight: (0, _extends2.default)({
      transformOrigin: 'left center'
    }, tooltipPlacementMargin.leftOrRight),

    /* Styles applied to the tooltip (label wrapper) element if `placement` contains "top". */
    tooltipPlacementTop: (0, _extends2.default)({
      transformOrigin: 'center bottom'
    }, tooltipPlacementMargin.topOrBottom),

    /* Styles applied to the tooltip (label wrapper) element if `placement` contains "bottom". */
    tooltipPlacementBottom: (0, _extends2.default)({
      transformOrigin: 'center top'
    }, tooltipPlacementMargin.topOrBottom)
  };
};

var _default = function _default(theme) {
  return {
    MuiTooltip: MTooltip(theme)
  };
};

exports.default = _default;
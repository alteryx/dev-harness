"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _styles = require("../styles");

var _utils = require("../utils");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  var checkedColor = theme.palette.type === 'dark' ? theme.palette.text.link : theme.palette.primary.main;
  return {
    focusVisible: {
      boxShadow: theme.palette.getFocusedShadowStyle(),
      transition: theme.palette.getFocusTransitions(),
      padding: 0,
      margin: 6,
      borderRadius: theme.spacing(1),
      '& > .MuiIconButton-label': {
        color: checkedColor
      },
      '&.Mui-checked svg, &.MuiCheckbox-indeterminate svg': {
        color: 'inherit',
        backgroundColor: 'transparent'
      }
    }
  };
});

var Checkbox = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_Checkbox.default, (0, _extends2.default)({
    focusVisibleClassName: classes.focusVisible,
    ref: ref
  }, props));
});

var _default = (0, _utils.dataUICMaker)(Checkbox, 'Checkbox');

exports.default = _default;
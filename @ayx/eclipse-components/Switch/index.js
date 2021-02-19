"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _Switch = _interopRequireDefault(require("@material-ui/core/Switch"));

var _styles = require("../styles");

var _utils = require("../utils");

var useStyles = (0, _styles.makeStyles)(function (_ref) {
  var palette = _ref.palette;
  return {
    focusVisible: {
      boxShadow: 'none',
      '& + .MuiSwitch-track': {
        boxShadow: palette.getFocusedShadowStyle()
      }
    }
  };
});

var Switch = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_Switch.default, (0, _extends2.default)({}, props, {
    focusVisibleClassName: classes.focusVisible,
    ref: ref
  }));
});

var _default = (0, _utils.dataUICMaker)(Switch, 'Switch');

exports.default = _default;
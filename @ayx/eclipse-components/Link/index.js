"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _Link = _interopRequireDefault(require("@material-ui/core/Link"));

var _styles = require("../styles");

var _utils = require("../utils");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    primaryColor: {
      color: theme.palette.text.link
    }
  };
});

var Link = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_Link.default, (0, _extends2.default)({
    ref: ref,
    TypographyClasses: {
      colorPrimary: classes.primaryColor
    }
  }, props));
});

var _default = (0, _utils.dataUICMaker)(Link, 'Link');

exports.default = _default;
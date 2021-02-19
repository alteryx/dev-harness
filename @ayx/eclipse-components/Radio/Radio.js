"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _Radio = _interopRequireDefault(require("@material-ui/core/Radio"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

var _styles = require("../styles");

var useStyles = (0, _styles.makeStyles)(function (_ref) {
  var palette = _ref.palette;
  return {
    focusVisible: {
      '& > .MuiIconButton-label': {
        boxShadow: palette.getFocusedShadowStyle(),
        color: function color(_ref2) {
          var _color = _ref2.color;
          return (// eslint-disable-next-line no-nested-ternary
            palette.type === 'dark' ? palette.text.link : _color === 'secondary' ? palette.secondary.main : palette.primary.main
          );
        }
      }
    }
  };
});

var Radio = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var color = props.color;
  var classes = useStyles({
    color: color
  });
  return /*#__PURE__*/_react.default.createElement(_Radio.default, (0, _extends2.default)({}, props, {
    focusVisibleClassName: classes.focusVisible,
    ref: ref
  }));
});

Radio.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string
} : {};
Radio.defaultProps = {
  color: undefined
};

var _default = (0, _utils.dataUICMaker)(Radio, 'Radio');

exports.default = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _utils = require("../utils");

/* eslint-disable no-console */
var TextField = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var variant = props.variant,
      select = props.select,
      rest = (0, _objectWithoutProperties2.default)(props, ["variant", "select"]);

  if (select !== undefined) {
    console.warn('UI-Core: The select prop is not supported.');
  }

  if (variant === 'outlined') {
    console.warn("UI-Core: The TextField variant \"".concat(variant, "\" is not supported."));
    return /*#__PURE__*/_react.default.createElement(_TextField.default, (0, _extends2.default)({}, rest, {
      ref: ref
    }));
  }

  return /*#__PURE__*/_react.default.createElement(_TextField.default, (0, _extends2.default)({}, rest, {
    ref: ref,
    variant: variant
  }));
});

TextField.defaultProps = {
  select: undefined,
  variant: 'standard'
};
TextField.propTypes = process.env.NODE_ENV !== "production" ? {
  select: _propTypes.default.bool,
  variant: _propTypes.default.string
} : {};

var _default = (0, _utils.dataUICMaker)(TextField, 'TextField');

exports.default = _default;
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

var _ref = _react.default.createElement("path", {
  d: "M9.232 2.146a3.914 3.914 0 015.536 0l7.086 7.086a3.914 3.914 0 010 5.536l-7.086 7.086a3.914 3.914 0 01-5.536 0l-7.086-7.086a3.914 3.914 0 010-5.536zm3.986 1.55a1.722 1.722 0 00-2.436 0l-7.086 7.086a1.722 1.722 0 000 2.436l7.086 7.086a1.722 1.722 0 002.436 0l7.086-7.086a1.722 1.722 0 000-2.436zM12.005 14.08a1.41 1.41 0 110 2.818 1.41 1.41 0 010-2.818zm0-7.437c.55 0 1.006.406 1.084.934l.012.162v3.601a1.096 1.096 0 01-2.18.162l-.012-.162V7.74c0-.605.491-1.096 1.096-1.096z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var AlertDiamond = _react.default.forwardRef(function AlertDiamond(props, ref) {
  var color = props.color,
      size = props.size,
      otherProps = (0, _objectWithoutProperties2.default)(props, ["color", "size"]);
  var variantSizes = {
    xsmall: 12,
    small: 14,
    medium: 16,
    large: 20,
    xlarge: 28,
    xxlarge: 36
  };
  var newSize = !isNaN(parseInt(size, 10)) ? size : variantSizes[size] !== undefined ? variantSizes[size] : variantSizes['medium'];
  return _react.default.createElement("svg", (0, _extends2.default)({
    viewBox: "0 0 24 24",
    width: newSize,
    height: newSize
  }, otherProps, {
    fill: color,
    ref: ref
  }), _ref);
});

AlertDiamond.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
AlertDiamond.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

AlertDiamond.name = AlertDiamond.render.name || 'AlertDiamond';
var _default = AlertDiamond;
exports.default = _default;
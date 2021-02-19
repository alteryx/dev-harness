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
  d: "M17.928 5.85a1.112 1.112 0 01-2.177.443 3.828 3.828 0 00-7.578.767l-.001 2.842h9.754A4.076 4.076 0 0122 13.98v4.942A4.076 4.076 0 0117.926 23H6.074A4.076 4.076 0 012 18.922V13.98c0-2.21 1.757-4.01 3.95-4.076V7.06a6.05 6.05 0 0111.978-1.21zm-.002 6.276H6.074c-1.023 0-1.852.83-1.852 1.854v4.942c0 1.024.83 1.854 1.852 1.854h11.852c1.023 0 1.852-.83 1.852-1.854V13.98c0-1.024-.83-1.854-1.852-1.854zM12 14.968a1.482 1.482 0 11-.001 2.965A1.482 1.482 0 0112 14.968z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Unlock = _react.default.forwardRef(function Unlock(props, ref) {
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
    width: newSize,
    height: newSize,
    viewBox: "0 0 24 24"
  }, otherProps, {
    fill: color,
    ref: ref
  }), _ref);
});

Unlock.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Unlock.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Unlock.name = Unlock.render.name || 'Unlock';
var _default = Unlock;
exports.default = _default;
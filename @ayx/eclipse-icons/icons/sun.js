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
  d: "M12 18.062a6.062 6.062 0 110-12.124 6.062 6.062 0 010 12.124zm0-2.227a3.835 3.835 0 100-7.67 3.835 3.835 0 000 7.67zM10.887 1.113a1.113 1.113 0 012.226 0v1.98a1.113 1.113 0 01-2.226 0v-1.98zm0 19.794a1.113 1.113 0 012.226 0v1.98a1.113 1.113 0 01-2.226 0v-1.98zM3.513 5.087a1.113 1.113 0 111.575-1.574l1.405 1.405a1.113 1.113 0 01-1.575 1.575L3.513 5.088zm13.994 13.995a1.113 1.113 0 011.575-1.575l1.405 1.405a1.113 1.113 0 01-1.575 1.575l-1.405-1.405zM1.113 13.113a1.113 1.113 0 010-2.226h1.98a1.113 1.113 0 010 2.226h-1.98zm19.794 0a1.113 1.113 0 010-2.226h1.98a1.113 1.113 0 010 2.226h-1.98zm-15.82 7.374a1.113 1.113 0 01-1.574-1.575l1.405-1.405a1.113 1.113 0 011.575 1.575l-1.405 1.405zM19.083 6.493a1.113 1.113 0 01-1.575-1.575l1.405-1.405a1.113 1.113 0 011.575 1.575l-1.405 1.405z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Sun = _react.default.forwardRef(function Sun(props, ref) {
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

Sun.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Sun.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Sun.name = Sun.render.name || 'Sun';
var _default = Sun;
exports.default = _default;
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
  d: "M17.3 14a4 4 0 11-3.847 5.1h-2.906A4.002 4.002 0 012.7 18a4 4 0 017.847-1.1h2.906A4.002 4.002 0 0117.3 14zm0 2.2a1.8 1.8 0 100 3.6 1.8 1.8 0 000-3.6zm-10.6 0a1.8 1.8 0 100 3.6 1.8 1.8 0 000-3.6zM16 2a4.1 4.1 0 014.095 3.895l.005.205-.001 4.699 1.801.001a1.1 1.1 0 01.12 2.194L21.9 13H2.1a1.1 1.1 0 01-.12-2.194l.12-.006 1.799-.001L3.9 6.1a4.1 4.1 0 013.895-4.095L8 2h8zm0 2.2H8a1.9 1.9 0 00-1.894 1.752L6.1 6.1l-.001 4.699h11.8L17.9 6.1a1.9 1.9 0 00-1.752-1.894L16 4.2z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Incognito = _react.default.forwardRef(function Incognito(props, ref) {
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

Incognito.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Incognito.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Incognito.name = Incognito.render.name || 'Incognito';
var _default = Incognito;
exports.default = _default;
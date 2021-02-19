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
  d: "M3.429 17.5c.789 0 1.428.627 1.428 1.4 0 .773-.64 1.4-1.428 1.4-.79 0-1.429-.627-1.429-1.4 0-.773.64-1.4 1.429-1.4zm17.471.3a1.1 1.1 0 01.12 2.194L20.9 20H7.416a1.1 1.1 0 01-.12-2.194l.12-.006H20.9zM3.429 12.75c.789 0 1.428.627 1.428 1.4 0 .773-.64 1.4-1.428 1.4-.79 0-1.429-.627-1.429-1.4 0-.773.64-1.4 1.429-1.4zm17.471.3a1.1 1.1 0 01.12 2.194l-.12.006H7.416a1.1 1.1 0 01-.12-2.194l.12-.006H20.9zM3.429 8.25c.789 0 1.428.627 1.428 1.4 0 .773-.64 1.4-1.428 1.4-.79 0-1.429-.627-1.429-1.4 0-.773.64-1.4 1.429-1.4zm17.471.3a1.1 1.1 0 01.12 2.194l-.12.006H7.416a1.1 1.1 0 01-.12-2.194l.12-.006H20.9zM3.429 3.5c.789 0 1.428.627 1.428 1.4 0 .773-.64 1.4-1.428 1.4C2.639 6.3 2 5.673 2 4.9c0-.773.64-1.4 1.429-1.4zm17.471.3a1.1 1.1 0 01.12 2.194L20.9 6H7.416a1.1 1.1 0 01-.12-2.194l.12-.006H20.9z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var ListView = _react.default.forwardRef(function ListView(props, ref) {
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

ListView.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
ListView.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

ListView.name = ListView.render.name || 'ListView';
var _default = ListView;
exports.default = _default;
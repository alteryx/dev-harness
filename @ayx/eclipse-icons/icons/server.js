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
  d: "M19.9 12.9a3.1 3.1 0 013.095 2.924L23 16v3.9a3.1 3.1 0 01-2.924 3.095L19.9 23H4.1a3.1 3.1 0 01-3.095-2.924L1 19.9V16a3.1 3.1 0 012.924-3.095L4.1 12.9h15.8zm0 2.2H4.1a.9.9 0 00-.893.787L3.2 16v3.9a.9.9 0 00.787.893l.113.007h15.8a.9.9 0 00.893-.787l.007-.113V16a.9.9 0 00-.787-.893L19.9 15.1zM6.006 16.7c.687 0 1.244.56 1.244 1.25 0 .641-.48 1.17-1.099 1.242l-.157.008c-.687 0-1.244-.56-1.244-1.25 0-.641.48-1.17 1.099-1.242l.157-.008zM19.9 1a3.1 3.1 0 013.095 2.924L23 4.1V8a3.1 3.1 0 01-2.924 3.095l-.176.005H4.1a3.1 3.1 0 01-3.095-2.924L1 8V4.1a3.1 3.1 0 012.924-3.095L4.1 1h15.8zm0 2.2H4.1a.9.9 0 00-.893.787L3.2 4.1V8a.9.9 0 00.787.893L4.1 8.9h15.8a.9.9 0 00.893-.787L20.8 8V4.1a.9.9 0 00-.787-.893L19.9 3.2zM6.006 4.7c.687 0 1.244.56 1.244 1.25 0 .641-.48 1.17-1.099 1.242l-.157.008c-.687 0-1.244-.56-1.244-1.25 0-.641.48-1.17 1.099-1.242l.157-.008z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Server = _react.default.forwardRef(function Server(props, ref) {
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

Server.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Server.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Server.name = Server.render.name || 'Server';
var _default = Server;
exports.default = _default;
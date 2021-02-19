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
  d: "M18.7 13.7a2.5 2.5 0 01-2.5 2.5l-3.101-.001.001 1.492A3.251 3.251 0 0112 24a3.25 3.25 0 01-1.101-6.309V16.2L7.8 16.2a2.5 2.5 0 01-2.495-2.336L5.3 13.7V2.5A2.5 2.5 0 017.8 0h4.9a1.104 1.104 0 01.472.106l.023.012a.999.999 0 01.171.107c.04.03.077.062.112.097l-.07-.065.06.056.01.01 4.9 4.9a1.103 1.103 0 01.205.282l.01.023a.968.968 0 01.08.233c.01.039.016.079.02.12L18.7 6zM6.75 19.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm-3.25 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm17 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm-3.25 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 19.7a1.05 1.05 0 100 2.1 1.05 1.05 0 000-2.1zm-.4-17.501L7.8 2.2a.3.3 0 00-.3.3v11.2a.3.3 0 00.3.3h8.4a.3.3 0 00.3-.3l-.001-6.601L12.7 7.1a1.1 1.1 0 01-1.094-.98L11.6 6V2.199zm3.344 2.7L13.8 3.754V4.9l1.144-.001z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var FileConnection = _react.default.forwardRef(function FileConnection(props, ref) {
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

FileConnection.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
FileConnection.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

FileConnection.name = FileConnection.render.name || 'FileConnection';
var _default = FileConnection;
exports.default = _default;
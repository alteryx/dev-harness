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
  d: "M11.995 7c2.226 0 4.087 1.669 4.554 3.902h5.427c.565 0 1.024.492 1.024 1.098 0 .606-.459 1.098-1.024 1.098h-5.427C16.082 15.33 14.221 17 11.995 17c-2.225 0-4.087-1.669-4.554-3.902H2.024C1.46 13.098 1 12.606 1 12c0-.606.459-1.098 1.024-1.098h5.417C7.908 8.67 9.77 7 11.995 7zm0 2.195c-1.445 0-2.618 1.256-2.618 2.805 0 1.55 1.173 2.805 2.618 2.805 1.446 0 2.618-1.256 2.618-2.805 0-1.55-1.172-2.805-2.618-2.805z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var GitCommit = _react.default.forwardRef(function GitCommit(props, ref) {
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

GitCommit.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
GitCommit.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

GitCommit.name = GitCommit.render.name || 'GitCommit';
var _default = GitCommit;
exports.default = _default;
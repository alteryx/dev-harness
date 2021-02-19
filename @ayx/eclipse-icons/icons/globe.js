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
  d: "M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zM6.995 13.112h-3.7a8.785 8.785 0 006.174 7.293 16.276 16.276 0 01-2.474-7.293zm13.71 0h-3.697a16.241 16.241 0 01-2.477 7.293 8.785 8.785 0 006.174-7.292zm-5.929 0h-5.55A14.016 14.016 0 0012 20.153a14.004 14.004 0 002.776-7.04zM9.47 3.595l-.196.062a8.785 8.785 0 00-5.978 7.23h3.697A16.241 16.241 0 019.47 3.595zM12 3.85a14.004 14.004 0 00-2.776 7.039h5.55A14.016 14.016 0 0012 3.847zm2.53-.254l.01.014a16.278 16.278 0 012.465 7.279h3.7a8.785 8.785 0 00-6.174-7.293z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Globe = _react.default.forwardRef(function Globe(props, ref) {
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

Globe.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Globe.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Globe.name = Globe.render.name || 'Globe';
var _default = Globe;
exports.default = _default;
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
  d: "M12 1a6.053 6.053 0 016.05 6.056l-.001 2.845.08.003A4.077 4.077 0 0122 13.978v4.943A4.076 4.076 0 0117.926 23H6.074A4.076 4.076 0 012 18.921v-4.943A4.077 4.077 0 015.95 9.9V7.056A6.053 6.053 0 0112 1zm5.926 11.124H6.074c-1.023 0-1.852.83-1.852 1.854v4.943c0 1.024.83 1.854 1.852 1.854h11.852c1.023 0 1.852-.83 1.852-1.854v-4.943c0-1.024-.83-1.854-1.852-1.854zM12 14.966a1.482 1.482 0 11-.002 2.965A1.482 1.482 0 0112 14.966zm0-11.741a3.83 3.83 0 00-3.827 3.831l-.001 2.842h7.655V7.056A3.83 3.83 0 0012 3.225z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Lock = _react.default.forwardRef(function Lock(props, ref) {
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

Lock.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Lock.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Lock.name = Lock.render.name || 'Lock';
var _default = Lock;
exports.default = _default;
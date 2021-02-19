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
  d: "M2.375 15.398c.471 0 .887.097 1.248.29.36.192.64.462.838.81.198.347.297.75.297 1.21v1.68c0 .506-.132.939-.397 1.298-.265.359-.63.61-1.096.754-.04.006-.061.031-.061.077v.57c0 .108-.055.163-.166.163h-1.31c-.11 0-.165-.055-.165-.164v-.56c0-.046-.02-.072-.061-.077a2.147 2.147 0 01-1.1-.763C.134 20.326 0 19.894 0 19.389v-1.68c0-.46.099-.864.297-1.212.198-.347.476-.617.834-.81.357-.192.772-.289 1.244-.289zm-.734 3.948c0 .247.067.448.201.603a.669.669 0 00.533.233c.22 0 .4-.077.536-.229.137-.152.206-.355.206-.607v-1.724c0-.253-.069-.455-.206-.608a.688.688 0 00-.536-.228.669.669 0 00-.533.233c-.134.155-.2.356-.2.603v1.724zM6.254 21.5c-.11 0-.166-.054-.166-.164v-5.705c0-.109.055-.164.166-.164h1.31c.11 0 .165.055.165.164v4.413c0 .046.023.069.07.069h2.636c.111 0 .166.054.166.163v1.06c0 .11-.055.164-.166.164H6.254zm6.122 0c-.099 0-.163-.046-.192-.138l-1.71-5.714a.189.189 0 01-.01-.06c0-.08.05-.12.149-.12h1.414c.1 0 .16.045.184.137l.715 2.724c.012.028.028.043.048.043s.034-.015.04-.043l.663-2.715c.03-.098.09-.147.184-.147h1.02c.1 0 .161.046.184.138l.699 2.724c.011.028.027.043.048.043.02 0 .033-.015.039-.043l.646-2.715c.023-.098.084-.147.183-.147h1.415c.058 0 .099.016.122.048.023.031.029.076.017.133l-1.527 5.714c-.024.092-.085.138-.184.138h-1.336c-.104 0-.165-.049-.183-.146l-.602-2.853c-.012-.029-.026-.044-.044-.047-.017-.003-.029.013-.035.047l-.532 2.853c-.018.097-.076.146-.175.146h-1.24z"
});

var _ref2 = _react.default.createElement("path", {
  d: "M3.111 14.5A1.111 1.111 0 012 13.389V5.967C2 3.777 3.824 2 6.074 2h11.852C20.176 2 22 3.776 22 5.967v13.034c0 .614-.497 1.112-1.111 1.112a1.11 1.11 0 01-1.111-1.11V8.498l-4.895 4.766a1.132 1.132 0 01-1.57 0l-3.083-3.001-3.327 3.06a1.132 1.132 0 01-1.57-.023 1.062 1.062 0 01.022-1.53l4.112-3.803a1.133 1.133 0 011.56.012l3.07 2.99 5.618-5.47a1.845 1.845 0 00-1.79-1.334H6.076c-1.024 0-1.853.807-1.853 1.803v7.422c0 .614-.497 1.111-1.11 1.111z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var LineChartQlikview = _react.default.forwardRef(function LineChartQlikview(props, ref) {
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
  }), _ref, _ref2);
});

LineChartQlikview.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
LineChartQlikview.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

LineChartQlikview.name = LineChartQlikview.render.name || 'LineChartQlikview';
var _default = LineChartQlikview;
exports.default = _default;
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
  d: "M11.995 0l.282.002c3.833.048 6.92 1.092 7.067 3.036l.006.147v9.73c0 1.897-2.704 2.975-6.25 3.157v1.619A3.251 3.251 0 0112 24a3.25 3.25 0 01-1.101-6.309v-1.618c-3.46-.177-6.12-1.205-6.254-3.014l-.005-.144V3.169C4.657 1.093 7.946 0 11.995 0zM6.75 19.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm-3.25 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm17 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm-3.25 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 19.7a1.05 1.05 0 100 2.1 1.05 1.05 0 000-2.1zm5.149-9.253c-1.263.497-2.973.762-4.871.786l-.283.002c-2.012 0-3.83-.267-5.155-.789v2.396l.006-.013c.007-.008.025.004.066.036.2.159.544.33 1 .482 1.043.348 2.503.553 4.083.553s3.04-.205 4.082-.553c.457-.153.801-.323 1.001-.482.04-.032.059-.044.066-.036l.004.013v-2.395zm0-4.87c-1.232.487-2.89.753-4.727.789l-.427.004-.282-.002c-1.896-.024-3.609-.291-4.874-.79V8l.002-.021c.003-.029.017-.021.07.021.201.159.545.33 1.002.482 1.042.348 2.502.553 4.082.553s3.04-.205 4.082-.553c.457-.153.801-.323 1.001-.482.053-.042.068-.05.071-.023v-2.4zM11.996 2.2c-1.57 0-3.03.206-4.075.554-.394.131-.704.276-.912.415l-.025.017.137.085c.121.07.267.141.435.21l.175.068.19.067c1.045.348 2.505.554 4.075.554 1.57 0 3.03-.206 4.075-.554a4.87 4.87 0 00.67-.275l.13-.07.135-.086-.023-.016a3.17 3.17 0 00-.547-.28l-.175-.068-.19-.067c-1.045-.348-2.505-.554-4.075-.554z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var DatabaseConnection = _react.default.forwardRef(function DatabaseConnection(props, ref) {
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

DatabaseConnection.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
DatabaseConnection.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

DatabaseConnection.name = DatabaseConnection.render.name || 'DatabaseConnection';
var _default = DatabaseConnection;
exports.default = _default;
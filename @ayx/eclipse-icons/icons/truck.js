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
  d: "M15.959 2c.615 0 1.113.497 1.113 1.111v3.827h2.846c.295 0 .578.117.787.326l2.969 2.963c.209.208.326.49.326.785v4.939c0 .613-.498 1.11-1.113 1.11h-1.134A3.584 3.584 0 0118.433 22a3.584 3.584 0 01-3.32-4.939H8.887A3.584 3.584 0 015.567 22a3.584 3.584 0 01-3.32-4.939H1.113A1.112 1.112 0 010 15.952V3.11C0 2.497.498 2 1.113 2H15.96zM5.567 17.062a1.36 1.36 0 00-1.36 1.358c0 .75.608 1.358 1.36 1.358a1.36 1.36 0 001.36-1.358c0-.75-.608-1.358-1.36-1.358zm12.866 0a1.36 1.36 0 00-1.36 1.358c0 .75.608 1.358 1.36 1.358a1.36 1.36 0 001.36-1.358c0-.75-.608-1.358-1.36-1.358zm-3.588-12.84H2.227V14.84h12.618V4.222zm4.611 4.938h-2.384v5.68h4.701v-3.367L19.456 9.16z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Truck = _react.default.forwardRef(function Truck(props, ref) {
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

Truck.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Truck.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Truck.name = Truck.render.name || 'Truck';
var _default = Truck;
exports.default = _default;
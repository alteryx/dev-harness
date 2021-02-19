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
  d: "M1.89 17.13a1.11 1.11 0 11.445-2.174 6.049 6.049 0 014.724 4.712 1.112 1.112 0 01-2.18.443 3.827 3.827 0 00-2.989-2.98zm.1-3.978a1.11 1.11 0 11.246-2.206 9.999 9.999 0 018.843 8.822 1.112 1.112 0 01-2.211.245 7.777 7.777 0 00-6.878-6.861zm1.235-5.097c0 .613-.498 1.11-1.112 1.11A1.111 1.111 0 011 8.054V6.082A3.086 3.086 0 014.09 3h15.82C21.617 3 23 4.38 23 6.082v11.836A3.086 3.086 0 0119.91 21h-5.932a1.111 1.111 0 01-1.113-1.11c0-.613.498-1.11 1.113-1.11h5.932a.864.864 0 00.865-.862V6.082a.864.864 0 00-.865-.863H4.09a.864.864 0 00-.865.863v1.973z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Cast = _react.default.forwardRef(function Cast(props, ref) {
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

Cast.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Cast.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Cast.name = Cast.render.name || 'Cast';
var _default = Cast;
exports.default = _default;
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
  d: "M15.95 2c.295 0 .578.117.786.325l4.939 4.939c.208.208.325.49.325.785v10.865A3.086 3.086 0 0118.914 22H5.086A3.086 3.086 0 012 18.914V5.086A3.086 3.086 0 015.086 2h10.865zm-.46 2.222H8.172v2.716h6.791a1.111 1.111 0 010 2.222H7.062A1.111 1.111 0 015.95 8.05L5.95 4.221h-.864a.864.864 0 00-.864.864v13.828c0 .477.387.864.864.864l.864-.001v-6.79c0-.613.498-1.11 1.112-1.11h9.876c.614 0 1.111.497 1.111 1.11v6.79h.865a.864.864 0 00.864-.863V8.51L15.49 4.222zm.337 9.877H8.173l-.001 5.678h7.655v-5.678z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Save = _react.default.forwardRef(function Save(props, ref) {
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

Save.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Save.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Save.name = Save.render.name || 'Save';
var _default = Save;
exports.default = _default;
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
  d: "M10.345 12c0 .61-.489 1.103-1.093 1.103H3.731l2.985 3.013a1.11 1.11 0 010 1.56c-.427.432-1.12.432-1.546 0L.252 12.706l-.074-.101-.084-.156-.044-.118-.04-.176L0 12l.005-.106.024-.147.032-.112.043-.105.088-.155.08-.104L5.17 6.323a1.086 1.086 0 011.546 0 1.11 1.11 0 010 1.56l-2.983 3.012 5.52.002c.603 0 1.092.494 1.092 1.103zm8.485-5.677l4.85 4.897.068.075.074.101.084.156.044.118.04.176L24 12l-.005.106-.024.147-.032.112-.043.105-.088.155-.128.155-4.85 4.897c-.427.43-1.119.43-1.546 0a1.11 1.11 0 010-1.56l2.985-3.014h-5.521A1.098 1.098 0 0113.655 12c0-.61.489-1.103 1.093-1.103l5.52-.002-2.984-3.011a1.11 1.11 0 010-1.56 1.086 1.086 0 011.546 0z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var MaximizeHorizontal = _react.default.forwardRef(function MaximizeHorizontal(props, ref) {
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

MaximizeHorizontal.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
MaximizeHorizontal.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

MaximizeHorizontal.name = MaximizeHorizontal.render.name || 'MaximizeHorizontal';
var _default = MaximizeHorizontal;
exports.default = _default;
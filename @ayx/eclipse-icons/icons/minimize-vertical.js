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
  d: "M12 0c-.61 0-1.103.49-1.103 1.093v5.522L7.884 3.63a1.11 1.11 0 00-1.56 0 1.086 1.086 0 000 1.545l4.971 4.918.101.074.156.085.118.043.176.04.154.01.106-.005.147-.024.112-.032.105-.042.155-.09.104-.08 4.948-4.897c.43-.427.43-1.119 0-1.545a1.11 1.11 0 00-1.56 0l-3.012 2.983-.002-5.52C13.103.489 12.61 0 12 0zm5.677 18.825l-4.897-4.85-.075-.068-.101-.074-.156-.085-.118-.043-.176-.04-.154-.01-.106.005-.147.024-.112.032-.105.042-.155.09-.155.127-4.897 4.85a1.086 1.086 0 000 1.545 1.11 1.11 0 001.56 0l3.014-2.985v5.522c0 .604.494 1.093 1.103 1.093.61 0 1.103-.49 1.103-1.093l.002-5.52 3.011 2.983a1.11 1.11 0 001.56 0c.432-.426.432-1.118 0-1.545z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var MinimizeVertical = _react.default.forwardRef(function MinimizeVertical(props, ref) {
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

MinimizeVertical.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
MinimizeVertical.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

MinimizeVertical.name = MinimizeVertical.render.name || 'MinimizeVertical';
var _default = MinimizeVertical;
exports.default = _default;
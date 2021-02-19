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
  d: "M5.455 16.805c0-.6.488-1.086 1.09-1.086.603 0 1.091.486 1.091 1.086v3.654c0 .6-.488 1.086-1.09 1.086-.603 0-1.091-.486-1.091-1.086v-3.654zm3.636-4.407c0-.6.488-1.087 1.09-1.087.603 0 1.092.487 1.092 1.087v8.061c0 .6-.489 1.086-1.091 1.086-.603 0-1.091-.486-1.091-1.086v-8.061zm3.636 1.482c0-.6.489-1.086 1.091-1.086.603 0 1.091.486 1.091 1.086v6.58c0 .6-.488 1.085-1.09 1.085-.603 0-1.092-.486-1.092-1.086v-6.58zm3.637-4.319c0-.6.488-1.086 1.09-1.086.603 0 1.091.486 1.091 1.086V20.46c0 .6-.488 1.086-1.09 1.086-.603 0-1.091-.486-1.091-1.086V9.561zm-13.27 7.684c.522.3.7.964.4 1.484-.301.52-.968.698-1.49.398A3.979 3.979 0 010 15.674v-8.69C0 4.783 1.79 3 4 3h16c2.21 0 4 1.783 4 3.983v8.691c0 1.414-.746 2.7-1.94 3.415a1.093 1.093 0 01-1.496-.37 1.084 1.084 0 01.372-1.491c.544-.327.882-.91.882-1.554v-8.69c0-1-.814-1.811-1.818-1.811H4c-1.004 0-1.818.81-1.818 1.81v8.691c0 .656.351 1.249.912 1.57z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var PowerBi = _react.default.forwardRef(function PowerBi(props, ref) {
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

PowerBi.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
PowerBi.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

PowerBi.name = PowerBi.render.name || 'PowerBi';
var _default = PowerBi;
exports.default = _default;
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
  d: "M11.878 22.993l-.117-.019a1.104 1.104 0 01-.548-.3l-2.966-2.966a1.112 1.112 0 011.573-1.573l1.067 1.066v-6.089H4.798l1.067 1.068a1.112 1.112 0 11-1.573 1.573l-2.966-2.966-.02-.02a1.119 1.119 0 01-.048-.055l.068.075a1.123 1.123 0 01-.203-.279 1.115 1.115 0 01.203-1.295l2.966-2.966A1.112 1.112 0 015.865 9.82l-1.067 1.067h6.089V4.798L9.82 5.865a1.112 1.112 0 01-1.573-1.573l2.966-2.966.02-.02.055-.048-.075.068a1.123 1.123 0 01.431-.268 1.11 1.11 0 011.143.268l2.966 2.966a1.112 1.112 0 01-1.573 1.573l-1.068-1.067v6.089h6.089L18.135 9.82a1.112 1.112 0 011.573-1.573l2.966 2.966.02.02.048.055-.068-.075a1.123 1.123 0 01.203.279 1.115 1.115 0 01-.203 1.295l-2.966 2.966a1.112 1.112 0 01-1.573-1.573l1.066-1.068h-6.089v6.089l1.068-1.066a1.112 1.112 0 111.573 1.573l-2.966 2.966-.02.02a1.119 1.119 0 01-.055.048l.075-.068a1.123 1.123 0 01-.431.268 1.11 1.11 0 01-.478.051z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Move = _react.default.forwardRef(function Move(props, ref) {
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

Move.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Move.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Move.name = Move.render.name || 'Move';
var _default = Move;
exports.default = _default;
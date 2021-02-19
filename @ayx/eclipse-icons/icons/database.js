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
  d: "M12 1c5.412 0 9.824 1.437 9.995 3.928l.005.15v13.843C22 21.51 17.542 23 12 23S2 21.51 2 18.921V5.08C2 2.495 6.48 1 12 1zm0 15.079c-3.148 0-5.947-.481-7.777-1.371v4.213c0 .699 3.456 1.854 7.777 1.854s7.778-1.155 7.778-1.854v-4.213c-1.831.89-4.63 1.37-7.778 1.37zm0-6.922c-3.14 0-5.943-.483-7.777-1.376V12c0 .699 3.456 1.854 7.777 1.854s7.778-1.155 7.778-1.854V7.78C17.942 8.675 15.14 9.158 12 9.158zm0-2.224c4.298 0 7.778-1.162 7.778-1.854 0-.693-3.48-1.854-7.778-1.854s-7.778 1.16-7.778 1.854c0 .692 3.48 1.854 7.778 1.854z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Database = _react.default.forwardRef(function Database(props, ref) {
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

Database.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Database.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Database.name = Database.render.name || 'Database';
var _default = Database;
exports.default = _default;
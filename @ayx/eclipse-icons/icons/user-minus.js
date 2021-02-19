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
  d: "M18.026 20.91c0 .602-.52 1.09-1.16 1.09-.642 0-1.162-.488-1.162-1.09v-1.98c0-1.587-1.357-2.87-3.027-2.87H5.35c-1.67 0-3.026 1.283-3.026 2.87v1.98c0 .602-.52 1.09-1.162 1.09C.52 22 0 21.512 0 20.91v-1.98c0-2.788 2.393-5.051 5.349-5.051h7.328c2.956 0 5.35 2.263 5.35 5.05v1.98zM9.013 12.1c-2.956 0-5.349-2.263-5.349-5.05C3.664 4.263 6.057 2 9.014 2c2.955 0 5.348 2.263 5.348 5.05 0 2.788-2.393 5.051-5.349 5.051zm0-2.182c1.67 0 3.027-1.283 3.027-2.868 0-1.586-1.357-2.87-3.027-2.87-1.67 0-3.026 1.284-3.026 2.87 0 1.585 1.356 2.868 3.026 2.868zm13.826 0c.641 0 1.161.489 1.161 1.091 0 .603-.52 1.091-1.161 1.091h-6.282c-.641 0-1.161-.488-1.161-1.09 0-.603.52-1.092 1.161-1.092h6.282z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var UserMinus = _react.default.forwardRef(function UserMinus(props, ref) {
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

UserMinus.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
UserMinus.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

UserMinus.name = UserMinus.render.name || 'UserMinus';
var _default = UserMinus;
exports.default = _default;
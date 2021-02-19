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
  d: "M11.973 3.56c5.983 0 10.862 4.608 10.862 10.284 0 2.292-1.955 4.148-4.343 4.148-2.389 0-4.343-1.856-4.343-4.148 0-1.086-.97-1.988-2.17-1.988-1.202 0-2.17.898-2.17 1.988 0 2.02.792 3.917 2.227 5.337 1.137 1.125 2.23 1.737 3.936 2.2.576.163.92.758.757 1.327a1.081 1.081 0 01-1.253.773l-.076-.022c-2.085-.565-3.468-1.343-4.89-2.751a9.61 9.61 0 01-2.867-6.87c0-2.294 1.95-4.149 4.343-4.149 2.198 0 4.038 1.57 4.31 3.64l.024.25.009.258c0 1.086.97 1.988 2.17 1.988 1.201 0 2.169-.898 2.169-1.988 0-4.473-3.892-8.122-8.689-8.122-3.42 0-6.532 1.886-7.932 4.8-.402.83-.631 1.789-.682 2.853l-.011.462.007.447c.04 1.241.269 2.5.805 3.928a1.085 1.085 0 01-.644 1.39 1.094 1.094 0 01-1.398-.637c-.639-1.705-.95-3.377-.95-5.12 0-1.574.306-3.008.91-4.255C3.844 5.923 7.73 3.56 11.972 3.56zm.044 3.055c4.192 0 7.606 3.229 7.606 7.216 0 .595-.488 1.08-1.087 1.08a1.085 1.085 0 01-1.087-1.08c0-2.781-2.429-5.055-5.432-5.055-2.998 0-5.432 2.276-5.432 5.055 0 1.73.385 3.324 1.11 4.615.722 1.28 1.181 1.866 2.253 2.938.427.425.423 1.12.017 1.5a1.02 1.02 0 01-.781.346c-.289 0-.561-.113-.772-.323-1.233-1.24-1.8-1.964-2.61-3.403-.91-1.612-1.39-3.577-1.39-5.673 0-3.983 3.416-7.216 7.605-7.216zm-.07 6.142c.6 0 1.088.485 1.088 1.08 0 1.611.838 3.14 2.249 4.093.812.55 1.77.818 2.943.818.342 0 .82-.039 1.236-.111a1.09 1.09 0 011.263.87 1.084 1.084 0 01-.879 1.257 9.193 9.193 0 01-1.62.145c-1.588 0-2.996-.4-4.169-1.189-2-1.352-3.197-3.55-3.197-5.883 0-.595.488-1.08 1.087-1.08zM5.303 2.143C9.403.036 14.632.03 18.738 2.13c1.954 1 3.6 2.417 4.896 4.218a1.072 1.072 0 01-.252 1.504 1.094 1.094 0 01-1.519-.25 11.375 11.375 0 00-4.116-3.55c-3.49-1.783-7.96-1.778-11.446.012a11.389 11.389 0 00-4.128 3.588 1.1 1.1 0 01-.884.44c-.218 0-.432-.065-.63-.196a1.073 1.073 0 01-.26-1.503 13.577 13.577 0 014.903-4.25z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Fingerprint = _react.default.forwardRef(function Fingerprint(props, ref) {
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

Fingerprint.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Fingerprint.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Fingerprint.name = Fingerprint.render.name || 'Fingerprint';
var _default = Fingerprint;
exports.default = _default;
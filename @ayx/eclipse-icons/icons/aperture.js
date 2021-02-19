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
  d: "M12 1a11.125 11.125 0 011.304.076 11.01 11.01 0 018.8 6.565C22.68 8.978 23 10.45 23 12c0 2.417-.78 4.652-2.101 6.467a.992.992 0 01-.107.145l-.043.057a10.982 10.982 0 01-9.928 4.269 11.01 11.01 0 01-8.924-6.578A10.985 10.985 0 011 12c0-2.417.78-4.652 2.101-6.467a.993.993 0 01.108-.146A10.982 10.982 0 0112 1zm4.568 13.224l-3.761 6.515a8.757 8.757 0 005.807-2.972l-2.046-3.543zm-4.211 2.843H4.835a8.779 8.779 0 005.476 3.546l2.046-3.546zm7.947-7.91h-4.093l3.762 6.514A8.743 8.743 0 0020.775 12c0-.995-.165-1.951-.47-2.843zM15.283 12l-1.642-2.843h-3.284l-1.641 2.842 1.642 2.843h3.284L15.283 12zM3.225 12c0 .995.165 1.951.47 2.843l4.093-.001-3.76-6.513A8.743 8.743 0 003.224 12zm2.16-5.767l2.046 3.542 3.762-6.514a8.757 8.757 0 00-5.807 2.972zm8.304-2.846l-2.047 3.545h7.523a8.779 8.779 0 00-5.476-3.545z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Aperture = _react.default.forwardRef(function Aperture(props, ref) {
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

Aperture.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Aperture.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Aperture.name = Aperture.render.name || 'Aperture';
var _default = Aperture;
exports.default = _default;
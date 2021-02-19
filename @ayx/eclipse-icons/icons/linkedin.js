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
  d: "M20.775 14.97a4.819 4.819 0 00-4.82-4.817 4.819 4.819 0 00-4.82 4.818v5.805h1.73v-5.805a3.09 3.09 0 016.18 0v5.805h1.73v-5.805zm-4.82-7.04A7.043 7.043 0 0123 14.97v6.918c0 .614-.498 1.112-1.112 1.112h-3.955a1.112 1.112 0 01-1.113-1.112v-6.917a.865.865 0 00-1.73 0v6.917c0 .614-.498 1.112-1.112 1.112h-3.956a1.112 1.112 0 01-1.112-1.112v-6.917a7.043 7.043 0 017.045-7.042zm-13.843.988h3.955c.615 0 1.113.497 1.113 1.111v11.86c0 .613-.498 1.111-1.113 1.111H2.112A1.112 1.112 0 011 21.888V10.03c0-.614.498-1.111 1.112-1.111zm1.113 2.223v9.635h1.73v-9.635h-1.73zm.865-2.965a3.09 3.09 0 11-.002-6.178 3.09 3.09 0 01.002 6.178zm0-2.223a.865.865 0 100-1.73.865.865 0 000 1.73z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Linkedin = _react.default.forwardRef(function Linkedin(props, ref) {
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

Linkedin.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Linkedin.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Linkedin.name = Linkedin.render.name || 'Linkedin';
var _default = Linkedin;
exports.default = _default;
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
  d: "M15.745 19.974c.61 0 1.104.494 1.104 1.104v1.819a1.103 1.103 0 01-2.207 0v-1.82c0-.609.494-1.103 1.103-1.103zM7.438 9.482a1.1 1.1 0 01.085 1.46l-.085.096-3.187 3.186a3.9 3.9 0 00.048 5.467 3.898 3.898 0 005.293.207l.16-.146 3.21-3.21a1.1 1.1 0 011.641 1.46l-.085.096-3.224 3.223a6.1 6.1 0 01-8.786-8.45l.174-.189 3.2-3.2a1.1 1.1 0 011.556 0zm11.307 7.702l3.051 3.052a1.103 1.103 0 11-1.56 1.56l-3.052-3.051a1.103 1.103 0 011.56-1.56zm4.152-2.542a1.103 1.103 0 110 2.207h-1.82a1.103 1.103 0 010-2.207h1.82zm-1.64-11.889a6.103 6.103 0 01.235 8.377l-.174.188-3.2 3.2a1.1 1.1 0 01-1.641-1.46l.085-.096 3.187-3.186a3.9 3.9 0 00-.048-5.467 3.898 3.898 0 00-5.294-.206l-.16.146-3.22 3.21a1.1 1.1 0 01-1.64-1.462l.086-.096 3.233-3.222a6.1 6.1 0 018.55.074zM2.922 7.151a1.103 1.103 0 010 2.207H1.103a1.103 1.103 0 010-2.207h1.82zm.842-4.947l3.052 3.051a1.103 1.103 0 11-1.56 1.56l-3.052-3.05a1.103 1.103 0 011.56-1.561zM8.254 0c.61 0 1.104.494 1.104 1.103v1.82a1.103 1.103 0 01-2.207 0v-1.82C7.151.494 7.645 0 8.255 0z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Unlink = _react.default.forwardRef(function Unlink(props, ref) {
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

Unlink.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Unlink.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Unlink.name = Unlink.render.name || 'Unlink';
var _default = Unlink;
exports.default = _default;
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
  d: "M5.079 15.827a1.112 1.112 0 110 2.222h-.99A3.088 3.088 0 011 14.963V5.086A3.088 3.088 0 014.09 2h15.82A3.088 3.088 0 0123 5.086v9.877a3.088 3.088 0 01-3.09 3.086h-.989a1.112 1.112 0 110-2.222h.99a.865.865 0 00.864-.864V5.086a.865.865 0 00-.865-.864H4.09a.865.865 0 00-.865.864v9.877c0 .477.387.864.865.864h.989zm7.776-1.575l4.943 5.926c.604.723.089 1.822-.854 1.822H7.056c-.943 0-1.458-1.099-.854-1.822l4.943-5.926a1.113 1.113 0 011.71 0zM12 16.699l-2.569 3.079h5.138L12 16.698z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Airplay = _react.default.forwardRef(function Airplay(props, ref) {
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

Airplay.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Airplay.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Airplay.name = Airplay.render.name || 'Airplay';
var _default = Airplay;
exports.default = _default;
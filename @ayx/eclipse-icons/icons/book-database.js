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
  d: "M2.726 14.63c.375-.142.781-.219 1.205-.219h2.875a1.113 1.113 0 010 2.226H3.931a1.206 1.206 0 100 2.411h2.875a1.113 1.113 0 110 2.226H3.931A3.431 3.431 0 01.5 17.843V3.93A3.431 3.431 0 013.931.5h12.52c.615 0 1.114.498 1.114 1.113v3.71a1.113 1.113 0 11-2.226 0V2.726H3.93c-.665 0-1.205.54-1.205 1.205V14.63zm18.548-.861c-1.262.515-2.96.783-4.822.783-1.865 0-3.563-.269-4.823-.786v2.351c.198.101.502.208.889.305 1.008.252 2.414.4 3.934.4 1.519 0 2.926-.148 3.934-.4.386-.097.69-.204.888-.305V13.77zm2.219-2.638c.005.041.007.084.007.127v9.034c0 2.09-3.162 3.208-7.048 3.208-3.887 0-7.049-1.118-7.049-3.208v-9.034c0-.094.012-.185.034-.273.25-1.972 3.3-3.038 7.015-3.038 3.807 0 6.926 1.118 7.04 3.184zm-11.864 7.377v1.784c0-.056.287.185.99.433.975.345 2.347.55 3.833.55 1.485 0 2.857-.205 3.833-.55.702-.248.99-.489.99-.433v-1.784c-1.241.372-2.92.54-4.823.54-1.905 0-3.582-.168-4.823-.54zm1.019-6.747c.965.355 2.327.565 3.804.565 1.477 0 2.842-.21 3.811-.566.704-.258.998-.51 1.007-.51-.009-.001-.303-.253-1.007-.511-.969-.356-2.334-.566-3.811-.566-1.477 0-2.839.21-3.804.565-.703.259-.994.51-1.002.512.008 0 .3.252 1.002.51z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var BookDatabase = _react.default.forwardRef(function BookDatabase(props, ref) {
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

BookDatabase.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
BookDatabase.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

BookDatabase.name = BookDatabase.render.name || 'BookDatabase';
var _default = BookDatabase;
exports.default = _default;
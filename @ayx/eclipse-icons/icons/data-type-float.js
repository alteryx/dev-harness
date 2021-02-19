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
  d: "M17.899 8a4.017 4.017 0 014.017 4.017c0 1.563-1.266 3.548-3.798 6.12l-.363.363H21.4a1.1 1.1 0 011.093.98l.007.12a1.1 1.1 0 01-.98 1.094l-.12.006h-6.417c-1.008 0-1.485-1.243-.736-1.918 3.646-3.28 5.47-5.651 5.47-6.765a1.817 1.817 0 00-3.455-.787l-.06.136a1.1 1.1 0 01-2.053-.788A4.017 4.017 0 0117.898 8zm-6.96 6.112c.21 0 .407.04.588.119.182.079.341.186.478.32.136.135.243.292.32.474.076.181.114.377.114.587 0 .211-.038.408-.115.593a1.442 1.442 0 01-.797.793 1.509 1.509 0 01-.588.114c-.216 0-.414-.038-.596-.114a1.443 1.443 0 01-.789-.793 1.525 1.525 0 01-.115-.593 1.493 1.493 0 01.43-1.061 1.502 1.502 0 011.07-.439zM5.55 3l.056.001.059.005-.022-.002.073.008a1.224 1.224 0 01.218.057 1.03 1.03 0 01.246.13l.023.016a.892.892 0 01.134.117 1.156 1.156 0 01.064.071l.017.022c.015.019.03.039.043.059l-.012-.017.037.055a1.087 1.087 0 01.09.18l.006.015.012.035.01.032c.03.1.045.202.046.305V14.6a1.1 1.1 0 01-2.194.12l-.006-.12V6.443l-1.153.958a1.1 1.1 0 01-1.488-1.615l.094-.087 2.95-2.45.001-.002.024-.018.027-.02.007-.005-.006.004.014-.01.052-.034c.025-.016.05-.03.077-.044l.025-.012c.026-.012.052-.024.079-.034l.014-.005.035-.013a1.091 1.091 0 01.225-.05h.003L5.54 3h.011z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var DataTypeFloat = _react.default.forwardRef(function DataTypeFloat(props, ref) {
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

DataTypeFloat.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
DataTypeFloat.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

DataTypeFloat.name = DataTypeFloat.render.name || 'DataTypeFloat';
var _default = DataTypeFloat;
exports.default = _default;
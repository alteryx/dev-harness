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
  d: "M4.949 15.988c.116 0 .174.057.174.17v1.11c0 .113-.058.17-.174.17H3.473c-.049 0-.073.023-.073.07v4.572c0 .113-.058.17-.174.17H1.85c-.116 0-.174-.057-.174-.17v-4.571c0-.048-.024-.072-.073-.072H.174c-.116 0-.174-.056-.174-.17v-1.109c0-.113.058-.17.174-.17H4.95zm5.675 2.988c-.024.012-.036.027-.036.045s.012.032.036.044c.257.15.448.339.573.568.125.23.188.506.188.828 0 .614-.22 1.066-.66 1.355-.44.29-1.011.434-1.714.434H6.583c-.116 0-.174-.057-.174-.17v-5.922c0-.113.058-.17.174-.17h2.346c.782 0 1.37.136 1.764.407.394.272.591.726.591 1.364 0 .555-.22.96-.66 1.217zm-2.419-1.548c-.049 0-.073.024-.073.072v.84c0 .049.024.072.073.072h.724c.446 0 .669-.164.669-.492 0-.328-.223-.492-.669-.492h-.724zm.806 3.382c.434 0 .651-.176.651-.528 0-.334-.214-.5-.641-.5h-.816c-.049 0-.073.023-.073.07v.886c0 .048.024.072.073.072h.806zm3.972 1.44c-.117 0-.175-.057-.175-.17v-5.922c0-.113.058-.17.175-.17h1.374c.116 0 .174.057.174.17v4.58c0 .048.025.072.074.072h2.767c.116 0 .174.056.174.17v1.1c0 .113-.058.17-.174.17h-4.39z"
});

var _ref2 = _react.default.createElement("path", {
  d: "M3.111 14.5A1.111 1.111 0 012 13.389V5.967C2 3.777 3.824 2 6.074 2h11.852C20.176 2 22 3.776 22 5.967v13.034c0 .614-.497 1.112-1.111 1.112a1.11 1.11 0 01-1.111-1.11V8.498l-4.895 4.766a1.132 1.132 0 01-1.57 0l-3.083-3.001-3.327 3.06a1.132 1.132 0 01-1.57-.023 1.062 1.062 0 01.022-1.53l4.112-3.803a1.133 1.133 0 011.56.012l3.07 2.99 5.618-5.47a1.845 1.845 0 00-1.79-1.334H6.076c-1.024 0-1.853.807-1.853 1.803v7.422c0 .614-.497 1.111-1.11 1.111z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var LineChartTableau = _react.default.forwardRef(function LineChartTableau(props, ref) {
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
  }), _ref, _ref2);
});

LineChartTableau.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
LineChartTableau.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

LineChartTableau.name = LineChartTableau.render.name || 'LineChartTableau';
var _default = LineChartTableau;
exports.default = _default;
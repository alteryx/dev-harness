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
  d: "M2.695 15.988c.414 0 .779.085 1.094.255.315.17.559.412.73.725.173.313.259.672.259 1.078 0 .4-.09.751-.271 1.055-.181.304-.435.54-.762.707-.326.167-.703.25-1.129.25h-.9c-.048 0-.07.024-.07.072v1.95c0 .113-.056.17-.167.17H.166c-.11 0-.166-.057-.166-.17v-5.922c0-.113.055-.17.166-.17h2.53zm3.86 0c.098 0 .16.048.183.143l.718 2.827c.011.03.027.045.048.045.02 0 .033-.015.039-.045l.665-2.818c.03-.101.09-.152.184-.152h1.024c.099 0 .16.048.183.143l.7 2.827c.012.03.028.045.049.045.02 0 .033-.015.039-.045l.648-2.818c.023-.101.084-.152.183-.152h1.418c.058 0 .1.017.122.05.024.032.03.078.018.138l-1.531 5.93c-.024.096-.085.144-.184.144H9.72c-.104 0-.165-.05-.183-.152l-.604-2.961c-.011-.03-.026-.046-.043-.05-.018-.002-.03.014-.035.05l-.534 2.96c-.018.102-.076.153-.175.153H6.904c-.099 0-.163-.048-.192-.143l-1.715-5.931a.202.202 0 01-.01-.063c0-.083.05-.125.15-.125h1.417zm9.412 0c.747 0 1.308.136 1.684.407.377.272.565.726.565 1.364 0 .555-.21.96-.63 1.217-.024.012-.035.027-.035.045s.011.032.035.044c.245.15.427.339.547.568.12.23.18.506.18.828 0 .614-.21 1.066-.63 1.355-.421.29-.966.434-1.637.434h-2.32c-.11 0-.165-.057-.165-.17v-5.922c0-.113.055-.17.166-.17h2.24zm.087 3.793h-.778c-.047 0-.07.024-.07.072v.885c0 .048.023.072.07.072h.77c.414 0 .621-.176.621-.528 0-.334-.204-.5-.613-.5zM17.926 2C20.176 2 22 3.776 22 5.967v13.034c0 .614-.497 1.112-1.111 1.112a1.11 1.11 0 01-1.111-1.108V8.497l-4.895 4.766a1.132 1.132 0 01-1.57 0l-3.083-3.001-3.327 3.06a1.132 1.132 0 01-1.57-.023 1.062 1.062 0 01.022-1.53l4.112-3.803a1.133 1.133 0 011.56.012l3.07 2.99 5.618-5.47a1.845 1.845 0 00-1.79-1.334H6.076c-1.024 0-1.853.807-1.853 1.803v7.422a1.111 1.111 0 01-2.222 0V5.967C2 3.777 3.824 2 6.074 2h11.852zM2.424 17.428h-.709c-.047 0-.07.024-.07.072v1.145c0 .048.023.072.07.072h.709c.216 0 .39-.059.52-.175a.586.586 0 00.197-.46.61.61 0 00-.196-.475c-.132-.119-.305-.179-.521-.179zm13.543 0h-.691c-.047 0-.07.024-.07.072v.84c0 .049.023.072.07.072h.69c.427 0 .64-.164.64-.492 0-.328-.213-.492-.64-.492z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var LineChartPowerbi = _react.default.forwardRef(function LineChartPowerbi(props, ref) {
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

LineChartPowerbi.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
LineChartPowerbi.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

LineChartPowerbi.name = LineChartPowerbi.render.name || 'LineChartPowerbi';
var _default = LineChartPowerbi;
exports.default = _default;
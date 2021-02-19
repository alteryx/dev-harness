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
  d: "M4.475 22.25c-.104 0-.168-.048-.192-.143l-.184-.644c-.012-.042-.04-.063-.083-.063h-1.91c-.043 0-.071.021-.083.063l-.184.644c-.024.095-.089.143-.193.143H.158c-.061 0-.106-.018-.133-.054-.028-.035-.032-.083-.014-.143l1.91-5.922c.031-.095.096-.143.194-.143h1.892c.098 0 .162.048.193.143l1.91 5.922c.007.018.01.039.01.063 0 .09-.052.134-.156.134H4.475zm-2.048-2.2c0 .041.021.062.064.062h1.14c.024 0 .042-.007.054-.022.013-.015.016-.035.01-.058l-.588-2.067c-.006-.03-.02-.045-.042-.045-.021 0-.038.015-.05.045l-.588 2.067v.017zm6.066 2.182c-.117 0-.175-.057-.175-.17V20.14a.288.288 0 00-.018-.09l-1.847-3.864a.278.278 0 01-.018-.08c0-.078.052-.117.156-.117H8.09c.104 0 .171.045.202.134l.845 2.067c.012.024.027.036.046.036.018 0 .033-.012.046-.036l.845-2.067c.03-.09.098-.134.202-.134h1.506c.104 0 .157.039.157.116a.278.278 0 01-.019.081l-1.865 3.864a.288.288 0 00-.018.09v1.923c0 .113-.058.17-.175.17H8.493zm4.853.018c-.098 0-.147-.036-.147-.107 0-.03.01-.063.028-.099l1.635-2.88a.08.08 0 000-.09l-1.635-2.88a.218.218 0 01-.028-.098c0-.072.05-.108.147-.108h1.507c.091 0 .159.042.202.125l.872 1.628c.013.024.028.036.046.036.019 0 .034-.012.046-.036l.873-1.628a.213.213 0 01.202-.125h1.497c.098 0 .147.036.147.108 0 .03-.009.062-.027.098l-1.626 2.88a.08.08 0 000 .09l1.626 2.88a.218.218 0 01.027.099c0 .071-.049.107-.147.107h-1.488a.213.213 0 01-.202-.125l-.882-1.628c-.012-.024-.027-.036-.046-.036-.018 0-.033.012-.046.036l-.882 1.628a.213.213 0 01-.202.125h-1.497z"
});

var _ref2 = _react.default.createElement("path", {
  d: "M3.111 14.5A1.111 1.111 0 012 13.389V5.967C2 3.777 3.824 2 6.074 2h11.852C20.176 2 22 3.776 22 5.967v13.034c0 .614-.497 1.112-1.111 1.112a1.11 1.11 0 01-1.111-1.11V8.498l-4.895 4.766a1.132 1.132 0 01-1.57 0l-3.083-3.001-3.327 3.06a1.132 1.132 0 01-1.57-.023 1.062 1.062 0 01.022-1.53l4.112-3.803a1.133 1.133 0 011.56.012l3.07 2.99 5.618-5.47a1.845 1.845 0 00-1.79-1.334H6.076c-1.024 0-1.853.807-1.853 1.803v7.422c0 .614-.497 1.111-1.11 1.111z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var LineChartAlteryx = _react.default.forwardRef(function LineChartAlteryx(props, ref) {
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

LineChartAlteryx.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
LineChartAlteryx.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

LineChartAlteryx.name = LineChartAlteryx.render.name || 'LineChartAlteryx';
var _default = LineChartAlteryx;
exports.default = _default;
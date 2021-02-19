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
  d: "M2.182.637l.096.085 1.459 1.46.085.096 18 18 .096.085.002.002 1.358 1.357a1.1 1.1 0 01-1.46 1.641l-.096-.085-3.14-3.14c-.1.083-.189.18-.264.286l-1.622 2.29c-.36.509-.999.741-1.602.583l-2.714-.712a1.497 1.497 0 00-.76 0l-2.714.712a1.497 1.497 0 01-1.602-.583l-1.622-2.29a1.497 1.497 0 00-.581-.488l-2.537-1.2a1.497 1.497 0 01-.852-1.476l.23-2.796a1.497 1.497 0 00-.133-.748l-1.172-2.55a1.497 1.497 0 01.296-1.679l1.974-1.994c.18-.183.311-.41.38-.658l.427-1.566L.722 2.278A1.1 1.1 0 012.182.637zM5.42 6.976l-.113.412a3.593 3.593 0 01-.911 1.579l-1.682 1.7.999 2.173c.258.561.367 1.18.316 1.795l-.195 2.384 2.162 1.022c.558.264 1.04.667 1.396 1.172l1.382 1.951 2.313-.606a3.593 3.593 0 011.824 0l2.313.606 1.382-1.951c.144-.204.309-.392.49-.56l-4.066-4.067-1.734 1.712c-.438.439-1.15.439-1.588 0L7.06 13.916a1.123 1.123 0 011.588-1.588l1.853 1.588.936-.923-6.017-6.017zm7.431-6.06l2.307 1.597c.212.147.458.236.714.26l2.794.26c.621.057 1.141.494 1.306 1.095l.74 2.707c.069.248.2.475.38.658l1.974 1.994c.439.444.557 1.112.296 1.679l-1.172 2.55a1.497 1.497 0 00-.132.748l.23 2.796c.01.122.004.242-.014.359l-2.245-2.244-.06-.74a3.593 3.593 0 01.316-1.795l1-2.173-1.683-1.7a3.593 3.593 0 01-.911-1.579l-.631-2.306-2.382-.222a3.593 3.593 0 01-1.713-.623L12 2.876l-1.966 1.36a3.593 3.593 0 01-.747.397l-1.8-1.801.64-.059c.256-.024.502-.113.714-.26L11.148.916a1.497 1.497 0 011.704 0zM17.35 8.74c.438.438.439 1.15 0 1.588l-1.192 1.174-1.589-1.589 1.192-1.172a1.123 1.123 0 011.589-.001z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Decertify = _react.default.forwardRef(function Decertify(props, ref) {
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

Decertify.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Decertify.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Decertify.name = Decertify.render.name || 'Decertify';
var _default = Decertify;
exports.default = _default;
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
  d: "M16.346 4.26a3.395 3.395 0 013.395 3.394v6.552A4.483 4.483 0 0118.518 23a4.481 4.481 0 01-1.222-8.794V7.654a.95.95 0 00-.951-.95h-3.26a1.222 1.222 0 110-2.445h3.26zM5.48 1a4.481 4.481 0 011.222 8.794v11.984a1.222 1.222 0 11-2.444 0V9.794A4.483 4.483 0 015.482 1zM18.52 16.481a2.037 2.037 0 100 4.075 2.037 2.037 0 000-4.075zM5.48 3.444a2.037 2.037 0 100 4.075 2.037 2.037 0 000-4.075z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var GitPullRequest = _react.default.forwardRef(function GitPullRequest(props, ref) {
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

GitPullRequest.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
GitPullRequest.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

GitPullRequest.name = GitPullRequest.render.name || 'GitPullRequest';
var _default = GitPullRequest;
exports.default = _default;
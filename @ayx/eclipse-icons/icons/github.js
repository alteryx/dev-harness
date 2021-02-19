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
  d: "M20.348 1.028c.09.012.14.023.23.047.324.094.588.324.722.628a5.989 5.989 0 01.317 3.906A6.39 6.39 0 0123 9.57c0 4.593-2.086 6.885-5.813 7.738a4.09 4.09 0 01.25 1.756v3.824c0 .613-.51 1.111-1.138 1.111a1.125 1.125 0 01-1.138-1.111l.004-3.911a2.188 2.188 0 00-.634-1.718c-.658-.663-.249-1.776.691-1.878 3.754-.409 5.502-1.845 5.502-5.811a4.21 4.21 0 00-1.203-2.939 1.092 1.092 0 01-.242-1.155 3.812 3.812 0 00.165-2.171 4.602 4.602 0 00-.104.028c-.639.18-1.44.558-2.407 1.192a1.16 1.16 0 01-.932.15 12.68 12.68 0 00-6.485 0 1.16 1.16 0 01-.931-.15c-.968-.634-1.769-1.013-2.407-1.192l-.104-.028a3.812 3.812 0 00.165 2.17c.152.4.058.848-.242 1.156A4.214 4.214 0 004.793 9.6c0 3.93 1.735 5.354 5.517 5.813.931.113 1.33 1.217.677 1.876-.448.453-.679 1.07-.63 1.776v3.824c0 .613-.51 1.111-1.138 1.111a1.125 1.125 0 01-1.138-1.111v-1.574c-2.208.31-3.64-.426-4.97-2.034-.083-.1-.384-.475-.454-.558-.38-.458-.596-.635-.795-.684a1.11 1.11 0 01-.828-1.348 1.14 1.14 0 011.38-.809c.808.198 1.346.638 2.012 1.442.082.099.385.474.456.56.912 1.103 1.652 1.491 3.197 1.18l.004.079a4.345 4.345 0 01.259-1.818c-3.748-.885-5.825-3.155-5.825-7.719A6.39 6.39 0 013.901 5.61a5.989 5.989 0 01.317-3.906 1.13 1.13 0 01.722-.628c.09-.024.14-.035.23-.047.975-.139 2.383.229 4.252 1.379 2.195-.5 4.478-.5 6.673 0 1.87-1.15 3.278-1.518 4.253-1.38z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var GitHub = _react.default.forwardRef(function GitHub(props, ref) {
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

GitHub.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
GitHub.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

GitHub.name = GitHub.render.name || 'GitHub';
var _default = GitHub;
exports.default = _default;
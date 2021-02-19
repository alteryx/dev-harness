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
  d: "M13.012 2a9.012 9.012 0 017.11 14.55l3.553 3.553a1.111 1.111 0 11-1.572 1.572l-3.552-3.552A9.012 9.012 0 1113.013 2zm0 2.222a6.79 6.79 0 104.707 11.685 1.037 1.037 0 01.188-.189 6.79 6.79 0 00-4.894-11.496zM10.5 13.4a1.1 1.1 0 01.12 2.194l-.12.006-.949.001a5.772 5.772 0 01-1.777-2.2L10.5 13.4zm-9 0h1.79c.19.773.47 1.51.829 2.2H1.5a1.1 1.1 0 01-.12-2.194l.12-.006zm9-3.5a1.1 1.1 0 01.12 2.194l-.12.006H7.355a5.78 5.78 0 010-2.2H10.5zm-9 0h1.56a10.11 10.11 0 000 2.2H1.5a1.1 1.1 0 01-.12-2.194L1.5 9.9zm2.62-3.501a9.931 9.931 0 00-.83 2.2L1.5 8.6a1.1 1.1 0 01-.12-2.194L1.5 6.4l2.62-.001zm5.431 0l.949.001a1.1 1.1 0 01.12 2.194l-.12.006H7.774A5.772 5.772 0 019.55 6.398z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var SearchInTable = _react.default.forwardRef(function SearchInTable(props, ref) {
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

SearchInTable.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
SearchInTable.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

SearchInTable.name = SearchInTable.render.name || 'SearchInTable';
var _default = SearchInTable;
exports.default = _default;
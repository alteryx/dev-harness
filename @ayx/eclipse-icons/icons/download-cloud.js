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
  d: "M12.002 10.895c.615 0 1.113.498 1.113 1.11v6.203l2.057-2.052a1.114 1.114 0 011.574 0 1.109 1.109 0 010 1.57l-3.957 3.949-.026.025c-.01.01-.02.02-.032.028l.058-.053a1.121 1.121 0 01-.635.315 1.125 1.125 0 01-.873-.255 1.152 1.152 0 01-.066-.06L7.26 17.726a1.109 1.109 0 010-1.57 1.114 1.114 0 011.574 0l2.056 2.052v-6.202c0-.613.499-1.11 1.113-1.11zM10.06 2.06a9.023 9.023 0 017.452 5.875h.425a6.057 6.057 0 015.78 4.22 6.039 6.039 0 01-2.29 6.772 1.114 1.114 0 01-1.55-.27 1.109 1.109 0 01.27-1.547 3.82 3.82 0 001.449-4.284 3.832 3.832 0 00-3.658-2.67h-1.246c-.508 0-.952-.343-1.078-.834a6.796 6.796 0 00-5.809-5.055A6.804 6.804 0 002.996 7.87a6.775 6.775 0 00.937 7.635c.408.459.365 1.16-.095 1.567a1.114 1.114 0 01-1.571-.096A8.992 8.992 0 011.022 6.844a9.03 9.03 0 019.037-4.785z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var DownloadCloud = _react.default.forwardRef(function DownloadCloud(props, ref) {
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

DownloadCloud.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
DownloadCloud.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

DownloadCloud.name = DownloadCloud.render.name || 'DownloadCloud';
var _default = DownloadCloud;
exports.default = _default;
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
  d: "M1.9.326L23.675 22.1a1.113 1.113 0 01-1.575 1.575l-5.349-5.35a3.093 3.093 0 01-2.77 1.717H3.092A3.093 3.093 0 010 16.948V7.052a3.094 3.094 0 012.452-3.027L.326 1.901A1.113 1.113 0 111.901.326zM13.98 3.96a3.093 3.093 0 013.092 3.093v2.831l5.162-3.734A1.113 1.113 0 0124 7.052v9.896a1.113 1.113 0 01-2.227 0V9.231l-4.172 3.018a1.113 1.113 0 01-1.44-.115l-.99-.99a1.113 1.113 0 01-.326-.787V7.052a.866.866 0 00-.866-.866h-3.305a1.113 1.113 0 010-2.227h3.305zM4.61 6.185H3.093a.866.866 0 00-.866.867v9.896c0 .479.388.866.866.866h10.886a.866.866 0 00.866-.866v-.529L4.611 6.185z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var VideoOff = _react.default.forwardRef(function VideoOff(props, ref) {
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

VideoOff.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
VideoOff.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

VideoOff.name = VideoOff.render.name || 'VideoOff';
var _default = VideoOff;
exports.default = _default;
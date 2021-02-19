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
  d: "M11.502 1c5.8 0 10.503 4.702 10.503 10.502 0 1.664-.389 3.273-1.118 4.72l-.106.2 1.11 1.11a2.1 2.1 0 01.117 2.843l-.117.126-1.385 1.385a2.1 2.1 0 01-2.97 0l-1.109-1.108-.2.106a10.453 10.453 0 01-4.341 1.114l-.384.007C5.702 22.005 1 17.303 1 11.502 1 5.702 5.702 1 11.502 1zm0 2.2a8.302 8.302 0 100 16.605 8.257 8.257 0 004.506-1.328 1.1 1.1 0 011.375.146l1.637 1.636 1.244-1.243-1.638-1.638a1.1 1.1 0 01-.209-1.263l.063-.112a8.257 8.257 0 001.325-4.5A8.302 8.302 0 0011.502 3.2zm3.17 3.534l.115.036c.53.2.817.765.68 1.302l-.037.115-3 8c-.352.94-1.652.942-2.035.061l-.045-.12-2.5-8a1.1 1.1 0 012.058-.768l.042.112 1.544 4.943 1.876-5a1.1 1.1 0 011.302-.68z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var QlikView = _react.default.forwardRef(function QlikView(props, ref) {
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

QlikView.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
QlikView.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

QlikView.name = QlikView.render.name || 'QlikView';
var _default = QlikView;
exports.default = _default;
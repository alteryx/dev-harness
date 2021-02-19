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
  d: "M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zM9.29 16.283L6.63 18.942A8.737 8.737 0 0012 20.775a8.737 8.737 0 005.369-1.833l-2.659-2.66a5.044 5.044 0 01-2.71.785 5.044 5.044 0 01-2.71-.784zm9.652-9.651l-1.73 1.728-.93.93c.498.784.785 1.713.785 2.71 0 .997-.287 1.926-.784 2.71l2.659 2.659A8.737 8.737 0 0020.775 12a8.737 8.737 0 00-1.833-5.368zM3.225 12c0 2.022.684 3.885 1.833 5.369l2.66-2.659A5.044 5.044 0 016.932 12c0-.997.287-1.926.784-2.71L5.058 6.63A8.737 8.737 0 003.225 12zM12 9.157a2.843 2.843 0 100 5.686 2.843 2.843 0 000-5.686zm0-5.932a8.737 8.737 0 00-5.369 1.833l2.659 2.66A5.044 5.044 0 0112 6.932c.997 0 1.926.287 2.71.784l2.658-2.66A8.737 8.737 0 0012 3.226z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var LifeBuoy = _react.default.forwardRef(function LifeBuoy(props, ref) {
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

LifeBuoy.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
LifeBuoy.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

LifeBuoy.name = LifeBuoy.render.name || 'LifeBuoy';
var _default = LifeBuoy;
exports.default = _default;
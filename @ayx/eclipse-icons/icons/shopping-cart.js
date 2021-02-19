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
  d: "M9.03 23a2.103 2.103 0 110-4.205 2.103 2.103 0 010 4.205zm10.887 0a2.103 2.103 0 110-4.205 2.103 2.103 0 010 4.205zM4.16 2.226H1.113a1.113 1.113 0 110-2.226h3.96c.53 0 .987.374 1.09.894l.812 4.052h15.911c.699 0 1.225.636 1.094 1.322l-1.585 8.308a3.087 3.087 0 01-3.072 2.489H9.725a3.092 3.092 0 01-3.092-2.488L4.98 6.323a1.107 1.107 0 01-.018-.09l-.803-4.007zm3.262 4.946l1.395 6.97a.872.872 0 00.888.697h9.64a.864.864 0 00.865-.689l1.331-6.978H7.42z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var ShoppingCart = _react.default.forwardRef(function ShoppingCart(props, ref) {
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

ShoppingCart.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
ShoppingCart.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

ShoppingCart.name = ShoppingCart.render.name || 'ShoppingCart';
var _default = ShoppingCart;
exports.default = _default;
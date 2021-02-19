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
  d: "M17.926 2A4.074 4.074 0 0122 6.074v11.852A4.074 4.074 0 0117.926 22H6.074A4.074 4.074 0 012 17.926V6.074A4.074 4.074 0 016.074 2h11.852zm0 2.222H6.074c-1.023 0-1.852.83-1.852 1.852v11.852c0 1.023.83 1.852 1.852 1.852h11.852c1.023 0 1.852-.83 1.852-1.852V6.074c0-1.023-.83-1.852-1.852-1.852zM12 6.444c2.002 0 3.734.956 5.188 2.507.841.897 1.418 1.79 1.732 2.417.156.313.156.681 0 .994-.314.627-.89 1.52-1.732 2.418-1.454 1.55-3.186 2.506-5.188 2.506s-3.734-.955-5.188-2.506c-.841-.898-1.418-1.791-1.732-2.418a1.111 1.111 0 010-.994c.314-.626.89-1.52 1.732-2.417C8.266 7.4 9.998 6.444 12 6.444zm0 2.223c-1.297 0-2.495.66-3.567 1.803a9.407 9.407 0 00-1.075 1.395l.045.07c.292.453.637.906 1.03 1.325 1.072 1.143 2.27 1.804 3.567 1.804 1.297 0 2.495-.66 3.567-1.804.393-.419.738-.872 1.03-1.324l.045-.07c-.014-.024-.03-.047-.045-.071a9.407 9.407 0 00-1.03-1.325C14.495 9.328 13.297 8.667 12 8.667zm0 1.582a1.616 1.616 0 110 3.232 1.616 1.616 0 010-3.232z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var EyeSquare = _react.default.forwardRef(function EyeSquare(props, ref) {
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

EyeSquare.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
EyeSquare.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

EyeSquare.name = EyeSquare.render.name || 'EyeSquare';
var _default = EyeSquare;
exports.default = _default;
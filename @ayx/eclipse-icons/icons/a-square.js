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
  d: "M17.926 2A4.074 4.074 0 0122 6.074v11.852A4.074 4.074 0 0117.926 22H6.074A4.074 4.074 0 012 17.926V6.074A4.074 4.074 0 016.074 2h11.852zm0 2.222H6.074c-1.023 0-1.852.83-1.852 1.852v11.852c0 1.023.83 1.852 1.852 1.852h11.852c1.023 0 1.852-.83 1.852-1.852V6.074c0-1.023-.83-1.852-1.852-1.852z"
});

var _ref2 = _react.default.createElement("path", {
  d: "M12.041 5.4l.02.001a1.091 1.091 0 01.355.08l.014.007c.027.011.053.023.079.037l-.093-.043a1.11 1.11 0 01.533.46c.026.045.049.092.07.142l-.037-.08.022.046.014.034 4.5 11 .04.113a1.1 1.1 0 01-2.076.72l-.948-2.32-.034.003h-5l-.034-.002-.948 2.318a1.1 1.1 0 01-2.076-.72l.04-.112 4.5-11 .009-.021c.01-.025.022-.049.034-.072l-.043.093a1.11 1.11 0 01.476-.541c.04-.023.082-.043.126-.061l-.093.043c.023-.012.047-.024.072-.034l.02-.01A1.121 1.121 0 0112 5.4h.041zM12 9.404L10.365 13.4h3.27L12 9.404z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var ASquare = _react.default.forwardRef(function ASquare(props, ref) {
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
  }), _ref, _ref2);
});

ASquare.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
ASquare.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

ASquare.name = ASquare.render.name || 'ASquare';
var _default = ASquare;
exports.default = _default;
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
  d: "M15.866 1.323l2.85 2.897.068.075.074.101.084.156.044.118.04.176.01.154-.005.106-.024.147-.033.112-.042.105-.089.155-.127.155-2.85 2.897c-.427.43-1.12.43-1.546 0a1.11 1.11 0 010-1.56l.985-1.014.001-.046A1.1 1.1 0 0115 6.1c-2.364 0-3.313.572-4.755 2.467l-.627.835a12.77 12.77 0 01-1.328 1.495l10.977-.002-.983-1.011a1.11 1.11 0 010-1.56 1.086 1.086 0 011.546 0l2.85 2.896.068.075.074.101.084.156.044.118.04.176L23 12l-.005.106-.024.147-.032.112-.043.105-.088.155-.128.155-2.85 2.897c-.427.43-1.119.43-1.546 0a1.11 1.11 0 010-1.56l.985-1.014H8.29c.454.429.89.925 1.33 1.495l.464.62C11.619 17.284 12.549 17.9 15 17.9a1.1 1.1 0 01.304.043v-.048l-.984-1.011a1.11 1.11 0 010-1.56 1.086 1.086 0 011.546 0l2.85 2.896.068.075.074.101.084.156.044.118.04.176.01.154-.005.106-.024.147-.033.112-.042.105-.089.155-.127.155-2.85 2.897c-.427.43-1.12.43-1.546 0a1.11 1.11 0 010-1.56l.985-1.014.001-.046A1.1 1.1 0 0115 20.1c-3.158 0-4.672-.935-6.5-3.326l-.46-.617c-1.567-2.096-2.798-2.914-5.626-3.043l-.511-.018-.108-.015-.116-.028-.11-.04-.066-.032-.088-.05-.06-.04-.086-.07-.116-.119-.07-.093-.032-.053L1 12.46l-.036-.087-.04-.135-.018-.114-.007-.125.004-.096.015-.108.028-.116.04-.11.032-.066.048-.086.042-.062.07-.086.119-.116.093-.07.053-.032.096-.05.087-.036.135-.04.114-.018.24-.01c2.94-.083 4.217-.833 5.763-2.842l.16-.212.462-.617C10.328 4.835 11.84 3.9 15 3.9a1.1 1.1 0 01.304.043v-.048l-.984-1.011a1.11 1.11 0 010-1.56 1.086 1.086 0 011.546 0z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var ArrowSplit = _react.default.forwardRef(function ArrowSplit(props, ref) {
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

ArrowSplit.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
ArrowSplit.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

ArrowSplit.name = ArrowSplit.render.name || 'ArrowSplit';
var _default = ArrowSplit;
exports.default = _default;
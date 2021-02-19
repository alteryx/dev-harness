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
  d: "M20.907 3A3.088 3.088 0 0124 6.082v11.836A3.088 3.088 0 0120.907 21H8.041c-.32 0-.626-.138-.838-.379l-6.928-7.89a1.107 1.107 0 010-1.462l6.928-7.89c.212-.24.517-.379.838-.379h12.866zm0 2.22H8.547L2.592 12l5.953 6.78h12.361a.865.865 0 00.866-.862V6.082a.865.865 0 00-.866-.863zm-2.182 3.036a1.107 1.107 0 010 1.57L16.543 12l2.182 2.174a1.107 1.107 0 010 1.57 1.116 1.116 0 01-1.574 0l-2.182-2.175-2.182 2.175a1.116 1.116 0 01-1.574 0 1.107 1.107 0 010-1.57L13.394 12l-2.181-2.174a1.107 1.107 0 010-1.57 1.116 1.116 0 011.574 0l2.182 2.174 2.182-2.174a1.116 1.116 0 011.574 0z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Delete = _react.default.forwardRef(function Delete(props, ref) {
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

Delete.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Delete.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Delete.name = Delete.render.name || 'Delete';
var _default = Delete;
exports.default = _default;
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
  d: "M9.034 2c.372 0 .719.186.925.495l1.648 2.468h8.303A3.088 3.088 0 0123 8.049v10.865A3.088 3.088 0 0119.91 22H4.09A3.088 3.088 0 011 18.914V5.086A3.088 3.088 0 014.09 2h4.944zm-.596 2.222H4.09a.865.865 0 00-.865.864v13.828c0 .477.387.864.865.864h15.82a.865.865 0 00.865-.864V8.049a.865.865 0 00-.865-.864h-8.899c-.372 0-.719-.185-.925-.495L8.438 4.222zm7.014 7.332c.435.434.384 1.188-.112 1.684l-2.397 2.395a1.437 1.437 0 01-.319.24c-.177.116-.388.17-.604.167a1.064 1.064 0 01-.604-.167 1.437 1.437 0 01-.319-.24L8.7 13.238c-.496-.496-.547-1.25-.112-1.684.434-.433 1.189-.383 1.685.113l1.747 1.745 1.747-1.745c.496-.496 1.25-.546 1.685-.113z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var FolderArrowDown = _react.default.forwardRef(function FolderArrowDown(props, ref) {
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

FolderArrowDown.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
FolderArrowDown.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

FolderArrowDown.name = FolderArrowDown.render.name || 'FolderArrowDown';
var _default = FolderArrowDown;
exports.default = _default;
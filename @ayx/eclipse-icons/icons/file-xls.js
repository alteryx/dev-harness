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
  d: "M14.215 1c.38 0 .743.157 1.01.437l6.357 6.645c.268.28.418.66.418 1.056v10.97c0 1.392-.91 2.56-2.143 2.892V10.163h-4.055c-1.74 0-2.5-.78-2.5-2.612V3.239H7.714c-.394 0-.714.334-.714.747v9.554H4.857V3.986C4.857 2.336 6.137 1 7.714 1h6.501zm1.154 15.526c.445 0 .85.086 1.212.26.363.172.649.417.858.734.208.316.312.678.312 1.084v.044c0 .114-.054.17-.162.17h-1.26c-.109 0-.163-.023-.163-.071v-.072c0-.179-.077-.342-.232-.488-.154-.146-.363-.22-.625-.22-.183 0-.328.04-.433.117a.378.378 0 00-.159.323c0 .107.039.198.116.273.077.074.196.146.356.215.16.068.405.156.737.264.045.018.247.082.604.193.357.11.656.31.896.6s.36.64.36 1.052c0 .388-.097.729-.292 1.021a1.882 1.882 0 01-.818.676 2.927 2.927 0 01-1.213.238c-.463 0-.872-.082-1.226-.247a1.893 1.893 0 01-.823-.703 1.922 1.922 0 01-.291-1.057v-.09c0-.113.054-.17.163-.17h1.26c.108 0 .163.03.163.09v.099c0 .161.082.307.248.439a.976.976 0 00.626.197c.211 0 .363-.047.454-.14a.43.43 0 00.137-.308.32.32 0 00-.171-.296c-.114-.065-.323-.146-.626-.242l-.248-.071c-.566-.18-1.04-.418-1.423-.717-.383-.298-.575-.731-.575-1.299 0-.376.098-.709.292-.998.194-.29.461-.512.801-.668.34-.155.722-.232 1.145-.232zm-11.826.071c.086 0 .148.042.188.126l.815 1.63c.011.024.025.036.043.036.017 0 .031-.012.042-.036l.815-1.63c.04-.084.103-.126.188-.126h1.397c.092 0 .138.036.138.108a.23.23 0 01-.026.098l-1.517 2.884a.084.084 0 000 .09l1.517 2.884a.23.23 0 01.026.099c0 .071-.046.107-.138.107H5.643c-.086 0-.149-.042-.189-.125l-.823-1.63c-.011-.024-.025-.036-.042-.036-.018 0-.032.012-.043.036l-.823 1.63c-.04.083-.103.125-.189.125H2.137c-.091 0-.137-.036-.137-.107a.23.23 0 01.026-.099l1.525-2.884a.084.084 0 000-.09l-1.525-2.884A.23.23 0 012 16.705c0-.072.046-.108.137-.108h1.406zm5.934 0c.109 0 .163.057.163.17v4.586c0 .048.023.072.069.072h2.588c.109 0 .163.057.163.17v1.102c0 .113-.054.17-.163.17H8.191c-.108 0-.162-.057-.162-.17v-5.93c0-.113.054-.17.162-.17h1.286zm5.968-11.763v2.717c0 .206.16.373.357.373h2.599l-2.956-3.09z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var FileXls = _react.default.forwardRef(function FileXls(props, ref) {
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

FileXls.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
FileXls.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

FileXls.name = FileXls.render.name || 'FileXls';
var _default = FileXls;
exports.default = _default;
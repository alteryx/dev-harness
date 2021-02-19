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
  d: "M14.215 1c.38 0 .743.157 1.01.437l6.357 6.645c.268.28.418.66.418 1.056v10.97c0 1.391-.91 2.56-2.142 2.892V10.163h-4.056c-1.74 0-2.5-.78-2.5-2.612V3.239H7.714c-.394 0-.714.334-.714.747v9.554H4.856V3.986C4.857 2.336 6.137 1 7.714 1h6.501zm-9.85 15.526c.47 0 .882.09 1.24.269.356.179.634.431.83.756.198.326.296.704.296 1.134 0 .053-.051.086-.154.098l-1.286.09H5.25c-.086 0-.129-.015-.129-.045v-.054c0-.245-.069-.44-.206-.587a.716.716 0 00-.548-.22.716.716 0 00-.549.22c-.137.147-.206.342-.206.587V20.7c0 .239.069.431.206.578.137.146.32.22.549.22a.716.716 0 00.548-.22c.137-.147.206-.34.206-.578 0-.03.016-.055.047-.076a.182.182 0 01.124-.023l1.286.072c.103.006.154.02.154.045v.045c0 .43-.098.809-.295 1.137a2.012 2.012 0 01-.832.766c-.357.182-.77.273-1.238.273-.469 0-.882-.095-1.239-.286a2.04 2.04 0 01-.831-.811A2.427 2.427 0 012 20.628v-1.81c0-.453.099-.853.296-1.2.197-.346.474-.614.831-.806.357-.19.77-.286 1.239-.286zm5.28 0c.446 0 .85.086 1.214.26.362.173.648.418.857.734.208.317.313.678.313 1.084v.045c0 .113-.055.17-.163.17h-1.26c-.109 0-.163-.024-.163-.072v-.071c0-.18-.077-.342-.232-.489-.154-.146-.362-.22-.625-.22-.183 0-.327.04-.433.117a.378.378 0 00-.159.323c0 .107.039.198.116.273.077.075.196.146.356.215.16.069.405.157.737.264.046.018.247.082.604.193.357.11.656.31.896.6s.36.64.36 1.052c0 .389-.097.729-.292 1.022a1.882 1.882 0 01-.818.676 2.927 2.927 0 01-1.213.237c-.463 0-.871-.082-1.226-.246a1.893 1.893 0 01-.823-.703 1.922 1.922 0 01-.291-1.057v-.09c0-.113.054-.17.163-.17h1.26c.108 0 .163.03.163.09v.098c0 .161.083.308.248.439a.976.976 0 00.626.197c.211 0 .363-.046.454-.139a.43.43 0 00.137-.309.32.32 0 00-.171-.295c-.114-.066-.323-.147-.626-.242l-.248-.072c-.566-.179-1.04-.418-1.423-.716-.383-.299-.574-.732-.574-1.3 0-.375.097-.708.291-.998.194-.29.461-.512.801-.667.34-.156.722-.233 1.145-.233zm4.886.071c.098 0 .158.051.18.153l.832 3.672c.011.03.027.045.047.045s.033-.015.039-.045l.805-3.672c.017-.102.077-.153.18-.153h1.363c.057 0 .099.017.124.05.026.033.03.079.013.139l-1.688 5.938c-.029.096-.092.144-.189.144h-1.38c-.097 0-.16-.048-.188-.144l-1.672-5.938a.207.207 0 01-.008-.063c0-.084.048-.126.145-.126h1.397zm.914-11.763v2.717c0 .206.16.373.357.373h2.599l-2.956-3.09z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var FileCsv = _react.default.forwardRef(function FileCsv(props, ref) {
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

FileCsv.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
FileCsv.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

FileCsv.name = FileCsv.render.name || 'FileCsv';
var _default = FileCsv;
exports.default = _default;
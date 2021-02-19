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
  d: "M17.263 5.626c.127.122.399.451.605.72l.37.496.361.089c.47.117 1.271.539 1.66.882.32.275 2.256 2.526 2.706 3.139.136.191.366.588.502.887 1.078 2.295.483 5.046-1.44 6.67-.492.412-1.346.858-1.983 1.04-.418.112-.558.127-1.266.132-.67 0-.863-.015-1.21-.108a5.355 5.355 0 01-2.912-1.927c-.356-.471-.825-1.408-.942-1.908-.047-.177-.09-.348-.099-.387-.014-.04-.098.03-.234.186-.474.554-1.28.78-1.937.544a1.897 1.897 0 01-.862-.588c-.16-.196-.22-.206-.22-.044 0 .142-.24.833-.413 1.196-.54 1.128-1.304 1.927-2.378 2.482-.844.436-1.308.549-2.274.554-1.031.005-1.59-.128-2.457-.589C.852 18.028-.302 15.64.07 13.355a5.648 5.648 0 01.872-2.251c.328-.5 2.452-2.992 2.809-3.296.384-.328 1.214-.765 1.669-.877l.347-.089.37-.495c.61-.814 1.004-1.133 1.576-1.28.131-.034.356-.064.5-.064 1.032-.014 1.952.726 2.219 1.785.098.407.089.711-.052 1.388l-.122.589.183.328.178.329.094-.142c.052-.074.178-.226.277-.329.624-.642 1.73-.52 2.232.24l.15.23.188-.323.183-.324-.122-.588a5.891 5.891 0 01-.118-.849c0-.343.113-.77.29-1.123.17-.338.634-.809.948-.966.858-.436 1.843-.29 2.523.378zm-12.65 6.006a2.99 2.99 0 00-2.334 2.172c-.105.378-.105 1.105-.003 1.48.276 1.02 1.04 1.797 2.07 2.113.23.07.319.086.66.088h.14c.46 0 .539-.01.806-.091a3.025 3.025 0 002.063-2.11c.092-.348.102-1.072.016-1.408a2.995 2.995 0 00-2.155-2.198 3.551 3.551 0 00-1.264-.046zm13.714 0a2.99 2.99 0 00-2.333 2.172c-.105.378-.105 1.105-.003 1.48.276 1.02 1.04 1.797 2.07 2.113.23.07.319.086.66.088h.14c.46 0 .539-.01.805-.091a3.025 3.025 0 002.064-2.11c.092-.348.102-1.072.016-1.408a2.995 2.995 0 00-2.155-2.198 3.551 3.551 0 00-1.264-.046zm-6.984 1.162c-.293.296-.369.608-.24.988.067.196.283.444.471.544.34.172.82.088 1.1-.2.477-.484.333-1.244-.288-1.532-.376-.176-.744-.104-1.043.2z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Browse = _react.default.forwardRef(function Browse(props, ref) {
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

Browse.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Browse.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Browse.name = Browse.render.name || 'Browse';
var _default = Browse;
exports.default = _default;
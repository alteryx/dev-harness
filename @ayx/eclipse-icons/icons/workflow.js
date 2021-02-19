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
  d: "M16.533 2.065a2.1 2.1 0 012.97 0l2.467 2.468a2.1 2.1 0 010 2.97L19.503 9.97c-.13.13-.273.239-.424.328v3.6a4.396 4.396 0 01-1.1 8.65 4.394 4.394 0 01-1.1-8.65l-.001-3.649a2.108 2.108 0 01-.345-.279l-2.468-2.468c-.13-.13-.239-.272-.327-.423h-3.68a4.401 4.401 0 01-3.154 3.154l-.001 3.892h.829a2.1 2.1 0 012.094 1.95l.006.15v3.856a2.1 2.1 0 01-2.1 2.1H3.876a2.1 2.1 0 01-2.1-2.1v-3.855c0-1.16.94-2.1 2.1-2.1l.827-.001v-3.892a4.396 4.396 0 01-3.288-4.042L1.41 5.98a4.394 4.394 0 018.649-1.101h3.727c.079-.122.172-.238.28-.345zm1.446 13.895a2.194 2.194 0 100 4.387 2.194 2.194 0 000-4.387zm-10.348.365H3.975v3.656h3.656v-3.656zM18.018 3.69l-2.326 2.326 2.326 2.326 2.326-2.327-2.326-2.325zm-12.214.094a2.194 2.194 0 100 4.387 2.194 2.194 0 000-4.387z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Workflow = _react.default.forwardRef(function Workflow(props, ref) {
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

Workflow.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Workflow.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Workflow.name = Workflow.render.name || 'Workflow';
var _default = Workflow;
exports.default = _default;
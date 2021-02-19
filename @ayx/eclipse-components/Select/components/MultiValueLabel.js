"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Typography = _interopRequireDefault(require("../../Typography"));

var MultiValueLabel = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var data = props.data,
      selectProps = props.selectProps;
  var classes = selectProps.classes;
  var primary = data.primary;
  return /*#__PURE__*/_react.default.createElement(_Typography.default, {
    className: classes.multiValueLabel,
    ref: ref
  }, primary);
});

MultiValueLabel.propTypes = process.env.NODE_ENV !== "production" ? {
  data: _propTypes.default.shape({
    label: _propTypes.default.string,
    value: _propTypes.default.any
  }).isRequired
} : {};
var _default = MultiValueLabel;
exports.default = _default;
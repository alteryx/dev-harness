"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactSelect = require("react-select");

var _Typography = _interopRequireDefault(require("../../Typography"));

var SingleValue = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var data = _ref.data,
      selectProps = _ref.selectProps,
      props = (0, _objectWithoutProperties2.default)(_ref, ["data", "selectProps"]);
  var primary = data.primary;
  var classes = selectProps.classes,
      isDisabled = selectProps.isDisabled;
  return /*#__PURE__*/_react.default.createElement(_reactSelect.components.SingleValue, props, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    className: (0, _classnames.default)(classes.singleValue, (0, _defineProperty2.default)({}, classes.disabled, isDisabled)),
    innerRef: ref
  }, primary));
});

SingleValue.propTypes = process.env.NODE_ENV !== "production" ? {
  data: _propTypes.default.shape({
    label: _propTypes.default.string,
    value: _propTypes.default.any
  }).isRequired
} : {};
var _default = SingleValue;
exports.default = _default;
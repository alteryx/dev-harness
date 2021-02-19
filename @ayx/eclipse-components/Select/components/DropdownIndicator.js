"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _chevronDown = _interopRequireDefault(require("@ayx/eclipse-icons/icons/chevron-down"));

var DropdownIndicator = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var innerProps = _ref.innerProps,
      selectProps = _ref.selectProps;
  var classes = selectProps.classes,
      isDisabled = selectProps.isDisabled;
  return /*#__PURE__*/_react.default.createElement(_chevronDown.default, (0, _extends2.default)({
    className: (0, _classnames.default)(classes.indicator, (0, _defineProperty2.default)({}, classes.disabled, isDisabled)),
    ref: ref
  }, innerProps, {
    size: "small"
  }));
});

DropdownIndicator.propTypes = process.env.NODE_ENV !== "production" ? {
  innerProps: _propTypes.default.shape({}).isRequired
} : {};
var _default = DropdownIndicator;
exports.default = _default;
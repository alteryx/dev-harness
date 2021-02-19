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

var _InputBase = _interopRequireDefault(require("../../InputBase"));

var _utils = require("../../utils");

var Input = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var isDisabled = _ref.isDisabled,
      selectProps = _ref.selectProps,
      innerRef = _ref.innerRef,
      props = (0, _objectWithoutProperties2.default)(_ref, ["isDisabled", "selectProps", "innerRef"]);
  var InputProps = selectProps.InputProps,
      classes = selectProps.classes,
      activeDescendantId = selectProps.activeDescendantId;
  var disallowedProps = ['cx', 'getStyles', 'isHidden', 'theme'];
  return /*#__PURE__*/_react.default.createElement(_InputBase.default, {
    className: classes.input,
    disabled: isDisabled,
    inputProps: (0, _extends2.default)({
      className: classes.input
    }, (0, _utils.filterProps)(props, disallowedProps), InputProps, {
      'aria-activedescendant': activeDescendantId
    }),
    inputRef: innerRef,
    ref: ref
  });
});

Input.propTypes = process.env.NODE_ENV !== "production" ? {
  innerRef: _propTypes.default.func.isRequired,
  isDisabled: _propTypes.default.bool.isRequired,
  isHidden: _propTypes.default.bool.isRequired,
  selectProps: _propTypes.default.shape({
    InputProps: _propTypes.default.shape({}),
    classes: _propTypes.default.shape({
      input: _propTypes.default.string
    }),
    activeDescendantId: _propTypes.default.string
  }).isRequired
} : {};
Input.defaultProps = {};
var _default = Input;
exports.default = _default;
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

var _classnames2 = _interopRequireDefault(require("classnames"));

var _styles = require("../../styles");

var Control = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var _classnames;

  var children = _ref.children,
      innerProps = _ref.innerProps,
      isFocused = _ref.isFocused,
      isDisabled = _ref.isDisabled,
      menuIsOpen = _ref.menuIsOpen,
      selectProps = _ref.selectProps;
  var error = selectProps.error,
      classes = selectProps.classes,
      _onClick = selectProps.onClick;
  var controlClasses = (0, _classnames2.default)('ayx-select-control', classes.control, (_classnames = {}, (0, _defineProperty2.default)(_classnames, classes.controlDisable, isDisabled), (0, _defineProperty2.default)(_classnames, classes.controlError, error), (0, _defineProperty2.default)(_classnames, classes.controlFocus, isFocused), (0, _defineProperty2.default)(_classnames, classes.menuOpenControl, menuIsOpen), _classnames));
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: controlClasses,
    onClick: function onClick(e) {
      e.stopPropagation();
      if (typeof _onClick === 'function') _onClick();
      e.preventDefault();
    },
    ref: ref,
    role: "button"
  }, innerProps), children);
});

Control.propTypes = process.env.NODE_ENV !== "production" ? {
  innerProps: _propTypes.default.shape({}).isRequired,
  isDisabled: _propTypes.default.bool.isRequired,
  isFocused: _propTypes.default.bool.isRequired,
  menuIsOpen: _propTypes.default.bool.isRequired,
  selectProps: _propTypes.default.shape({})
} : {};
Control.defaultProps = {
  selectProps: {}
}; // Keeping withStyles due to functionality being lost without it.

var _default = (0, _styles.withStyles)({})(Control);

exports.default = _default;
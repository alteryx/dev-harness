"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var IndicatorsContainer = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      selectProps = _ref.selectProps;
  var classes = selectProps.classes;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.indicatorsContainer,
    ref: ref
  }, children);
});

var _default = IndicatorsContainer;
exports.default = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _CircularProgress = _interopRequireDefault(require("../../CircularProgress"));

var LoadingIndicator = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var innerProps = _ref.innerProps,
      selectProps = _ref.selectProps;
  var classes = selectProps.classes;
  return /*#__PURE__*/_react.default.createElement(_CircularProgress.default, (0, _extends2.default)({
    className: classes.loadingIndicator,
    ref: ref
  }, innerProps));
});

LoadingIndicator.propTypes = process.env.NODE_ENV !== "production" ? {
  innerProps: _propTypes.default.shape({}).isRequired
} : {};
var _default = LoadingIndicator;
exports.default = _default;
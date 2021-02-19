"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styles = require("../../styles");

var _xSmall = _interopRequireDefault(require("@ayx/eclipse-icons/icons/x-small"));

var useStyles = (0, _styles.makeStyles)(function () {
  return {
    noPadding: {
      padding: '0 !important'
    }
  };
});

var ClearIndicator = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var innerProps = _ref.innerProps,
      selectProps = _ref.selectProps;
  var classes = selectProps.classes;
  var clearClass = useStyles();
  return /*#__PURE__*/_react.default.createElement(_xSmall.default, (0, _extends2.default)({
    className: (0, _clsx.default)(classes.indicator, clearClass.noPadding),
    ref: ref
  }, innerProps, {
    size: "small"
  }));
});

ClearIndicator.propTypes = process.env.NODE_ENV !== "production" ? {
  innerProps: _propTypes.default.shape({}).isRequired
} : {};
var _default = ClearIndicator;
exports.default = _default;
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

var _Avatar = _interopRequireDefault(require("@material-ui/core/Avatar"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("../styles");

var _theme = _interopRequireDefault(require("./theme"));

var Avatar = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var size = _ref.size,
      className = _ref.className,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["size", "className"]);
  var classes = rest.classes,
      finalRest = (0, _objectWithoutProperties2.default)(rest, ["classes"]);
  var xsmall = classes.xsmall,
      small = classes.small,
      medium = classes.medium,
      large = classes.large,
      xlarge = classes.xlarge,
      baseClasses = (0, _objectWithoutProperties2.default)(classes, ["xsmall", "small", "medium", "large", "xlarge"]);
  var classesObject = {
    xsmall: xsmall,
    small: small,
    medium: medium,
    large: large,
    xlarge: xlarge
  };
  var classSizes = classesObject[size] || medium;
  return /*#__PURE__*/_react.default.createElement(_Avatar.default, (0, _extends2.default)({
    classes: baseClasses,
    className: (0, _classnames.default)(className, classSizes),
    ref: ref
  }, finalRest));
});

Avatar.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes.default.string,
  size: _propTypes.default.string
} : {};
Avatar.defaultProps = {
  className: '',
  size: 'medium'
};

var _default = (0, _styles.withStyles)(_theme.default, {
  name: 'MuiAvatar'
})(Avatar);

exports.default = _default;
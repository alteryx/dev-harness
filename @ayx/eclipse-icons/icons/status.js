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
  d: "M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11a10.954 10.954 0 01-6.921-2.45 1.1 1.1 0 111.385-1.71l.269.21A8.755 8.755 0 0012 20.8a8.8 8.8 0 100-17.6A1.1 1.1 0 0112 1zM3.473 14.186c.187.73.466 1.43.83 2.084a1.1 1.1 0 01-1.922 1.07 10.936 10.936 0 01-1.04-2.61 1.1 1.1 0 012.132-.544zm-.718-5.903a1.1 1.1 0 01.765 1.355 8.758 8.758 0 00-.27 1.416 1.1 1.1 0 11-2.187-.234c.064-.601.177-1.193.338-1.771a1.1 1.1 0 011.354-.766zM5.45 4.496a1.1 1.1 0 01.066 1.554 8.85 8.85 0 00-.635.775A1.1 1.1 0 113.103 5.53c.246-.337.51-.66.793-.968a1.1 1.1 0 011.554-.066zm3.259-1.9a1.1 1.1 0 01-.515 1.467c-.131.063-.26.13-.388.198a1.1 1.1 0 01-1.05-1.933c.16-.086.321-.17.485-.248a1.1 1.1 0 011.468.515z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Status = _react.default.forwardRef(function Status(props, ref) {
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

Status.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Status.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Status.name = Status.render.name || 'Status';
var _default = Status;
exports.default = _default;
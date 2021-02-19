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
  d: "M13.977 22.823l-.24.04a10.981 10.981 0 01-1.449.133L12 23a10.954 10.954 0 01-6.921-2.45 1.1 1.1 0 111.385-1.71l.269.21A8.755 8.755 0 0012 20.8l.294-.005a8.92 8.92 0 00.293-.014l-.19.01c.099-.004.197-.01.295-.018l-.105.008c.113-.008.226-.017.338-.03l-.233.022c.096-.007.192-.016.287-.027l-.054.006a8.793 8.793 0 00.712-.104l-.066.012c.089-.016.177-.033.265-.052l-.199.04c.105-.02.209-.041.312-.065l-.113.025c.095-.02.19-.042.283-.065l-.17.04c.098-.022.195-.045.292-.07l-.122.03c.108-.026.214-.055.32-.085l-.198.054a8.732 8.732 0 00.542-.161l-.276.087a8.73 8.73 0 00.311-.099l-.035.012c.08-.027.162-.055.242-.085l-.207.073c.107-.036.213-.074.318-.114l-.111.041c.099-.036.197-.074.295-.114l-.184.073a8.74 8.74 0 00.252-.1l-.068.027c.094-.038.187-.078.28-.12l-.212.092a8.75 8.75 0 00.865-.418l-.12.065c.079-.042.156-.085.234-.129l-.114.064a8.798 8.798 0 00.684-.42l-.137.09c.08-.051.158-.104.235-.158l-.098.068c.085-.058.168-.117.25-.177l-.152.109c.07-.048.138-.097.205-.148l-.053.04c.08-.059.159-.119.236-.18l-.183.14c.076-.056.151-.114.225-.172l-.042.033c.073-.057.145-.116.216-.175l-.174.142a8.846 8.846 0 00.43-.364l-.1.088c.055-.048.11-.096.162-.145l-.063.057c.075-.067.148-.135.22-.205l-.157.148.191-.18-.034.032A8.767 8.767 0 0020.8 12a1.1 1.1 0 012.2.001c0 2.731-.996 5.23-2.644 7.154l-.019.022-.025.03c-.053.06-.105.12-.159.178l.184-.208a11.064 11.064 0 01-4.318 3.067 10.925 10.925 0 01-2.01.574l.13-.025-.162.03zM3.473 14.186c.187.73.466 1.43.83 2.084a1.1 1.1 0 01-1.922 1.07 10.936 10.936 0 01-1.04-2.61 1.1 1.1 0 012.132-.544zm-.718-5.903a1.1 1.1 0 01.765 1.355 8.758 8.758 0 00-.27 1.416 1.1 1.1 0 11-2.187-.234c.064-.601.177-1.193.338-1.771a1.1 1.1 0 011.354-.766zM5.45 4.496a1.1 1.1 0 01.066 1.554 8.85 8.85 0 00-.635.775A1.1 1.1 0 113.103 5.53c.246-.337.51-.66.793-.968a1.1 1.1 0 011.554-.066zm3.259-1.9a1.1 1.1 0 01-.515 1.467c-.131.063-.26.13-.388.198a1.1 1.1 0 01-1.05-1.933c.16-.086.321-.17.485-.248a1.1 1.1 0 011.468.515z"
});

var _ref2 = _react.default.createElement("path", {
  d: "M19.106 5.323a1.114 1.114 0 011.569 0 1.1 1.1 0 010 1.561l-8.85 8.793a1.114 1.114 0 01-1.569 0L6.325 11.77a1.1 1.1 0 010-1.56 1.114 1.114 0 011.57 0l3.146 3.124 8.065-8.012z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Jobs = _react.default.forwardRef(function Jobs(props, ref) {
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
  }), _ref, _ref2);
});

Jobs.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Jobs.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Jobs.name = Jobs.render.name || 'Jobs';
var _default = Jobs;
exports.default = _default;
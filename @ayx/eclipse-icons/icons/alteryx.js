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
  d: "M14.615 17.81v-4.916l-.156.005-.161.007-3.603.175c-2.611.17-3.386.91-3.432 3.312.042 2.084.803 2.85 2.894 2.898h.002c1.426 0 3.164-.558 4.328-1.392l.066-.041.062-.048zm6.562 1.18s.305 1.052.322 1.47c.023.475-.284.739-.719.952-.79.388-1.5.489-2.034.564a3.937 3.937 0 01-.439.024c-.59 0-1.052-.059-1.455-.175-.9-.237-1.556-.806-1.941-1.684l-.079-.183-.153.121C13.08 21.392 11.44 22 9.531 22h-.007c-1.662 0-3.043-.451-3.985-1.307C4.526 19.78 3.993 18.368 4 16.608c-.03-3.874 2.134-5.797 6.813-5.95l3.498-.09.145-.005V5.516s-.632-.521-2.27-.782c-.861-.13-1.597-.12-2.182-.111-.453.006-1.084.075-2.05.26-.375.067-.937.189-1.197.159-.324-.07-.502-.199-.671-.73 0 0-.259-.76-.267-.998.015-.457.484-.687.627-.735.499-.176 1.98-.432 2.528-.486C9.24 2.057 9.902 2 10.636 2c1.248 0 2.512.15 3.654.437l.07.022c.963.252 2.096.585 2.776 1 .035.019.061.046.087.067l.082.054c.223.182.374.481.398.783v12.994c.054.949.198 1.278 1.013 1.238.43-.032.74-.074 1.298-.213.127-.03.224-.037.33-.042.392 0 .718.248.833.65z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Alteryx = _react.default.forwardRef(function Alteryx(props, ref) {
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

Alteryx.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Alteryx.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Alteryx.name = Alteryx.render.name || 'Alteryx';
var _default = Alteryx;
exports.default = _default;
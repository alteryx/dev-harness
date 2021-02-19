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
  d: "M11.502 1c5.8 0 10.503 4.702 10.503 10.502 0 1.664-.389 3.273-1.118 4.72l-.106.2 1.11 1.11a2.1 2.1 0 01.117 2.843l-.117.126-1.385 1.385a2.1 2.1 0 01-2.97 0l-1.109-1.108-.2.106a10.453 10.453 0 01-4.341 1.114l-.384.007C5.702 22.005 1 17.303 1 11.502 1 5.702 5.702 1 11.502 1zm0 2.2a8.302 8.302 0 100 16.605 8.257 8.257 0 004.506-1.328 1.1 1.1 0 011.375.146l1.637 1.636 1.244-1.243-1.638-1.638a1.1 1.1 0 01-.209-1.263l.063-.112a8.257 8.257 0 001.325-4.5A8.302 8.302 0 0011.502 3.2zm-.038 3c.755 0 1.433.137 2.036.411.603.275 1.076.661 1.42 1.16.342.5.514 1.073.514 1.72 0 .608-.494 1.101-1.102 1.101h-.296a1 1 0 01-.992-.882l-.007-.117c0-.342-.152-.646-.456-.91-.303-.265-.71-.397-1.22-.397-.382 0-.681.078-.897.235a.77.77 0 00-.323.661.74.74 0 00.206.536c.137.142.35.275.64.397.288.122.732.281 1.33.477.686.235 1.22.441 1.602.617.383.177.743.463 1.081.86.338.396.507.918.507 1.564 0 .617-.161 1.158-.485 1.623-.323.466-.78.826-1.367 1.08-.588.255-1.265.382-2.03.382-.783 0-1.472-.13-2.065-.39-.593-.259-1.051-.63-1.375-1.116-.323-.484-.485-1.045-.485-1.682 0-.592.48-1.072 1.072-1.072h.126c.548 0 1.027.355 1.193.867l.032.12v.001c.106.396.256.669.451.819.319.245.728.367 1.228.367.431 0 .75-.093.956-.279.206-.186.309-.401.309-.646a.7.7 0 00-.36-.632c-.24-.147-.67-.318-1.287-.514l-.324-.103a11.583 11.583 0 01-1.646-.668 3.583 3.583 0 01-1.206-1c-.333-.425-.5-.952-.5-1.579 0-.607.16-1.138.478-1.593.319-.456.76-.806 1.323-1.05.564-.246 1.203-.368 1.919-.368z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var QlikSense = _react.default.forwardRef(function QlikSense(props, ref) {
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

QlikSense.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
QlikSense.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

QlikSense.name = QlikSense.render.name || 'QlikSense';
var _default = QlikSense;
exports.default = _default;
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

var _Chip = _interopRequireDefault(require("@material-ui/core/Chip"));

var _xSmall = _interopRequireDefault(require("@ayx/eclipse-icons/icons/x-small"));

var _utils = require("../utils");

var Chip = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var deleteIcon = _ref.deleteIcon,
      props = (0, _objectWithoutProperties2.default)(_ref, ["deleteIcon"]);
  // eslint-disable-next-line ui-core/no-empty-divs
  return /*#__PURE__*/_react.default.createElement(_Chip.default, (0, _extends2.default)({
    deleteIcon: /*#__PURE__*/_react.default.createElement("div", null, deleteIcon),
    ref: ref
  }, props));
});

Chip.defaultProps = {
  deleteIcon: /*#__PURE__*/_react.default.createElement(_xSmall.default, null)
};
Chip.propTypes = process.env.NODE_ENV !== "production" ? {
  deleteIcon: _propTypes.default.node
} : {};

var _default = (0, _utils.dataUICMaker)(Chip, 'Chip');

exports.default = _default;
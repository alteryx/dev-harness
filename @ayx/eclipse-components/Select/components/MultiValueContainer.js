"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _Chip = _interopRequireDefault(require("../../Chip"));

var _constants = require("../constants");

var MultiValueContainer = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var children = props.children,
      selectProps = props.selectProps;
  var classes = selectProps.classes,
      isDisabled = selectProps.isDisabled;
  var iconVisibility = selectProps && selectProps.iconVisibility;

  var _children = (0, _slicedToArray2.default)(children, 2),
      first = _children[0],
      second = _children[1];

  var onClick = second.props.innerProps.onClick;
  var data = first.props.data;
  var icon = data && data.icon;
  var iconShouldRender = typeof icon !== 'undefined' && (iconVisibility === _constants.iconVisibilityEnum.BOTH || iconVisibility === _constants.iconVisibilityEnum.CHIP);
  return /*#__PURE__*/_react.default.createElement(_Chip.default, {
    className: (0, _classnames2.default)(classes.multiValueContainer, (0, _defineProperty2.default)({}, classes.disabled, isDisabled)),
    icon: iconShouldRender ? icon : null,
    label: first,
    onDelete: onClick,
    ref: ref,
    size: "small"
  });
});

var _default = MultiValueContainer;
exports.default = _default;
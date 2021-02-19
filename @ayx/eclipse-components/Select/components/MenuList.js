"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _reactWindow = require("react-window");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("../../styles");

var _Divider = _interopRequireDefault(require("../../Divider"));

var _ListItem = _interopRequireDefault(require("../../ListItem"));

var _theme = _interopRequireDefault(require("../theme"));

/* eslint-disable react/no-multi-comp */

/* eslint-disable jsx-a11y/no-static-element-interactions */

/* eslint-disable jsx-a11y/click-events-have-key-events */
var NoResultsOption = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      style = _ref.style,
      selectProps = _ref.selectProps,
      innerProps = _ref.innerProps;
  var classes = selectProps.classes;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: style
  }, /*#__PURE__*/_react.default.createElement(_ListItem.default, (0, _extends2.default)({
    className: classes.noResultOption,
    ref: ref
  }, innerProps), children));
});

var _ref2 = /*#__PURE__*/_react.default.createElement(_Divider.default, null);

var MenuList = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var menuRef = /*#__PURE__*/_react.default.createRef();

  var options = props.options,
      children = props.children,
      getValue = props.getValue,
      inrRef = props.inrRef,
      selectProps = props.selectProps;

  var _getValue = getValue(),
      _getValue2 = (0, _slicedToArray2.default)(_getValue, 1),
      value = _getValue2[0];

  var actionOption = selectProps.actionOption,
      optionHeight = selectProps.optionHeight,
      classes = selectProps.classes;
  var initialOffset = options.indexOf(value) * optionHeight || 0;
  var maxHeight = optionHeight * children.length > optionHeight * 8 ? optionHeight * 8 : optionHeight * children.length || optionHeight;

  if (children.length > 0 && menuRef.current !== null) {
    var focusIndex = children.findIndex(function (c) {
      return c.props.isFocused;
    });
    menuRef.current.scrollToItem(focusIndex); // TODO: throws a render error when arrowing through options
  }

  var handleActionOptionClicked = function handleActionOptionClicked() {
    if (selectProps.closeMenuOnSelect === true) {
      selectProps.onMenuClose();
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    ref: inrRef
  }, actionOption === null ? undefined : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    onClick: handleActionOptionClicked,
    role: "button",
    tabIndex: "0"
  }, actionOption), _ref2), /*#__PURE__*/_react.default.createElement(_reactWindow.FixedSizeList, {
    height: maxHeight,
    initialScrollOffset: initialOffset,
    innerElementType: "ul",
    itemCount: children.length || 1,
    itemSize: optionHeight,
    overscanCount: 10,
    ref: menuRef
  }, function (_ref3) {
    var index = _ref3.index,
        style = _ref3.style;

    if (children.length === 0 || children.length === undefined) {
      return /*#__PURE__*/_react.default.createElement(NoResultsOption, (0, _extends2.default)({
        style: style
      }, props));
    }

    return /*#__PURE__*/_react.default.createElement("div", {
      className: classes.menuListItem,
      style: style
    }, children[index]);
  }));
});

MenuList.propTypes = process.env.NODE_ENV !== "production" ? {
  getValue: _propTypes.default.func.isRequired,
  inrRef: _propTypes.default.func.isRequired,
  maxHeight: _propTypes.default.number.isRequired,
  options: _propTypes.default.arrayOf(_propTypes.default.shape({})).isRequired,
  selectProps: _propTypes.default.shape({}).isRequired
} : {};
MenuList.defaultProps = {}; // ? Doing this because innerRef is stolen from us by withStyles.
// ? Would love to just get the ref out of innerProps, but it's not here

var StyledMenuList = (0, _styles.withStyles)(_theme.default.MuiAyxSelect)(MenuList);

var _default = function _default(_ref4) {
  var innerRef = _ref4.innerRef,
      props = (0, _objectWithoutProperties2.default)(_ref4, ["innerRef"]);
  return /*#__PURE__*/_react.default.createElement(StyledMenuList, (0, _extends2.default)({}, props, {
    inrRef: innerRef
  }));
};

exports.default = _default;
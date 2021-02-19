"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _reactSelect = require("react-select");

var _deepmerge = _interopRequireDefault(require("deepmerge"));

var _Paper = _interopRequireDefault(require("../../Paper"));

var _Popper = _interopRequireDefault(require("../../Popper"));

var Menu = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var children = props.children,
      innerProps = props.innerProps,
      selectProps = props.selectProps;
  var classes = selectProps.classes,
      defaultAnchorEl = selectProps.menuAnchorEl,
      menuPlacement = selectProps.menuPlacement,
      menuPortalTarget = selectProps.menuPortalTarget,
      _selectProps$PopperPr = selectProps.PopperProps,
      PopperProps = _selectProps$PopperPr === void 0 ? {} : _selectProps$PopperPr,
      styles = selectProps.styles;
  var menuPortal = styles.menuPortal;
  var userAnchorEl = PopperProps.anchorEl,
      userPopperProps = (0, _objectWithoutProperties2.default)(PopperProps, ["anchorEl"]);
  var defaultAnchorWidth = defaultAnchorEl ? defaultAnchorEl.clientWidth : null;
  var userAnchorWidth = userAnchorEl ? userAnchorEl.clientWidth : null;
  var anchorElWidth = userAnchorWidth || defaultAnchorWidth;

  var _menuPortal = menuPortal({}),
      zIndex = _menuPortal.zIndex;

  var defaultPopperProps = {
    open: true,
    placement: menuPlacement === 'auto' ? 'bottom' : menuPlacement,
    role: 'presentation',
    style: {
      width: anchorElWidth,
      zIndex: zIndex
    }
  };
  var mergedPopperProps = (0, _deepmerge.default)(defaultPopperProps, userPopperProps);

  var popperRef = _react.default.useRef(null);

  _react.default.useEffect(function () {
    if (popperRef.current) {
      popperRef.current.update();
    }
  });

  var renderPopper = function renderPopper() {
    if (typeof userAnchorEl === 'undefined' && defaultAnchorEl === null) return null;
    return /*#__PURE__*/_react.default.createElement(_Popper.default, (0, _extends2.default)({
      anchorEl: userAnchorEl || defaultAnchorEl
    }, mergedPopperProps, {
      popperRef: popperRef
    }), /*#__PURE__*/_react.default.createElement("div", {
      ref: ref
    }, /*#__PURE__*/_react.default.createElement(_Paper.default, (0, _extends2.default)({
      className: classes.menu,
      elevation: 3
    }, innerProps), children)));
  };

  return menuPortalTarget ? /*#__PURE__*/_react.default.createElement("div", {
    ref: ref
  }, /*#__PURE__*/_react.default.createElement(_reactSelect.components.Menu, props, /*#__PURE__*/_react.default.createElement(_Paper.default, {
    className: classes.menu,
    elevation: 3
  }, children))) : renderPopper();
});

Menu.propTypes = process.env.NODE_ENV !== "production" ? {
  innerProps: (0, _propTypes.shape)({}).isRequired,
  selectProps: (0, _propTypes.shape)({}).isRequired
} : {};
var _default = Menu;
exports.default = _default;
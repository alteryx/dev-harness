"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var ReactDOM = _interopRequireWildcard(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx3 = _interopRequireDefault(require("clsx"));

var _useForkRef = _interopRequireDefault(require("@material-ui/core/utils/useForkRef"));

var _createChainedFunction = _interopRequireDefault(require("@material-ui/core/utils/createChainedFunction"));

var _chevronRight = _interopRequireDefault(require("@ayx/eclipse-icons/icons/chevron-right"));

var _styles = require("../styles");

var _utils = require("../utils");

var _ListItem = _interopRequireDefault(require("../ListItem"));

/* eslint-disable complexity */
var RTL_ANCHOR_ORIGIN = {
  vertical: 'top',
  horizontal: 'left'
};
var LTR_ANCHOR_ORIGIN = {
  vertical: 'top',
  horizontal: 'right'
};
var RTL_TRANSFORM_ORIGIN = {
  vertical: 'top',
  horizontal: 'right'
};
var LTR_TRANSFORM_ORIGIN = {
  vertical: 'top',
  horizontal: 'left'
};

var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: (0, _extends3.default)({}, theme.typography.body1, (0, _defineProperty2.default)({
      minHeight: 48,
      paddingTop: 6,
      paddingBottom: 6,
      boxSizing: 'border-box',
      width: 'auto',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
    }, theme.breakpoints.up('sm'), {
      minHeight: 'auto'
    })),
    // TODO v5: remove

    /* Styles applied to the root element if `disableGutters={false}`. */
    gutters: {},

    /* Styles applied to the root element if `selected={true}`. */
    selected: {},

    /* Styles applied to the root element if dense. */
    dense: (0, _extends3.default)({}, theme.typography.body2, {
      minHeight: 'auto'
    }),

    /* Styles applied to a Menu Item's children when a subMenu is present */
    subMenuItemWrapper: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between'
    },

    /* Styles applied to the subMenuIcon when it is present */
    subMenuIcon: {
      marginLeft: theme.spacing(2),
      height: 14,
      width: 14,
      marginTop: theme.spacing(0.75),
      color: theme.palette.action.passive
    },

    /* Styles applied to subMenuIcon when dirction is 'rtl' */
    rtlSubMenuIcon: {
      transform: 'rotate(-180deg)'
    }
  };
};

exports.styles = styles;
var MenuItem = /*#__PURE__*/React.forwardRef(function MenuItem(props, ref) {
  var _clsx;

  var theme = (0, _styles.useTheme)();
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      component = _props$component === void 0 ? 'li' : _props$component,
      _props$disableGutters = props.disableGutters,
      disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters,
      handleArrowRightKeydown = props.handleArrowRightKeydown,
      key = props.key,
      ListItemClasses = props.ListItemClasses,
      _props$openSubMenu = props.openSubMenu,
      openSubMenu = _props$openSubMenu === void 0 ? false : _props$openSubMenu,
      onKeyDown = props.onKeyDown,
      _props$role = props.role,
      role = _props$role === void 0 ? 'menuitem' : _props$role,
      selected = props.selected,
      subMenu = props.subMenu,
      _props$subMenuIcon = props.subMenuIcon,
      SubMenuIcon = _props$subMenuIcon === void 0 ? _chevronRight.default : _props$subMenuIcon,
      setParentOpenSubMenuIndex = props.setParentOpenSubMenuIndex,
      tabIndexProp = props.tabIndex,
      handleParentClose = props.handleParentClose,
      other = (0, _objectWithoutProperties2.default)(props, ["children", "classes", "className", "component", "disableGutters", "handleArrowRightKeydown", "key", "ListItemClasses", "openSubMenu", "onKeyDown", "role", "selected", "subMenu", "subMenuIcon", "setParentOpenSubMenuIndex", "tabIndex", "handleParentClose"]);
  var listItemRef = React.useRef(null);
  var handleOwnRef = React.useCallback(function (instance) {
    // #StrictMode ready
    // eslint-disable-next-line react/no-find-dom-node
    listItemRef.current = ReactDOM.findDOMNode(instance);
  }, []);
  var handleRef = (0, _useForkRef.default)(handleOwnRef, ref);
  var tabIndex;

  if (!props.disabled) {
    tabIndex = tabIndexProp !== undefined ? tabIndexProp : -1;
  }

  var disallowedProps = ['anchorEl', 'handleParentClose', 'isSubMenu', 'open', 'setParentOpenSubMenuIndex'];
  var subMenuProps = subMenu ? subMenu.props : {};
  var filteredProps = (0, _utils.filterProps)(subMenuProps, disallowedProps);
  var MenuListProps = filteredProps.MenuListProps,
      subOnClose = filteredProps.onClose,
      allowedSubMenuProps = (0, _objectWithoutProperties2.default)(filteredProps, ["MenuListProps", "onClose"]);
  var listItem = /*#__PURE__*/React.createElement(_ListItem.default, (0, _extends3.default)({
    "aria-expanded": subMenu ? openSubMenu : undefined,
    "aria-haspopup": subMenu ? true : undefined,
    button: true,
    classes: (0, _extends3.default)({
      dense: classes.dense
    }, ListItemClasses),
    className: (0, _clsx3.default)(classes.root, (_clsx = {}, (0, _defineProperty2.default)(_clsx, classes.selected, selected), (0, _defineProperty2.default)(_clsx, classes.gutters, !disableGutters), _clsx), className),
    component: component,
    disableGutters: disableGutters,
    key: key || subMenu && 'MenuItem',
    onKeyDown: (0, _createChainedFunction.default)(handleArrowRightKeydown, onKeyDown),
    ref: handleRef,
    role: role,
    selected: selected,
    tabIndex: tabIndex
  }, other), subMenu ? /*#__PURE__*/React.createElement("div", {
    className: classes.subMenuItemWrapper
  }, children, /*#__PURE__*/React.createElement(SubMenuIcon, {
    className: (0, _clsx3.default)(classes.subMenuIcon, (0, _defineProperty2.default)({}, classes.rtlSubMenuIcon, theme.direction === 'rtl'))
  })) : children);
  if (!subMenu) return listItem;
  return [listItem, openSubMenu && listItemRef.current !== null ? /*#__PURE__*/React.cloneElement(subMenu, (0, _extends3.default)({
    key: 'subMenu',
    anchorEl: listItemRef.current,
    anchorOrigin: theme.direction === 'rtl' ? RTL_ANCHOR_ORIGIN : LTR_ANCHOR_ORIGIN,
    MenuListProps: (0, _extends3.default)({}, MenuListProps, {
      isSubMenu: true
    }),
    open: openSubMenu,
    onClose: (0, _createChainedFunction.default)(handleParentClose, subOnClose),
    setParentOpenSubMenuIndex: setParentOpenSubMenuIndex,
    transformOrigin: theme.direction === 'rtl' ? RTL_TRANSFORM_ORIGIN : LTR_TRANSFORM_ORIGIN
  }, allowedSubMenuProps)) : undefined];
});
MenuItem.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Menu item contents.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes.default.elementType,

  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input will be used.
   */
  dense: _propTypes.default.bool,

  /**
   * @ignore
   */
  disabled: _propTypes.default.bool,

  /**
   * If `true`, the left and right padding is removed.
   */
  disableGutters: _propTypes.default.bool,

  /**
   * @ignore
   */
  handleArrowRightKeydown: _propTypes.default.func,

  /**
   * @ignore
   */
  handleParentClose: _propTypes.default.func,

  /**
   * @ignore
   */
  key: _propTypes.default.any,

  /**
   * `classes` prop applied to the [`ListItem`](/api/list-item/) element.
   */
  ListItemClasses: _propTypes.default.object,

  /**
   * @ignore
   */
  onKeyDown: _propTypes.default.func,

  /**
   * @ignore
   */
  onMouseEnter: _propTypes.default.func,

  /**
   * @ignore
   */
  openSubMenu: _propTypes.default.bool,

  /**
   * @ignore
   */
  role: _propTypes.default.string,

  /**
   * @ignore
   */
  selected: _propTypes.default.bool,

  /**
   * @ignore
   */
  setParentJustArrowedLeft: _propTypes.default.func,

  /**
   * @ignore
   */
  setParentOpenSubMenuIndex: _propTypes.default.func,

  /**
   * The sub-Menu that a Menu item will render
   */
  subMenu: _propTypes.default.node,

  /**
   * The icon used to indicate a Menu item has a sub-Menu.
   */
  subMenuIcon: _propTypes.default.node,

  /**
   * @ignore
   */
  tabIndex: _propTypes.default.number
} : {};

var _default = (0, _utils.dataUICMaker)((0, _styles.withStyles)(styles, {
  name: 'MuiMenuItem'
})(MenuItem), 'MenuItem');

exports.default = _default;
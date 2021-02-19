"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var ReactDOM = _interopRequireWildcard(require("react-dom"));

var _reactIs = require("react-is");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx3 = _interopRequireDefault(require("clsx"));

var _setRef = _interopRequireDefault(require("@material-ui/core/utils/setRef"));

var _styles = require("../styles");

var _Popover = _interopRequireDefault(require("../Popover"));

var _MenuList = _interopRequireDefault(require("../MenuList"));

var _utils = require("../utils");

// import Menu from '@material-ui/core/Menu';
var RTL_ORIGIN = {
  vertical: 'top',
  horizontal: 'right'
};
var LTR_ORIGIN = {
  vertical: 'top',
  horizontal: 'left'
};
var styles = {
  /* Styles applied to the `Paper` component. */
  paper: {
    // specZ: The maximum height of a simple menu should be one or more rows less than the view
    // height. This ensures a tapable area outside of the simple menu with which to dismiss
    // the menu.
    maxHeight: 'calc(100% - 96px)',
    // Add iOS momentum scrolling.
    WebkitOverflowScrolling: 'touch'
  },

  /* Styles applied to the `List` component via `MenuList`. */
  list: {
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0
  },

  /* Styles applied to sub`Menu`s to prevent the Modal from capturing mouse events */
  disablePointerEvents: {
    pointerEvents: 'none'
  },

  /* Styles applied to sub`MenuItems` to re-enable mouse events */
  enablePointerEvents: {
    pointerEvents: 'auto' // To enable capturing hover events on MenuList

  }
};
exports.styles = styles;
var Menu = /*#__PURE__*/React.forwardRef(function Menu(props, ref) {
  var _props$autoFocus = props.autoFocus,
      autoFocus = _props$autoFocus === void 0 ? true : _props$autoFocus,
      children = props.children,
      classes = props.classes,
      _props$disableAutoFoc = props.disableAutoFocusItem,
      disableAutoFocusItem = _props$disableAutoFoc === void 0 ? false : _props$disableAutoFoc,
      _props$MenuListProps = props.MenuListProps,
      MenuListProps = _props$MenuListProps === void 0 ? {} : _props$MenuListProps,
      onClose = props.onClose,
      onEnter = props.onEnter,
      onEntering = props.onEntering,
      onEntered = props.onEntered,
      open = props.open,
      _props$PaperProps = props.PaperProps,
      PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps,
      PopoverClasses = props.PopoverClasses,
      setParentOpenSubMenuIndex = props.setParentOpenSubMenuIndex,
      _props$transitionDura = props.transitionDuration,
      transitionDuration = _props$transitionDura === void 0 ? 'auto' : _props$transitionDura,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'selectedMenu' : _props$variant,
      other = (0, _objectWithoutProperties2.default)(props, ["autoFocus", "children", "classes", "disableAutoFocusItem", "MenuListProps", "onClose", "onEnter", "onEntering", "onEntered", "open", "PaperProps", "PopoverClasses", "setParentOpenSubMenuIndex", "transitionDuration", "variant"]);
  var theme = (0, _styles.useTheme)();

  var _React$useState = React.useState(null),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      openSubMenuIndex = _React$useState2[0],
      setOpenSubMenuIndex = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      entering = _React$useState4[0],
      setEntering = _React$useState4[1];

  var isSubMenu = typeof setParentOpenSubMenuIndex !== 'undefined';
  var atLeastOneSubMenu = React.useMemo(function () {
    return isSubMenu || React.Children.toArray(children).some(function (child) {
      return /*#__PURE__*/React.isValidElement(child) && child.props && child.props.subMenu;
    });
  }, [children, isSubMenu]);
  var autoFocusItem = autoFocus && !disableAutoFocusItem && open;
  var menuListActionsRef = React.useRef(null);
  var contentAnchorRef = React.useRef(null);

  var getContentAnchorEl = function getContentAnchorEl() {
    return contentAnchorRef.current;
  };

  var handleEnter = function handleEnter(element, isAppearing) {
    if (atLeastOneSubMenu) {
      setEntering(true);
      setOpenSubMenuIndex(null);
    }

    if (onEnter) {
      onEnter(element, isAppearing);
    }
  };

  var handleEntering = function handleEntering(element, isAppearing) {
    if (menuListActionsRef.current) {
      menuListActionsRef.current.adjustStyleForScrollbar(element, theme);
    }

    if (onEntering) {
      onEntering(element, isAppearing);
    }
  };

  var handleEntered = function handleEntered(element, isAppearing) {
    if (atLeastOneSubMenu) setEntering(false);

    if (onEntered) {
      onEntered(element, isAppearing);
    }
  };

  var handleOnClose = function handleOnClose(event) {
    event.preventDefault();
    setOpenSubMenuIndex(null);

    if (onClose) {
      onClose(event, "".concat(event.key.toLowerCase(), "KeyDown"));
    }
  };

  var handleListKeyDown = function handleListKeyDown(event) {
    if (event.key === 'Tab' || event.key === 'Escape') {
      handleOnClose(event);
    }

    if (event.key === 'ArrowLeft' && isSubMenu) {
      // Tell the parent Menu to close the sub Menu that you're in, but
      // don't trigger the sub Menu onClose cascade.
      event.stopPropagation();
      event.preventDefault();
      setParentOpenSubMenuIndex(null);
    }
  };
  /**
   * the index of the item should receive focus
   * in a `variant="selectedMenu"` it's the first `selected` item
   * otherwise it's the very first item.
   */


  var activeItemIndex = -1; // since we inject focus related props into children we have to do a lookahead
  // to check if there is a `selected` item. We're looking for the last `selected`
  // item and use the first valid item as a fallback

  React.Children.map(children, function (child, index) {
    if (! /*#__PURE__*/React.isValidElement(child)) {
      return;
    }

    if (process.env.NODE_ENV !== 'production') {
      if ((0, _reactIs.isFragment)(child)) {
        console.error(["Material-UI: the Menu component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
      }
    }

    if (!child.props.disabled) {
      if (variant === 'selectedMenu' && child.props.selected || activeItemIndex === -1) {
        activeItemIndex = index;
      }
    }
  });

  var handleSetOpenSubMenuIndex = function handleSetOpenSubMenuIndex(value) {
    if (value === null) {
      if (contentAnchorRef.current.parentElement) {
        contentAnchorRef.current.parentElement.children[openSubMenuIndex].focus();
      }
    }

    setOpenSubMenuIndex(value);
  };

  var isValidSubElement = function isValidSubElement(element) {
    var validMuiSubElements = ['Menu', 'MenuItem', 'MenuList', 'Popover', 'Popper'];
    return element && element.type && element.type.muiName && validMuiSubElements.includes(element.type.muiName);
  };

  var items = React.Children.map(children, function (child, index) {
    if (! /*#__PURE__*/React.isValidElement(child)) {
      return;
    }

    var _child$props = child.props,
        subMenu = _child$props.subMenu,
        onMouseMoveChildProp = _child$props.onMouseMove;
    var anchorEl = other.anchorEl;
    var hasSubMenu = Boolean(subMenu);
    var parentMenuOpen = Boolean(anchorEl);
    var additionalPropsAdded = false;
    var additionalProps = {}; // This is the original purpose of this React.Children.map and is basically unchanged.

    if (index === activeItemIndex) {
      additionalPropsAdded = true;
      (0, _extends2.default)(additionalProps, {
        ref: function ref(instance) {
          // #StrictMode ready
          // eslint-disable-next-line react/no-find-dom-node
          contentAnchorRef.current = ReactDOM.findDOMNode(instance);
          (0, _setRef.default)(child.ref, instance);
        }
      });
    } // If the current Menu item in this map has a subMenu,
    // we need the parent Menu to orchestrate its subMenu


    if (hasSubMenu && parentMenuOpen) {
      additionalPropsAdded = true;

      var handleArrowRightKeydown = function handleArrowRightKeydown(event) {
        if (event.key === 'ArrowRight') {
          event.preventDefault();
          setOpenSubMenuIndex(index);
        }
      };

      (0, _extends2.default)(additionalProps, {
        handleArrowRightKeydown: handleArrowRightKeydown,
        openSubMenu: index === openSubMenuIndex && !entering,
        setParentOpenSubMenuIndex: handleSetOpenSubMenuIndex
      });
    } // If there are ANY children with subMenus, then ALL
    // of the children need to know how to close any open subMenus
    // and reset the state that controls which subMenu is open.


    if (atLeastOneSubMenu) {
      additionalPropsAdded = true;
      (0, _extends2.default)(additionalProps, {
        onMouseMove: function onMouseMove(e) {
          setOpenSubMenuIndex(index);

          if (onMouseMoveChildProp) {
            onMouseMoveChildProp(e);
          }
        }
      }); // if it is a menu component, add the handleParentClose control

      if (isValidSubElement(child)) {
        (0, _extends2.default)(additionalProps, {
          handleParentClose: handleOnClose
        });
      }
    } // Using a semaphore instead of inspecting addtionalProps
    // directly to avoid performance hits at scale. Might be
    // fine to just do Object.keys(additionalProps).length > 0,
    // but that seems like iterations we can avoid.


    if (additionalPropsAdded) {
      // eslint-disable-next-line consistent-return
      return /*#__PURE__*/React.cloneElement(child, (0, _extends2.default)({}, additionalProps));
    } // eslint-disable-next-line consistent-return


    return child;
  });
  return /*#__PURE__*/React.createElement(_Popover.default, (0, _extends2.default)({
    anchorOrigin: theme.direction === 'rtl' ? RTL_ORIGIN : LTR_ORIGIN,
    classes: PopoverClasses,
    className: (0, _clsx3.default)((0, _defineProperty2.default)({}, classes.disablePointerEvents, isSubMenu)),
    getContentAnchorEl: getContentAnchorEl,
    onClose: onClose,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    open: open,
    PaperProps: (0, _extends2.default)({}, PaperProps, {
      classes: (0, _extends2.default)({}, PaperProps.classes, {
        root: classes.paper
      }),
      className: (0, _clsx3.default)(PaperProps.className, (0, _defineProperty2.default)({}, classes.enablePointerEvents, isSubMenu))
    }),
    ref: ref,
    transformOrigin: theme.direction === 'rtl' ? RTL_ORIGIN : LTR_ORIGIN,
    transitionDuration: transitionDuration
  }, other), /*#__PURE__*/React.createElement(_MenuList.default, (0, _extends2.default)({
    actions: menuListActionsRef,
    autoFocus: autoFocus && (activeItemIndex === -1 || disableAutoFocusItem),
    autoFocusItem: autoFocusItem,
    onKeyDown: handleListKeyDown,
    variant: variant
  }, MenuListProps, {
    className: (0, _clsx3.default)(classes.list, MenuListProps.className)
  }), items));
});
Menu.propTypes = process.env.NODE_ENV !== "production" ? {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The DOM element used to set the position of the menu.
   */
  anchorEl: _propTypes.default
  /* @typescript-to-proptypes-ignore */
  .oneOfType([_propTypes.default.func, _propTypes.default.instanceOf(typeof Element === 'undefined' ? Object : Element)]),

  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   */
  autoFocus: _propTypes.default.bool,

  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: _propTypes.default.object,

  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   */
  disableAutoFocusItem: _propTypes.default.bool,

  /**
   * Props applied to the [`MenuList`](/api/menu-list/) element.
   */
  MenuListProps: _propTypes.default.object,

  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: _propTypes.default.func,

  /**
   * Callback fired before the Menu enters.
   */
  onEnter: _propTypes.default.func,

  /**
   * Callback fired when the Menu has entered.
   */
  onEntered: _propTypes.default.func,

  /**
   * Callback fired when the Menu is entering.
   */
  onEntering: _propTypes.default.func,

  /**
   * Callback fired before the Menu exits.
   */
  onExit: _propTypes.default.func,

  /**
   * Callback fired when the Menu has exited.
   */
  onExited: _propTypes.default.func,

  /**
   * Callback fired when the Menu is exiting.
   */
  onExiting: _propTypes.default.func,

  /**
   * If `true`, the menu is visible.
   */
  open: _propTypes.default.bool.isRequired,

  /**
   * @ignore
   */
  PaperProps: _propTypes.default.object,

  /**
   * `classes` prop applied to the [`Popover`](/api/popover/) element.
   */
  PopoverClasses: _propTypes.default.object,

  /**
   * @ignore
   */
  setParentOpenSubMenuIndex: _propTypes.default.func,

  /**
   * The length of the transition in `ms`, or 'auto'
   */
  transitionDuration: _propTypes.default.oneOfType([_propTypes.default.oneOf(['auto']), _propTypes.default.number, _propTypes.default.shape({
    appear: _propTypes.default.number,
    enter: _propTypes.default.number,
    exit: _propTypes.default.number
  })]),

  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   */
  variant: _propTypes.default.oneOf(['menu', 'selectedMenu'])
} : {};

var _default = (0, _utils.dataUICMaker)((0, _styles.withStyles)(styles, {
  name: 'MuiMenu'
})(Menu), 'Menu');

exports.default = _default;
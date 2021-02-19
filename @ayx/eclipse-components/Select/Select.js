"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = require("lodash");

var _resizeObserverPolyfill = _interopRequireDefault(require("resize-observer-polyfill"));

var _classnames3 = _interopRequireDefault(require("classnames"));

var _reactSelect = _interopRequireDefault(require("react-select"));

var _async = _interopRequireDefault(require("react-select/async"));

var _FormControl = require("../FormControl");

var _ClickAwayListener = _interopRequireDefault(require("../ClickAwayListener"));

var _styles = require("../styles");

var _utils = require("../utils");

var _components = _interopRequireDefault(require("./components"));

var _theme = _interopRequireDefault(require("./theme"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var lastStringToSearch;
var searchStrings;

var filterOption = function filterOption(_ref, stringToSearch) {
  var label = _ref.label,
      value = _ref.value;
  if (stringToSearch === '') return true;

  if (lastStringToSearch !== stringToSearch) {
    lastStringToSearch = stringToSearch;
    searchStrings = stringToSearch.toLocaleLowerCase().trim().split(' ');
  }

  return searchStrings.every(function (search) {
    return label.toLocaleLowerCase().includes(search) || value.toLocaleLowerCase().includes(search);
  });
};

var getOptionLabel = function getOptionLabel(_ref2) {
  var primary = _ref2.primary,
      _ref2$secondary = _ref2.secondary,
      secondary = _ref2$secondary === void 0 ? '' : _ref2$secondary;
  return "".concat(primary, " ").concat(secondary);
};

var getOptionValue = function getOptionValue(_ref3) {
  var _ref3$value = _ref3.value,
      value = _ref3$value === void 0 ? '' : _ref3$value;
  return value.toString();
};

var MENU_PORTAL_Z_INDEX = 1350; // Above dialog (1300) but below snackbar

var Select = function Select(_ref4) {
  var actionOption = _ref4.actionOption,
      blurInputOnSelect = _ref4.blurInputOnSelect,
      cacheOptions = _ref4.cacheOptions,
      captureMenuScroll = _ref4.captureMenuScroll,
      classes = _ref4.classes,
      closeMenuOnScroll = _ref4.closeMenuOnScroll,
      classNamePrefix = _ref4.classNamePrefix,
      components = _ref4.components,
      controlShouldRenderValue = _ref4.controlShouldRenderValue,
      debounce = _ref4.debounce,
      defaultValue = _ref4.defaultValue,
      defaultOptions = _ref4.defaultOptions,
      delimiter = _ref4.delimiter,
      disabled = _ref4.disabled,
      disableClearable = _ref4.disableClearable,
      disableCloseMenuOnSelect = _ref4.disableCloseMenuOnSelect,
      disableSearchable = _ref4.disableSearchable,
      error = _ref4.error,
      escapeClearsValue = _ref4.escapeClearsValue,
      formatGroupLabel = _ref4.formatGroupLabel,
      formatOptionLabel = _ref4.formatOptionLabel,
      fullWidth = _ref4.fullWidth,
      getOptionLabelProp = _ref4.getOptionLabel,
      getOptionValueProp = _ref4.getOptionValue,
      hideSelectedOptions = _ref4.hideSelectedOptions,
      id = _ref4.id,
      inputId = _ref4.inputId,
      instanceId = _ref4.instanceId,
      iconVisibility = _ref4.iconVisibility,
      isClearable = _ref4.isClearable,
      isDisabled = _ref4.isDisabled,
      isLoading = _ref4.isLoading,
      isMulti = _ref4.isMulti,
      isOptionDisabled = _ref4.isOptionDisabled,
      isOptionSelected = _ref4.isOptionSelected,
      isRtl = _ref4.isRtl,
      isSearchable = _ref4.isSearchable,
      loading = _ref4.loading,
      loadingText = _ref4.loadingText,
      loadingMessageProp = _ref4.loadingMessage,
      maxMenuHeight = _ref4.maxMenuHeight,
      menuIsOpen = _ref4.menuIsOpen,
      menuPlacement = _ref4.menuPlacement,
      menuPortalTarget = _ref4.menuPortalTarget,
      menuPosition = _ref4.menuPosition,
      minMenuHeight = _ref4.minMenuHeight,
      multi = _ref4.multi,
      name = _ref4.name,
      noOptionsMessageProp = _ref4.noOptionsMessage,
      noOptionsText = _ref4.noOptionsText,
      onBlurProp = _ref4.onBlur,
      onChangeProp = _ref4.onChange,
      onClick = _ref4.onClick,
      onFocusProp = _ref4.onFocus,
      open = _ref4.open,
      openMenuOnClick = _ref4.openMenuOnClick,
      openMenuOnFocus = _ref4.openMenuOnFocus,
      optionComponent = _ref4.optionComponent,
      optionHeight = _ref4.optionHeight,
      optionsProp = _ref4.options,
      placeholder = _ref4.placeholder,
      placeholderText = _ref4.placeholderText,
      placement = _ref4.placement,
      PopperProps = _ref4.PopperProps,
      styles = _ref4.styles,
      tabSelectsValue = _ref4.tabSelectsValue,
      theme = _ref4.theme,
      value = _ref4.value,
      rest = (0, _objectWithoutProperties2.default)(_ref4, ["actionOption", "blurInputOnSelect", "cacheOptions", "captureMenuScroll", "classes", "closeMenuOnScroll", "classNamePrefix", "components", "controlShouldRenderValue", "debounce", "defaultValue", "defaultOptions", "delimiter", "disabled", "disableClearable", "disableCloseMenuOnSelect", "disableSearchable", "error", "escapeClearsValue", "formatGroupLabel", "formatOptionLabel", "fullWidth", "getOptionLabel", "getOptionValue", "hideSelectedOptions", "id", "inputId", "instanceId", "iconVisibility", "isClearable", "isDisabled", "isLoading", "isMulti", "isOptionDisabled", "isOptionSelected", "isRtl", "isSearchable", "loading", "loadingText", "loadingMessage", "maxMenuHeight", "menuIsOpen", "menuPlacement", "menuPortalTarget", "menuPosition", "minMenuHeight", "multi", "name", "noOptionsMessage", "noOptionsText", "onBlur", "onChange", "onClick", "onFocus", "open", "openMenuOnClick", "openMenuOnFocus", "optionComponent", "optionHeight", "options", "placeholder", "placeholderText", "placement", "PopperProps", "styles", "tabSelectsValue", "theme", "value"]);
  var selectContainer = classes.selectContainer;
  var excludedProps = ['backspaceRemovesValue', 'closeMenuOnSelect', 'isValidNewOption', 'loadOptions'];

  var _filterProps = (0, _utils.filterProps)(rest, excludedProps),
      dataUIC = _filterProps['data-uic'],
      restUserProps = (0, _objectWithoutProperties2.default)(_filterProps, ["data-uic"]);

  var muiFormControl = (0, _FormControl.useFormControl)();

  var _ref5 = muiFormControl || {},
      formControlError = _ref5.error,
      formControlDisabled = _ref5.disabled;

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      activeDescendantId = _useState2[0],
      updateActiveDescendantId = _useState2[1];

  var handleUpdateActiveDescendandId = function handleUpdateActiveDescendandId(descendantId) {
    return updateActiveDescendantId(descendantId);
  };

  var dataTest = disableSearchable && typeof rest['data-test'] !== 'undefined' ? {
    'data-test': rest['data-test']
  } : {};

  var _useState3 = (0, _react.useState)({}),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      updateWindowValue = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      forcedOpen = _useState6[0],
      setForcedOpen = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      dontFocusOptions = _useState8[0],
      setDontFocusOptions = _useState8[1];

  var _useState9 = (0, _react.useState)(null),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      selectWrapperRef = _useState10[0],
      setSelectWrapperRef = _useState10[1];

  var unSupportedProps = {
    classNamePrefix: classNamePrefix,
    components: components,
    controlShouldRenderValue: controlShouldRenderValue,
    delimiter: delimiter,
    escapeClearsValue: escapeClearsValue,
    formatGroupLabel: formatGroupLabel,
    formatOptionLabel: formatOptionLabel,
    hideSelectedOptions: hideSelectedOptions,
    inputId: inputId,
    instanceId: instanceId,
    isClearable: isClearable,
    isDisabled: isDisabled,
    isLoading: isLoading,
    isOptionDisabled: isOptionDisabled,
    isOptionSelected: isOptionSelected,
    isMulti: isMulti,
    isRtl: isRtl,
    isSearchable: isSearchable,
    loadingMessageProp: loadingMessageProp,
    minMenuHeight: minMenuHeight,
    maxMenuHeight: maxMenuHeight,
    menuIsOpen: menuIsOpen,
    menuPlacement: menuPlacement,
    menuPosition: menuPosition,
    noOptionsMessageProp: noOptionsMessageProp,
    placeholder: placeholder,
    styles: styles,
    theme: theme,
    tabSelectsValue: tabSelectsValue
  };
  Object.keys(unSupportedProps).forEach(function (prop) {
    if (typeof unSupportedProps[prop] !== 'undefined') {
      console.warn("The ".concat(prop, " prop is not supported. If you are looking at React Select's documentation, please refer to UI-Core Select documentation for supported props."));
    }
  });
  (0, _react.useEffect)(function () {
    var resizeObserver; // The following code is here to help with the rendering of an open menu
    // when the window is being resized
    // This is mainly an issue when you resize an open menu when using portals
    // This intentionally never uses the windowWidth it's setting, but, as a side effect,
    // forces a rerender which causes portalling to resize correctly.
    // The resizeObserver is used to watch the control components size change and cause
    // a re-render if the entry that registers the change currently has its' menu open

    if (typeof _resizeObserverPolyfill.default !== 'undefined') {
      resizeObserver = new _resizeObserverPolyfill.default(function (entries) {
        var _iterator = _createForOfIteratorHelper(entries),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var entry = _step.value;

            if (entry.target.className.includes('MuiAyxSelect-menuOpenControl')) {
              var width = Math.floor(entry.contentRect.width);
              var height = Math.floor(entry.contentRect.height);
              updateWindowValue({
                width: width,
                height: height
              });
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      });
      var controlComponent = document.querySelectorAll('.ayx-select-control');

      if (controlComponent !== null && controlComponent.length > 0) {
        controlComponent.forEach(function (div) {
          resizeObserver.observe(div);
        });
      }
    }

    if (menuPortalTarget != null) {
      var targetListener = function targetListener() {
        return updateWindowValue({
          width: selectWrapperRef.current.offsetWidth,
          height: selectWrapperRef.current.offsetHeight
        });
      };

      window.addEventListener('resize', targetListener);
      return function () {
        return window.removeEventListener('resize', targetListener);
      };
    }

    return function cleanup() {
      resizeObserver.disconnect();
    };
  }, [menuPortalTarget]);

  var objToStr = function objToStr(val) {
    if (Array.isArray(val)) {
      return val.map(function (obj) {
        return obj.value;
      });
    }

    if (val && val.constructor === Object) {
      return val.value;
    } // Usually null. Just return what was passed in.


    return val;
  };

  var strToObj = function strToObj(val, options) {
    if (typeof val === 'undefined' || typeof options === 'undefined') {
      return null;
    }

    if (Array.isArray(val)) {
      // Multi
      return options.filter(function (o) {
        return val.includes(o.value);
      }) || null;
    } // Might want to put this behind another 'if' check if problems
    // are encountered with non-string values coming in.


    return options.find(function (o) {
      return o.value === val;
    }) || null;
  };

  var controlled = typeof value !== 'undefined';
  var syncSelect = Array.isArray(optionsProp);
  var asyncSelect = typeof optionsProp === 'function';

  var getDefaultValueObj = function getDefaultValueObj(defaultVal, options) {
    var noOptions = typeof options === 'undefined' || options.length < 1;

    if (typeof defaultVal === 'undefined') {
      return undefined;
    }

    if (asyncSelect && noOptions) {
      console.warn('WARNING: Select with defaultValue must also have defaultOptions when async.');
      return undefined;
    }

    if (controlled) {
      console.warn('WARNING: Select does not support defaultValue when controlled. Use your external state for this.');
      return undefined;
    }

    if (noOptions) return undefined;
    return strToObj(defaultVal, options) || undefined;
  };

  var handleChange = function handleChange(onChange) {
    return function (val, action) {
      // child should look more like this to be more MUI-like:
      // const child = {
      //   props: {
      //     value: action.option && action.option.value,
      //   },
      //   key: action.option && action.option.primary,
      // };
      // The 'action' object should be added to the responses somewhere...
      // maybe on child, as a sibling of props and key? It doesn't map to the event well.
      // Need to add the full, original value somewhere to support controlled
      // async (even as a workaround). It's also just generally useful to provide.
      // Don't know where it should go, but for example:
      // const event = {
      //   target: {
      //     value: objToStr(val),
      //     originalValue: val
      //   }
      // };
      var child = {
        props: val
      };
      var event = {
        target: {
          name: action.name,
          value: objToStr(val)
        }
      };
      onChange(event, child);
    };
  };

  var selectRef = (0, _react.useRef)();

  var handleKeyDown = function handleKeyDown(e) {
    if (actionOption !== null) {
      setDontFocusOptions(false);
      var isTab = e.key === 'Tab';
      var isShiftTab = isTab && e.shiftKey;
      var actionFocused = document.activeElement.localName !== 'input';
      var isArrowKeys = e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowLeft' || e.key === 'ArrowRight';
      var menuIsOpenState = selectRef.current.state.menuIsOpen;

      if (isTab && !isShiftTab) {
        setDontFocusOptions(true); // need to force the menu to stay open
        // when react-select isn't focused

        if (menuIsOpenState) {
          selectRef.current.select.menuListRef.firstElementChild.focus();
          setForcedOpen(true);
        }

        if (actionFocused) {
          selectRef.current.focus();
          setForcedOpen(false);
        }

        e.defaultPrevented = true;
      } else if (!isTab && actionFocused) {
        setDontFocusOptions(true);
        e.defaultPrevented = true;

        if (isArrowKeys) {
          e.preventDefault();
        }
      } else if (isShiftTab && actionFocused) {
        selectRef.current.focus();
        e.preventDefault();
        setForcedOpen(false);
      }

      if (e.key === 'Enter' && !disableCloseMenuOnSelect) {
        selectRef.current.focus();
        setForcedOpen(false);
      }
    }
  };

  var returnToNormalBehavior = function returnToNormalBehavior() {
    setForcedOpen(false);
    setDontFocusOptions(false);
  };

  var handleBlur = function handleBlur(e) {
    if (disableSearchable && typeof muiFormControl !== 'undefined') {
      muiFormControl.onBlur(e);
    }

    if (typeof onBlurProp === 'function') {
      onBlurProp(e);
    }
  };

  var handleFocus = function handleFocus(e) {
    returnToNormalBehavior();

    if (disableSearchable && typeof muiFormControl !== 'undefined') {
      muiFormControl.onFocus(e);
    }

    if (typeof onFocusProp === 'function') {
      onFocusProp(e);
    }
  };

  var commonSelectProps = {
    actionOption: actionOption,
    activeDescendantId: activeDescendantId,
    menuAnchorEl: selectWrapperRef,
    blurInputOnSelect: blurInputOnSelect,
    backspaceRemovesValue: true,
    cacheOptions: cacheOptions,
    captureMenuScroll: captureMenuScroll,
    closeMenuOnScroll: closeMenuOnScroll,
    closeMenuOnSelect: !disableCloseMenuOnSelect,
    components: _components.default,
    defaultValue: getDefaultValueObj(defaultValue, asyncSelect ? defaultOptions : optionsProp),
    escapeClearsValue: false,
    error: error || formControlError,
    getOptionLabel: getOptionLabelProp || getOptionLabel,
    getOptionValue: getOptionValueProp || getOptionValue,
    iconVisibility: iconVisibility && iconVisibility.toLowerCase(),
    InputProps: restUserProps,
    isClearable: !disableClearable,
    isDisabled: disabled || formControlDisabled,
    isMulti: multi,
    inputId: id,
    isSearchable: !disableSearchable,
    loadingMessage: function loadingMessage() {
      return loadingText;
    },
    menuIsOpen: forcedOpen || open,
    dontFocusOptions: dontFocusOptions,
    menuPlacement: placement,
    menuPortalTarget: menuPortalTarget,
    name: name,
    noOptionsMessage: function noOptionsMessage() {
      return noOptionsText;
    },
    onBlur: function onBlur(e) {
      return handleBlur(e);
    },
    onClick: onClick,
    onChange: handleChange(onChangeProp),
    onFocus: function onFocus(e) {
      return handleFocus(e);
    },
    openMenuOnClick: openMenuOnClick,
    openMenuOnFocus: openMenuOnFocus,
    placeholder: placeholderText,
    styles: {
      menuPortal: function menuPortal(base) {
        return (0, _extends2.default)({}, base, {
          zIndex: MENU_PORTAL_Z_INDEX
        });
      },
      menu: function menu(base) {
        return (0, _extends2.default)({}, base, {
          margin: '1px 0 2px 0',
          boxShadow: 0
        });
      }
    },
    optionHeight: optionHeight,
    optionComponent: optionComponent,
    PopperProps: PopperProps,
    tabSelectsValue: false,
    updateActiveDescendantId: handleUpdateActiveDescendandId,
    classes: classes
  };

  if (syncSelect) {
    var _classnames;

    if (controlled) {
      commonSelectProps.value = strToObj(value, optionsProp);
    }

    return /*#__PURE__*/_react.default.createElement(_ClickAwayListener.default, {
      mouseEvent: "onMouseDown",
      onClickAway: returnToNormalBehavior
    }, /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
      className: (0, _classnames3.default)(selectContainer, (_classnames = {}, (0, _defineProperty2.default)(_classnames, classes.fullWidth, fullWidth && typeof muiFormControl === 'undefined'), (0, _defineProperty2.default)(_classnames, classes.muiFormControl, muiFormControl), _classnames)),
      "data-uic": dataUIC
    }, dataTest, {
      ref: setSelectWrapperRef
    }), /*#__PURE__*/_react.default.createElement(_reactSelect.default, (0, _extends2.default)({
      filterOption: filterOption,
      isLoading: loading,
      onKeyDown: handleKeyDown,
      options: optionsProp,
      ref: selectRef
    }, commonSelectProps, restUserProps))));
  }

  if (asyncSelect) {
    if (controlled) {
      // If the implementer captures and passes in an option object or array of option objects
      // this could work but it's an inconsistent api at that point and still isn't supported.
      // If the wrong kind of value is passed, React Select will error internally and the implementer will see that.
      commonSelectProps.value = value;
    }

    var debounceTime = 0;

    if (debounce === true) {
      debounceTime = 500;
    } else if (typeof debounce === 'number') {
      debounceTime = debounce;
    }

    var resolveOptions = (0, _lodash.debounce)(function (resolve, input) {
      return resolve(optionsProp(input));
    }, debounceTime);

    var debouncedOptions = function debouncedOptions(input) {
      return new Promise(function (res) {
        return resolveOptions(res, input);
      });
    };

    return /*#__PURE__*/_react.default.createElement(_ClickAwayListener.default, {
      mouseEvent: "onMouseDown",
      onClickAway: returnToNormalBehavior
    }, /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
      className: (0, _classnames3.default)(selectContainer, (0, _defineProperty2.default)({}, classes.fullWidth, fullWidth && typeof muiFormControl === 'undefined')),
      "data-uic": dataUIC
    }, dataTest, {
      ref: setSelectWrapperRef
    }), /*#__PURE__*/_react.default.createElement(_async.default, (0, _extends2.default)({
      defaultOptions: defaultOptions,
      loadOptions: debouncedOptions,
      onKeyDown: handleKeyDown,
      ref: selectRef
    }, commonSelectProps, restUserProps))));
  }

  return null;
};

Select.propTypes = process.env.NODE_ENV !== "production" ? {
  actionOption: _propTypes.default.element,
  blurInputOnSelect: _propTypes.default.bool,
  cacheOptions: _propTypes.default.bool,
  captureMenuScroll: _propTypes.default.bool,
  classNamePrefix: _propTypes.default.string,
  closeMenuOnScroll: _propTypes.default.bool,
  closeMenuOnSelect: _propTypes.default.bool,
  components: _propTypes.default.shape({}),
  controlShouldRenderValue: _propTypes.default.bool,
  debounce: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.number]),
  defaultOptions: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.arrayOf(_propTypes.default.shape({}))]),
  defaultValue: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.bool, _propTypes.default.func, _propTypes.default.number, _propTypes.default.object, _propTypes.default.string]),
  delimiter: _propTypes.default.string,
  disableClearable: _propTypes.default.bool,
  disableCloseMenuOnSelect: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  disableSearchable: _propTypes.default.bool,
  error: _propTypes.default.bool,
  escapeClearsValue: _propTypes.default.bool,
  formatGroupLabel: _propTypes.default.string,
  formatOptionLabel: _propTypes.default.string,
  fullWidth: _propTypes.default.bool,
  getOptionLabel: _propTypes.default.func,
  getOptionValue: _propTypes.default.func,
  hideSelectedOptions: _propTypes.default.bool,
  iconVisibility: _propTypes.default.string,
  id: _propTypes.default.string,
  inputId: _propTypes.default.string,
  instanceId: _propTypes.default.string,
  isClearable: _propTypes.default.bool,
  isDisabled: _propTypes.default.bool,
  isLoading: _propTypes.default.bool,
  isMulti: _propTypes.default.bool,
  isOptionDisabled: _propTypes.default.bool,
  isOptionSelected: _propTypes.default.bool,
  isRtl: _propTypes.default.bool,
  isSearchable: _propTypes.default.bool,
  loading: _propTypes.default.bool,
  loadingMessage: _propTypes.default.func,
  loadingText: _propTypes.default.string,
  maxMenuHeight: _propTypes.default.number,
  menuIsOpen: _propTypes.default.bool,
  menuPlacement: _propTypes.default.string,
  menuPortalTarget: _propTypes.default.objectOf(_propTypes.default.element),
  menuPosition: _propTypes.default.string,
  minMenuHeight: _propTypes.default.number,
  multi: _propTypes.default.bool,
  name: _propTypes.default.string,
  noOptionsMessage: _propTypes.default.func,
  noOptionsText: _propTypes.default.string,
  onBlur: _propTypes.default.func,
  onChange: _propTypes.default.func,
  onClick: _propTypes.default.func,
  onFocus: _propTypes.default.func,
  open: _propTypes.default.bool,
  openMenuOnClick: _propTypes.default.bool,
  openMenuOnFocus: _propTypes.default.bool,
  optionComponent: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func]),
  optionHeight: _propTypes.default.number,
  options: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.func]).isRequired,
  placeholder: _propTypes.default.node,
  placeholderText: _propTypes.default.string,
  placement: _propTypes.default.string,
  PopperProps: _propTypes.default.shape({}),
  styles: _propTypes.default.shape({}),
  tabSelectsValue: _propTypes.default.bool,
  theme: _propTypes.default.shape({}),
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string)])
} : {};
Select.defaultProps = {
  actionOption: null,
  blurInputOnSelect: undefined,
  cacheOptions: false,
  captureMenuScroll: undefined,
  classNamePrefix: undefined,
  closeMenuOnScroll: undefined,
  closeMenuOnSelect: true,
  components: undefined,
  controlShouldRenderValue: undefined,
  debounce: false,
  defaultOptions: undefined,
  defaultValue: undefined,
  delimiter: undefined,
  disableClearable: false,
  disableCloseMenuOnSelect: false,
  disabled: false,
  disableSearchable: false,
  error: false,
  escapeClearsValue: undefined,
  formatGroupLabel: undefined,
  formatOptionLabel: undefined,
  fullWidth: false,
  getOptionLabel: getOptionLabel,
  getOptionValue: getOptionValue,
  hideSelectedOptions: undefined,
  iconVisibility: undefined,
  id: undefined,
  inputId: undefined,
  instanceId: undefined,
  isClearable: undefined,
  isDisabled: undefined,
  isLoading: undefined,
  isMulti: undefined,
  isOptionDisabled: undefined,
  isOptionSelected: undefined,
  isRtl: undefined,
  isSearchable: undefined,
  loading: false,
  loadingMessage: undefined,
  loadingText: 'Loading data',
  maxMenuHeight: undefined,
  menuIsOpen: undefined,
  menuPlacement: undefined,
  menuPortalTarget: null,
  menuPosition: undefined,
  minMenuHeight: undefined,
  multi: false,
  name: undefined,
  noOptionsMessage: undefined,
  noOptionsText: 'No results',
  onBlur: undefined,
  onChange: function onChange() {},
  onClick: undefined,
  onFocus: undefined,
  open: undefined,
  openMenuOnClick: undefined,
  openMenuOnFocus: undefined,
  optionComponent: null,
  optionHeight: 38,
  placeholder: undefined,
  placeholderText: 'Select...',
  placement: 'auto',
  PopperProps: undefined,
  styles: undefined,
  tabSelectsValue: undefined,
  theme: undefined,
  value: undefined
};

var _default = (0, _styles.withStyles)(_theme.default.MuiAyxSelect, {
  name: 'MuiAyxSelect'
})(Select);

exports.default = _default;
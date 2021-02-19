"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ListItem = _interopRequireDefault(require("../../ListItem"));

var _ListItemText = _interopRequireDefault(require("../../ListItemText"));

var _ListItemIcon = _interopRequireDefault(require("../../ListItemIcon"));

var _Tooltip = _interopRequireDefault(require("../../Tooltip"));

var _constants = require("../constants");

var _styles = require("../../styles");

var useStyles = (0, _styles.makeStyles)(function () {
  return {
    tooltipChildDiv: {
      width: '100%'
    }
  };
}); // eslint-disable-next-line complexity

var Option = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var data = props.data,
      innerProps = props.innerProps,
      selected = props.isSelected,
      selectProps = props.selectProps;
  var iconVisibility = selectProps.iconVisibility,
      classes = selectProps.classes,
      dontFocusOptions = selectProps.dontFocusOptions,
      updateActiveDescendantId = selectProps.updateActiveDescendantId;
  var disabled = data.disabled,
      primary = data.primary,
      secondary = data.secondary,
      icon = data.icon,
      _data$ListItemProps = data.ListItemProps,
      ListItemProps = _data$ListItemProps === void 0 ? {} : _data$ListItemProps,
      tooltip = data.tooltip,
      _data$TooltipProps = data.TooltipProps,
      TooltipProps = _data$TooltipProps === void 0 ? {} : _data$TooltipProps;
  var focused = props.isFocused;
  focused = dontFocusOptions !== true && focused;
  var listItemClasses = [classes.option, focused ? classes.optionFocus : null].join(' ');
  var optionClasses = useStyles();

  var renderWithTooltip = function renderWithTooltip(child) {
    return typeof tooltip !== 'undefined' || typeof TooltipProps.title !== 'undefined' ? /*#__PURE__*/_react.default.createElement(_Tooltip.default, (0, _extends2.default)({
      title: tooltip
    }, TooltipProps), /*#__PURE__*/_react.default.createElement("div", {
      className: optionClasses.tooltipChildDiv
    }, child)) : child;
  };

  if (data.component) {
    var Component = data.component;

    var customComponent = /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, props, {
      disabled: disabled,
      focused: focused.toString(),
      innerRef: ref,
      selected: selected
    }));

    return renderWithTooltip(customComponent);
  }

  if (selectProps.optionComponent) {
    var OptionComponent = selectProps.optionComponent;

    var _customComponent = /*#__PURE__*/_react.default.createElement(OptionComponent, (0, _extends2.default)({}, props, {
      disabled: disabled,
      focused: focused.toString(),
      innerRef: ref,
      selected: selected
    }));

    return renderWithTooltip(_customComponent);
  }

  var iconShouldRender = typeof icon !== 'undefined' && (iconVisibility === _constants.iconVisibilityEnum.BOTH || iconVisibility === _constants.iconVisibilityEnum.OPTION || typeof iconVisibility === 'undefined');
  (0, _react.useEffect)(function () {
    if (focused) {
      updateActiveDescendantId(innerProps.id);
    }
  }, [focused]);

  var defaultComponent = /*#__PURE__*/_react.default.createElement(_ListItem.default, (0, _extends2.default)({}, innerProps, {
    "aria-selected": selected,
    button: true,
    buttonRef: ref,
    className: listItemClasses,
    component: "li",
    disabled: disabled,
    focused: focused.toString(),
    selected: selected
  }, ListItemProps, {
    role: "option"
  }), iconShouldRender ? /*#__PURE__*/_react.default.createElement(_ListItemIcon.default, {
    className: classes.optionIcon
  }, icon) : null, /*#__PURE__*/_react.default.createElement(_ListItemText.default, {
    className: classes.optionText,
    primary: primary,
    secondary: secondary !== undefined ? secondary : ''
  }));

  return renderWithTooltip(defaultComponent);
});

Option.propTypes = {
  data: _propTypes.default.shape({
    component: _propTypes.default.node,
    disabled: _propTypes.default.bool,
    icon: _propTypes.default.node,
    ListItemProps: _propTypes.default.shape({}),
    primary: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]).isRequired,
    secondary: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
    tooltip: _propTypes.default.string,
    TooltipProps: _propTypes.default.shape({
      title: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node])
    })
  }).isRequired,
  innerProps: _propTypes.default.shape({
    id: _propTypes.default.string
  }).isRequired,
  isFocused: _propTypes.default.bool.isRequired,
  isSelected: _propTypes.default.bool.isRequired,
  selectProps: _propTypes.default.shape({
    classes: _propTypes.default.shape({
      option: _propTypes.default.string,
      optionFocus: _propTypes.default.string,
      optionIcon: _propTypes.default.string,
      optionText: _propTypes.default.string
    }),
    dontFocusOptions: _propTypes.default.bool,
    iconVisibility: _propTypes.default.string,
    optionComponent: _propTypes.default.node,
    updateActiveDescendantId: _propTypes.default.func
  }).isRequired
};
Option.defaultProps = {};
var _default = Option;
exports.default = _default;
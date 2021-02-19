"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _styles = require("../styles");

var styles = function styles(theme) {
  return (0, _extends2.default)({}, theme.overrides.MuiTooltip, {
    tooltip: {
      position: 'relative'
    },
    arrowArrow: {
      position: 'absolute',
      fontSize: 4,
      width: '3em',
      height: '3em',
      '&::before': {
        position: 'absolute',
        content: '""',
        margin: 'auto',
        display: 'block',
        width: 0,
        height: 0,
        borderStyle: 'solid',
        zIndex: 10
      },
      '&::after': {
        position: 'absolute',
        content: '""',
        margin: 'auto',
        display: 'block',
        width: 0,
        height: 0,
        borderStyle: 'solid',
        zIndex: 9
      }
    },
    arrowPopper: {
      '&[x-placement*="bottom"] $arrowArrow': {
        top: 0,
        left: 0,
        right: 0,
        margin: 'auto',
        marginTop: '-0.9em',
        width: '2em',
        height: '1em',
        '&::before': {
          borderWidth: '0 1em 1.25em 1em',
          borderColor: "transparent transparent ".concat(theme.palette.type === 'dark' ? theme.palette.background.paper : theme.palette.brand.deepSpace, " transparent")
        },
        '&::after': {
          top: -2.4,
          borderWidth: '0 1em 1.25em 1em',
          borderColor: theme.palette.type === 'dark' ? "transparent transparent rgba(243, 247, 255, 0.18) transparent" : 'transparent'
        }
      },
      '&[x-placement*="top"] $arrowArrow': {
        bottom: 0,
        left: 0,
        right: 0,
        margin: 'auto',
        marginBottom: '-0.9em',
        width: '2em',
        height: '1em',
        '&::before': {
          borderWidth: '1.25em 1em 0 1em',
          top: -0.5,
          borderColor: "".concat(theme.palette.type === 'dark' ? theme.palette.background.paper : theme.palette.brand.deepSpace, " transparent transparent transparent")
        },
        '&::after': {
          bottom: -2.4,
          borderWidth: '1.25em 1em 0 1em',
          borderColor: theme.palette.type === 'dark' ? "rgba(243, 247, 255, 0.18) transparent transparent transparent" : 'transparent'
        }
      },
      '&[x-placement*="right"] $arrowArrow': {
        left: 0,
        top: 0,
        bottom: 0,
        margin: 'auto',
        marginLeft: '-0.9em',
        height: '2em',
        width: '1em',
        '&::before': {
          borderWidth: '1em 1.25em 1em 0',
          borderColor: "transparent ".concat(theme.palette.type === 'dark' ? theme.palette.background.paper : theme.palette.brand.deepSpace, " transparent transparent")
        },
        '&::after': {
          left: -2.4,
          borderWidth: '1em 1.25em 1em 0',
          borderColor: theme.palette.type === 'dark' ? "transparent rgba(243, 247, 255, 0.18) transparent transparent" : 'transparent'
        }
      },
      '&[x-placement*="left"] $arrowArrow': {
        right: 0,
        top: 0,
        bottom: 0,
        margin: 'auto',
        marginRight: '-0.9em',
        height: '2em',
        width: '1em',
        '&::before': {
          borderWidth: '1em 0 1em 1.25em',
          borderColor: "transparent transparent transparent ".concat(theme.palette.type === 'dark' ? theme.palette.background.paper : theme.palette.brand.deepSpace)
        },
        '&::after': {
          right: -2.4,
          borderWidth: '1em 0 1em 1.25em',
          borderColor: theme.palette.type === 'dark' ? "transparent transparent transparent rgba(243, 247, 255, 0.18)" : 'transparent'
        }
      }
    }
  });
};

var Tooltip = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var classes = props.classes,
      arrow = props.arrow,
      rest = (0, _objectWithoutProperties2.default)(props, ["classes", "arrow"]);
  var arrowArrow = classes.arrowArrow,
      arrowPopper = classes.arrowPopper,
      baseClasses = (0, _objectWithoutProperties2.default)(classes, ["arrowArrow", "arrowPopper"]);

  var hasTitle = props.title && (props.title.length > 0 || /*#__PURE__*/_react.default.isValidElement(props.title));

  return arrow && hasTitle ?
  /*#__PURE__*/
  // eslint-disable-next-line ui-core/no-aria-title
  _react.default.createElement(_Tooltip.default, (0, _extends2.default)({}, rest, {
    classes: (0, _extends2.default)({}, baseClasses, {
      popper: arrowPopper
    }),
    ref: ref,
    title: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, props.title, /*#__PURE__*/_react.default.createElement("span", {
      className: arrowArrow
    }))
  })) : /*#__PURE__*/_react.default.createElement(_Tooltip.default, (0, _extends2.default)({}, rest, {
    classes: baseClasses,
    ref: ref
  }));
});

Tooltip.propTypes = process.env.NODE_ENV !== "production" ? {
  arrow: _propTypes.default.bool,
  title: _propTypes.default.node.isRequired
} : {};
Tooltip.defaultProps = {
  arrow: false
};

var _default = (0, _styles.withStyles)(styles, {
  name: 'MuiTooltip'
})(Tooltip);

exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("../../styles");

var MBreadcrumbs = function MBreadcrumbs(_ref) {
  var palette = _ref.palette,
      spacing = _ref.spacing,
      typography = _ref.typography;
  return {
    ol: {
      '& :last-child > p': {
        fontWeight: typography.fontWeightBold,
        color: palette.text.secondary
      },
      '& :last-child > a': {
        fontWeight: typography.fontWeightBold
      }
    },
    separator: {
      marginLeft: spacing(1),
      marginRight: spacing(1)
    }
  };
};

var MPrivateBreadcrumbCollapsed = function MPrivateBreadcrumbCollapsed(_ref2) {
  var palette = _ref2.palette,
      spacing = _ref2.spacing;
  return {
    root: {
      backgroundColor: (0, _styles.fade)(palette.blueGrey['300'], 0.25),
      color: palette.secondary.contrastText,
      '&:focus': {
        backgroundColor: (0, _styles.fade)(palette.blueGrey['300'], 0.25)
      },
      '&:hover': {
        backgroundColor: (0, _styles.fade)(palette.blueGrey['300'], 0.4)
      },
      marginRight: 0,
      marginLeft: 0,
      borderRadius: spacing(1)
    },
    icon: {
      width: 16,
      color: palette.action.passive
    }
  };
};

var _default = function _default(theme) {
  return {
    PrivateBreadcrumbCollapsed: MPrivateBreadcrumbCollapsed(theme),
    MuiBreadcrumbs: MBreadcrumbs(theme)
  };
};

exports.default = _default;
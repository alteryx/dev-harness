"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var MTabs = function MTabs(_ref) {
  var palette = _ref.palette,
      spacing = _ref.spacing;
  return {
    root: {
      backgroundColor: 'transparent',
      borderBottom: '1px solid',
      borderBottomColor: palette.divider,
      minHeight: 44
    },
    indicator: {
      backgroundColor: palette.primary.main,
      height: spacing(0.25),
      '$vertical &': {
        width: spacing(0.25)
      }
    },
    scrollButtons: {
      color: palette.action.passive
    }
  };
};

var MTab = function MTab(theme) {
  return {
    root: {
      fontSize: theme.typography.pxToRem(13),
      // original-> fontSize: theme.typography.pxToRem(14),
      fontWeight: theme.typography.fontWeightBold,
      minHeight: 44,
      padding: "0px ".concat(theme.spacing(2), "px"),
      whiteSpace: 'normal',
      '@media (min-width:600px)': {
        minWidth: 0
      },
      '&:hover': {
        color: theme.palette.primary.main
      },
      '&$selected': {
        // "Active" state
        color: theme.palette.primary.main,
        lineHeight: 'normal'
      },
      '&:active': {
        // "Pressed" state
        color: theme.palette.action.active
      },
      '&$disabled': {
        color: theme.palette.text.disabled
      },
      '&:focus': {
        color: theme.palette.primary.main
      }
    },
    textColorInherit: {
      color: theme.palette.text.secondary,
      fontWeight: 'bold',
      lineHeight: 'normal',
      opacity: 1
    }
  };
};

var _default = function _default(theme) {
  return {
    MuiTabs: MTabs(theme),
    MuiTab: MTab(theme)
  };
};

exports.default = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _styles = require("../../styles");

var MChip = function MChip(_ref) {
  var palette = _ref.palette,
      spacing = _ref.spacing,
      typography = _ref.typography,
      zDepth = _ref.zDepth;
  return {
    root: {
      borderRadius: spacing(1),
      fontSize: typography.pxToRem(13),
      fontWeight: 'normal',
      lineHeight: 1.54,
      border: "solid 1px",
      borderColor: palette.type === 'dark' ? (0, _styles.fade)(palette.blueGrey[50], 0.1) : palette.blueGrey[200],
      backgroundColor: palette.background.paper,
      color: palette.getContrastText(palette.background.paper),
      height: 24,
      paddingLeft: spacing(1.5),
      paddingTop: 0,
      paddingBottom: 0,
      transition: 'none',
      // disable MUI transitions
      boxShadow: palette.type === 'dark' ? 'none' : zDepth.for('defaultChip')['box-shadow'],
      '& $avatar': {
        // avatar and icon were added to root do to specificity issues caused by MUI v4 update. Issue can be reviewed here https://github.com/mui-org/material-ui/issues/16374
        width: 14,
        height: 14,
        marginLeft: 0,
        marginRight: spacing(1),
        fontSize: typography.pxToRem(8),
        color: palette.primary.white
      },
      '& $icon': {
        color: palette.action.passive,
        flexShrink: 0,
        width: 14,
        marginLeft: 0,
        marginRight: spacing(1),
        height: 14
      },
      '& $avatarSmall': {
        fontSize: typography.pxToRem(8),
        height: 12,
        marginLeft: 0,
        marginRight: spacing(1),
        width: 12
      },
      '& $iconSmall': {
        height: 12,
        marginLeft: 0,
        marginRight: spacing(1),
        width: 12
      },
      '& $deleteIconColorPrimary, & $deleteIconColorSecondary': {
        borderColor: (0, _styles.fade)(palette.common.white, 0.12)
      }
    },
    clickable: {
      '&:hover': (0, _extends2.default)({
        borderColor: palette.blueGrey[300],
        backgroundColor: palette.background.paper
      }, zDepth.for('chip')),
      '&:focus': (0, _extends2.default)({
        borderColor: palette.blueGrey[300],
        backgroundColor: palette.background.paper
      }, zDepth.for('chip'))
    },
    colorPrimary: {
      backgroundColor: palette.primary.main,
      borderColor: palette.primary.main,
      color: palette.type === 'dark' ? palette.text.primary : palette.primary.contrastText,
      '$clickable&:hover, &:focus': {
        backgroundColor: palette.primary.light,
        borderColor: palette.action.hover,
        '$outlined& $deleteIcon': {
          borderColor: palette.action.hover
        }
      },
      '$outlined& $deleteIcon': {
        borderColor: palette.primary.main
      }
    },
    colorSecondary: {
      backgroundColor: palette.secondary.main,
      borderColor: palette.secondary.main,
      '$clickable&:hover, &:focus, $deletable &:focus': {
        backgroundColor: palette.secondary.light,
        borderColor: palette.action.hover,
        '$outlined& $deleteIcon': {
          borderColor: palette.action.hover
        }
      },
      '$outlined& $deleteIcon': {
        borderColor: palette.secondary.main
      }
    },
    deletable: {
      '&:focus': (0, _extends2.default)({
        borderColor: palette.blueGrey[300],
        backgroundColor: palette.background.paper
      }, zDepth.for('chip'))
    },
    iconColorPrimary: {
      color: palette.type === 'dark' ? palette.text.primary : palette.blueGrey[50]
    },
    outlined: {
      backgroundColor: palette.background.paper,
      borderColor: palette.type === 'dark' ? (0, _styles.fade)(palette.blueGrey[50], 0.1) : palette.blueGrey[200],
      // needed due to specificity of incoming default overriding root overides.
      '& $deleteIcon': {
        marginRight: 0
      },
      '& $deleteIconSmall': {
        marginRight: 0
      },
      '$clickable&:hover': {
        backgroundColor: palette.type === 'dark' ? (0, _styles.fade)(palette.action.hover, 0.1) : (0, _styles.fade)(palette.action.hover, 0.12)
      },
      '$clickable&:focus': {
        backgroundColor: palette.background.paper
      },
      '$deletable&:focus': {
        backgroundColor: palette.background.paper
      },
      '& $avatar': {
        marginLeft: 0
      }
    },
    label: {
      paddingLeft: 0,
      paddingRight: spacing(1.5)
    },
    labelSmall: {
      paddingLeft: 0,
      paddingRight: spacing(1.5),
      fontSize: typography.body2.fontSize
    },
    deleteIcon: {
      alignItems: 'center',
      borderColor: palette.type === 'dark' ? (0, _styles.fade)(palette.blueGrey[50], 0.1) : palette.blueGrey[200],
      borderLeft: "solid 1px",
      display: 'flex',
      justifyContent: 'center',
      margin: 0,
      width: '18px',
      color: palette.action.passive,
      '& > svg': {
        height: '10px',
        width: '10px'
      }
    },
    deleteIconSmall: {
      height: "".concat(spacing(4.5), "px"),
      padding: "".concat(spacing(1), "px 0px"),
      marginLeft: 0,
      marginRight: 0
    },
    sizeSmall: {
      height: 18
    }
  };
};

var _default = function _default(theme) {
  return {
    MuiChip: MChip(theme)
  };
};

exports.default = _default;
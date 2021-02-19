"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var MDialog = function MDialog(theme) {
  return {
    paper: (0, _extends2.default)({}, theme.zDepth.for('dialog'), {
      border: 'none'
    })
  };
};

var MDialogTitle = function MDialogTitle(theme) {
  return {
    root: {
      '& h2': {
        fontSize: theme.typography.pxToRem(14),
        lineHeight: 'normal',
        fontWeight: 600,
        color: theme.palette.getContrastText(theme.palette.primary.main)
      },
      padding: theme.spacing(3.5, 5),
      '& h6': {
        fontSize: theme.typography.pxToRem(14),
        lineHeight: 'normal',
        fontWeight: 600,
        color: theme.palette.getContrastText(theme.palette.primary.main)
      },
      backgroundColor: theme.palette.type === 'dark' ? theme.palette.blueGrey[700] : theme.palette.primary.main
    }
  };
};

var MDialogContent = function MDialogContent(_ref) {
  var spacing = _ref.spacing;
  return {
    root: {
      padding: spacing(5),
      '&:first-child': {
        paddingTop: 24
      }
    }
  };
};

var MDialogContentText = function MDialogContentText(_ref2) {
  var palette = _ref2.palette,
      typography = _ref2.typography;
  return {
    root: {
      color: palette.text.primary,
      fontSize: typography.pxToRem(13),
      fontWeight: 'normal',
      lineHeight: 1.54,
      marginBottom: 0,
      opacity: 1
    }
  };
};

var MDialogActions = function MDialogActions(_ref3) {
  var spacing = _ref3.spacing;
  return {
    root: {
      margin: 0,
      padding: spacing(0, 5, 5, 5)
    },
    spacing: {
      margin: 0
    }
  };
};

var _default = function _default(theme) {
  return {
    MuiDialog: MDialog(theme),
    MuiDialogTitle: MDialogTitle(theme),
    MuiDialogContent: MDialogContent(theme),
    MuiDialogContentText: MDialogContentText(theme),
    MuiDialogActions: MDialogActions(theme)
  };
};

exports.default = _default;
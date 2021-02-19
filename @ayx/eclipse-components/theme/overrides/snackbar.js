"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _ayxColors = _interopRequireDefault(require("../ayx-colors"));

var MSnackbar = function MSnackbar(theme) {
  var _root;

  return {
    root: (_root = {}, (0, _defineProperty2.default)(_root, theme.breakpoints.up('sm'), {
      borderRadius: '4px'
    }), (0, _defineProperty2.default)(_root, "margin", theme.spacing(5)), (0, _defineProperty2.default)(_root, "borderColor", theme.palette.type === 'dark' ? _ayxColors.default['border-dark'] : undefined), _root)
  };
};

var MSnackbarContent = function MSnackbarContent(theme) {
  var _extends2;

  return {
    root: (0, _extends3.default)((_extends2 = {}, (0, _defineProperty2.default)(_extends2, theme.breakpoints.up('sm'), {
      borderRadius: '4px'
    }), (0, _defineProperty2.default)(_extends2, "flexWrap", 'nowrap'), (0, _defineProperty2.default)(_extends2, "color", theme.palette.type === 'dark' ? undefined : theme.palette.background.paper), (0, _defineProperty2.default)(_extends2, "backgroundColor", theme.palette.type === 'dark' ? undefined : theme.palette.info.main), (0, _defineProperty2.default)(_extends2, "padding", 0), (0, _defineProperty2.default)(_extends2, "border", 'none'), _extends2), theme.zDepth.for('snackbarContent')),
    message: {
      fontSize: theme.typography.pxToRem(13),
      fontWeight: 'normal',
      lineHeight: 1.54,
      color: theme.palette.type === 'dark' ? undefined : theme.palette.background.paper,
      paddingTop: "".concat(theme.spacing(2.25), "px"),
      paddingBottom: "".concat(theme.spacing(2.75), "px"),
      marginLeft: "".concat(theme.spacing(3.5), "px"),
      marginRight: "".concat(theme.spacing(3.5), "px")
    },
    action: {
      fontSize: theme.typography.pxToRem(13),
      fontWeight: 'normal',
      lineHeight: 1.54,
      color: theme.palette.type === 'dark' ? undefined : theme.palette.background.paper,
      paddingLeft: '0px',
      marginLeft: 'auto',
      marginRight: '0px',
      alignSelf: 'stretch',
      '& button': {
        padding: 0,
        whiteSpace: 'nowrap',
        height: 40,
        minWidth: "".concat(theme.spacing(10), "px"),
        alignSelf: 'center',
        color: theme.palette.type === 'dark' ? undefined : theme.palette.background.paper
      },
      '& button span': {
        padding: 0,
        marginLeft: "".concat(theme.spacing(3.5), "px"),
        marginRight: "".concat(theme.spacing(3.5), "px")
      },
      '& button svg': {
        width: "".concat(theme.spacing(3), "px"),
        height: "".concat(theme.spacing(3), "px")
      }
    }
  };
};

var _default = function _default(theme) {
  return {
    MuiSnackbar: MSnackbar(theme),
    MuiSnackbarContent: MSnackbarContent(theme)
  };
};

exports.default = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _ayxColors = _interopRequireDefault(require("../ayx-colors"));

var _typography = _interopRequireDefault(require("../typography"));

var _chip = _interopRequireDefault(require("./chip"));

var MAutoComplete = function MAutoComplete(theme) {
  return {
    inputRoot: {
      backgroundColor: theme.palette.background.paper,
      borderColor: theme.palette.type === 'dark' ? _ayxColors.default['border-dark'] : theme.palette.blueGrey['300'],
      '&$focused': {
        borderColor: theme.palette.primary.main,
        boxShadow: theme.palette.getFocusedShadowStyle()
      },
      '&[class*="Mui-error"]': {
        borderColor: theme.palette.error.main,
        '&$focused': {
          boxShadow: "0 0 0 0px ".concat(theme.palette.error.main)
        }
      },
      '& $input': {
        minWidth: 60
      },
      paddingLeft: theme.spacing(2),
      '&[class*="MuiInput-root"]': {
        paddingBottom: 0,
        '& $input:first-child': {
          padding: 0,
          minHeight: 28,
          '&[class*="MuiInput-inputMarginDense"]': {
            padding: 0,
            minHeight: 20
          }
        },
        '& $input': {
          '&[class*="MuiInput-inputMarginDense"]': {
            padding: theme.spacing(0, 1, 0),
            minHeight: 20
          }
        }
      }
    },
    clearIndicator: {
      color: theme.palette.action.passive,
      paddingRight: 0
    },
    groupLabel: (0, _extends2.default)({}, (0, _typography.default)(theme.palette).subtitle1, {
      backgroundColor: theme.palette.type === 'dark' ? 'rgba(255, 255, 255, 0.14)' : theme.palette.blueGrey[50],
      padding: theme.spacing(1.75, 3)
    }),
    groupUl: {
      '& $option': {
        paddingLeft: theme.spacing(3)
      }
    },
    popupIndicator: {
      color: theme.palette.action.passive,
      paddingRight: theme.spacing(1),
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1)
    },
    popupIndicatorOpen: {
      paddingLeft: theme.spacing(1),
      // material rotates the icon so padding must be switched
      paddingRight: theme.spacing(0.5) // material default

    },
    endAdornment: {
      top: 'calc(50% - 11px)',
      // Center vertically
      paddingRight: theme.spacing(2)
    },
    paper: {
      margin: 0,
      border: '1px solid',
      borderRadius: theme.spacing(1),
      borderColor: theme.palette.type === 'dark' ? _ayxColors.default['border-dark'] : theme.palette.blueGrey['300']
    },
    popper: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    },
    popperDisablePortal: {
      marginTop: -theme.spacing(1)
    },
    listbox: {
      padding: 0,
      '&:first-child': {
        paddingTop: theme.spacing(1)
      },
      '&:first-child $groupLabel': {
        marginTop: -theme.spacing(1)
      },
      '&:last-child': {
        paddingBottom: theme.spacing(1)
      },
      '& li:last-child': {
        '& $groupUl': {
          marginBottom: -theme.spacing(1)
        }
      }
    },
    option: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      height: 32
    },
    tag: (0, _extends2.default)({}, (0, _chip.default)(theme), {
      margin: theme.spacing(1, 0.75, 1, 0)
    }),
    tagSizeSmall: {
      margin: 1
    }
  };
};

var _default = function _default(theme) {
  return {
    MuiAutocomplete: MAutoComplete(theme)
  };
};

exports.default = _default;
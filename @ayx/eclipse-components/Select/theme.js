"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("../styles");

var _ayxColors = _interopRequireDefault(require("../theme/ayx-colors"));

/* eslint-disable ui-core/no-hardcoded-colors */
var MuiAyxSelect = function MuiAyxSelect(theme) {
  return {
    selectContainer: {
      width: '182px'
    },
    fullWidth: {
      width: '100%'
    },
    control: {
      boxSizing: 'border-box',
      alignItems: 'stretch',
      backgroundColor: theme.palette.type === 'dark' ? 'transparent' : theme.palette.background.paper,
      borderColor: theme.palette.type === 'dark' ? _ayxColors.default['border-dark'] : theme.palette.blueGrey[300],
      borderRadius: '4px',
      borderStyle: 'solid',
      borderWidth: 1,
      cursor: 'default',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      minHeight: 30,
      outline: 0,
      position: 'relative',
      transition: 'all 100ms',
      width: '100%'
    },
    disabled: {},
    controlDisable: {
      backgroundColor: // THIS TERNARY STUFF SHOULD GO INTO PALETTE AS SOON AS POSSIBLE
      theme.palette.type === 'dark' ? (0, _styles.lighten)(theme.palette.background.paper, 0.25) // Color choice needs UX approval
      : theme.palette.action.disabledBackground,
      borderColor: theme.palette.type === 'dark' ? theme.palette.blueGrey[300] : theme.palette.action.disabledBackground
    },
    controlFocus: {
      boxShadow: theme.palette.getFocusedShadowStyle(),
      borderColor: (0, _styles.fade)(theme.palette.primary.main, 0.5)
    },
    controlError: {
      borderColor: theme.palette.error.main,
      boxShadow: "0 0 0 0px ".concat(theme.palette.error.main)
    },
    indicator: {
      alignSelf: 'center',
      cursor: 'pointer',
      color: theme.palette.action.passive,
      display: 'flex',
      paddingRight: theme.spacing(1),
      transition: 'color 150ms',
      '&$disabled': {
        color: theme.palette.action.disabled
      }
    },
    indicatorsContainer: {
      alignItems: 'stretch',
      alignSelf: 'stretch',
      display: 'flex',
      paddingLeft: "".concat(theme.spacing(1), "px"),
      boxSizing: 'content-box'
    },
    input: {
      display: 'flex',
      flex: 1,
      padding: 0,
      minWidth: 60
    },
    loadingIndicator: {
      alignSelf: 'center',
      marginRight: theme.spacing(2)
    },
    loadingMessage: {},
    noOptionsMessage: {},
    menu: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      border: '1px solid',
      borderRadius: theme.spacing(1),
      borderColor: theme.palette.type === 'dark' ? _ayxColors.default['border-dark'] : theme.palette.blueGrey[300],
      '& ul': {
        marginTop: 0,
        marginBottom: 0
      }
    },
    menuList: {},
    menuListItem: {
      display: 'flex',
      '&:first-child': {
        paddingTop: theme.spacing(1)
      },
      '&:last-child': {
        paddingBottom: theme.spacing(1)
      }
    },
    menuListActionOption: {
      padding: theme.spacing(1, 0)
    },
    menuOpenControl: {},
    muiFormControl: {},
    multiValueContainer: {
      height: '18px',
      alignSelf: 'center',
      margin: theme.spacing(1, 0.75, 1, 0),
      overflow: 'hidden',
      '&$disabled': {
        color: theme.palette.text.disabled,
        backgroundColor: theme.palette.action.disabledBackground,
        borderColor: theme.palette.action.disabledBackground,
        '& svg': {
          color: theme.palette.action.disabled,
          borderColor: theme.palette.action.disabledBackground
        }
      }
    },
    multiValueLabel: {
      fontSize: theme.typography.body2.fontSize,
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'noWrap'
    },
    multiValueRemove: {},
    noResultOption: {
      cursor: 'pointer',
      padding: "".concat(theme.spacing(1), "px ").concat(theme.spacing(3), "px"),
      width: '100%',
      userSelect: 'none'
    },
    option: {
      cursor: 'pointer',
      padding: "".concat(theme.spacing(2), "px ").concat(theme.spacing(3), "px"),
      width: '100%',
      userSelect: 'none'
    },
    optionFocus: {
      backgroundColor: theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.1)'
    },
    optionText: {
      '& *': {
        textOverflow: 'ellipsis',
        whiteSpace: 'noWrap',
        overflow: 'hidden'
      },
      '& span': {
        display: 'block'
      },
      color: theme.palette.text.primary,
      margin: 0
    },
    optionIcon: {},
    placeholder: {
      position: 'absolute',
      alignItems: 'stretch',
      alignSelf: 'center',
      color: theme.palette.text.secondary,
      display: 'flex',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      lineHeight: '28px',
      '&$disabled': {
        color: theme.palette.text.disabled
      }
    },
    singleValue: {
      alignSelf: 'center',
      display: 'flex',
      color: theme.palette.text.primary,
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      '&$disabled': {
        color: theme.palette.text.disabled
      }
    },
    valueContainer: {
      '&>[class*="-singleValue"]': {
        marginLeft: 0
      },
      alignItems: 'stretch',
      display: 'flex',
      flex: 1,
      flexWrap: 'wrap',
      padding: "0px ".concat(theme.spacing(2), "px"),
      position: 'relative',
      overflow: 'hidden',
      minHeight: 28
    }
  };
};

var _default = {
  MuiAyxSelect: MuiAyxSelect
};
exports.default = _default;
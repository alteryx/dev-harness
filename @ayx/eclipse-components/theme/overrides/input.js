"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("../../styles");

var _ayxColors = _interopRequireDefault(require("../ayx-colors"));

var MInput = function MInput(theme) {
  var focusPrimaryShadowColor = (0, _styles.fade)(theme.palette.primary.main, 0.5);
  var focusedPrimaryShadowStyle = "0 0 0 2px ".concat(focusPrimaryShadowColor, ", 0 0 0 2px ").concat((0, _styles.fade)(theme.palette.background.paper, 0.5));
  return {
    root: {
      fontSize: theme.typography.pxToRem(13),
      fontWeight: 'normal',
      lineHeight: 'none',
      border: "1px solid",
      borderColor: theme.palette.type === 'dark' ? _ayxColors.default['border-dark'] : theme.palette.blueGrey[200],
      borderRadius: 4,
      overflow: 'hidden',
      backgroundColor: theme.palette.type === 'dark' ? undefined : theme.palette.background.paper,
      outline: 'none',
      transition: 'border 200ms ease-out',
      '&$focused': {
        boxShadow: focusedPrimaryShadowStyle,
        borderColor: (0, _styles.fade)(theme.palette.primary.main, 0.5)
      },
      '&:hover': {
        borderColor: theme.palette.type === 'dark' ? theme.palette.grey[600] : theme.palette.blueGrey[300]
      },
      '&$disabled': {
        color: theme.palette.text.disabled,
        borderColor: theme.palette.action.disabledBackground,
        backgroundColor: theme.palette.action.disabledBackground,
        '& svg': {
          color: theme.palette.text.disabled
        },
        '&>input': {
          border: 'none !important'
        }
      },
      '&$error': {
        borderColor: theme.palette.error.main,
        boxShadow: 'none'
      }
    },
    input: {
      padding: '4px 8px',
      fontSize: 13,
      lineHeight: '20px',
      height: '20px',
      '&::placeholder': {
        transition: 'color 200ms ease-out',
        color: theme.palette.text.secondary
      },
      '$focused &': {
        '&::placeholder': {
          color: theme.palette.type === 'light' ? theme.palette.blueGrey[500] : theme.palette.grey[600]
        }
      }
    },
    inputTypeSearch: {
      '&::-webkit-search-cancel-button': {
        fontSize: 16
      }
    },
    inputMultiline: {
      height: 'auto'
    },
    formControl: {
      'label + &': {
        marginTop: 0
      }
    }
  };
};

var MFilledInput = function MFilledInput(theme) {
  var focusPrimaryShadowColor = (0, _styles.fade)(theme.palette.primary.main, 0.5);
  var focusedPrimaryShadowStyle = "0 0 0 3px ".concat(focusPrimaryShadowColor, ", 0 0 0 2px ").concat((0, _styles.fade)(theme.palette.background.paper, 0.5));
  return {
    root: {
      fontSize: theme.typography.pxToRem(13),
      fontWeight: 'normal',
      lineHeight: 'none',
      borderColor: theme.palette.type === 'dark' ? _ayxColors.default['border-dark'] : theme.palette.blueGrey[200],
      borderRadius: 3,
      overflow: 'hidden',
      outline: 'none',
      transition: 'border 200ms ease-out',
      '&$disabled': {
        color: theme.palette.text.disabled,
        borderColor: theme.palette.action.disabledBackground,
        backgroundColor: theme.palette.action.disabledBackground,
        '& svg': {
          color: theme.palette.text.disabled
        },
        '&>input': {
          border: 'none !important'
        }
      },
      border: 0,
      padding: 1,
      // Use padding instead of a border because of the alpha of the background colors
      backgroundColor: theme.palette.type === 'dark' ? (0, _styles.fade)(theme.palette.blueGrey['800'], 0.2) : (0, _styles.fade)(theme.palette.blueGrey['300'], 0.25),
      '&:hover': {
        borderColor: theme.palette.type === 'dark' ? theme.palette.grey[600] : theme.palette.blueGrey[300],
        backgroundColor: theme.palette.type === 'dark' ? (0, _styles.fade)(theme.palette.blueGrey['800'], 0.35) : (0, _styles.fade)(theme.palette.blueGrey['300'], 0.4)
      },
      '&$focused': {
        boxShadow: focusedPrimaryShadowStyle,
        backgroundColor: theme.palette.type === 'dark' ? (0, _styles.fade)(theme.palette.blueGrey['800'], 0.2) : (0, _styles.fade)(theme.palette.blueGrey['300'], 0.25)
      },
      '&$error': {
        borderColor: theme.palette.error.main,
        border: '1px solid',
        boxShadow: 'none',
        padding: 0 // Root is using padding instead of a border

      }
    },
    input: {
      padding: '4px 8px',
      fontSize: 13,
      lineHeight: '20px',
      height: '20px',
      '&::placeholder': {
        transition: 'color 200ms ease-out',
        color: theme.palette.text.secondary
      },
      '$focused &': {
        '&::placeholder': {
          color: theme.palette.type === 'light' ? theme.palette.blueGrey[500] : theme.palette.grey[600]
        }
      },
      color: theme.palette.type === 'dark' ? theme.palette.text.secondary : undefined,
      '&$disabled::placeholder': {
        color: theme.palette.text.disabled
      },
      '&::-webkit-search-cancel-button': {
        display: 'none'
      }
    },
    adornedStart: {
      paddingLeft: 0
    },
    adornedEnd: {
      paddingRight: 0
    }
  };
};

var MInputAdornment = function MInputAdornment(_ref) {
  var palette = _ref.palette,
      spacing = _ref.spacing,
      typography = _ref.typography;
  return {
    root: {
      color: palette.text.secondary,
      fontSize: typography.pxToRem(13)
    },
    positionStart: {
      marginLeft: spacing(2),
      marginRight: spacing(2),
      '& svg': {
        color: palette.action.passive
      }
    },
    positionEnd: {
      marginLeft: spacing(2),
      marginRight: spacing(2),
      '& svg': {
        color: palette.action.passive
      }
    },
    filled: {
      '&$positionStart:not($hiddenLabel)': {
        marginTop: 0 // Undo MUI specific filled style

      }
    }
  };
};

var MInputLabel = function MInputLabel(theme) {
  return {
    root: {
      left: 10,
      position: 'relative'
    },
    formControl: {
      // retaining the native relative-absolute parent/child scheme, mimic left-padding
      left: 8,
      transform: 'translate(0, 0px) scale(1)',
      // reset from default: 'translate(0, 24px) scale(1)',
      color: theme.palette.text.secondary,
      fontWeight: 600,
      fontSize: theme.typography.pxToRem(13),
      lineHeight: '15px',
      userSelect: 'none',
      position: 'relative'
    },
    shrink: {
      transform: 'translate(-8px, -4px) ',
      // default: 'translate(0, 1.5px) scale(0.75)'
      color: theme.palette.text.secondary,
      fontWeight: 600,
      fontSize: theme.typography.pxToRem(13),
      lineHeight: '15px',
      userSelect: 'none'
    },
    outlined: {
      left: 0
    },
    filled: {
      '&$shrink': {
        transform: 'translate(-8px, -4px) scale(1)'
      }
    }
  };
};

var placeholder = function placeholder(theme) {
  return {
    transition: '0.1s color',
    color: theme.palette.text.secondary,
    opacity: 1
  };
};

var focusedPlaceholder = function focusedPlaceholder(theme) {
  return {
    color: theme.palette.type === 'dark' ? theme.palette.blueGrey[600] : theme.palette.blueGrey[500]
  };
};

var MInputBase = function MInputBase(theme) {
  return {
    root: {},
    input: {
      '&::-webkit-input-placeholder': placeholder(theme),
      '&::-moz-placeholder': placeholder(theme),
      // Firefox 19+
      '&:-ms-input-placeholder': placeholder(theme),
      // IE 11
      '&::-ms-input-placeholder': placeholder(theme),
      // Edge
      '&::placeholder': placeholder(theme),
      '&:focus': {
        '&::-webkit-input-placeholder': focusedPlaceholder(theme),
        '&::-moz-placeholder': focusedPlaceholder(theme),
        // Firefox 19+
        '&:-ms-input-placeholder': focusedPlaceholder(theme),
        // IE 11
        '&::-ms-input-placeholder': focusedPlaceholder(theme),
        // Edge
        '&::placeholder': focusedPlaceholder(theme)
      },
      '&$inputAdornedStart': {
        paddingLeft: 0
      },
      '&$inputAdornedEnd': {
        paddingRight: 0
      }
    }
  };
};

var _default = function _default(theme) {
  return {
    MuiFilledInput: MFilledInput(theme),
    MuiFilledInputAdornment: MInputAdornment(theme),
    MuiInput: MInput(theme),
    MuiInputBase: MInputBase(theme),
    MuiInputAdornment: MInputAdornment(theme),
    MuiInputLabel: MInputLabel(theme)
  };
};

exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var MSwitch = function MSwitch(theme) {
  return {
    root: {
      padding: theme.spacing(1.5),
      height: 32,
      width: 46
    },
    track: {
      backgroundColor: theme.palette.type === 'dark' ? theme.palette.blueGrey[700] : theme.palette.blueGrey[500],
      opacity: 1,
      borderRadius: 10,
      transition: theme.palette.getFocusTransitions(),
      width: 34
    },
    thumb: {
      color: theme.palette.common.white,
      height: 18,
      marginRight: -7,
      marginTop: -2,
      width: 18
    },
    colorPrimary: {
      '&$checked': {
        color: theme.palette.common.white,
        // Make thumb white
        '&:hover': {
          backgroundColor: 'transparent',
          // Turn off hover circle
          color: theme.palette.blueGrey[100] // Represent hover instead by changing thumb color

        }
      },
      '&$checked + $track': {
        opacity: 1 // Match intention exactly (not a faded version)

      },
      '&$disabled + $track': {
        backgroundColor: theme.palette.action.disabledBackground,
        opacity: 1
      }
    },
    colorSecondary: {
      '&$checked': {
        color: theme.palette.common.white,
        // Make thumb white
        '&:hover': {
          backgroundColor: 'transparent',
          // Turn off hover circle
          color: theme.palette.blueGrey[100] // Represent hover instead by changing thumb color

        },
        '&$disabled + $track': {
          backgroundColor: theme.palette.action.disabledBackground,
          opacity: 1
        }
      },
      '&$checked + $track': {
        opacity: 1 // Match intention exactly (not a faded version)

      },
      '&$disabled + $track': {
        backgroundColor: theme.palette.action.disabledBackground,
        opacity: 1
      }
    },
    sizeSmall: {
      height: 22,
      padding: theme.spacing(1, 1.5),
      width: 36,
      '& $thumb': {
        color: theme.palette.common.white,
        height: 12,
        width: 12,
        marginTop: 1,
        marginLeft: 3,
        marginRight: -3
      },
      '& $track': {
        backgroundColor: theme.palette.type === 'dark' ? theme.palette.blueGrey[700] : theme.palette.blueGrey[500],
        borderRadius: 8,
        height: 14,
        width: 24
      },
      '& $switchBase': {
        left: 0,
        '&$checked': {
          transform: 'translateX(50%)'
        }
      },
      '& + .MuiFormControlLabel-label, & + .MuiFormControlLabel-label .Mui-disabled': {
        marginRight: -1
      }
    },
    switchBase: {
      left: -2,
      '&$checked': {
        transform: 'translateX(50%)'
      },
      '&:hover': {
        color: theme.palette.blueGrey[100] // Represent hover by changing thumb color

      },
      '&$checked + $track': {
        opacity: 1
      },
      '&$disabled + $track': {
        backgroundColor: theme.palette.action.disabledBackground,
        opacity: 1
      }
    }
  };
};

var _default = function _default(theme) {
  return {
    MuiSwitch: MSwitch(theme)
  };
};

exports.default = _default;
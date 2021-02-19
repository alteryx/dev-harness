"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("../../styles");

var MSlider = function MSlider(theme) {
  return {
    root: {
      '&$disabled': {
        '& $rail, & $track, & $thumb': {
          color: theme.palette.blueGrey[400]
        }
      },
      '&$vertical': {
        '& $rail, & $track': {
          width: 4
        },
        '& $thumb': {
          marginLeft: -4
        },
        '&$disabled': {
          '& $thumb': {
            marginLeft: -2
          }
        },
        '& $mark': {
          left: 14
        }
      },
      padding: theme.spacing(1.5, 0)
    },
    markLabel: {
      top: 15
    },
    thumb: {
      marginTop: -4,
      '&$disabled': {
        top: 7
      }
    },
    vertical: {
      '& $thumb': {
        marginLeft: -4
      },
      '& $mark': {
        top: 'auto'
      }
    },
    disabled: {
      '& $track': {
        backgroundColor: theme.palette.blueGrey[400]
      }
    },
    track: {
      height: 4,
      borderRadius: 2,
      backgroundColor: theme.palette.primary.main
    },
    rail: {
      height: 4,
      opacity: 1,
      borderRadius: 2,
      backgroundColor: theme.palette.type === 'dark' ? (0, _styles.fade)(theme.palette.grey[700], 0.5) : (0, _styles.fade)(theme.palette.blueGrey[300], 0.7)
    },
    markActive: {
      backgroundColor: theme.palette.type === 'dark' ? (0, _styles.fade)(theme.palette.grey[900], 0.6) : theme.palette.primary.contrastText
    },
    mark: {
      backgroundColor: theme.palette.type === 'dark' ? theme.palette.grey[600] : theme.palette.blueGrey[500],
      top: 7
    },
    trackInverted: {
      '& $rail': {
        backgroundColor: theme.palette.primary.main
      },
      '& $track': {
        backgroundColor: theme.palette.type === 'dark' ? theme.palette.grey[700] : theme.palette.blueGrey[300]
      }
    }
  };
};

var _default = function _default(theme) {
  return {
    MuiSlider: MSlider(theme)
  };
};

exports.default = _default;
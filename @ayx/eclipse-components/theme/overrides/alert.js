"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("../../styles");

var MuiAlert = function MuiAlert(_ref) {
  var palette = _ref.palette,
      spacing = _ref.spacing,
      typography = _ref.typography;
  var standardOpacity = palette.type === 'dark' ? 0.15 : 0.07;
  var outlinedOpacity = palette.type === 'dark' ? 0.2 : 0.07;
  var filledOpacity = palette.type === 'dark' ? 0.08 : 0.12;
  return {
    root: {
      borderRadius: spacing(1),
      fontSize: '.8125rem',
      lineHeight: 1.54,
      padding: spacing(0.5, 2, 0.5, 2.5)
    },
    action: {
      marginRight: 0,
      '& button': {
        paddingLeft: spacing(1),
        paddingRight: spacing(1),
        '& .MuiSvgIcon-root': {
          fontSize: typography.pxToRem(16)
        }
      },
      '& .MuiDivider-vertical': {
        marginLeft: spacing(2),
        marginRight: spacing(2)
      },
      '& .MuiSvgIcon-root': {
        padding: 1
      }
    },
    icon: {
      padding: spacing(2.75, 0),
      marginRight: spacing(1.5)
    },
    standardInfo: {
      color: palette.info.dark,
      '& .MuiDivider-vertical': {
        backgroundColor: (0, _styles.fade)(palette.info.main, standardOpacity)
      },
      '& $icon': {
        color: palette.info.dark
      }
    },
    standardError: {
      color: palette.error.dark,
      '& .MuiDivider-vertical': {
        backgroundColor: (0, _styles.fade)(palette.error.main, standardOpacity)
      },
      '& $icon': {
        color: palette.error.dark
      }
    },
    standardWarning: {
      color: palette.warning.dark,
      '& .MuiDivider-vertical': {
        backgroundColor: (0, _styles.fade)(palette.warning.main, standardOpacity)
      },
      '& $icon': {
        color: palette.warning.dark
      }
    },
    standardSuccess: {
      color: palette.success.dark,
      '& .MuiDivider-vertical': {
        backgroundColor: (0, _styles.fade)(palette.success.main, standardOpacity)
      },
      '& $icon': {
        color: palette.success.dark
      }
    },
    outlinedInfo: {
      padding: spacing(0.25, 2, 0.25, 2.5),
      color: palette.info.dark,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: palette.type === 'dark' ? (0, _styles.fade)(palette.info.main, 0.4) : (0, _styles.fade)(palette.info.main, 0.15),
      '& .MuiDivider-vertical': {
        backgroundColor: (0, _styles.fade)(palette.info.main, outlinedOpacity)
      },
      '& $icon': {
        color: palette.info.dark
      }
    },
    outlinedError: {
      padding: spacing(0.25, 2, 0.25, 2.5),
      color: palette.error.dark,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: palette.type === 'dark' ? (0, _styles.fade)(palette.error.main, 0.4) : (0, _styles.fade)(palette.error.main, 0.15),
      '& .MuiDivider-vertical': {
        backgroundColor: (0, _styles.fade)(palette.error.main, outlinedOpacity)
      },
      '& $icon': {
        color: palette.error.dark
      }
    },
    outlinedWarning: {
      padding: spacing(0.25, 2, 0.25, 2.5),
      color: palette.warning.dark,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: palette.type === 'dark' ? (0, _styles.fade)(palette.warning.main, 0.4) : (0, _styles.fade)(palette.warning.main, 0.15),
      '& .MuiDivider-vertical': {
        backgroundColor: (0, _styles.fade)(palette.warning.main, outlinedOpacity)
      },
      '& $icon': {
        color: palette.warning.dark
      }
    },
    outlinedSuccess: {
      padding: spacing(0.25, 2, 0.25, 2.5),
      color: palette.success.dark,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: palette.type === 'dark' ? (0, _styles.fade)(palette.success.main, 0.4) : (0, _styles.fade)(palette.success.main, 0.15),
      '& .MuiDivider-vertical': {
        backgroundColor: (0, _styles.fade)(palette.success.main, outlinedOpacity)
      },
      '& $icon': {
        color: palette.success.dark
      }
    },
    filledInfo: {
      borderRadius: spacing(1.5),
      '& .MuiDivider-vertical': {
        backgroundColor: (0, _styles.fade)(palette.info.contrastText, filledOpacity)
      },
      '& $icon': {
        opacity: 0.7
      }
    },
    filledError: {
      borderRadius: spacing(1.5),
      '& .MuiDivider-vertical': {
        backgroundColor: (0, _styles.fade)(palette.error.contrastText, filledOpacity)
      },
      '& $icon': {
        opacity: 0.7
      }
    },
    filledWarning: {
      borderRadius: spacing(1.5),
      '& .MuiDivider-vertical': {
        backgroundColor: (0, _styles.fade)(palette.warning.contrastText, filledOpacity)
      },
      '& $icon': {
        opacity: 0.7
      }
    },
    filledSuccess: {
      borderRadius: spacing(1.5),
      '& .MuiDivider-vertical': {
        backgroundColor: (0, _styles.fade)(palette.success.contrastText, filledOpacity)
      },
      '& $icon': {
        opacity: 0.7
      }
    }
  };
};

var MuiAlertTitle = function MuiAlertTitle() {
  return {
    root: {
      marginTop: 0,
      fontWeight: 600
    }
  };
};

var _default = function _default(theme) {
  return {
    MuiAlert: MuiAlert(theme),
    MuiAlertTitle: MuiAlertTitle()
  };
};

exports.default = _default;
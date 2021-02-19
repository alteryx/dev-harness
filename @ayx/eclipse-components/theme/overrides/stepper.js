"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var MStepper = function MStepper(_ref) {
  var palette = _ref.palette,
      spacing = _ref.spacing;
  return {
    root: {
      width: '100%',
      backgroundColor: palette.type === 'dark' ? palette.background.default : undefined,
      padding: spacing(3.5)
    },
    horizontal: {
      height: 44
    },
    alternativeLabel: {
      height: '100%'
    }
  };
};

var MStepContent = function MStepContent(_ref2) {
  var spacing = _ref2.spacing,
      palette = _ref2.palette;
  return {
    root: {
      marginLeft: spacing(2),
      borderLeft: "1px solid ".concat(palette.divider),
      paddingLeft: spacing(4.25)
    },
    last: {
      marginTop: spacing(3)
    },
    transition: {
      paddingBottom: spacing(1)
    }
  };
};

var MStepIcon = function MStepIcon(theme) {
  return {
    root: {
      fontSize: theme.spacing(5),
      color: theme.palette.blueGrey[500]
    }
  };
};

var MStepConnector = function MStepConnector(_ref3) {
  var spacing = _ref3.spacing,
      palette = _ref3.palette;
  return {
    vertical: {
      marginLeft: spacing(2),
      '&$disabled': {
        '& $line': {
          borderColor: palette.divider,
          height: 20
        }
      },
      '& $line': {
        borderColor: palette.divider,
        minHeight: 20
      }
    },
    horizontal: {
      '&$disabled': {
        '& $line': {
          borderColor: palette.divider
        }
      },
      '& $line': {
        borderColor: palette.divider
      }
    },
    alternativeLabel: {
      top: spacing(2)
    },
    lineVertical: {
      minHeight: 20
    }
  };
};

var MStepLabel = function MStepLabel(theme) {
  return {
    label: {
      fontSize: theme.typography.pxToRem(13),
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.text.secondary,
      lineHeight: 1.54,
      '&$completed': {
        fontSize: theme.typography.pxToRem(13),
        fontWeight: theme.typography.fontWeightBold,
        lineHeight: 1.54
      },
      '&$active': {
        fontSize: theme.typography.pxToRem(13),
        fontWeight: theme.typography.fontWeightBold,
        lineHeight: 1.54
      },
      '&$alternativeLabel': {
        marginTop: theme.spacing(1)
      }
    },
    labelContainer: {
      '& span + *': {
        marginTop: -2
      }
    }
  };
};

var _default = function _default(theme) {
  return {
    MuiStepper: MStepper(theme),
    MuiStepContent: MStepContent(theme),
    MuiStepLabel: MStepLabel(theme),
    MuiStepIcon: MStepIcon(theme),
    MuiStepConnector: MStepConnector(theme)
  };
};

exports.default = _default;
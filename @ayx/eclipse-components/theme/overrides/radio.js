"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("../../styles");

var MRadio = function MRadio(theme) {
  var darkMode = theme.palette.type === 'dark';
  var checkedColor = darkMode ? theme.palette.text.link : theme.palette.primary.main;
  var secondaryCheckedColor = darkMode ? theme.palette.text.link : theme.palette.secondary.main;
  return {
    root: {
      backgroundColor: 'transparent',
      borderRadius: '50%',
      color: darkMode ? theme.palette.blueGrey[600] : theme.palette.blueGrey[300],
      '&:disabled': {
        color: (0, _styles.fade)(theme.palette.blueGrey[300], 0.5),
        // Remove hover circle
        backgroundColor: 'transparent'
      },
      '& svg': {
        fontSize: 14
      },
      '& > .MuiIconButton-label': {
        borderRadius: '50%',
        transition: theme.palette.getFocusTransitions()
      },
      '& span:focus-within': {
        borderRadius: '50%'
      },
      padding: theme.spacing(1.5)
    },
    colorSecondary: {
      '&:hover': {
        color: theme.palette.secondary.main
      },
      '&$checked': {
        color: secondaryCheckedColor,
        '&:hover': {
          color: secondaryCheckedColor,
          backgroundColor: 'transparent'
        }
      }
    },
    colorPrimary: {
      '&:hover': {
        color: theme.palette.blueGrey[500]
      },
      '&$checked': {
        color: checkedColor,
        '&:hover': {
          color: checkedColor,
          backgroundColor: 'transparent'
        }
      }
    }
  };
};

var _default = function _default(theme) {
  return {
    MuiRadio: MRadio(theme)
  };
};

exports.default = _default;
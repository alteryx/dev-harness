"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("../../styles");

var MuiCheckbox = function MuiCheckbox(_ref) {
  var palette = _ref.palette,
      spacing = _ref.spacing;
  var darkMode = palette.type === 'dark';
  var checkedColor = darkMode ? palette.text.link : palette.primary.main;
  return {
    root: {
      padding: spacing(1.5),
      color: darkMode ? palette.blueGrey[600] : palette.blueGrey[300],
      backgroundColor: 'transparent',
      '&:hover': {
        color: palette.blueGrey[500],
        backgroundColor: 'transparent',
        '&$checked': {
          color: checkedColor,
          backgroundColor: 'transparent'
        }
      },
      '&$disabled': {
        backgroundColor: 'transparent',
        color: (0, _styles.fade)(palette.blueGrey[300], 0.5)
      }
    },
    colorPrimary: {
      '&$checked': {
        '&:hover': {
          color: palette.blueGrey[500],
          backgroundColor: 'transparent'
        }
      }
    },
    colorSecondary: {
      '&$checked': {
        color: checkedColor,
        backgroundColor: 'transparent',
        '&:hover': {
          color: palette.blueGrey[500],
          backgroundColor: 'transparent'
        },
        '&:focus': {
          color: palette.blueGrey[500],
          backgroundColor: 'transparent'
        }
      }
    }
  };
};

var _default = function _default(theme) {
  return {
    MuiCheckbox: MuiCheckbox(theme)
  };
};

exports.default = _default;
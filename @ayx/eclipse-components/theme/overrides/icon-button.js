"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var hoverOpacity = 0.4; // We should consider changing palette.action.hoverOpacity

var MIconButton = function MIconButton(_ref) {
  var palette = _ref.palette,
      spacing = _ref.spacing;
  return {
    root: {
      // color: MUI defaults to action.active
      // Animate changing variants
      borderRadius: spacing(1),
      // match Button border radius
      padding: spacing(1),
      '&:focus, &:hover': {
        backgroundColor: 'transparent'
      },
      '&:active': {
        color: palette.primary.dark
      }
    },
    colorPrimary: {
      '&:focus, &:hover': {
        backgroundColor: 'transparent'
      },
      '&:active': {
        color: palette.primary.dark
      }
    },
    colorSecondary: {
      '&:focus, &:hover': {
        backgroundColor: 'transparent'
      },
      '&:active': {
        color: palette.secondary.dark
      }
    },
    colorInherit: {
      '&:focus, &:hover': {
        opacity: 1 - hoverOpacity
      }
    },
    edgeEnd: {
      marginRight: -spacing(1),
      '$sizeSmall&': {
        marginRight: -spacing(1)
      }
    },
    edgeStart: {
      marginLeft: -spacing(1),
      '$sizeSmall&': {
        marginLeft: -spacing(1)
      }
    },
    sizeSmall: {
      padding: spacing(1)
    }
  };
};

var _default = function _default(theme) {
  return {
    MuiIconButton: MIconButton(theme)
  };
};

exports.default = _default;
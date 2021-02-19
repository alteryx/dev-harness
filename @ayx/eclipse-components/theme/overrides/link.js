"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var MuiLink = function MuiLink(theme) {
  return {
    // This does not match Material's css api for Link, however
    // when focusVisible is used it affects the focus states
    // for other components using buttons NOT overriding that class (Tab, RadioGroup, etc.)
    root: {
      '&$focusVisible': {
        borderRadius: 4,
        outline: 'none',
        boxShadow: theme.palette.getFocusedShadowStyle()
      }
    },
    button: {
      '&$focusVisible': {
        borderRadius: 4,
        boxShadow: theme.palette.getFocusedShadowStyle(),
        outline: 'none'
      }
    }
  };
};

var _default = function _default(theme) {
  return {
    MuiLink: MuiLink(theme)
  };
};

exports.default = _default;
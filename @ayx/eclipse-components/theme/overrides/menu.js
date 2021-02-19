"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var MMenu = function MMenu() {
  return {
    paper: {
      borderRadius: 4
    }
  };
};

var MMenuItem = function MMenuItem(theme) {
  return {
    root: {
      fontSize: theme.typography.pxToRem(13),
      fontWeight: 'normal',
      lineHeight: 1.54,
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(3)
    }
  };
};

var _default = function _default(theme) {
  return {
    MuiMenu: MMenu(),
    MuiMenuItem: MMenuItem(theme)
  };
};

exports.default = _default;
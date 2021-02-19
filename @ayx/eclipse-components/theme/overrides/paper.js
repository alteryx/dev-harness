"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("../../styles");

/* eslint-disable ui-core/no-hardcoded-colors */
var shadowColorDark = '#000';

var MPaper = function MPaper(theme) {
  return {
    root: {},
    rounded: {
      borderRadius: theme.spacing(1.5)
    },
    elevation0: {
      boxShadow: theme.zDepth.shadows[0]
    },
    elevation1: {
      boxShadow: theme.palette.type === 'dark' ? "0 1px 0 0 ".concat((0, _styles.fade)(shadowColorDark, 0.04)) : theme.zDepth.shadows[1]
    },
    elevation2: {
      boxShadow: theme.palette.type === 'dark' ? "0 1px 0px 0 ".concat((0, _styles.fade)(shadowColorDark, 0.12)) : theme.zDepth.shadows[2]
    },
    elevation3: {
      boxShadow: theme.palette.type === 'dark' ? "0 5px 10px 0 ".concat((0, _styles.fade)(shadowColorDark, 0.16)) : theme.zDepth.shadows[3]
    },
    elevation4: {
      boxShadow: theme.palette.type === 'dark' ? "0 10px 20px 0 ".concat((0, _styles.fade)(shadowColorDark, 0.25)) : theme.zDepth.shadows[4]
    },
    elevation5: {
      boxShadow: theme.palette.type === 'dark' ? "0 10px 20px 0 ".concat((0, _styles.fade)(shadowColorDark, 0.3)) : theme.zDepth.shadows[5]
    }
  };
};

var _default = function _default(theme) {
  return {
    MuiPaper: MPaper(theme)
  };
};

exports.default = _default;
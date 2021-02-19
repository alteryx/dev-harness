"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var MDrawer = function MDrawer() {
  return {
    paper: {// backgroundImage: 'linear-gradient(154deg, #1b406c, #0d2345)', putting this here just to be consistent with the previous colors
      // fontSize: theme.typography.pxToRem(13),
      // fontWeight: 'normal',
      // lineHeight: 1.54,
      // color: theme.palette.blueGrey[200]
      // target MuiList styles within Drawer specifically
      // TODO: // Figure out a way to have this style apply to listItems
      // '& div[class*="root-"][class*="button-"]:hover': {
      //   backgroundColor: 'rgba(10, 113, 208, 0.15)'
      // },
    }
  };
};

var _default = function _default() {
  return {
    MuiDrawer: MDrawer()
  };
};

exports.default = _default;
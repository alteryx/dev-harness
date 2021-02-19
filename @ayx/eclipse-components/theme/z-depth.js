"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var shadows = ['none', // [1]: cards
'0 1px 0 0 rgba(37, 45, 57, 0.02)', // [2]: buttons, thumbnail hover, card hover
'0 1px 0px 0 rgba(34, 54, 70, 0.1)', // [3]: dropdown menu, D/T pickers, tooltips, D&D
'0 5px 10px 0 rgba(13, 35, 69, 0.15)', // [4]: modals
'0 10px 20px 0 rgba(37, 45, 57, 0.2)', // [5]: dialogs
'0 10px 20px 0 rgba(3, 13, 29, 0.2)', // [6]: default chip
'0 1px 0 0 rgba(220, 227, 240, 0.25)'];
var zDepth = {
  shadows: shadows,
  for: function _for(componentName) {
    var depthMap = {
      card: 1,
      button: 2,
      'card:hover': 2,
      select: 3,
      tooltip: 3,
      modal: 4,
      dialog: 5,
      snackbarContent: 3,
      popover: 3,
      chip: 2,
      defaultChip: 6
    };
    var style = {
      'box-shadow': 'none'
    };

    if (Object.keys(depthMap).includes(componentName)) {
      style['box-shadow'] = "".concat(shadows[depthMap[componentName]]);
    } else {
      // eslint-disable-next-line no-console
      console.info("component '".concat(componentName, "' does not have an entry in the theme zDepth map: \n "), depthMap);
    }

    return style;
  }
};
var _default = zDepth;
exports.default = _default;
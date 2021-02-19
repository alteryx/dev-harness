"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("../styles");

/* eslint-disable ui-core/no-hardcoded-colors */
// Define blueGrey spectrum first, as many other palette colors are derived from these
var BlueGreys = {
  light: {
    50: '#f7faff',
    100: '#eaeff9',
    200: '#dce3f0',
    300: '#c8d2e6',
    400: '#a7b6d1',
    500: '#8698ba',
    600: '#647492',
    700: '#4f5d75',
    800: '#3a4759',
    820: '#364253',
    840: '#323d4c',
    860: '#2d3746',
    880: '#29323f',
    900: '#252d39'
  },
  dark: {
    50: '#f3f7ff',
    100: '#e9edf8',
    200: '#d9dfec',
    300: '#c4cada',
    400: '#9ea5b4',
    500: '#7d8493',
    600: '#575d6b',
    700: '#454b58',
    800: '#2b2f38',
    820: '#252830',
    840: '#1f2229',
    860: '#1a1d23',
    880: '#14171c',
    900: '#0e1014'
  }
};
/* eslint-disable complexity */

var getUICorePalette = function getUICorePalette(_) {
  var paletteType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'light';
  var darkMode = paletteType === 'dark';
  var blueGrey = BlueGreys[paletteType];
  var primaryMain = '#0a71d0';
  var selectedBase = darkMode ? primaryMain : '#0085ff';
  var textSecondaryBase = darkMode ? '#d6dff2' : '#0a204a';
  var hoverBase = BlueGreys.light[500];
  return {
    type: paletteType,
    // Intentions
    primary: {
      main: primaryMain
    },
    secondary: {
      main: '#309cff'
    },
    error: {
      main: '#d7354a',
      light: '#ff7082'
    },
    success: {
      main: '#008765',
      light: '#43bf9f'
    },
    warning: {
      main: '#e15428',
      light: '#ff8a66'
    },
    info: {
      main: '#1061ad',
      light: '#4c97ff',
      dark: '#003a70'
    },
    text: {
      primary: darkMode ? blueGrey[50] : blueGrey[900],
      secondary: darkMode ? (0, _styles.fade)(textSecondaryBase, 0.7) : (0, _styles.fade)(textSecondaryBase, 0.65),
      disabled: darkMode ? (0, _styles.fade)(textSecondaryBase, 0.35) : (0, _styles.fade)(textSecondaryBase, 0.4),
      hint: darkMode ? (0, _styles.fade)(textSecondaryBase, 0.35) : (0, _styles.fade)(textSecondaryBase, 0.4),
      link: darkMode ? '#3fa7ff' : '#0966bd'
    },
    background: {
      default: darkMode ? blueGrey[900] : '#f5f8fc',
      paper: darkMode ? blueGrey[800] : '#fff'
    },
    action: {
      // Used only in PaginationItem
      // https://github.com/mui-org/material-ui/search?q=activatedOpacity&unscoped_q=activatedOpacity
      // activatedOpacity: 0.12,
      // Default color for IconButtons and ListItemIcons
      // https://github.com/mui-org/material-ui/search?q=%22action.active%22&unscoped_q=%22action.active%22
      active: darkMode ? (0, _styles.fade)(textSecondaryBase, 0.75) : (0, _styles.fade)('#2c4067', 0.75),
      // Control text color when disabled. Affects Buttons, SvgIcon, Checkbox, Radio.
      // https://github.com/mui-org/material-ui/search?q=%22action.disabled%22&unscoped_q=%22action.disabled%22
      disabled: darkMode ? (0, _styles.fade)(blueGrey[500], 0.4) : (0, _styles.fade)(blueGrey[600], 0.5),
      // Basically only affects Button
      // https://github.com/mui-org/material-ui/search?q=disabledBackground&unscoped_q=disabledBackground
      disabledBackground: darkMode ? (0, _styles.fade)(blueGrey[400], 0.08) : (0, _styles.fade)(blueGrey[300], 0.2),
      // Used in Accordion, PaginationItem, Autocomplete
      // https://github.com/mui-org/material-ui/search?q=disabledOpacity&unscoped_q=disabledOpacity
      // disabledOpacity: 0.38
      // Background color of focused TreeItems, PaginationItems, Accordion items
      // https://github.com/mui-org/material-ui/search?q=%22action.focus%22&unscoped_q=%22action.focus%22
      // focus: rgba(0, 0, 0, 0.12)
      // When focused, opacity is added to existing opacity when also selected/active, for TreeItem, PaginationItem
      // https://github.com/mui-org/material-ui/search?q=%22focusOpacity%22&unscoped_q=%22focusOpacity%22
      // focusOpacity: 0.12
      // Affects mostly Tables & ListItems as the hover bg color
      // https://github.com/mui-org/material-ui/search?p=1&q=%22action.hover%22&unscoped_q=%22action.hover%22
      hover: (0, _styles.fade)(hoverBase, darkMode ? 0.1 : 0.12),
      // Fade level applied to primary/secondary colors for Buttons, Checkbox, Radio, Chip, TreeItem
      // https://github.com/mui-org/material-ui/search?p=1&q=hoverOpacity&unscoped_q=hoverOpacity
      // Low impact due to overrides
      // hoverOpacity: 0.04,
      // Used for non-actionable icons and input placeholder text/icons
      passive: darkMode ? (0, _styles.fade)(blueGrey[400], 0.75) : (0, _styles.fade)('#637aa4', 0.75),
      // Background color for ListItems, TableRows, TreeItems
      // https://github.com/mui-org/material-ui/search?q=%22action.selected%22&unscoped_q=%22action.selected%22
      selected: darkMode ? (0, _styles.fade)(selectedBase, 0.25) : (0, _styles.fade)(selectedBase, 0.14),
      // Base opacity for background color of selected TreeItem, PaginationItem, TableRow
      // https://github.com/mui-org/material-ui/search?q=%22selectedOpacity%22&unscoped_q=%22selectedOpacity%22
      // selectedOpacity: 0.08
      focus: (0, _styles.fade)(hoverBase, darkMode ? 0.1 : 0.12)
    },
    blueGrey: blueGrey,
    // Custom palette keys
    brand: {
      blueRazz: '#79e9d7',
      corporateBlue: '#0082ca',
      cottonCandy: '#ffc6c3',
      deepSpace: '#0d2345',
      grapeSoda: '#5a61c5',
      greenApple: '#05dcac',
      hotSauce: '#eb5e70',
      wasabi: '#b6fbaf'
    },
    divider: darkMode ? (0, _styles.fade)(blueGrey[400], 0.12) : (0, _styles.fade)(blueGrey[500], 0.2),
    grey: {
      50: darkMode ? '#F3F7FF' : '#fafafa',
      100: darkMode ? '#E9EDF8' : '#f5f5f5',
      200: darkMode ? '#D9DFEC' : '#eeeeee',
      300: darkMode ? '#C4CADA' : '#e0e0e0',
      400: darkMode ? '#9EA5B4' : '#bdbdbd',
      500: darkMode ? '#7D8493' : '#9e9e9e',
      600: darkMode ? '#575D6B' : '#757575',
      700: darkMode ? '#454B58' : '#616161',
      800: darkMode ? '#2B2F38' : '#424242',
      900: darkMode ? '#0E1014' : '#212121',
      A100: '#d5d5d5',
      A200: '#aaaaaa',
      A400: '#303030',
      A700: '#616161'
    },
    toolCategory: {
      address: '#0080a3',
      behavioralAnalysis: '#4c72b6',
      calgary: '#9b3b88',
      connectors: '#e6e6e6',
      dataInvestigation: '#7dbebb',
      demographicAnalysis: '#a82555',
      developer: '#81979b',
      documentation: '#207ea9',
      favorites: '#ffdb2b',
      inDatabase: '#44597c',
      inOut: '#009d8d',
      interface: '#d6d6d6',
      join: '#7a52a0',
      parse: '#96b149',
      predictive: '#894727',
      preparation: '#0065a8',
      reporting: '#db9044',
      spatial: '#009031',
      transform: '#e25f45'
    },
    getFocusedShadowStyle: function getFocusedShadowStyle() {
      var inset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var shadowColor = (0, _styles.fade)(primaryMain, 0.5);
      var shadow = "0 0 0 2px ".concat(shadowColor, ", 0 0 0 2px ").concat((0, _styles.fade)('#fff', 0.3));
      return inset ? "".concat(shadow, " inset") : shadow;
    },
    getFocusTransitions: function getFocusTransitions() {
      return ['background-color 80ms ease-out', 'border 160ms ease-out', 'box-shadow 160ms ease-out', 'color 80ms ease-out'].join(',');
    }
  };
};

var _default = getUICorePalette;
exports.default = _default;
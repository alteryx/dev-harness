"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _deepmerge = _interopRequireDefault(require("deepmerge"));

var _styles = require("../styles");

var _global = _interopRequireDefault(require("./global"));

var _overrides = _interopRequireDefault(require("./overrides"));

var _propOverrides = _interopRequireDefault(require("./props/prop-overrides"));

var _palette = _interopRequireDefault(require("./palette"));

var _default = function _default(productTheme, fontFamily, paletteType) {
  var locale = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
  var cssBaselinOverrides = {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [fontFamily]
      }
    }
  };
  var defaultMuiTheme = (0, _styles.createMuiTheme)({
    palette: (0, _palette.default)(function () {})
  });
  var augmentColor = defaultMuiTheme.palette.augmentColor; // TODO: Remove this
  // Use product theme palette type to get correct palette with our theme, then
  // generate a base theme from base MUI theme and the ui-core theme.

  var uiCoreTheme = (0, _global.default)(augmentColor, paletteType);
  var baseTheme = (0, _styles.createMuiTheme)((0, _deepmerge.default)(uiCoreTheme, {
    typography: {
      fontFamily: fontFamily
    },
    palette: {
      type: paletteType
    }
  }), locale); // Make sure product theme is always a theme object.

  var resolvedProductTheme = typeof productTheme === 'function' ? productTheme(baseTheme) : productTheme;

  if (resolvedProductTheme.palette && typeof resolvedProductTheme.palette.type !== 'undefined') {
    // eslint-disable-next-line no-console
    console.warn('It looks like you are trying to set the palette type on the product theme. Use the "paletteType" prop on the AyxAppWrapper component instead.');
  } // Get both UI-Core and Product theme overrides.


  var coreOverrides = (0, _overrides.default)(baseTheme);
  var productOverrides = resolvedProductTheme.overrides;
  var direction = resolvedProductTheme.direction;

  var mergedOverrides = _deepmerge.default.all([cssBaselinOverrides, coreOverrides, productOverrides || {}]); // Reassemble everything.


  var finalTheme = _deepmerge.default.all([baseTheme, {
    overrides: mergedOverrides,
    props: _propOverrides.default,
    direction: direction
  }]);

  return finalTheme;
};

exports.default = _default;
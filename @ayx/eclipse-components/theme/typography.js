"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pxToRem = pxToRem;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var fontSize = 14; // material default

var htmlFontSize = 16; // browser default

var coef = fontSize / 14;

function pxToRem(value) {
  return "".concat(value / htmlFontSize * coef, "rem");
}
/** ********************** DEPRICATED TYPOGRAPHY STYLE KEYS ************************ */
// The following function should be removed with the next major release (v4.x.x).


var getDepricatedOverrides = function getDepricatedOverrides(palette, baseVariants) {
  var variantSize = {
    regular: {
      fontSize: pxToRem(13),
      fontWeight: 'normal',
      lineHeight: 1.54
    },
    small: {
      fontSize: pxToRem(12),
      fontWeight: 'normal',
      lineHeight: 1.33
    }
  };
  var inactiveVariants = {
    h3Inactive: (0, _extends2.default)({}, baseVariants.h3, {
      fontWeight: 'normal'
    }),
    h4Inactive: (0, _extends2.default)({}, baseVariants.h4, {
      fontWeight: 'normal'
    }),
    h5Inactive: (0, _extends2.default)({}, baseVariants.h5, {
      fontWeight: 'normal'
    })
  };
  var descriptionVariants = {
    h4Description: (0, _extends2.default)({}, baseVariants.h4, {
      color: palette.text.disabled
    }),
    h5Description: (0, _extends2.default)({}, baseVariants.h5, {
      color: palette.text.disabled
    }),
    regularDescription: (0, _extends2.default)({}, variantSize.regular, {
      color: palette.text.disabled
    }),
    smallDescription: (0, _extends2.default)({}, variantSize.small, {
      color: palette.text.disabled
    })
  };
  var hyperlinkVariants = {
    h2Hyperlink: (0, _extends2.default)({}, baseVariants.h2, {
      color: palette.primary.main
    }),
    h3Hyperlink: (0, _extends2.default)({}, baseVariants.h3, {
      color: palette.primary.main
    }),
    h4Hyperlink: (0, _extends2.default)({}, baseVariants.h4, {
      color: palette.primary.main
    }),
    h5Hyperlink: (0, _extends2.default)({}, baseVariants.h5, {
      color: palette.primary.main
    }),
    regularHyperlink: (0, _extends2.default)({}, variantSize.regular, {
      color: palette.primary.main
    }),
    smallHyperlink: (0, _extends2.default)({}, variantSize.small, {
      color: palette.primary.main
    })
  };
  var darkVariants = {
    h2Dkbg: (0, _extends2.default)({}, baseVariants.h2),
    h3Dkbg: (0, _extends2.default)({}, baseVariants.h3),
    h4Dkbg: (0, _extends2.default)({}, baseVariants.h4)
  };
  var customVariants = {
    regularSemibold: (0, _extends2.default)({}, variantSize.regular, {
      fontWeight: 600
    }),
    smallSemibold: (0, _extends2.default)({}, variantSize.small, {
      fontWeight: 600
    }),
    dialogTitle: {
      fontSize: pxToRem(14),
      lineHeight: 'normal',
      fontWeight: 600
    },
    label: {
      color: palette.text.secondary,
      fontWeight: 600,
      fontSize: pxToRem(13),
      lineHeight: '15px',
      userSelect: 'none',
      marginBottom: 4
    }
  };
  var inputVariants = {
    inputTypedText: (0, _extends2.default)({}, variantSize.regular, {
      lineHeight: 'none'
    }),
    inputLabel: (0, _extends2.default)({}, customVariants.label),
    inputHelperText: (0, _extends2.default)({}, descriptionVariants.smallDescription, {
      lineHeight: 'none'
    }),
    inputPlaceholder: (0, _extends2.default)({}, descriptionVariants.regularDescription, {
      lineHeight: 'none'
    })
  };
  return (0, _extends2.default)({}, variantSize, inactiveVariants, descriptionVariants, hyperlinkVariants, darkVariants, customVariants, inputVariants);
};

var _default = function _default(palette) {
  var baseOverrides = {
    h1: {
      fontSize: pxToRem(20),
      fontWeight: 900,
      lineHeight: 1.17
    },
    h2: {
      fontSize: pxToRem(16),
      fontWeight: 700,
      lineHeight: 1.2
    },
    h3: {
      fontSize: pxToRem(14),
      fontWeight: 700,
      lineHeight: 1.17
    },
    h4: {
      fontSize: pxToRem(14),
      fontWeight: 700,
      lineHeight: 1.24
    },
    h5: {
      fontSize: pxToRem(13),
      fontWeight: 700,
      lineHeight: 1.33
    },
    h6: {
      fontSize: pxToRem(12),
      fontWeight: 700,
      lineHeight: 1.6
    },
    subtitle1: {
      fontSize: pxToRem(13),
      fontWeight: 700,
      color: palette.text.secondary,
      lineHeight: 1.46
    },
    subtitle2: {
      fontSize: pxToRem(12),
      fontWeight: 400,
      lineHeight: 1.33,
      color: palette.text.secondary
    },
    body1: {
      fontSize: pxToRem(13),
      fontWeight: 400,
      lineHeight: 1.5
    },
    body2: {
      fontSize: pxToRem(13),
      fontWeight: 400,
      lineHeight: 1.5
    },
    caption: {
      fontSize: pxToRem(13),
      lineHeight: 1.15,
      userSelect: 'none'
    },
    button: {
      color: palette.text.primary,
      fontSize: pxToRem(13),
      fontWeight: 400,
      lineHeight: 1.15,
      textTransform: 'none'
    },
    overline: {
      color: palette.text.secondary,
      fontSize: pxToRem(12),
      fontWeight: 700,
      lineHeight: 1.25,
      letterSpacing: 0.2
    }
  };
  return (0, _extends2.default)({}, baseOverrides, getDepricatedOverrides(palette, baseOverrides));
};

exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("../../styles");

var MToggleButton = function MToggleButton(_ref) {
  var palette = _ref.palette,
      spacing = _ref.spacing;
  return {
    root: {
      padding: spacing(1.75, 3),
      border: 'none',
      '&$disabled': {
        color: palette.action.disabled
      },
      '&$selected': {
        backgroundColor: palette.primary.main,
        color: palette.primary.contrastText,
        '&:hover': {
          backgroundColor: palette.primary.light
        },
        '& + &': {
          borderLeft: '1px solid transparent'
        }
      },
      backgroundColor: (0, _styles.fade)(palette.blueGrey[300], palette.type === 'dark' ? 0.08 : 0.2),
      color: palette.action.active,
      '&:hover': {
        boxShadow: 'none',
        backgroundColor: (0, _styles.fade)(palette.blueGrey[300], 0.4)
      }
    },
    sizeSmall: {
      padding: spacing(1.25, 2),
      '& $label': {
        '& svg': {
          height: 12,
          width: 12
        }
      }
    },
    label: {
      '& svg': {
        height: 16,
        width: 16
      }
    },
    sizeLarge: {
      padding: spacing(2.5, 4),
      '& $label': {
        '& svg': {
          height: 20,
          width: 20
        }
      }
    }
  };
};

var MToggleButtonGroup = function MToggleButtonGroup(_ref2) {
  var spacing = _ref2.spacing;
  return {
    groupedHorizontal: {
      '&:not(:last-child)': {
        marginRight: spacing(0.25)
      },
      '&:not(:first-child)': {
        marginLeft: 0
      },
      '&:first-child': {
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4
      },
      '&:last-child': {
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4
      }
    },
    groupedVertical: {
      '&:not(:last-child)': {
        marginBottom: spacing(0.25)
      },
      '&:not(:first-child)': {
        marginTop: 0
      },
      '&:first-child': {
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4
      },
      '&:last-child': {
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4
      }
    }
  };
};

var _default = function _default(theme) {
  return {
    MuiToggleButton: MToggleButton(theme),
    MuiToggleButtonGroup: MToggleButtonGroup(theme)
  };
};

exports.default = _default;
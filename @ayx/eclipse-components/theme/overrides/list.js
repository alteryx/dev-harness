"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _styles = require("../../styles");

var MList = function MList(_ref) {
  var spacing = _ref.spacing;
  return {
    root: {
      overflowY: 'auto' // To remove the ListSubheader sticky behaviour

    },
    padding: {
      paddingTop: spacing(1),
      // We want our spacing to be more compact than MUI
      paddingBottom: spacing(1)
    }
  };
};

var MListItem = function MListItem(_ref2) {
  var spacing = _ref2.spacing,
      palette = _ref2.palette;
  return {
    root: {
      paddingTop: spacing(0.625),
      // We want our spacing to be more compact than MUI
      paddingBottom: spacing(0.625),
      '&$focusVisible': {
        backgroundColor: palette.action.hover // We want focus to match hover instead of selected

      }
    },
    dense: {
      paddingTop: spacing(0.625),
      paddingBottom: spacing(0.625)
    },
    gutters: {
      paddingRight: spacing(2.5),
      paddingLeft: spacing(3)
    }
  };
};

var MListItemText = function MListItemText(_ref3) {
  var spacing = _ref3.spacing;
  return {
    root: {},
    inset: {
      paddingLeft: spacing(11) // We want our spacing to be more compact than MUI

    },
    secondary: {
      marginTop: -spacing(0.5)
    }
  };
};

var MListItemSecondaryAction = function MListItemSecondaryAction(_ref4) {
  var spacing = _ref4.spacing;
  return {
    root: {
      right: spacing(2.5),
      minWidth: 20 // gets rid of weird layout issues with things like checkboxes

    }
  };
};

var MListItemAvatar = function MListItemAvatar(theme) {
  return {
    root: {
      minWidth: 0,
      marginRight: theme.spacing(2)
    }
  };
}; // TODO: Move this function to utils once we've refactored it to support more than just dataUICMaker.


var conditionalOverride = function conditionalOverride(condition, overrides) {
  return condition ? overrides : undefined;
};

var MListItemIcon = function MListItemIcon(_ref5) {
  var palette = _ref5.palette,
      spacing = _ref5.spacing;
  return {
    root: (0, _extends2.default)({
      minWidth: 0,
      // Kill the MUI minWidth so we can control spacing with easier to understand margin/padding styles.
      marginRight: spacing(2)
    }, conditionalOverride(palette.type === 'dark', {
      color: (0, _styles.fade)(palette.text.primary, 0.54)
    }))
  };
};

var _default = function _default(theme) {
  return {
    MuiList: MList(theme),
    MuiListItem: MListItem(theme),
    MuiListItemIcon: MListItemIcon(theme),
    MuiListItemText: MListItemText(theme),
    MuiListItemSecondaryAction: MListItemSecondaryAction(theme),
    MuiListItemAvatar: MListItemAvatar(theme)
  };
};

exports.default = _default;
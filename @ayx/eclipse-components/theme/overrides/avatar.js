"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var MAvatar = function MAvatar(_ref) {
  var palette = _ref.palette,
      typography = _ref.typography;
  return {
    root: {
      fontWeight: typography.fontWeightBold,
      lineHeight: 0,
      fontSize: 16
    },
    colorDefault: {
      color: palette.type === 'dark' ? palette.getContrastText(palette.blueGrey[600]) : palette.background.paper,
      backgroundColor: palette.type === 'dark' ? palette.blueGrey[600] : palette.blueGrey[400]
    },
    rounded: {
      borderRadius: 4
    }
  };
};

var MAvatarGroup = function MAvatarGroup(_ref2) {
  var palette = _ref2.palette;
  return {
    avatar: {
      backgroundColor: palette.type === 'dark' ? palette.blueGrey[900] : palette.blueGrey[100],
      color: palette.text.secondary,
      '&.MuiAvatar-xsmall + &:last-child': {
        height: 18,
        width: 18
      },
      '&.MuiAvatar-small + &:last-child': {
        height: 24,
        width: 24
      },
      '&.MuiAvatar-medium + &:last-child': {
        height: 36,
        width: 36
      },
      '&.MuiAvatar-large + &:last-child': {
        height: 48,
        width: 48
      },
      '&.MuiAvatar-xlarge + &:last-child': {
        height: 96,
        width: 96
      }
    }
  };
};

var _default = function _default(theme) {
  return {
    MuiAvatar: MAvatar(theme),
    MuiAvatarGroup: MAvatarGroup(theme)
  };
};

exports.default = _default;
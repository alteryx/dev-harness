"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var HEADER_HEIGHT = 54;

var MCard = function MCard(_ref) {
  var palette = _ref.palette,
      spacing = _ref.spacing,
      zDepth = _ref.zDepth;
  return {
    root: (0, _extends2.default)({
      borderRadius: 6,
      border: '1px solid',
      borderColor: palette.type === 'dark' ? palette.background.paper : palette.blueGrey[200]
    }, zDepth.for('card'), {
      // Alter card content if in a card preceded by a header and divider
      '& .MuiCardHeader-root + .MuiDivider-root + .MuiCardContent-root': {
        paddingTop: spacing(4)
      },
      // Alter card content if in a card preceded by a header
      '& .MuiCardHeader-root + .MuiCardContent-root': {
        paddingTop: 0
      },
      '& .MuiDivider-middle': {
        marginLeft: spacing(6),
        marginRight: spacing(6)
      }
    })
  };
};

var MCardHeader = function MCardHeader(_ref2) {
  var spacing = _ref2.spacing,
      typography = _ref2.typography;
  return {
    root: {
      minHeight: HEADER_HEIGHT,
      padding: spacing(0, 6)
    },
    title: {
      '& .MuiTabs-root': {
        marginTop: spacing(2.5),
        marginBottom: spacing(4)
      },
      '& .MuiTab-wrapper': {
        fontSize: typography.h2.fontSize,
        // Tab labels in Card are bigger than normal
        paddingBottom: spacing(2.5) // Center tab labels in header

      }
    },
    avatar: {
      marginRight: spacing(2)
    },
    subheader: {
      fontSize: typography.subtitle2.fontSize,
      fontColor: typography.subtitle2.fontColor,
      fontWeight: typography.subtitle2.fontWeight
    },
    action: {
      display: 'flex',
      alignItems: 'center',
      height: HEADER_HEIGHT,
      marginTop: 0,
      marginRight: 0,
      '& > :not(:last-child):not(.MuiIconButton-root)': {
        marginRight: spacing(1)
      },
      '& > :not(:first-child):not(.MuiIconButton-root)': {
        marginLeft: spacing(1)
      }
    }
  };
};

var MCardContent = function MCardContent(_ref3) {
  var spacing = _ref3.spacing,
      breakpoints = _ref3.breakpoints;
  return {
    root: (0, _defineProperty2.default)({
      padding: spacing(6)
    }, breakpoints.up('sm'), {
      padding: spacing(6)
    })
  };
};

var MCardActions = function MCardActions(_ref4) {
  var palette = _ref4.palette,
      spacing = _ref4.spacing;
  return {
    root: {
      backgroundColor: palette.type === 'dark' ? undefined : palette.background.default,
      borderTop: '1px solid',
      borderTopColor: palette.divider,
      height: spacing(10),
      padding: spacing(2, 3)
    }
  };
};

var _default = function _default(theme) {
  return {
    MuiCard: MCard(theme),
    MuiCardHeader: MCardHeader(theme),
    MuiCardContent: MCardContent(theme),
    MuiCardActions: MCardActions(theme)
  };
};

exports.default = _default;
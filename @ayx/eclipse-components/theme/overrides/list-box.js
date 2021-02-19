"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var MuiListBox = function MuiListBox(_ref) {
  var palette = _ref.palette,
      spacing = _ref.spacing,
      typography = _ref.typography;
  return {
    container: {
      // Makes divider for last item invisible
      '& div > li:last-child': {
        border: 'none'
      },
      margin: spacing(-1, 0)
    },
    checkbox: {
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: spacing(1)
    },
    item: {},
    itemText: {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
    },
    icon: {
      color: palette.blueGrey[500],
      marginLeft: spacing(1),
      marginBottom: -spacing(0.5)
    },
    footer: {},
    listBox: {
      padding: spacing(4),
      '& > .MuiGrid-item': {
        padding: spacing(0.5, 0)
      }
    },
    noResultsTypography: {
      cursor: 'default'
    },
    searchFormControl: {
      display: 'flex'
    },
    searchInput: {},
    titleTypography: {
      fontWeight: typography.fontWeightBold
    }
  };
};

var _default = function _default(theme) {
  return {
    MuiListBox: MuiListBox(theme)
  };
};

exports.default = _default;
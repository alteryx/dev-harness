"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("../../styles");

var MTable = function MTable() {
  return {
    root: {}
  };
};

var MTableBody = function MTableBody() {
  return {
    root: {
      '& tr:last-child > th, tr:last-child > td': {
        borderBottom: 'none'
      }
    }
  };
};

var MTableHead = function MTableHead() {
  return {
    root: {}
  };
};

var MTableRow = function MTableRow(theme) {
  return {
    root: {
      '&$hover:hover': {
        backgroundColor: theme.palette.type === 'dark' ? 'rgba(255, 255, 255, 0.14)' : theme.palette.blueGrey[50]
      },
      '&$selected': {
        backgroundColor: theme.palette.type === 'dark' ? 'rgba(255, 255, 255, 0.14)' : theme.palette.blueGrey[100]
      }
    },
    head: {},
    selected: {}
  };
};

var MTableCell = function MTableCell(theme) {
  return {
    root: {
      padding: "".concat(theme.spacing(3.5), "px ").concat(theme.spacing(3.25), "px"),
      '&:last-child': {
        paddingRight: theme.spacing(3.25)
      }
    },
    sizeSmall: {
      padding: "6px ".concat(theme.spacing(3.25), "px") // height of 6px is material default

    },
    body: {
      fontSize: theme.typography.pxToRem(13),
      fontWeight: 'normal',
      lineHeight: 1.54
    },
    head: {
      padding: "".concat(theme.spacing(3.5), "px ").concat(theme.spacing(3.25), "px"),
      color: theme.palette.text.secondary,
      fontWeight: 600,
      fontSize: theme.typography.pxToRem(13),
      lineHeight: 1.54,
      userSelect: 'none',
      marginBottom: theme.spacing(1),
      '&$sizeSmall': {
        lineHeight: 1.54
      }
    },
    stickyHeader: {
      backgroundColor: theme.palette.background.paper
    }
  };
};

var MTableSortLabel = function MTableSortLabel(theme) {
  return {
    active: {
      color: theme.palette.brand.deepSpace
    }
  };
};

var MTablePagination = function MTablePagination(theme) {
  return {
    root: {
      fontSize: theme.typography.pxToRem(13),
      fontWeight: 'normal',
      lineHeight: 1.54,
      borderTop: "1px solid ".concat(theme.palette.divider)
    },
    caption: {
      fontSize: theme.typography.pxToRem(13),
      fontWeight: 'normal',
      lineHeight: 1.54
    },
    input: {
      border: 'none'
    },
    select: {
      minWidth: 0,
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(6)
    },
    selectRoot: {
      fontSize: theme.typography.pxToRem(13),
      fontWeight: 'normal',
      lineHeight: 1.54
    },
    selectIcon: {
      top: 9,
      color: theme.palette.blueGrey[500]
    },
    actions: {
      '& svg': {
        color: theme.palette.blueGrey[500],
        width: 20
      },
      '&:hover': {
        backgroundColor: 'transparent'
      }
    }
  };
};

var MTableFooter = function MTableFooter(theme) {
  return {
    root: {
      fontSize: theme.typography.pxToRem(13),
      fontWeight: 'normal',
      lineHeight: 1.54,
      borderTop: "1px solid\n    ".concat(theme.palette.type === 'light' ? (0, _styles.lighten)((0, _styles.fade)(theme.palette.divider, 1), 0.88) : (0, _styles.darken)((0, _styles.fade)(theme.palette.divider, 1), 0.68))
    }
  };
};

var _default = function _default(theme) {
  return {
    MuiTable: MTable(),
    MuiTableBody: MTableBody(),
    MuiTableHead: MTableHead(),
    MuiTableRow: MTableRow(theme),
    MuiTableCell: MTableCell(theme),
    MuiTableSortLabel: MTableSortLabel(theme),
    MuiTablePagination: MTablePagination(theme),
    MuiTableFooter: MTableFooter(theme)
  };
};

exports.default = _default;
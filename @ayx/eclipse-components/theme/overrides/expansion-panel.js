"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var MExpansionPanel = function MExpansionPanel(theme) {
  return {
    root: {
      '&$disabled': {
        backgroundColor: theme.palette.background.paper
      }
    },
    disabled: {}
  };
};

var MExpansionPanelSummary = function MExpansionPanelSummary(theme) {
  return {
    root: {
      padding: "".concat(theme.spacing(4), "px ").concat(theme.spacing(6), "px ").concat(theme.spacing(4), "px ").concat(theme.spacing(10), "px"),
      minHeight: 12,
      '&$disabled': {
        opacity: 1,
        pointerEvents: 'none'
      },
      '&$disabled svg': {
        opacity: 1,
        color: theme.palette.action.disabled
      },
      '&$disabled p': {
        opacity: 1,
        color: theme.palette.text.disabled,
        fontWeight: 'normal'
      },
      '& p': {
        color: theme.palette.primary.main
      },
      '&$expanded': {
        minHeight: 24,
        borderBottom: theme.palette.type === 'dark' ? 'transparent' : "1px solid ".concat(theme.palette.blueGrey[200]),
        '&:hover': {
          backgroundColor: 'transparent'
        }
      },
      '&:hover': {
        backgroundColor: theme.palette.type === 'dark' ? 'transparent' : theme.palette.blueGrey[50]
      }
    },
    content: {
      margin: 0,
      '&$expanded': {
        margin: 0
      }
    },
    expandIcon: {
      position: 'absolute',
      padding: 4,
      left: 0,
      color: theme.palette.action.passive,
      // Force the icon color to primary
      '&:focus, &:hover': {
        color: theme.palette.action.passive // Remove focus and hover since the panel has the feedback

      },
      '&$expanded': {
        transform: 'rotate(90deg)' // MUI v4 removed translate so to get things to work I removed it to

      },
      height: "".concat(theme.spacing(7.5), "px"),
      width: "".concat(theme.spacing(7.5), "px")
    }
  };
};

var MExpansionPanelDetails = function MExpansionPanelDetails(theme) {
  return {
    root: {
      padding: "".concat(theme.spacing(4), "px ").concat(theme.spacing(6), "px ").concat(theme.spacing(5), "px ").concat(theme.spacing(6), "px")
    }
  };
};

var MExpansionPanelActions = function MExpansionPanelActions() {
  return {
    root: {
      paddingLeft: '16px',
      paddingRight: '16px'
    },
    spacing: {
      padding: '8px 16px'
    }
  };
};

var _default = function _default(theme) {
  return {
    MuiExpansionPanel: MExpansionPanel(theme),
    MuiExpansionPanelSummary: MExpansionPanelSummary(theme),
    MuiExpansionPanelDetails: MExpansionPanelDetails(theme),
    MuiExpansionPanelActions: MExpansionPanelActions()
  };
};

exports.default = _default;
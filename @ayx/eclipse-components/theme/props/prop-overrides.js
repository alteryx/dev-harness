"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _alertTriangle = _interopRequireDefault(require("@ayx/eclipse-icons/icons/alert-triangle"));

var _alertCircle = _interopRequireDefault(require("@ayx/eclipse-icons/icons/alert-circle"));

var _check = _interopRequireDefault(require("@ayx/eclipse-icons/icons/check"));

var _chevronDown = _interopRequireDefault(require("@ayx/eclipse-icons/icons/chevron-down"));

var _info = _interopRequireDefault(require("@ayx/eclipse-icons/icons/info"));

var _xSmall = _interopRequireDefault(require("@ayx/eclipse-icons/icons/x-small"));

var _x = _interopRequireDefault(require("@ayx/eclipse-icons/icons/x"));

var _plus = _interopRequireDefault(require("@ayx/eclipse-icons/icons/plus"));

var _Checkbox = _interopRequireDefault(require("../../internal/icons/Checkbox"));

var _CheckboxChecked = _interopRequireDefault(require("../../internal/icons/CheckboxChecked"));

var _CheckboxIndeterminate = _interopRequireDefault(require("../../internal/icons/CheckboxIndeterminate"));

var _Radio = _interopRequireDefault(require("../../internal/icons/Radio"));

var _RadioChecked = _interopRequireDefault(require("../../internal/icons/RadioChecked"));

var _Paper = _interopRequireDefault(require("../../Paper"));

var props = {
  MuiAccordion: {
    elevation: 0
  },
  MuiAccordionSummary: {
    expandIcon: /*#__PURE__*/_react.default.createElement(_chevronDown.default, null),
    IconButtonProps: {
      edge: false
    }
  },
  MuiAlert: {
    iconMapping: {
      error: /*#__PURE__*/_react.default.createElement(_alertCircle.default, {
        size: "small"
      }),
      info: /*#__PURE__*/_react.default.createElement(_info.default, {
        size: "small"
      }),
      warning: /*#__PURE__*/_react.default.createElement(_alertTriangle.default, {
        size: "small"
      }),
      success: /*#__PURE__*/_react.default.createElement(_check.default, {
        size: "small"
      })
    }
  },
  MuiAppBar: {
    elevation: 2
  },
  MuiAutocomplete: {
    popupIcon: /*#__PURE__*/_react.default.createElement(_chevronDown.default, {
      size: "small"
    }),
    closeIcon: /*#__PURE__*/_react.default.createElement(_xSmall.default, {
      size: "small"
    }),
    ChipProps: {
      deleteIcon: /*#__PURE__*/_react.default.createElement(_xSmall.default, null),
      size: 'small'
    },
    PaperComponent: /*#__PURE__*/_react.default.forwardRef(function (paperProps, ref) {
      return /*#__PURE__*/_react.default.createElement(_Paper.default, (0, _extends2.default)({
        elevation: 3,
        ref: ref
      }, paperProps));
    })
  },
  MuiButtonBase: {
    disableRipple: true
  },
  MuiButtonGroup: {
    disableRipple: true
  },
  MuiCardHeader: {
    titleTypographyProps: {
      variant: 'h2'
    }
  },
  MuiCheckbox: {
    icon: /*#__PURE__*/_react.default.createElement(_Checkbox.default, null),
    checkedIcon: /*#__PURE__*/_react.default.createElement(_CheckboxChecked.default, null),
    indeterminateIcon: /*#__PURE__*/_react.default.createElement(_CheckboxIndeterminate.default, null)
  },
  MuiCircularProgress: {
    size: 16
  },
  MuiDialog: {
    disableBackdropClick: true
  },
  MuiExpansionPanel: {
    elevation: 0
  },
  MuiExpansionPanelSummary: {
    expandIcon: /*#__PURE__*/_react.default.createElement(_chevronDown.default, null),
    IconButtonProps: {
      edge: false
    }
  },
  MuiFilledInput: {
    disableUnderline: true
  },
  MuiInput: {
    disableUnderline: true
  },
  MuiInputLabel: {
    shrink: true
  },
  MuiListItemText: {
    secondaryTypographyProps: {
      variant: 'subtitle2'
    }
  },
  MuiOutlinedInput: {
    notched: true
  },
  MuiRadio: {
    color: 'primary',
    checkedIcon: /*#__PURE__*/_react.default.createElement(_RadioChecked.default, null),
    icon: /*#__PURE__*/_react.default.createElement(_Radio.default, null)
  },
  MuiSpeedDialIcon: {
    icon: /*#__PURE__*/_react.default.createElement(_plus.default, null),
    openIcon: /*#__PURE__*/_react.default.createElement(_x.default, null)
  },
  MuiStepper: {
    elevation: 2
  },
  MuiTablePagination: {
    rowsPerPageOptions: [50, 100, 250]
  }
};
var _default = props;
exports.default = _default;
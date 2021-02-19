"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SnackbarContent = _interopRequireDefault(require("@material-ui/core/SnackbarContent"));

var _styles = require("../styles");

var useStyles = (0, _styles.makeStyles)(function (_ref) {
  var palette = _ref.palette;
  return {
    actionLeftBorder: {
      padding: 0,
      margin: 0,
      borderLeftColor: palette.type === 'dark' ? (0, _styles.fade)(palette.grey[400], 0.12) : (0, _styles.fade)(palette.blueGrey[500], 0.2),
      // divider override colors
      borderLeft: '1px solid',
      display: 'flex',
      alignSelf: 'stretch',
      alignItems: 'center'
    }
  };
});

var SnackbarContent = function SnackbarContent(_ref2) {
  var action = _ref2.action,
      children = _ref2.children,
      props = (0, _objectWithoutProperties2.default)(_ref2, ["action", "children"]);
  var borderedAction;
  var customClasses = useStyles();

  if (Array.isArray(action)) {
    borderedAction = action.map(function (a, idx) {
      var newIdx = idx + 1;
      return /*#__PURE__*/_react.default.createElement("span", {
        className: customClasses.actionLeftBorder,
        key: "snackbarContentAction-".concat(newIdx)
      }, a);
    });
  } else if (typeof action !== 'undefined') {
    borderedAction = /*#__PURE__*/_react.default.createElement("span", {
      className: customClasses.actionLeftBorder
    }, action);
  }

  return /*#__PURE__*/_react.default.createElement(_SnackbarContent.default, (0, _extends2.default)({
    action: borderedAction
  }, props), children);
};

SnackbarContent.defaultProps = {
  action: undefined
};
SnackbarContent.propTypes = process.env.NODE_ENV !== "production" ? {
  action: _propTypes.default.node
} : {};
var _default = SnackbarContent;
exports.default = _default;
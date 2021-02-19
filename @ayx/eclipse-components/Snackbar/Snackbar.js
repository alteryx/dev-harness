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

var _Snackbar = _interopRequireDefault(require("@material-ui/core/Snackbar"));

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

var Snackbar = function Snackbar(_ref2) {
  var action = _ref2.action,
      props = (0, _objectWithoutProperties2.default)(_ref2, ["action"]);
  var customClasses = useStyles();
  var borderedAction;

  if (Array.isArray(action)) {
    borderedAction = action.map(function (a, idx) {
      var newIdx = idx + 1;
      return /*#__PURE__*/_react.default.createElement("span", {
        className: customClasses.actionLeftBorder,
        key: "snackbarAction-".concat(newIdx)
      }, a);
    });
  } else if (typeof action !== 'undefined' && action !== null) {
    borderedAction = /*#__PURE__*/_react.default.createElement("span", {
      className: customClasses.actionLeftBorder
    }, action);
  }

  return /*#__PURE__*/_react.default.createElement(_Snackbar.default, (0, _extends2.default)({
    action: borderedAction
  }, props));
};

Snackbar.defaultProps = {
  action: null
};
Snackbar.propTypes = process.env.NODE_ENV !== "production" ? {
  action: _propTypes.default.node
} : {};
var _default = Snackbar;
exports.default = _default;
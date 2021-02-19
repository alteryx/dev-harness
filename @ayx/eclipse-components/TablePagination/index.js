"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _TablePagination = _interopRequireDefault(require("@material-ui/core/TablePagination"));

var _reactIntl = require("react-intl");

var _styles = require("../styles");

var _utils = require("../utils");

var TablePagination = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var intl = (0, _reactIntl.useIntl)();
  var theme = (0, _styles.useTheme)();
  var messages = (0, _reactIntl.defineMessages)({
    tablePagination: {
      id: 'tablePagination.label',
      defaultMessage: theme.props.MuiTablePagination.labelDisplayedRows
    }
  }); // Arguments in react-intl can no longer accept a '-' after version 3. Mui's API says to use
  // -1 as the argument to denote server-side fetching and to change their translations.
  // So, in order to keep that the same, we're taking the count, turning it into a string,
  // and replacing all '-' with '_' so they can be used in react-intls select statement

  return /*#__PURE__*/_react.default.createElement(_TablePagination.default, (0, _extends2.default)({
    labelDisplayedRows: function labelDisplayedRows(_ref) {
      var count = _ref.count,
          from = _ref.from,
          to = _ref.to;
      return intl.formatMessage(messages.tablePagination, {
        count: count.toString().replaceAll('-', '_'),
        from: from,
        to: to
      });
    } // see note above about weirdness
    ,
    ref: ref
  }, props));
});

var _default = (0, _utils.dataUICMaker)(TablePagination, 'TablePagination');

exports.default = _default;
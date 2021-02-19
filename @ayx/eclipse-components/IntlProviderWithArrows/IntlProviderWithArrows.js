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

var _reactIntl = require("react-intl");

var _utils = require("./utils");

/**
 * A react component that returns a properly configured react-intl IntlProvider component with
 * all children and can conditionally provide arrows language in addition to normal languages.
 * Its API exactly mirrors that of IntlProvider: https://github.com/yahoo/react-intl/wiki/Components#intl-provider-component
 * @param {string} locale
 * @param {Object} formats
 * @param {Object} messages
 * @param {string = 'en'} defaultLocale
 * @param {Object = {}} defaultFormats
 * @param {Object} padMessagesProps
 * @param {HTMLNode} textComponent
 */
var IntlProviderWithArrows = function IntlProviderWithArrows(_ref) {
  var locale = _ref.locale,
      messages = _ref.messages,
      children = _ref.children,
      padMessagesProps = _ref.padMessagesProps,
      intlProps = (0, _objectWithoutProperties2.default)(_ref, ["locale", "messages", "children", "padMessagesProps"]);
  var provideArrows = locale === 'xx' || locale === 'arrows';
  var newLocale = provideArrows ? 'en' : locale;
  var newMessages = provideArrows ? (0, _utils.padMessages)(messages, padMessagesProps) : messages;
  return /*#__PURE__*/_react.default.createElement(_reactIntl.IntlProvider, (0, _extends2.default)({
    locale: newLocale,
    messages: newMessages
  }, intlProps), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children));
};

IntlProviderWithArrows.defaultProps = {
  locale: 'en',
  messages: {},
  padMessagesProps: {}
};
IntlProviderWithArrows.propTypes = process.env.NODE_ENV !== "production" ? {
  locale: _propTypes.default.string,
  messages: _propTypes.default.objectOf(_propTypes.default.string),
  padMessagesProps: _propTypes.default.shape({
    character: _propTypes.default.string,
    multiplier: _propTypes.default.number
  })
} : {};
var _default = IntlProviderWithArrows;
exports.default = _default;
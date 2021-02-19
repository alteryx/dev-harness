"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("../styles");

var _IntlProviderWithArrows = _interopRequireDefault(require("../IntlProviderWithArrows"));

var _utils = require("../IntlProviderWithArrows/utils");

var _theme = _interopRequireDefault(require("../theme"));

var _CssBaseline = _interopRequireDefault(require("../CssBaseline"));

var _locale = require("../locale");

var fontFamilies = {
  designer: ['Segoe UI', 'San Francisco', 'Arial', 'sans-serif'],
  default: ['Lato', 'Arial', 'sans-serif'],
  ja: ['メイリオ', 'Meiryo', 'ヒラギノ角ゴ ProN', 'Hiragino Kaku Gothic ProN', 'ＭＳ ゴシック', 'MS Gothic', 'sans-serif'],
  zh: ['Microsoft YaHei', 'PingFang SC', 'JhengHei UI', 'MS Gothic', 'sans-serif']
};

var _ref2 = /*#__PURE__*/_react.default.createElement(_CssBaseline.default, null);

var AyxAppWrapper = function AyxAppWrapper(_ref) {
  var locale = _ref.locale,
      messages = _ref.messages,
      disableCssBaseline = _ref.disableCssBaseline,
      productTheme = _ref.theme,
      children = _ref.children,
      padMessagesProps = _ref.padMessagesProps,
      paletteType = _ref.paletteType;
  var alteryxLanguageCode = typeof window !== 'undefined' && window.Alteryx && window.Alteryx.AlteryxLanguageCode;
  var browserLocale = (0, _react.useMemo)(function () {
    // priority should be locale > window detection > 'en';
    if (typeof locale !== 'undefined') {
      return locale;
    }

    if (typeof window !== 'undefined') {
      return (alteryxLanguageCode || // Installed Designer language (most preferred, if available)
      window.navigator.userLanguage || // for IE
      window.navigator.languages[0] || // preferred over .language
      window.navigator.language). // final fallback
      split('-')[0] || 'en';
    }

    return 'en';
  }, [locale, alteryxLanguageCode]);
  var isDesignerCef = (0, _react.useMemo)(function () {
    return alteryxLanguageCode ? 'designer' : 'default';
  }, [alteryxLanguageCode]);
  var localMessages = (0, _react.useMemo)(function () {
    return messages[browserLocale === 'xx' || browserLocale === 'arrows' ? 'en' : browserLocale];
  }, [messages, browserLocale]);
  var fontFamily = (0, _react.useMemo)(function () {
    return browserLocale === 'ja' || browserLocale === 'zh' ? fontFamilies[browserLocale].join(',') : fontFamilies[isDesignerCef].join(',');
  }, [browserLocale, isDesignerCef]);
  var locales = {
    en: _locale.en,
    de: _locale.de,
    es: _locale.es,
    fr: _locale.fr,
    it: _locale.it,
    ja: _locale.ja,
    pt: _locale.pt,
    zh: _locale.zh
  };
  var defaultTranslations = browserLocale === 'xx' || browserLocale === 'arrows' ? (0, _utils.padMessages)(locales.en, padMessagesProps) : locales[browserLocale] || _locale.en; // includes theme and overrides)

  var finalTheme = (0, _react.useMemo)(function () {
    return (0, _theme.default)(productTheme, fontFamily, paletteType, defaultTranslations);
  }, [productTheme, fontFamily, paletteType, defaultTranslations]);
  return /*#__PURE__*/_react.default.createElement(_styles.ThemeProvider, {
    theme: finalTheme
  }, disableCssBaseline ? null : _ref2, /*#__PURE__*/_react.default.createElement(_IntlProviderWithArrows.default, {
    locale: browserLocale,
    messages: localMessages,
    padMessagesProps: padMessagesProps
  }, children));
};

AyxAppWrapper.propTypes = process.env.NODE_ENV !== "production" ? {
  disableCssBaseline: _propTypes.default.bool,
  locale: _propTypes.default.string,
  messages: _propTypes.default.objectOf(_propTypes.default.objectOf(_propTypes.default.string)),
  paletteType: _propTypes.default.string,
  theme: _propTypes.default.oneOfType([_propTypes.default.shape({}), _propTypes.default.func])
} : {};
AyxAppWrapper.defaultProps = {
  disableCssBaseline: false,
  locale: undefined,
  messages: {},
  paletteType: 'light',
  theme: {}
};
var _default = AyxAppWrapper;
exports.default = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var variantSizes = {
  xsmall: 18,
  small: 24,
  medium: 36,
  large: 48,
  xlarge: 96
};

var styles = function styles(theme) {
  return (0, _extends2.default)({}, theme.overrides.MuiAvatar, {
    xsmall: {
      height: variantSizes.xsmall,
      width: variantSizes.xsmall
    },
    small: {
      height: variantSizes.small,
      width: variantSizes.small
    },
    medium: {
      height: variantSizes.medium,
      width: variantSizes.medium
    },
    large: {
      height: variantSizes.large,
      width: variantSizes.large
    },
    xlarge: {
      height: variantSizes.xlarge,
      width: variantSizes.xlarge
    }
  });
};

var _default = styles;
exports.default = _default;
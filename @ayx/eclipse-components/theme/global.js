"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _palette = _interopRequireDefault(require("./palette"));

var _shape = _interopRequireDefault(require("./shape"));

var _spacing = _interopRequireDefault(require("./spacing"));

var _typography = _interopRequireDefault(require("./typography"));

var _zDepth = _interopRequireDefault(require("./z-depth"));

var _default = function _default(augmentColor, paletteType) {
  var palette = (0, _palette.default)(augmentColor, paletteType);
  return {
    palette: palette,
    shape: _shape.default,
    spacing: _spacing.default,
    typography: (0, _typography.default)(palette || {}),
    zDepth: _zDepth.default
  };
};

exports.default = _default;
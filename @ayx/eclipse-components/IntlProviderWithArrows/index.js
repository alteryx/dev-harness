"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "padMessages", {
  enumerable: true,
  get: function get() {
    return _utils2.padMessages;
  }
});
exports.default = void 0;

var _utils = require("../utils");

var _IntlProviderWithArrows = _interopRequireDefault(require("./IntlProviderWithArrows"));

var _utils2 = require("./utils");

var _default = (0, _utils.dataUICMaker)(_IntlProviderWithArrows.default, 'IntlProviderWithArrows');

exports.default = _default;
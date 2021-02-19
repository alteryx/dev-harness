"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var filterProps = function filterProps(props, excludeList) {
  if ((0, _typeof2.default)(props) !== 'object') {
    console.error('filterProps expects props to be an object. Returned what was passed.');
    return props;
  }

  if (typeof excludeList === 'undefined') return props;
  var excludeListNotAllStrings = excludeList.some(function (value) {
    return typeof value !== 'string';
  });

  if (excludeListNotAllStrings) {
    console.error('filterProps expects excludeList to be an array of strings. Returned unfiltered props');
    return props;
  }

  return Object.keys(props).reduce(function (acc, key) {
    if (!excludeList.includes(key)) {
      acc[key] = props[key];
    }

    return acc;
  }, {});
};

var _default = filterProps;
exports.default = _default;
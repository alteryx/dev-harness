"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

let FieldInfo = function FieldInfo(name, type, size, scale, source, desc) {
  (0, _classCallCheck2.default)(this, FieldInfo);
  this.name = void 0;
  this.type = void 0;
  this.size = void 0;
  this.scale = void 0;
  this.source = void 0;
  this.description = void 0;
  this.name = name;
  this.type = type;
  this.size = size;
  this.scale = scale;
  this.source = source;
  this.description = desc;
};

exports.default = FieldInfo;
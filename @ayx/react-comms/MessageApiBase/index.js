"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

/* eslint-disable react/static-property-placement */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-empty-function */

/* eslint-disable no-underscore-dangle */
let MessageApiBase = function MessageApiBase(ctx) {
  (0, _classCallCheck2.default)(this, MessageApiBase);
  this.subscriptions = void 0;
  this.context = void 0;
  this.model = void 0;
  this.ayxAppContext = void 0;

  this.sendMessage = (type, payload) => {};

  this.subscribe = (messageType, cb) => {
    this.subscriptions.set(messageType, cb);
  };

  this.context = ctx;
  this.subscriptions = new Map();
};

var _default = MessageApiBase;
exports.default = _default;
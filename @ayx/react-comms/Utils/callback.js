"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JsEvent = void 0;

var _uuid = require("uuid");

const JsEvent = (context, Event, item = {}) => {
  const callbackRegistrationId = (0, _uuid.v4)();
  const callbackPromise = new Promise(res => {
    context.Gui.Callbacks[callbackRegistrationId] = (...theArgs) => {
      res.apply({}, theArgs);
    };
  });
  const actualObjectToSend = {
    Event,
    callback: "window.Alteryx.Gui.Callbacks['".concat(callbackRegistrationId, "']"),
    Callback: "window.Alteryx.Gui.Callbacks['".concat(callbackRegistrationId, "']"),
    ...item
  };
  context.JsEvent(JSON.stringify(actualObjectToSend));
  return callbackPromise;
};

exports.JsEvent = JsEvent;
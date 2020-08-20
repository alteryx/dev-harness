/* eslint-disable react/static-property-placement */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-underscore-dangle */

abstract class MessageApiBase<T, TU, TV> {
  subscriptions: Map<string, Function>;

  context: T;

  _model: TU;

  _ayxAppContext: TV;

  constructor(ctx: T) {
    this.context = ctx;
    this.subscriptions = new Map();
  }

  sendMessage = (type: string, payload: object): void => {};

  subscribe = (messageType: string, cb: Function): void => {
    this.subscriptions.set(messageType, cb);
  };

  get model(): TU {
    return this._model;
  }

  set model(newModel: TU) {
    this._model = newModel;
  }

  get ayxAppContext(): TV {
    return this._ayxAppContext;
  }

  set ayxAppContext(newAppContext: TV) {
    this._ayxAppContext = newAppContext;
  }
}

export default MessageApiBase;

import MessageApiBase from '../MessageApiBase/MessageApiBase';
import * as callback from '../Utils/callback';

export interface IAyxAppContext {
  darkMode: boolean;
  productTheme: object;
  locale: string;
}

export interface IContext {
  Gui: {
    SetConfiguration: Function;
    GetConfiguration: Function;
    Callbacks: object;
  };
  AlteryxLanguageCode: string;
  JsEvent: Function;
}

interface IModel {
  configuration: object;
  annotation: string;
}

interface IMessageTypes {
  GET_CONFIGURATION: string;
}

interface ISubscriptionTypes {
  MODEL_UPDATED: string;
}

export const messageTypes: IMessageTypes = {
  GET_CONFIGURATION: 'GetConfiguration',
};

export const subscriptionEvents: ISubscriptionTypes = {
  MODEL_UPDATED: 'MODEL_UPDATED',
};

class DesignerMessageApi extends MessageApiBase<object, object, object> {
  context: IContext;

  _model: IModel;

  _ayxAppContext: IAyxAppContext;

  constructor(ctx: IContext) {
    super(ctx);
    this._model = {
      configuration: {},
      annotation: '',
    };
    this._ayxAppContext = {
      darkMode: false,
      productTheme: {},
      locale: this.context.AlteryxLanguageCode,
    };
    this.context.Gui = {
      SetConfiguration(currentToolConfiguration) {
        if (this.subscriptions.has('MODEL_UPDATED')) {
          this.subscriptions.get('MODEL_UPDATED')(currentToolConfiguration);
        }
        window.Alteryx.JsEvent(JSON.stringify({ Event: 'SetConfiguration' }));
      },
      GetConfiguration() {
        const payload = {
          Configuration: {
            Configuration: {
              ...this._model.configuration,
            },
            Annotation: this._model.annotation,
          },
        };
        this.sendMessage(messageTypes.GET_CONFIGURATION, payload);
      }
    };
  }

  sendMessage = (type: string, payload: object): void => {
    callback.JsEvent(this.context, type, payload);
  };
}

export default DesignerMessageApi;

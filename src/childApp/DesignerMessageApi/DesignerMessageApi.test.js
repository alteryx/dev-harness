/* eslint-disable no-underscore-dangle */
import * as callback from '../Utils/callback.ts';

import DesignerMessageApi from './index.ts';

describe('DesignerMessageApi', () => {
  beforeAll(() => {
    window.Alteryx = {
      AlteryxLanguageCode: 'US-EN',
      Gui: {
        SetConfiguration: jest.fn(),
        GetConfiguration: jest.fn(),
      },
      JsEvent: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should instantiate itself with a _model, context, and subscriptions', () => {
    const messageBroker = new DesignerMessageApi(window.Alteryx);
    expect(messageBroker._model).toMatchObject({});
    expect(messageBroker.context).toMatchObject(window.Alteryx);
    expect(messageBroker.subscriptions).toMatchObject(new Map());
  });

  it('should call JsEvent when asked to send a message', () => {
    const spyJsEvent = jest.spyOn(callback, 'JsEvent');
    const messageBroker = new DesignerMessageApi(window.Alteryx);
    messageBroker.sendMessage('Update_stuff', { data: { stuff: 'things' } });

    expect(spyJsEvent).toHaveBeenCalledWith(messageBroker.context, 'Update_stuff', { data: { stuff: 'things' } });
  });

  it('should set a new subscription in its subscriptions map when called', () => {
    const messageBroker = new DesignerMessageApi(window.Alteryx);
    const func = jest.fn();
    const map = new Map();
    map.set('SetConfiguration', func);

    messageBroker.subscribe('SetConfiguration', func);

    expect(messageBroker.subscriptions).toEqual(map);
  });

  it('should invoke the SetConfiguration callback in its subscriptions through the context.Gui if it is subscribed to SetConfiguration', () => {
    const messageBroker = new DesignerMessageApi(window.Alteryx);
    const func = jest.fn();
    const map = new Map();
    map.set('MODEL_UPDATED', func);

    messageBroker.subscribe('MODEL_UPDATED', func);
    messageBroker.context.Gui.SetConfiguration();

    expect(func).toHaveBeenCalled();
  });

  it('should use the context GetConfiguration to invoke a jsEvent with context, GetConfiguration, and model as params', () => {
    const spyJsEvent = jest.spyOn(callback, 'JsEvent');
    const messageBroker = new DesignerMessageApi(window.Alteryx);
    const expected = {
      Configuration: {
        Annotation: '',
        Configuration: {},
      },
    };

    messageBroker.context.Gui.GetConfiguration();

    expect(spyJsEvent).toHaveBeenCalledWith(messageBroker.context, 'GetConfiguration', expected);
  });

  it('should use the getter for alteryxAppContext to return the contexts language code', () => {
    const messageBroker = new DesignerMessageApi(window.Alteryx);
    expect(messageBroker.ayxAppContext).toEqual({ darkMode: false, locale: 'US-EN', productTheme: {} });
  });

  it('should use the setter for model to data to set _model', () => {
    const messageBroker = new DesignerMessageApi(window.Alteryx);
    const toolConfiguration = {
      data: 'such good data',
    };

    messageBroker.model = toolConfiguration;

    expect(messageBroker.model).toEqual(toolConfiguration);
  });
});

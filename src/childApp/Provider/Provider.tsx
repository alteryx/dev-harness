/* eslint-disable no-underscore-dangle */
/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from 'react';
import { AyxAppWrapper } from '@ayx/ui-core';

import UiSdkContext, { IContextProviderProps } from '../Context';
import DevHarnessMessageApi from '../DevHarnessMessageApi/DevHarnessMessageApi';

interface IProviderProps {
  messages: object;
  messageBroker: DevHarnessMessageApi;
  children: React.ReactNode[];
}

const Provider: React.FC<IProviderProps> = (props) => {
  const { messages = {}, messageBroker } = props;
  const [model, updateModel] = useState(messageBroker.model);
  const [appContext, updateAppContext] = useState(messageBroker.ayxAppContext);

  const handleUpdateModel = newModel => {
    updateModel(newModel);
    messageBroker.model = newModel;
    messageBroker.sendMessage('UPDATE_MODEL', newModel);
  };

  useEffect(() => {
    const receiveAppContext = data => {
      updateAppContext({ ...data });
    };
    const receiveModel = data => {
      updateModel({ ...data });
    };

    messageBroker.subscribe('UPDATE_MODEL', receiveModel);
    messageBroker.subscribe('UPDATE_APP_CONTEXT', receiveAppContext);
    return function cleanUp() {
      handleUpdateModel(messageBroker.model);
    };
  }, []);

  const providerProps: IContextProviderProps = {
    id: 'sdk-provider',
    value: [model, handleUpdateModel]
  };

  const { darkMode = false, locale = 'en', productTheme = {} } = appContext || {};

  return (
    <UiSdkContext.Provider {...providerProps}>
      <AyxAppWrapper locale={locale} messages={messages} paletteType={darkMode ? 'dark' : 'light'} theme={productTheme}>
        {props.children}
      </AyxAppWrapper>
    </UiSdkContext.Provider>
  );
};

export default Provider;

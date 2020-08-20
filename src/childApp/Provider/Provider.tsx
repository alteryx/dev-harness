/* eslint-disable no-underscore-dangle */
/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from 'react';

import { AyxAppWrapper } from '@ayx/ui-core';
import UiSdkContext, { IContextProviderProps } from '../Context';

interface IProviderProps {
  messages: object;
  messageBroker: {
    ayxAppContext: {
      darkMode: boolean;
      productTheme: object;
      locale: string;
    };
    model: object;
    subscribe: Function;
  };
  children: Array<React.ReactNode>;
}

const Provider: React.FC = (props: IProviderProps) => {
  const { messages = {}, messageBroker } = props;
  const { darkMode = false, productTheme = {}, locale = 'en' } = messageBroker.ayxAppContext || {};
  const [model, updateModel] = useState(messageBroker.model);

  const handleUpdateModel = newModel => {
    updateModel(newModel);
    messageBroker.model = newModel;
  };

  useEffect(() => {
    const receiveToolConfiguration = data => {
      handleUpdateModel({ ...data });
    };
    messageBroker.subscribe('MODEL_UPDATED', receiveToolConfiguration);

    return function cleanUp() {
      handleUpdateModel(messageBroker.model);
    };
  }, []);

  const providerProps: IContextProviderProps = {
    id: 'sdk-provider',
    value: [model, handleUpdateModel]
  };

  return (
    <UiSdkContext.Provider {...providerProps}>
      <AyxAppWrapper locale={locale} messages={messages} paletteType={darkMode ? 'dark' : 'light'} theme={productTheme}>
        {props.children}
      </AyxAppWrapper>
    </UiSdkContext.Provider>
  );
};

export default Provider;

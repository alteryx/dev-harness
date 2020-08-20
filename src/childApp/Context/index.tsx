import React from 'react';

export interface IContextProviderProps {
  value: Array<any>;
  id: string;
}

const UiSdkContext = React.createContext(null);

export default UiSdkContext;

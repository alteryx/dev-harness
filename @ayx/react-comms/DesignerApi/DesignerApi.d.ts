import React from 'react';
import { IContext } from '../Utils/types';

interface IDesignerApiProps {
  messages: object;
  ctx?: IContext;
  defaultConfig?: object;
  children: React.ReactElement;
}

declare const DesignerApi: React.ComponentType<IDesignerApiProps>;

export default DesignerApi;

import * as React from 'react';

import { IPadMessagesProps } from '../IntlProviderWithArrows/IntlProviderWithArrows';

type Theme = object | ((obj: object) => object);
export interface IAyxAppWrapperProps {
  children: any;
  locale?: string;
  messages?: {} | [];
  theme?: Theme;
  disableCssBaseline?: boolean;
  padMessagesProps?: IPadMessagesProps;
  paletteType?: 'light' | 'dark';
}

declare const AyxAppWrapper: React.ComponentType<IAyxAppWrapperProps>;

export default AyxAppWrapper;

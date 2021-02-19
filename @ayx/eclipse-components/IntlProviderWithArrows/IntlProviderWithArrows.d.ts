import * as React from 'react';

export interface IPadMessagesProps {
  character?: string;
  multiplier?: number;
}

export interface IIntlProviderWithArrowsProps {
  children: any;
  locale?: string;
  messages?: object | object[];
  formats?: object;
  defaultLocale?: 'en';
  defaultFormats?: {};
  padMessagesProps?: IPadMessagesProps;
  textComponent?: 'span';
}

declare const IntlProviderWithArrows: React.ComponentType<IIntlProviderWithArrowsProps>;

export default IntlProviderWithArrows;

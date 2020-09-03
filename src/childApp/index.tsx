import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { Button, Grid, Typography } from '@ayx/ui-core';
import { FormattedMessage } from 'react-intl';

import Provider from './Provider/Provider';
import DevHarnessMessageApi from './DevHarnessMessageApi/DevHarnessMessageApi';
import DesignerMessageApi from './DesignerMessageApi';
import UiSdkContext from './Context';

const messages = {
  en: {
    'example.label': 'Super awesome string.',
  },
  fr: {
    'example.label': 'Ficelle super génial.',
  },
  de: {
    'example.label': 'Super tolle Saite.',
  },
  es: {
    'example.label': 'Cadena super impresionante.',
  },
  pt: {
    'example.label': 'Corda super incrível.',
  },
  ja: {
    'example.label': '超素晴らしい文字列',
  },
  zh: {
    'example.label': '超棒的弦',
  },
};

declare global {
  // eslint-disable-next-line @typescript-eslint/interface-name-prefix
  interface Window {
    Alteryx: any;
  }
}

const devHarnessMessageApi = new DevHarnessMessageApi();

const initApp = async () => {
  await devHarnessMessageApi.onReady();
};

initApp();

const SampleIncrementButton = () => {
  const [model, handleUpdateModel] = useContext(UiSdkContext);
  const updateModel = () => {
    const newModel = { ...model };
    newModel.count++;
    handleUpdateModel({ model: { ...newModel } });
  };
  return (
    <Button color="primary" onClick={updateModel} variant="contained">
      Click this to increase my count
    </Button>
  );
};

const SampleDecrementButton = () => {
  const [model, handleUpdateModel] = useContext(UiSdkContext);
  const decrementCount = () => {
    const newModel = { ...model };
    newModel.count--;
    handleUpdateModel({ model: { ...newModel } });
  };
  return (
    <Button color="primary" onClick={decrementCount} variant="contained">
      Click this to decrease my count
    </Button>
  );
};

ReactDOM.render(
  <Provider messageBroker={devHarnessMessageApi} messages={messages}>
    <Grid container>
      <Grid item xs={3}>
        <SampleIncrementButton />
      </Grid>
      <Grid item xs={3}>
        <SampleDecrementButton />
      </Grid>
    </Grid>
    <Grid item spacing={6} style={{ marginTop: '20px' }}>
      <Typography variant="h1">
        <FormattedMessage id="example.label" />
      </Typography>
    </Grid>
  </Provider>,
  document.getElementById('app')
);

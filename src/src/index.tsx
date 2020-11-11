import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { AyxAppWrapper, Button, Grid, Typography } from '@ayx/ui-core';
import { FormattedMessage } from 'react-intl';
import { Context as UiSdkContext, DesignerApi } from '@ayx/ayx-ui-sdk';

const messages = {
  en: {
    'example.label': 'Super awesome string.'
  },
  fr: {
    'example.label': 'Ficelle super génial.'
  },
  de: {
    'example.label': 'Super tolle Saite.'
  },
  es: {
    'example.label': 'Cadena super impresionante.'
  },
  pt: {
    'example.label': 'Corda super incrível.'
  },
  ja: {
    'example.label': '超素晴らしい文字列'
  },
  zh: {
    'example.label': '超棒的弦'
  }
};

const SampleIncrementButton = () => {
  const [model, handleUpdateModel] = useContext(UiSdkContext);
  console.log(model)
  const updateModel = () => {
    const newModel = { ...model };
    newModel.Configuration.count++;
    handleUpdateModel({ Configuration: { count: newModel.Configuration.count } });
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
    newModel.Configuration.count--;
    handleUpdateModel({ Configuration: { count: newModel.Configuration.count } });
  };
  return (
    <Button color="primary" onClick={decrementCount} variant="contained">
      Click this to decrease my count
    </Button>
  );
};

ReactDOM.render(
  <DesignerApi messages={messages} ctx={{ AlteryxLanguageCode: 'en' }}>
    <AyxAppWrapper>
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
    </AyxAppWrapper>
  </DesignerApi>,
  document.getElementById('app')
);

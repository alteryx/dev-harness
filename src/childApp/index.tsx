import React, { useContext } from 'react';
import ReactDOM from 'react-dom';

import { Button } from '@ayx/ui-core';
import Provider from './Provider/Provider'

import DevHarnessMessageApi from './DevHarnessMessageApi/DevHarnessMessageApi'
import UiSdkContext from './Context';

const devHarnessMessageApi = new DevHarnessMessageApi();

const initApp = async () => {
  await devHarnessMessageApi.onReady();
}

initApp();

const SampleButton = () => {
  const [model, handleUpdateModel] = useContext(UiSdkContext)
  const updateModel = () => {
    const newModel = { ...model }
    newModel.count++
    handleUpdateModel({ model: { ...newModel } });
  }
  return (
    <Button onClick={updateModel}> Click this to update my count </Button>
  )
}

ReactDOM.render(<Provider messages={{}} messageBroker={devHarnessMessageApi}> <SampleButton/> </Provider>, document.getElementById('app'));

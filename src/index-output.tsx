import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { AyxAppWrapper, Grid, TextField, Box } from '@ayx/eclipse-components';
import { Context as UiSdkContext, DesignerApi } from '@ayx/react-comms';

const App = () => {
  const [model, handleUpdateModel] = useContext(UiSdkContext);

  const onHandleTextChange = event => {
    const newModel = { ...model };
    newModel.Configuration.filePath = event.target.value;
    handleUpdateModel(newModel);
  };

  return (
    <Box p={4}>
      <Box>
        <TextField
          fullWidth
          id="file-path-textfield"
          label="Enter File Path"
          onChange={onHandleTextChange}
          placeholder="C:\Users\Public\python_output_sample_data.csv"
          value={model.Configuration.filePath || ''}
        />
      </Box>
    </Box>
  )
}

const Tool = () => {
  return (
    <DesignerApi messages={{}}>
      <AyxAppWrapper> 
        <App />
      </AyxAppWrapper>
    </DesignerApi>
  )
}

ReactDOM.render(
  <Tool />,
  document.getElementById('app')
);

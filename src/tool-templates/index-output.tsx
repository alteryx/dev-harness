import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { AyxAppWrapper, TextField, Box, Container } from '@alteryx/ui';
import { Context as UiSdkContext, DesignerApi } from '@alteryx/react-comms';

const App = () => {
  const [model, handleUpdateModel] = useContext(UiSdkContext);

  const onHandleTextChange = event => {
    const newModel = { ...model };
    newModel.Configuration.filePath = event.target.value;
    handleUpdateModel(newModel);
  };

  return (
    <Box marginTop={3}>
      <Container>
        <TextField
          fullWidth
          id="file-path-textfield"
          label="Enter File Path"
          onChange={onHandleTextChange}
          placeholder="C:\Users\Public\python_output_sample_data.csv"
          value={model.Configuration.filePath || ''}
        />
      </Container>
    </Box>
  )
}

const Tool = () => {
  return (
    <DesignerApi messages={{}} defaultConfig={{ Configuration: { filePath: '' } }}>
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

import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { AyxAppWrapper, Grid, TextField, Container, Box } from '@alteryx/ui';
import { Context as UiSdkContext, DesignerApi } from '@alteryx/react-comms';

const App = () => {
  const [model, handleUpdateModel] = useContext(UiSdkContext);

  const onHandleTextChange = event => {
    const newModel = { ...model };
    newModel.Configuration[event.target.name] = event.target.value;
    handleUpdateModel(newModel);
  };

  return (
    <Box marginTop={4}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="leftField"
              id="left-field-textfield"
              label="Append prefix to left field names (optional)"
              onChange={onHandleTextChange}
              placeholder=""
              value={model.Configuration.leftField || ''}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="rightField"
              id="right-field-textfield"
              label="Append prefix to right field names (optional)"
              onChange={onHandleTextChange}
              placeholder=""
              value={model.Configuration.rightField || ''}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

const Tool = () => {
  return (
    <DesignerApi messages={{}} defaultConfig={{ Configuration: { leftField: '', rightField: '' }}}>
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
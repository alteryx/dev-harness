import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { AyxAppWrapper, Grid, TextField, Box } from '@ayx/eclipse-components';
import { Context as UiSdkContext, DesignerApi } from '@ayx/react-comms';

const App = () => {
  const [model, handleUpdateModel] = useContext(UiSdkContext);

  const onHandleTextChange = event => {
    const newModel = { ...model };
    newModel.Configuration[event.target.name] = event.target.value;
    handleUpdateModel(newModel);
  };

  return (
    <Grid alignItems="flex-end" container>
      <Grid item>
        <Box p={2}>
          <Box>
            <TextField
              fullWidth
              name="leftField"
              id="left-field-textfield"
              label="Append prefix to left field names (optional)"
              onChange={onHandleTextChange}
              placeholder=""
              value={model.Configuration.leftField || ''}
            />
          </Box>
        </Box>
      </Grid>
      <Grid item>
        <Box p={2}>
          <Box>
            <TextField
              fullWidth
              name="rightField"
              id="right-field-textfield"
              label="Append prefix to right field names (optional)"
              onChange={onHandleTextChange}
              placeholder=""
              value={model.Configuration.rightField || ''}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
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
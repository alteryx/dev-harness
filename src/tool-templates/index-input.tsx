import React, { useContext, useRef } from 'react';
import ReactDOM from 'react-dom';
import { AyxAppWrapper, Box, Grid, TextField, InputAdornment, IconButton, Button, Typography, Container } from '@alteryx/ui';
import { File, X, Folder } from '@alteryx/icons';
import { Context as UiSdkContext, DesignerApi, JsEvent } from '@alteryx/react-comms';

const Explorer = () => {
  const [model, handleUpdateModel] = useContext(UiSdkContext);

  const inputFileRef = useRef(null);

  const onHandleChange = () => {
    const { files } = inputFileRef.current;
    const newModel = { ...model };
    const mappedFileNames = Object.values(files)
    .map((file: any) => file.name)
    .join(', ')
    newModel.Configuration.fileNames = mappedFileNames
    handleUpdateModel(newModel);
  };

  const onButtonClick = async () => {
    const newModel = { ...model };
    const val = await JsEvent(window.Alteryx, 'FileBrowse', {});
    newModel.Configuration.fileNames = val;
    handleUpdateModel(newModel);
  };

  const onHandleTextChange = event => {
    const newModel = { ...model };
    newModel.Configuration.fileNames = event.target.value;
    handleUpdateModel(newModel);
  };

  const onHandleClearButton = () => {
    const newModel = { ...model };
    newModel.Configuration.fileNames = '';
    handleUpdateModel(newModel);
  };

  const getClearButton = count =>
    count ? (
      <InputAdornment position="end">
        <IconButton aria-label="clear text" onClick={onHandleClearButton}>
          <X />
        </IconButton>
      </InputAdornment>
    ) : undefined;

  return (
    <Grid alignItems="flex-end" container spacing={2}>
      <Grid item xs>
        <input multiple onChange={() => onHandleChange()} ref={inputFileRef} style={{ display: 'none' }} type="file" />
        <TextField
          fullWidth
          id="selector-input-1"
          label="Enter a UTF-8 CSV File"
          placeholder="No file selected..."
          InputProps={{
            startAdornment: <InputAdornment position="start">{<File />}</InputAdornment>,
            endAdornment: getClearButton(model.Configuration.fileNames?.length)
          }}
          onChange={onHandleTextChange}
          value={model.Configuration.fileNames || ''}
        />
      </Grid>
      <Grid item>
        <Button color="primary" onClick={onButtonClick} variant="contained">
          <Folder />
        </Button>
      </Grid>
    </Grid>
  );
};

const App = () => {
  return (
    <Box marginTop={3}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
              <Typography variant="h2">
                File Browse
              </Typography>
          </Grid>
          <Grid item xs={12}>
            <Explorer />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

const Tool = () => {
  return (
    <DesignerApi messages={{}} defaultConfig={{ Configuration: { fileNames: '' }}}>
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

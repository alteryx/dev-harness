import React, { useContext, useRef } from 'react';
import ReactDOM from 'react-dom';
import { AyxAppWrapper, Box, Grid, TextField, makeStyles, InputAdornment, IconButton, Button, Typography } from '@ayx/eclipse-components';
import { File, X, Folder } from '@ayx/eclipse-icons';
import { Context as UiSdkContext, DesignerApi } from '@ayx/react-comms';

const useStyles = makeStyles((theme) => ({
  buttonGutter: {
    marginLeft: theme.spacing(2)
  }
}));

const Explorer = props => {
  const { startAdornmentIcon, endAdornmentIcon, placeholder, label, id } = props;
  const [model, handleUpdateModel] = useContext(UiSdkContext);
  const classes = useStyles();

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

  const onButtonClick = () => {
    inputFileRef.current.click();
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
          {endAdornmentIcon}
        </IconButton>
      </InputAdornment>
    ) : undefined;

  return (
    <Grid alignItems="flex-end" container>
      <Grid item xs>
        <input multiple onChange={() => onHandleChange()} ref={inputFileRef} style={{ display: 'none' }} type="file" />
        <TextField
          fullWidth
          id={id}
          InputProps={{
            startAdornment: <InputAdornment position="start">{startAdornmentIcon}</InputAdornment>,
            endAdornment: getClearButton(model.Configuration.fileNames?.length)
          }}
          label={label}
          onChange={onHandleTextChange}
          placeholder={placeholder}
          value={model.Configuration.fileNames || ''}
        />
      </Grid>
      <Grid item>
        <Button className={classes.buttonGutter} color="primary" onClick={onButtonClick} variant="contained">
          <Folder />
        </Button>
      </Grid>
    </Grid>
  );
};

const App = () => {
  return (
    <Box p={4}>
      <Box marginBottom={4}> 
        <Typography variant="h2">
          File Browse
        </Typography>
      </Box>
      <Box>
        <Explorer 
          endAdornmentIcon={<X />}
          id="selector-input-1"
          label="Enter a UTF-8 CSV File"
          placeholder="No file selected..."
          startAdornmentIcon={<File />}
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

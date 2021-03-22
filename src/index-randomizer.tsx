import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { AyxAppWrapper, Box, Grid, Button, ListItem, Paper, List, ListItemText, ListSubheader, ListItemIcon, Typography, Divider, Collapse, useTheme } from '@ayx/eclipse-components';
import { Shuffle, CheckCircle, AlertTriangle } from '@ayx/eclipse-icons';
import { Context as UiSdkContext, DesignerApi } from '@ayx/react-comms';

const App = () => {
  const renderListItem = (meta) => {
    return Object.keys(meta).map(data => {
      const label = meta[data] && typeof meta[data] !== 'object' ? `${meta[data]}` : data;
      const matching = meta[data] === model.Configuration.RandomFieldName
      return (
        <React.Fragment key={data}>
          <ListItem selected={matching}> 
            <ListItemText primary={label} />
            { matching ? <ListItemIcon><CheckCircle /></ListItemIcon> : null }
          </ListItem>
          <Divider />
          {Array.isArray(meta[data]) ? meta[data].map(item => <Collapse in={true} timeout="auto" unmountOnExit><Box pl={6}>{renderListItem(item)}</Box></Collapse>) : null}
        </React.Fragment>
      );
    });
  };

  const randomize = () => {
    const curConfiguration = model.Configuration;
    const randomMeta = model.Meta[Math.floor(Math.random() * model.Meta.length)];

    handleUpdateModel({ Meta: {...model.meta}, Configuration: {...curConfiguration, ...{
      RandomFieldName: randomMeta
    }}});
  };

  const [model, handleUpdateModel] = React.useContext(UiSdkContext);

  useEffect(() => {
    handleUpdateModel({ Configuration: {...model.Configuration }})
  }, []);

  const NoOptionsMessage = () => {
    const theme = useTheme();
    return (
      <Box m={4}>
        <Grid alignItems="center" container direction="column">
          <Grid item>
            <Box m={1}>
              <AlertTriangle color={theme.palette.text.secondary} size="large" />
            </Box>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2">Connect to an upstream tool to populate.</Typography>
          </Grid>
        </Grid>
      </Box>
    );
  };

  return (
    <Box m={4}>
      <Grid container alignItems="center" spacing={4}>
        <Grid item xs={12}>
          <Paper>
            <List subheader={
              <ListSubheader>
                <Grid container>
                  <Grid item xs>Incoming Fields</Grid>
                  <Grid item xs="auto">
                    <Button onClick={randomize} color="primary" variant="contained" startIcon={<Shuffle />}>Randomize</Button>
                  </Grid>
                </Grid>
              </ListSubheader>}>
                { model.Meta ? renderListItem(model.Meta) : <NoOptionsMessage /> }
              </List>
            </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

const Tool = () => {
  return (
    <DesignerApi messages={{}} defaultConfig={{ Configuration: { RandomFieldName: undefined }}} >
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

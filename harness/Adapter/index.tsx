import React, { Component } from 'react';
import { Box, Grid, Paper, AyxAppWrapper, FormControl, Typography, IconButton, Divider, MenuItem, TextField, Accordion, AccordionSummary, AccordionDetails, withStyles, List, ListItem, ListItemText, Collapse } from '@alteryx/ui';
import { ArrowRight, ArrowLeft, MinimizeHorizontal, MaximizeHorizontal } from '@alteryx/icons';

import AppHeader from '../AppHeader';
import { mtg, address } from '../exampleData';
import InputDataIcon from '../icons/InputDataIcon';
import DefaultToolIcon from '../icons/DefaultToolIcon';

interface IAdapterProps {
  classes: any;
}

interface IAdapterState {
  model: any;
  darkMode: boolean;
  locale: string;
  modelDrawerOpen: boolean;
  toolDrawerOpen: boolean;
}

const actionTypes = ['UPDATE_PALETTE_TYPE', 'UPDATE_THEME', 'UPDATE_LOCALE', 'MODEL_UPDATED'];

const styles = (theme) => ({
  fullHeight: {
    height: '100%'
  },
  contentHeight: {
    height: 'calc(100vh - 32px)',
    overflowY: 'hidden'
  },
  toolDrawerOpen: {
    width: 400,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  toolDrawerExpanded: {
    width: 600,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  modelDrawerOpen: {
    height: '100%',
    width: 400,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
  },
  modelDrawerClosed: {
    height: '100%',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
  }
});

const inputOptions = [{
  value: 'none',
  primary: 'No Input'
},{
  value: 'address',
  primary: 'Address (US)'
}, {
  value: 'mtg',
  primary: 'MTG Card Attributes'
}];

const exampleData = {
  mtg: mtg,
  address: address
}

class Adapter extends Component<IAdapterProps, IAdapterState> {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
      model: { Configuration: {} },
      locale: 'en',
      modelDrawerOpen: true,
      toolDrawerOpen: true
    };
  }
  contentWindow: any;

  handleRef = ref => {
    this.contentWindow = ref ? ref.contentWindow : null;
  };

  receiveMessageEnvelope = ({ data }) => {
    if (actionTypes.find(t => t === data.type)) {
      const curModel = this.state.model;
      this.setState({
        model: { 
          ...curModel, Configuration: { ...data.payload.Configuration }
         }
      });
    } else if (data.type === 'INIT') {
      this.contentWindow.postMessage({ type: 'HANDSHAKE_RECEIVED' });
      this.sendUpdates();
    }
  };

  sendUpdates = () => {
    const { model, darkMode, locale } = this.state;
    this.contentWindow.postMessage({ type: 'MODEL_UPDATED', payload: { ...model } }, '*');
    this.contentWindow.postMessage({ type: 'AYX_APP_CONTEXT_UPDATED', payload: { darkMode, locale } }, '*');
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.sendUpdates();
    }
  }

  componentDidMount() {
    window.addEventListener('message', this.receiveMessageEnvelope);
  }

  componentWillUnmount() {
    window.removeEventListener('message', this.receiveMessageEnvelope);
  }

  setDarkMode = darkMode => {
    this.setState({
      darkMode
    });
  };

  setLocale = locale => {
    this.setState({
      locale
    });
  };

  toggleToolDrawer = () => {
    const { toolDrawerOpen } = this.state;
    this.setState({ toolDrawerOpen: !toolDrawerOpen });
  };

  toggleModelDrawer = () => {
    const { modelDrawerOpen } = this.state;
    this.setState({ modelDrawerOpen: !modelDrawerOpen });
  };

  handleInputChange = (e) => {
    const curModel = this.state.model;
    const meta = e.target.value !== 'none' ? {
      Meta: { fields: exampleData[e.target.value] }
    } : { Meta: undefined };
    this.setState({
      model: { 
        ...curModel, ...meta
       }
    });
  };

  renderListItem = (model) => {
    return Object.keys(model).map(key => {
      const label = model[key] && Array.isArray(model) ? model[key] : `${key}: ${model[key]}`;
      return (
        <React.Fragment key={key}>
          <ListItem>
            <ListItemText primary={label} />
          </ListItem>
          <Divider />
          {Array.isArray(model[key]) ? model[key].map(item => <Collapse in={true} timeout="auto" unmountOnExit><Box pl={6}>{this.renderListItem(item)}</Box></Collapse>) : null}
        </React.Fragment>
      );
    });
  };

  render() {
    const { classes } = this.props;
    const { darkMode, model, locale, modelDrawerOpen, toolDrawerOpen } = this.state;

    const metaFieldNames = model.Meta ? model.Meta.fields[0][0].fields.map(field => { 
      return field.name
    }) : [];

    return (
      <AyxAppWrapper locale={locale} paletteType={darkMode ? 'dark' : 'light'}>
        <Grid className={classes.fullHeight} container direction="column" wrap="nowrap">
          <Grid item>
            <AppHeader 
              darkMode={darkMode}
              handleSetDarkMode={this.setDarkMode}
              handleSetLocale={this.setLocale}
              locale={locale}/>
          </Grid>          
          <Grid item container className={classes.contentHeight}>
            <Grid item xs="auto" className={toolDrawerOpen ? classes.toolDrawerOpen : classes.toolDrawerExpanded}>
              <Box m={4}>
                <Grid container alignItems="center">
                  <Grid item xs>
                    <Typography variant="overline">Tool Name (1)</Typography>
                  </Grid>
                  <Grid item>
                    <IconButton onClick={this.toggleToolDrawer}>
                      { toolDrawerOpen ? <MaximizeHorizontal /> : <MinimizeHorizontal /> }
                    </IconButton>
                  </Grid>
                </Grid>
              </Box>
              <Divider />
              <iframe
                ref={this.handleRef}
                src="http://localhost:8080/childApp.html"
                style={{ border: 0, height: '100%', width: '100%'}}
                title="child-app"
              />
            </Grid>
            <Divider orientation="vertical" />
            <Grid item xs className={classes.fullHeight}>
              <Paper className={classes.fullHeight}>
                <Grid container justify="center">
                  <Grid xs={5} item>
                    <Box m={4}>
                      <FormControl fullWidth>
                        <TextField select label="Meta" SelectProps={{ autoWidth: false }} onChange={this.handleInputChange} defaultValue="none">
                        {inputOptions.map(option => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.primary}
                          </MenuItem>
                        ))}
                        </TextField>
                      </FormControl>
                    </Box>
                  </Grid>
                </Grid>
                <Grid className={classes.fullHeight} container justify="center">
                  <Grid item>
                    <Box mt={30}>
                      { model.Meta ? <InputDataIcon /> : null }
                      <DefaultToolIcon />
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Divider orientation="vertical" /> 
            <Grid item xs="auto" className={modelDrawerOpen ? classes.modelDrawerOpen : classes.modelDrawerClosed}>
              <Box m={4}>
                <Grid container alignItems="center">
                  <Grid item>
                    <IconButton onClick={this.toggleModelDrawer}>
                      { modelDrawerOpen ? <ArrowRight /> : <ArrowLeft /> }
                    </IconButton>
                  </Grid>
                  { modelDrawerOpen ? <Grid item xs>
                    <Typography align="right">Model</Typography>
                  </Grid> : null }
                </Grid>
              </Box>
              <Divider />
              { modelDrawerOpen ? 
                <>
                  <Grid item xs={12}>
                    <Accordion>
                    <AccordionSummary aria-controls="config-content" id="config-header">
                        <Typography variant="overline">Configuration</Typography>
                      </AccordionSummary>
                      <AccordionDetails id="config-content">
                        <List>
                          {this.renderListItem(model.Configuration)}
                        </List>
                      </AccordionDetails>
                    </Accordion>
                  </Grid>
                  {model.Meta ?
                    <Grid item xs={12}>
                      <Accordion>
                        <AccordionSummary aria-controls="meta-content" id="meta-header">
                          <Typography variant="overline">Meta</Typography>
                        </AccordionSummary>
                        <AccordionDetails id="meta-content">
                          <List>
                            {this.renderListItem(metaFieldNames)}
                          </List>
                        </AccordionDetails>
                      </Accordion>
                    </Grid>: null}
                  {model.Secrets ?
                    <Grid item xs={12}>
                        <Accordion>
                        <AccordionSummary aria-controls="secrets-content" id="secrets-header">
                          <Typography variant="overline">Secrets</Typography>
                        </AccordionSummary>
                        <AccordionDetails id="secret-content">
                            <List>
                              {this.renderListItem(model.Secrets)}
                            </List>
                          </AccordionDetails>
                        </Accordion>
                    </Grid> : null
                  }
                </>
              : null }
            </Grid>
          </Grid>
        </Grid>
      </AyxAppWrapper>
    );
  }
}

export default withStyles(styles)(Adapter);

import React, { Component } from 'react';
// import { TreeView, TreeItem } from '@ayx/ui-core-lab';
import { Box, Grid, Paper, AyxAppWrapper, Typography, IconButton, Divider, Accordion, AccordionSummary, AccordionDetails, withStyles, List, ListItem, ListItemText, Collapse } from '@ayx/eclipse-components';
import { ArrowRight, ArrowLeft, MinimizeHorizontal, MaximizeHorizontal } from '@ayx/eclipse-icons';

import AppHeader from '../AppHeader';

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
    width: 400,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
  },
  modelDrawerClosed: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
  }
});

class Adapter extends Component<IAdapterProps, IAdapterState> {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
      model: { Meta: {MetaKeyExample1: 999}, Configuration: {KeyFromAdapter1: 1234, KeyFromAdapter2: 1234, KeyFromAdapter3: [ {NestedKey1: 324, NestedKey2: [{NestedNestedKey1: 324, NestedNestedKey2: 324}]} ]}},
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
          Configuration: data.payload.Configuration,
          Meta: this.state.model.Meta,
          Secrets: this.state.model.Secrets,
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
    // multiple instances of this adapter running
    // will need toolId and pluginType to make a unique ID
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

  renderListItem = (model) => {
    return Object.keys(model).map(data => {
      const label = model[data] && typeof model[data] !== 'object' ? `${data}: ${model[data]}` : data;
      return (
        <>
        <ListItem key={data}>
          <ListItemText primary={label} />
        </ListItem>
        {Array.isArray(model[data]) ? model[data].map(item => <Collapse in={true} timeout="auto" unmountOnExit><Box pl={6}>{this.renderListItem(item)}</Box></Collapse>) : null}
        </>
      );
    });
  };


  render() {
    const { classes } = this.props;
    const { darkMode, model, locale, modelDrawerOpen, toolDrawerOpen } = this.state;
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
          
          <Grid item container className={classes.fullHeight}>

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
            <Grid item xs>
              <Paper className={classes.fullHeight}>
                <Grid className={classes.fullHeight} container justify="center" alignContent="center">
                  <Grid item>
                    <img width="60" src="../../buildTemplates/exampleToolIcon.png" />
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
                      <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                        <Typography variant="overline">Configuration</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <List>
                          {this.renderListItem(model.Configuration)}
                        </List>
                      </AccordionDetails>
                    </Accordion>
                  </Grid>
                  {model.Meta ?
                  <Grid item xs={12}>
                    <Accordion>
                      <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                        <Typography variant="overline">Meta</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <List>
                          {this.renderListItem(model.Meta)}
                        </List>
                      </AccordionDetails>
                    </Accordion>
                  </Grid>: null}
                  {model.Secrets ?
                  <Grid item xs={12}>
                      <Accordion>
                        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                          <Typography variant="overline">Secrets</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
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

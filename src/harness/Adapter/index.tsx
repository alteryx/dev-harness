import React, { Component } from 'react';
import { TreeView, TreeItem } from '@ayx/ui-core-lab';
import { Box, Grid, Paper, AyxAppWrapper, Typography, IconButton, Divider, Accordion, AccordionSummary, AccordionDetails } from '@ayx/ui-core';
import { ChevronRight, ChevronDown, ArrowRight, ArrowLeft, MinimizeHorizontal, MaximizeHorizontal } from '@ayx/icons';
import { withStyles } from '@ayx/ui-core/styles';

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
      model: { MetaInfo: {key: 2}, Configuration: {key2: 3}},
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

      console.log("receiveMessageEnvelope")
      console.dir(data.payload)

      const curModel = this.state.model;

      this.setState({
        model: { 
          Configuration: data.payload.Configuration,
          MetaInfo: this.state.model.MetaInfo,
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
                        <TreeView
                          defaultCollapseIcon={<ChevronDown />}
                          defaultExpandIcon={<ChevronRight />}
                          disableSelection={true}
                        >
                          {this.renderTreeItem(model.Configuration)}
                        </TreeView>
                      </AccordionDetails>
                    </Accordion>
                  </Grid>
                  {model.MetaInfo ?
                  <Grid item xs={12}>
                    <Accordion>
                      <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                        <Typography variant="overline">MetaInfo</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <TreeView
                          defaultCollapseIcon={<ChevronDown />}
                          defaultExpandIcon={<ChevronRight />}
                          disableSelection={true}
                        >
                          {this.renderTreeItem(model.MetaInfo)}
                        </TreeView>
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
                          <TreeView
                            defaultCollapseIcon={<ChevronDown />}
                            defaultExpandIcon={<ChevronRight />}
                            disableSelection={true}
                          >
                            {this.renderTreeItem(model.Secrets)}
                          </TreeView>
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

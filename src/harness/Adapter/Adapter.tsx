import React, { Component } from 'react';
import { TreeView, TreeItem } from '@ayx/ui-core-lab';
import { Button, Drawer, Grid, AyxAppWrapper, Typography, Card } from '@ayx/ui-core';
import { XSmall, ChevronRight, ChevronDown } from '@ayx/icons';
import { withStyles } from '@ayx/ui-core/styles';

import AppToggles from '../AppToggles';
import AppHeader from '../AppHeader';

interface IAdapterProps {
  classes: any;
}

interface IAdapterState {
  model: any;
  darkMode: boolean;
  locale: string;
  drawerOpen: boolean;
}

const actionTypes = ['UPDATE_PALETTE_TYPE', 'UPDATE_THEME', 'UPDATE_LOCALE', 'MODEL_UPDATED'];

const styles = {
  fullHeight: {
    height: '100%'
  },
  drawerWidth: {
    width: 250
  }
};

class Adapter extends Component<IAdapterProps, IAdapterState> {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
      model: { Configuration: { count: 1, otherData: [{ someStuff: 'okay' }, { test: 'test' }] } },
      locale: 'en',
      drawerOpen: false
    };
  }

  contentWindow: any;

  handleRef = ref => {
    this.contentWindow = ref ? ref.contentWindow : null;
  };

  receiveMessageEnvelope = ({ data }) => {
    if (actionTypes.find(t => t === data.type)) {
      this.setState({
        model: { Configuration: data.payload.Configuration }
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

  toggleModelDrawer = () => {
    const { drawerOpen } = this.state;
    this.setState({ drawerOpen: !drawerOpen });
  };

  renderTreeItem = model => {
    let iterator = model;
    if (model.Configuration) {
      iterator = model.Configuration
    }
    return Object.keys(iterator).map(data => {
      console.log(data)
      const label = iterator[data] && typeof iterator[data] !== 'object' ? `${data}: ${iterator[data]}` : data;
      return (
        <TreeItem key={data} label={label} nodeId={data}>
          {Array.isArray(iterator[data]) ? iterator[data].map(item => this.renderTreeItem(item)) : null}
        </TreeItem>
      );
    });
  };

  render() {
    const { classes } = this.props;
    const { darkMode, model, locale, drawerOpen } = this.state;
    return (
      <AyxAppWrapper locale={this.state.locale} paletteType={darkMode ? 'dark' : 'light'}>
        <Grid className={classes.fullHeight} container direction="column" wrap="nowrap">
          <AppHeader toggleModelDrawer={this.toggleModelDrawer} />
          <Drawer open={drawerOpen}>
            <Button
              color="primary"
              endIcon={<XSmall size="xsmall" />}
              onClick={this.toggleModelDrawer}
              size="small"
              variant="contained"
            >
              Close
            </Button>
            <Typography> Current Model State </Typography>
            <Card className={classes.drawerWidth}>
              <TreeView
                defaultCollapseIcon={<ChevronDown size="xsmall" />}
                defaultExpandIcon={<ChevronRight size="xsmall" />}
              >
                {this.renderTreeItem(model)}
              </TreeView>
            </Card>
          </Drawer>
          <AppToggles
            darkMode={darkMode}
            handleSetDarkMode={this.setDarkMode}
            handleSetLocale={this.setLocale}
            locale={locale}
            count={model.Configuration.count}
          />
          <hr style={{ borderBottom: '5px solid red', width: '100%' }} />
          <Grid item style={{ width: '100%' }}>
            <iframe
              ref={this.handleRef}
              src="http://localhost:3000/childApp.html"
              style={{ border: 0, height: '100%', width: '100%' }}
              title="child-app"
            />
          </Grid>
        </Grid>
      </AyxAppWrapper>
    );
  }
}

export default withStyles(styles)(Adapter);

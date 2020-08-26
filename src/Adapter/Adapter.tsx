import React, { Component } from 'react';
import { Autocomplete } from '@ayx/ui-core-lab';
import { TextField, Grid, FormControlLabel, Switch, AyxAppWrapper } from '@ayx/ui-core';
import { withStyles } from '@ayx/ui-core/styles';

const actionTypes = ['UPDATE_PALETTE_TYPE', 'UPDATE_THEME', 'UPDATE_LOCALE', 'UPDATE_MODEL'];

const styles = {
  fullHeight: {
    height: '100%'
  }
};

const productTheme = {
  overrides: {
    MuiButton: {
      contained: {
        backgroundColor: 'blanchedAlmond'
      }
    }
  }
};

class Adapter extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      initialContent: '',
      darkMode: false,
      model: { count: 0 },
      locale: 'en'
    };
  }

  contentDocument: any;

  contentWindow: any;

  handleRef = ref => {
    this.contentWindow = ref ? ref.contentWindow : null;
  };

  receiveMessageEnvelope = ({ data }) => {
    if (actionTypes.find(t => t === data.type)) {
      this.setState({
        ...data.payload
      });
    } else if (data.type === 'INIT') {
      this.contentWindow.postMessage({ type: 'HANDSHAKE_RECEIVED' });
      this.sendUpdates();
    }
  };

  sendUpdates = () => {
    const { model, darkMode, locale } = this.state;
    this.contentWindow.postMessage({ type: 'UPDATE_MODEL', payload: { ...model } }, '*');
    this.contentWindow.postMessage({ type: 'UPDATE_APP_CONTEXT', payload: { darkMode, locale, productTheme } }, '*');
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

  render() {
    const { classes } = this.props;
    const { darkMode, model, locale } = this.state;
    return (
      <AyxAppWrapper locale={this.state.locale} paletteType={darkMode ? 'dark' : 'light'} theme={productTheme}>
        <Grid className={classes.fullHeight} container direction="column" wrap="nowrap">
          <Grid container direction="column">
            <Grid item xs={6}>
              <Autocomplete
                disableClearable
                onChange={(e, value) => this.setLocale(value)}
                options={['en', 'fr', 'de', 'es', 'pt', 'ja', 'zh']}
                renderInput={(params) => <TextField {...params} fullWidth />}
                value={locale}
              />
            </Grid>
          </Grid>
          <Grid container direction="column">
            <Grid item xs={6}>
              <h1>This is my count {model.count}</h1>
            </Grid>
          </Grid>
          <Grid container direction="column">
            <Grid item xs={6}>
              <FormControlLabel control={<Switch onChange={() => this.setDarkMode(!darkMode)} />} label="Dark Mode" />
            </Grid>
          </Grid>
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

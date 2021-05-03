import React from 'react';
import { AppBar, Toolbar, Grid, Divider, Typography, FormLabel, FormControlLabel, Switch, makeStyles } from '@alteryx/ui';

interface IAppHeaderProps {
  locale: string;
  handleSetLocale: Function;
  handleSetDarkMode: Function;
  darkMode: boolean;
  model?: any;
  configuration?: any;
}
const localeOptions = [{
  value: 'en',
  primary: 'en'
}, {
  value: 'fr',
  primary: 'fr'
}, {
  value: 'de',
  primary: 'de'
}, {
  value: 'es',
  primary: 'es'
}, {
  value: 'pt',
  primary: 'pt'
}, {
  value: 'ja',
  primary: 'ja'
}, {
  value: 'zh',
  primary: 'zh'
}];

const AppHeader = (props: IAppHeaderProps): JSX.Element => {
  const { darkMode, locale, handleSetLocale, handleSetDarkMode } = props;

  const useStyles = makeStyles({

  });

  const classes = useStyles();

  return (
    <>
      <AppBar color="default" position="static">
        <Toolbar>
          <Grid container alignItems="center" alignContent="space-between">
            <Grid item xs>
              <Typography variant="h4">Alteryx Designer Dev Harness</Typography>
            </Grid>
            <Grid item>
              <Grid container spacing={4} alignItems="center">
                <Grid item><FormLabel>Locale</FormLabel></Grid>
                <Grid item>
                </Grid>
                <Grid item>
                  <FormControlLabel control={<Switch onChange={() => handleSetDarkMode(!darkMode)} />} label="Dark Mode" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
        <Divider />
      </AppBar>
    </>
  );
};

export default AppHeader;

import React from 'react';
import { AppBar, Toolbar, Grid, Divider, Typography, FormControlLabel, Switch, makeStyles, TextField } from '@ayx/ui-core';
import { Autocomplete } from '@ayx/ui-core-lab';

interface IAppHeaderProps {
  locale: string;
  handleSetLocale: Function;
  handleSetDarkMode: Function;
  darkMode: boolean;
  model?: any;
  configuration?: any;
}

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
              <Grid container spacing={4}>
                <Grid item>
                  <Autocomplete
                    disableClearable
                    onChange={(e, value) => handleSetLocale(value)}
                    options={['en', 'fr', 'de', 'es', 'pt', 'ja', 'zh']}
                    renderInput={params => <TextField {...params} />}
                    value={locale}
                  />
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

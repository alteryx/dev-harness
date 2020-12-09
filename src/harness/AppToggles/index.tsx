import React from 'react';
import { Grid, FormControlLabel, Switch, TextField, makeStyles } from '@ayx/ui-core';
import { Autocomplete } from '@ayx/ui-core-lab';

interface IAppToggleProps {
  locale: string;
  handleSetLocale: Function;
  handleSetDarkMode: Function;
  darkMode: boolean;
  model?: any;
  configuration?: any;
  count: any;
}

const useStyles = makeStyles({
  spacing: {
    margin: '10px'
  }
});

const AppToggles = (props: IAppToggleProps): JSX.Element => {
  const { locale, handleSetLocale, handleSetDarkMode, darkMode, count } = props;
  console.log('configuration', count)
  const classes = useStyles();
  return (
    <Grid container>
      <Grid className={classes.spacing} container>
        <Grid item xs={1}>
          <Autocomplete
            disableClearable
            onChange={(e, value) => handleSetLocale(value)}
            options={['en', 'fr', 'de', 'es', 'pt', 'ja', 'zh']}
            renderInput={params => <TextField {...params} label="Current locale" />}
            value={locale}
          />
        </Grid>
      </Grid>
      <Grid className={classes.spacing} container>
        <Grid item xs={3}>
          <FormControlLabel control={<Switch onChange={() => handleSetDarkMode(!darkMode)} />} label="Dark Mode" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AppToggles;

import React from 'react';
import { Grid, Typography, FormControlLabel, Switch, TextField, makeStyles } from '@ayx/ui-core';
import { Autocomplete } from '@ayx/ui-core-lab';

interface IAppToggleProps {
  locale: string;
  handleSetLocale: Function;
  handleSetDarkMode: Function;
  darkMode: boolean;
  model: any;
}

const useStyles = makeStyles({
  spacing: {
    margin: '10px'
  }
});

const AppToggles = (props: IAppToggleProps): JSX.Element => {
  const { locale, handleSetLocale, handleSetDarkMode, darkMode, model } = props;
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
          <Typography variant="h3">This is my count {model.count}</Typography>
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

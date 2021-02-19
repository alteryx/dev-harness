import React from 'react';
import { AppBar, Grid, Typography, Button } from '@ayx/eclipse-components';

interface IAppHeaderProps {
  toggleModelDrawer: any;
}

const AppHeader = (props: IAppHeaderProps): JSX.Element => {
  const { toggleModelDrawer } = props;

  return (
    <AppBar color="primary" position="static">
      <Grid container>
        <Grid item xs={4}>
          <Typography variant="h1">UI-SDK Dev Harness</Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={4}>
          <Button color="primary" onClick={toggleModelDrawer} variant="contained">
            Show Model
          </Button>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default AppHeader;

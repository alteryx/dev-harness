import React, { useContext, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { AyxAppWrapper, Box, Grid, Typography, makeStyles, Theme } from '@alteryx/ui';
import { Alteryx } from '@alteryx/icons';
import { Context as UiSdkContext, DesignerApi } from '@alteryx/react-comms';



const useStyles = makeStyles((theme: Theme) => ({
  alteryx: {
    color: theme.palette.brand.corporateBlue,
    height: '125px',
    width: '125px'
  }
}));

const App = () => {
  const classes = useStyles();
  const [model, handleUpdateModel] = useContext(UiSdkContext);

  const updateModel = () => {
    handleUpdateModel({ Configuration: {...model.Configuration }})
  }
  useEffect(() => {
    updateModel();
  }, []);

  return (
    <Box p={4}>
     <Grid container spacing={4} direction="column" alignItems="center">
        <Grid item>
          <Alteryx className={classes.alteryx} />
        </Grid>
        <Grid item>
          <Typography variant="h3">
            To get started, edit src/index.tsx
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

const Tool = () => {
  return (
    <DesignerApi messages={{}}>
      <AyxAppWrapper> 
        <App />
      </AyxAppWrapper>
    </DesignerApi>
  )
}

ReactDOM.render(
  <Tool />,
  document.getElementById('app')
);

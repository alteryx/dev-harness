import React, { useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { AyxAppWrapper, Box, Grid, Typography } from '@ayx/eclipse-components';
import { Context as UiSdkContext, DesignerApi } from '@ayx/react-comms';

const App = () => {
  const [model, handleUpdateModel] = useContext(UiSdkContext);

  const updateModel = () => {
    handleUpdateModel({ Configuration: {...model.Configuration }})
  }
  useEffect(() => {
    updateModel();
  }, []);


  return (
    <Box p={4}>
      <Grid container spacing={10} direction="column" alignItems="center">
        <Grid item>
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 155.92 172">
              <path d="M207.11,190.13a7.59,7.59,0,0,0-7.44-5.61,14.22,14.22,0,0,0-2.93.37,61.55,61.55,0,0,1-11.56,1.82c-7.27.36-8.55-2.49-9-10.65V64.31a9.79,9.79,0,0,0-3.56-6.72l-.72-.47a5.3,5.3,0,0,0-.77-.57C165,53,154.94,50.11,146.37,47.94l-.64-.18A140.58,140.58,0,0,0,113.18,44a137.08,137.08,0,0,0-14.81.79c-4.88.48-18.08,2.67-22.52,4.19-1.28.42-5.45,2.39-5.59,6.32.07,2,2.38,8.58,2.38,8.58,1.5,4.57,3.09,5.69,6,6.27,2.32.27,7.32-.78,10.66-1.36a112.16,112.16,0,0,1,18.27-2.24,117.58,117.58,0,0,1,19.45,1c14.59,2.24,20.22,6.73,20.22,6.73v43.39l-1.29.05-31.17.77c-41.69,1.32-61,17.86-60.7,51.18-.06,15.13,4.68,27.27,13.71,35.12,8.39,7.37,20.7,11.25,35.5,11.25h.07c17,0,31.62-5.24,45.87-16.52l1.36-1,.7,1.56a25,25,0,0,0,17.29,14.49,47.8,47.8,0,0,0,13,1.51,34.77,34.77,0,0,0,3.91-.22A58.54,58.54,0,0,0,203.57,211c3.86-1.84,6.6-4.12,6.4-8.2-.16-3.6-2.86-12.62-2.86-12.62M148.64,180l-.56.41-.59.36c-10.37,7.17-25.85,12-38.56,12h0c-18.62-.4-25.41-7-25.78-24.91.4-20.65,7.31-27,30.57-28.49l32.11-1.5,1.44-.06,1.39,0V180Z" transform="translate(-54.06 -44)" fill="#0093d0"/>
            </svg>
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

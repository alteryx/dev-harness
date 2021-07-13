import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { 
  AyxAppWrapper,
  Box,
  Autocomplete,
  Grid,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  TextField,
  RadioGroup,
  Radio
} from '@alteryx/ui';
import { Context as UiSdkContext, DesignerApi } from '@alteryx/react-comms';

const App = () => {
  const [model, handleUpdateModel] = useContext(UiSdkContext);
  const generateData = (data) => {
    return data.map((item) => {
      item.primary = item.name;
      item.value = item.name;
      return item;
    });
  };

  const handleNumChange = (e) => {
    const newModel = { ...model };
    newModel.Configuration.numRecords = e.target.value;
    handleUpdateModel(newModel);
  }

  const handleSortChecked = () => {
    const newModel = { ...model };
    newModel.Configuration.doSort = !newModel.Configuration.doSort;
    handleUpdateModel(newModel);
  }

  const handleOrderChange = (e) => {
    const newModel = { ...model };
    newModel.Configuration.orderType = e.target.value;
    handleUpdateModel(newModel);
  }

  const handleFieldSelect = (e) => {
    const newModel = { ...model };
    newModel.Configuration.fieldSelect = e.target.value;
    handleUpdateModel(newModel);
  }

  return (
    <Box p={4}>
      <Grid container>
        <Grid item md={3} sm={6} xs={12}>
          <FormControl>
            <InputLabel htmlFor="numRecords">Select the number of records:</InputLabel>
            <TextField type="number" id="numRecords" onChange={handleNumChange} value={model.Configuration.numRecords} />
            <Box marginTop={2}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={model.Configuration.doSort}
                    color="primary"
                    onChange={handleSortChecked}
                    value="checkedB"
                  />
                }
                label="Sort Incoming Data (Optional)"
              />
            </Box>
            {
              model.Configuration.doSort ?
                <Box p={2}> 
                  <InputLabel htmlFor="select">Select a field to order by:</InputLabel>
                  <Autocomplete
                    id="Autocomplete"
                    options={generateData(model.Meta?.fields[0][0].fields)}
                    renderInput={params => (
                      <TextField
                        {...params}
                        fullWidth
                        id="ac-meta"
                        label="Meta Data"
                        margin="normal"
                        placeholder="Select Column..."
                      />
                    )}
                    onChange={handleFieldSelect}
                    value={model.Configuration.fieldSelect}
                  />
                  <Box marginTop={2}>
                    <InputLabel htmlFor="radio">Select the order:</InputLabel>
                    <RadioGroup aria-label="Gender" name="gender1" onChange={handleOrderChange} value={model.Configuration.orderType}>
                      <FormControlLabel control={<Radio />} label="Descending" value="desc" />
                      <FormControlLabel control={<Radio />} label="Ascending" value="asc" />
                    </RadioGroup>
                  </Box>
                </Box>
              : null
            }
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  )
}

const Tool = () => {
  return (
    <DesignerApi messages={{}} defaultConfig={{ Configuration: { numRecords: 0, doSort: false, orderType: 'desc', fieldSelect: '' }, Meta: { fields: [[{ fields: []}]] } }}>
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
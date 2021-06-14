import React, { useContext } from 'react';
import { Context as UiSdkContext } from '@alteryx/react-comms';
import { getRecipe } from '../../Services/getRecipe';
import { FormControl, InputLabel, Button, Autocomplete, Input, Grid, Typography, TextField } from '@alteryx/ui';

const cuisineTypes = [
  'African',
  'American',
  'British',
  'Cajun',
  'Caribbean',
  'Chinese',
  'Eastern European',
  'French',
  'German',
  'Greek',
  'Indian',
  'Irish',
  'Italian',
  'Japanese',
  'Jewish',
  'Korean',
  'Latin American',
  'Mediterranean',
  'Mexican',
  'Middle Eastern',
  'Nordic',
  'Southern',
  'Spanish',
  'Thai',
  'Vietnamese'
]

const RecipeForm = ({ updateRecipes }) => {
  const [model, handleUpdateModel] = useContext(UiSdkContext);

  const handleChange = (e) => {
    const newModel = { ...model };
    newModel.Configuration[e.target.name] = e.target.value;
    handleUpdateModel(newModel);
  }

  const selectCuisineType = (newValue) => {
    const newModel = { ...model };
    newModel.Configuration.cuisineType = newValue;
    handleUpdateModel(newModel);
  }

  const handleSearchRequest = async () => {
    const formData = { ...model.Configuration};
    const ingredientList = [formData['ingredient1'], formData['ingredient2'], formData['ingredient3']]
    const { results } = await getRecipe({ ingredients: ingredientList, cuisine: formData.cuisineType });
    updateRecipes(results);
  }

  return (
    <Grid container direction="column" item xs={12} spacing={4}>
      <Grid item xs={6}>
        <Autocomplete
            options={cuisineTypes}
            onChange={(event, newValue) => selectCuisineType(newValue)}
            getOptionLabel={option => option}
            name="cuisineType"
            renderInput={params => (
              <TextField {...params} fullWidth name="cuisineType" id="cuisineType" label="Cuisine Type" margin="normal" />
            )}
            value={model.Configuration.cuisineType}
          />
      </Grid>
      <Grid item xs={12}>
        <FormControl>
          <InputLabel htmlFor="ingredient-form">Ingredient 1</InputLabel>
          <Input id="ingredient-form" name="ingredient1" onChange={handleChange} value={model.Configuration.ingredient1} />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl>
          <InputLabel htmlFor="ingredient-form-2">Ingredient 2</InputLabel>
          <Input id="ingredient-form" name="ingredient2" onChange={handleChange} value={model.Configuration.ingredient2} />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl>
          <InputLabel htmlFor="ingredient-form-3">Ingredient 3</InputLabel>
          <Input id="ingredient-form" name="ingredient3" onChange={handleChange} value={model.Configuration.ingredient3} />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleSearchRequest}>
          Search
        </Button>
      </Grid>
    </Grid>
  )
}


export default RecipeForm;
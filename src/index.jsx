import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { AyxAppWrapper, Box, Grid, Typography } from '@alteryx/ui';
import RecipeForm from './Components/RecipeForm/index.jsx';
import RecipeList from './Components/RecipeList/index.jsx';
import RecipeCard from './Components/RecipeCard/index.jsx';
import { DesignerApi } from '@alteryx/react-comms';

const App = () => {
  const [recipes, updateRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <Box p={4}>
      <Grid container spacing={4} direction="column" alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h1">
            Find Your Recipe! 
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            This tool uses the Spoontacular API. You'll need to generate your own key for it. To generate your own key, create an account at this URL: https://spoonacular.com/food-api.
          </Typography>
        </Grid>
        {!selectedRecipe ?
          <>
            <RecipeForm updateRecipes={updateRecipes} />
            <RecipeList setSelectedRecipe={setSelectedRecipe} recipes={recipes} />
          </> : 
          null
        }
        {selectedRecipe ? 
          <RecipeCard recipe={selectedRecipe} /> :
          null
        }
      </Grid>
    </Box>
  )
}

const Tool = () => {
  return (
    <DesignerApi messages={{}} defaultConfig={{ Configuration: { ingredient1: '', ingredient2: '', ingredient3: '', cuisineType: null } }}>
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

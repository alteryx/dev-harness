import React from 'react';
import { Grid, Typography, Card, Box, Button } from '@alteryx/ui';

const RecipeList = ({ recipes, setSelectedRecipe }) => {
  console.log(recipes);
  if (!recipes.length) {
    return <></>;
  }

  return (
    <Grid item container direction="column" xs={12} spacing={4}>
      <Typography variant="h1">
        Search Results
      </Typography>
      {recipes.map(recipe => {
        return (
          <Grid container item xs={12} key={recipe.id}>
            <Card elevation={2}>
              <Box m={4}>
                <Grid item xs={6}>
                  <Typography variant="h3">
                    {recipe.title}
                  </Typography>
                </Grid>
              </Box>
                <Grid item xs={12}>
                  <img src={`${recipe.image}`} />
                </Grid>
              <Box m={4}>
                <Grid item xs={12}>
                  <Typography variant="h5" >
                    Calories: {recipe.nutrition.nutrients[0].amount}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography>
                    Protein: {recipe.nutrition.nutrients[8].amount}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography>
                    Carbohydrates: {recipe.nutrition.nutrients[3].amount}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography>
                    Fat: {recipe.nutrition.nutrients[1].amount}
                  </Typography>
                </Grid>
                <Button onClick={() => setSelectedRecipe(recipe)}>
                  View Details
                </Button>
              </Box>
            </Card>
          </Grid>
        )
      })}
    </Grid>
  )
};

export default RecipeList;
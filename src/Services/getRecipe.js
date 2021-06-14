const API_KEY = '13fa16bd15964c8f90e4137cad363e28'
const RECIPE_URL = 'https://api.spoonacular.com/recipes/complexSearch?'

export const getRecipe = async (formData) => {
  const res = await fetch(RECIPE_URL + new URLSearchParams({
    ...formData,
    addRecipeNutrition: 'true',
    apiKey: API_KEY
  }), 
  {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return res.json();
}
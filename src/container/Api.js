import axios from 'axios';

const food_api_id = '68f6489e';
const food_api_key = '1ce5e769b57d0c26a348bbac0f0c93dd';
const recipe_api_id = '8ed36f30';
const recipe_api_key = '0dddd47598eccca3d33b6622c3643680';

const food_url = 'https://api.edamam.com/api/food-database/v2/parser';
const recipe_url = 'https://api.edamam.com/search';

// sample results:
// Food:
// https://api.edamam.com/api/food-database/v2/parser?ingr=idli&app_id=68f6489e&app_key=1ce5e769b57d0c26a348bbac0f0c93dd
// 
// Recipe:
// https://api.edamam.com/search?q=chicken&app_id=8ed36f30&app_key=0dddd47598eccca3d33b6622c3643680

export const searchFood = async ({food}) => {
  let params = new URLSearchParams();
  params.append('app_id', food_api_id);
  params.append('app_key', food_api_key);
  params.append('ingr', food);
  console.log(food_url+"?"+params.toString())
  const response = await axios.get(food_url+"?"+params.toString())
  return response;
}

export const searchRecipe = async ({ food }) => {
  let params = new URLSearchParams();
  params.append('app_id', recipe_api_id);
  params.append('app_key', recipe_api_key);
  params.append('q', food);
  const response = axios.get(recipe_url+"?"+params.toString())
  return response
}
import difference from 'lodash/difference';
import groupBy from 'lodash/groupBy';
import isEmpty from 'lodash/isEmpty';

export const getOutOfStockIngredients = (ingredients) => {
  return !isEmpty(ingredients)
    ? ingredients.filter((el) => el.isOutOfStock)
    : [];
};

export const getRecipesWithAvailableIngredients = (ingredients, recipes) => {
  const outOfStockIngredients = getOutOfStockIngredients(ingredients).map(
    (e) => e.name,
  );
  //const recipes = recipes || [];
  return recipes.filter((recipe) => {
    const recipeIngredients = recipe.ingredientsList || [];

    return difference(outOfStockIngredients, recipeIngredients).length ===
      outOfStockIngredients.length
      ? recipe
      : null;
  });
};

const getNotHistoryRecipes = (availableRecipes, history) => {
  const historyIds = history.map((e) => e.recipeid);
  return availableRecipes.filter((recipe) => !historyIds.includes(recipe.id));
};

export const getAvalableRecipesGroups = (ingredients, recipes, history) => {
  let availableRecipes =
    getRecipesWithAvailableIngredients(ingredients, recipes) || [];
  availableRecipes = getNotHistoryRecipes(availableRecipes, history);
  return groupBy(availableRecipes, 'recipeType');
};

export const callBackend = (type, data) => {
  return type === 'read'
    ? localStorage.getItem(data.type)
    : localStorage.setItem(data.type, JSON.stringify(data.payload));
};

import { createSelector } from '@reduxjs/toolkit';

const recipes = (state) => state.recipesServiceReducer.recipes;

export const recipesSelector = createSelector(recipes, (items) => items);

export const recipesByIdSelector = createSelector([recipes], (res) => (id) =>
  res.filter((e) => e.id === id),
);

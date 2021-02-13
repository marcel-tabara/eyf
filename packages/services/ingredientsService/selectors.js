import { createSelector } from '@reduxjs/toolkit';

const ingredients = (state) => state.ingredientsServiceReducer.ingredients;

export const ingredientsSelector = createSelector(
  ingredients,
  (items) => items,
);

export const ingredientsByIdSelector = createSelector(
  [ingredients],
  (res) => (id) => res.filter((e) => e.id === id),
);

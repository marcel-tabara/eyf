import { createSlice } from '@reduxjs/toolkit';
import * as recipesSelectors from './selectors';
import * as recipesSchemas from './schemas';

const recipesService = createSlice({
  name: 'recipes',
  initialState: {},
  reducers: {
    getRecipes: () => {},
    updateRecipes: () => {},
    setRecipes: (state, action) => {
      state.recipes = action.payload;
    },
  },
});

const { actions, reducer } = recipesService;

export { reducer as recipesServiceReducer };
export { actions as recipesActions };
export { recipesSelectors };
export { recipesSchemas };

import { createSlice } from '@reduxjs/toolkit';
import * as ingredientsSelectors from './selectors';
import * as ingredientsSchemas from './schemas';

const ingredientsService = createSlice({
  name: 'ingredients',
  initialState: {},
  reducers: {
    getIngredients: () => {},
    updateIngredients: () => {},
    setIngredients: (state, action) => {
      state.ingredients = action.payload;
    },
  },
});

const { actions, reducer } = ingredientsService;

export { reducer as ingredientsServiceReducer };
export { actions as ingredientsActions };
export { ingredientsSelectors };
export { ingredientsSchemas };

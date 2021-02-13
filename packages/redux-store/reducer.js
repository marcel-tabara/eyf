import {
  ingredientsServiceReducer,
  recipesServiceReducer,
  menuServiceReducer,
} from '@recipes/services';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  ingredientsServiceReducer,
  recipesServiceReducer,
  menuServiceReducer,
});

export default rootReducer;

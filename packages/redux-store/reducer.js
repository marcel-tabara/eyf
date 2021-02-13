import {
  ingredientsServiceReducer,
  recipesServiceReducer,
  menuServiceReducer,
  settingsServiceReducer,
} from '@recipes/services';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  ingredientsServiceReducer,
  recipesServiceReducer,
  menuServiceReducer,
  settingsServiceReducer,
});

export default rootReducer;

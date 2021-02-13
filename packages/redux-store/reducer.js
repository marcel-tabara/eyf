import {
  ingredientsServiceReducer,
  recipesServiceReducer,
  menuServiceReducer,
  settingsServiceReducer,
  alertServiceReducer,
  searchServiceReducer,
} from '@recipes/services';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  ingredientsServiceReducer,
  recipesServiceReducer,
  menuServiceReducer,
  settingsServiceReducer,
  alertServiceReducer,
  searchServiceReducer,
});

export default rootReducer;

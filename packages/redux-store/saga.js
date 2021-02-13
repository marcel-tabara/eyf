import ingredientsSaga from '@recipes/services/ingredientsService/saga';
import recipesSaga from '@recipes/services/recipesService/saga';
import menuSaga from '@recipes/services/menuService/saga';
import { all, fork } from 'redux-saga/effects';

export default function* sagas() {
  yield all([ingredientsSaga, recipesSaga, menuSaga].map((saga) => fork(saga)));
}

import ingredientsSaga from '@recipes/services/ingredientsService/saga';
import recipesSaga from '@recipes/services/recipesService/saga';
import menuSaga from '@recipes/services/menuService/saga';
import settingsSaga from '@recipes/services/settingsService/saga';
import { all, fork } from 'redux-saga/effects';

export default function* sagas() {
  yield all(
    [ingredientsSaga, recipesSaga, menuSaga, settingsSaga].map((saga) =>
      fork(saga),
    ),
  );
}

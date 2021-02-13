import { recipesActions, setAlert } from '@recipes/services';
import { utils } from '@recipes/services';
import { put, takeLatest } from 'redux-saga/effects';

export function* watchGetRecipes() {
  try {
    const res = yield utils.callBackend('read', {
      type: 'eat_my_food_recipes',
    });

    yield put(recipesActions.setRecipes(JSON.parse(res)));
  } catch (error) {
    yield put(setAlert({ type: 'error', msg: error.message }));
  }
}

export function* watchUpdateRecipes({ payload }) {
  console.log('########## payload', payload);
  try {
    yield utils.callBackend('write', {
      type: 'eat_my_food_recipes',
      payload,
    });

    yield put(recipesActions.getRecipes());
  } catch (error) {
    yield put(setAlert({ type: 'error', msg: error.message }));
  }
}

export default function* rootSaga() {
  yield takeLatest('recipes/getRecipes', watchGetRecipes);
  yield takeLatest('recipes/updateRecipes', watchUpdateRecipes);
}

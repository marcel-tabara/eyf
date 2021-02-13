import { recipesActions, alertActions } from '@recipes/services';
import { utils } from '@recipes/services';
import { put, takeLatest } from 'redux-saga/effects';

export function* watchGetRecipes() {
  try {
    const res = yield utils.persistData('read', {
      type: 'eat_my_food_recipes',
    });

    yield put(recipesActions.setRecipes(res));
  } catch (error) {
    yield put(alertActions.setAlert({ type: 'error', msg: error.message }));
  }
}

export function* watchUpdateRecipes({ payload }) {
  console.log('########## payload', payload);
  try {
    yield utils.persistData('write', {
      type: 'eat_my_food_recipes',
      payload,
    });

    yield put(recipesActions.getRecipes());
    yield put(alertActions.setAlert({ type: 'success', msg: 'Good Job' }));
  } catch (error) {
    yield put(alertActions.setAlert({ type: 'error', msg: error.message }));
  }
}

export default function* rootSaga() {
  yield takeLatest('recipes/getRecipes', watchGetRecipes);
  yield takeLatest('recipes/updateRecipes', watchUpdateRecipes);
}

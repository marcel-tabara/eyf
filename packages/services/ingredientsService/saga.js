import { ingredientsActions, alertActions, utils } from '@recipes/services';
import { put, takeLatest } from 'redux-saga/effects';

export function* watchGetIngredients() {
  try {
    const res = yield utils.persistData('read', {
      type: 'eat_my_food_ingredients',
    });

    yield put(ingredientsActions.setIngredients(res));
  } catch (error) {
    yield put(alertActions.setAlert({ type: 'error', msg: error.message }));
  }
}

export function* watchUpdateIngredients({ payload }) {
  try {
    yield utils.persistData('write', {
      type: 'eat_my_food_ingredients',
      payload,
    });

    yield put(ingredientsActions.getIngredients());
    yield put(alertActions.setAlert({ type: 'success', msg: 'Good Job' }));
  } catch (error) {
    yield put(alertActions.setAlert({ type: 'error', msg: error.message }));
  }
}

export default function* rootSaga() {
  yield takeLatest('ingredients/getIngredients', watchGetIngredients);
  yield takeLatest('ingredients/updateIngredients', watchUpdateIngredients);
}

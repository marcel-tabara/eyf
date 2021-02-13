import { ingredientsActions, setAlert, utils } from '@recipes/services';
import { put, takeLatest } from 'redux-saga/effects';

export function* watchGetIngredients() {
  try {
    const res = yield utils.callBackend('read', {
      type: 'eat_my_food_ingredients',
    });

    yield put(ingredientsActions.setIngredients(JSON.parse(res)));
  } catch (error) {
    yield put(setAlert({ type: 'error', msg: error.message }));
  }
}

export function* watchUpdateIngredients({ payload }) {
  try {
    yield utils.callBackend('write', {
      type: 'eat_my_food_ingredients',
      payload,
    });

    yield put(ingredientsActions.getIngredients());
  } catch (error) {
    yield put(setAlert({ type: 'error', msg: error.message }));
  }
}

export default function* rootSaga() {
  yield takeLatest('ingredients/getIngredients', watchGetIngredients);
  yield takeLatest('ingredients/updateIngredients', watchUpdateIngredients);
}

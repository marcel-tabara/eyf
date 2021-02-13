import { settingsActions, setError } from '@recipes/services';
import { utils } from '@recipes/services';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';

export function* watchGetSettings() {
  try {
    const res = yield utils.callBackend('read', {
      type: 'eat_my_food_settings',
    });

    yield put(settingsActions.setSettings(JSON.parse(res)));
  } catch (error) {
    //yield put(setError(error.message));
  }
}

export function* watchUpdateSettings({ payload }) {
  console.log('########## payload', payload);
  try {
    yield utils.callBackend('write', {
      type: 'eat_my_food_settings',
      payload,
    });

    yield put(settingsActions.getSettings());
  } catch (error) {
    //yield put(setError(error.message));
  }
}

export default function* rootSaga() {
  yield takeLatest('settings/getSettings', watchGetSettings);
  yield takeLatest('settings/updateSettings', watchUpdateSettings);
}

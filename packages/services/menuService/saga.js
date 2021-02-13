import { call, put, takeLatest, select } from 'redux-saga/effects';
import isEmpty from 'lodash/isEmpty';
//import { getHistory, setHistory } from './actions';
//import { mock } from './mock';

export function* watchSetEntry(action) {
  const { entry } = action;
  const { isOffline } = (yield select()).configsReducer;

  // if (!isOffline) {
  //   if (entry.id) {
  //     yield call(
  //       reduxSagaFirebase.firestore.setDocument,
  //       `history/${entry.id}`,
  //       entry,
  //     );
  //   } else {
  //     yield call(reduxSagaFirebase.firestore.addDocument, `history`, entry);
  //   }
  //   yield put(getHistory());
  // }
}

export function* watchGetHistory(action) {
  let history = [];
  const { isOffline } = (yield select()).configsReducer;

  // if (isOffline) {
  //   history = mock.history;
  // } else {
  //   const snapshot = yield call(
  //     reduxSagaFirebase.firestore.getCollection,
  //     'history',
  //   );
  //   history = snapshot.docs.map((entry) => {
  //     return {
  //       ...entry.data(),
  //       id: entry.id,
  //       datetime: entry.data().date.toDate(),
  //     };
  //   });
  // }

  // if (isEmpty(history)) history = [];
  // history
  //   .sort(
  //     (d1, d2) =>
  //       new Date(d1.datetime).getTime() - new Date(d2.datetime).getTime(),
  //   )
  //   .reverse();
  // yield put(setHistory(history));
}

export function* watchDeleteEntry(action) {
  const { id } = action.entry;
  const { isOffline } = (yield select()).configsReducer;

  // if (!isOffline) {
  //   yield call(reduxSagaFirebase.firestore.deleteDocument, `history/${id}`);
  //   yield put(getHistory());
  // }
}

export default function* rootSaga() {
  yield takeLatest('menu/createEntry', watchSetEntry);
  yield takeLatest('menu/getHistory', watchGetHistory);
  yield takeLatest('menu/deleteEntry', watchDeleteEntry);
}

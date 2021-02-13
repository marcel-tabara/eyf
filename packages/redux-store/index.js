import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducer'
import rootSaga from './saga'

export default function configureAppStore(preloadedState) {
  const sagaMiddleware = createSagaMiddleware()

  const store = configureStore({
    reducer: rootReducer,
    middleware: [logger, sagaMiddleware],
    preloadedState,
  })

  sagaMiddleware.run(rootSaga)

  return store
}

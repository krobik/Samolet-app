import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from '../reducers'
import { watchLoadData } from '../sagas/sagaLoadData'

const sagaMiddleware = createSagaMiddleware()

const middleware = [
    applyMiddleware(sagaMiddleware),
    ...(window.__REDUX_DEVTOOLS_EXTENSION__ ? [window.__REDUX_DEVTOOLS_EXTENSION__()] : [])
]

export const store = createStore(rootReducer, compose(...middleware))

sagaMiddleware.run(watchLoadData)
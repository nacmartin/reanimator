import { createStore, applyMiddleware, compose } from 'redux'
import Reanimator, { reducer as reanimatorReducer } from '../../../../src/'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware()
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    const store = createStore(
        reanimatorReducer,
        composeEnhancers(
            applyMiddleware(sagaMiddleware)
        )
    )
    sagaMiddleware.run(rootSaga, new Reanimator())
    return store
}

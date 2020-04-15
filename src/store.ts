import {applyMiddleware, compose, createStore} from 'redux'
import rootReducer from './reducer'
import thunk from 'redux-thunk'

const composeEnhancers: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    rootReducer,
    undefined,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

export default store

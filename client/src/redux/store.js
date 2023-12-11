import {
	legacy_createStore as createStore,
	combineReducers,
	applyMiddleware,
	compose,
} from 'redux'
import thunk from 'redux-thunk'
import {
	appReducer,
	userReducer,
	usersReducer,
	productReducer,
	productsReducer,
} from './reducers'

const reducer = combineReducers({
	app: appReducer,
	user: userReducer,
	users: usersReducer,
	product: productReducer,
	products: productsReducer,
})

const composeEnhanced = window.__REDUX_DEVTOOLS_EXTERNAL_COMPOSE__ || compose

export const store = createStore(
	reducer,
	composeEnhanced(applyMiddleware(thunk))
)

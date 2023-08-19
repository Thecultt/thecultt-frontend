import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import check_email from './check_email'
import register from './register'
import products_filters from './products_filters'
import products from './products'
import cart from './cart'
import order from './order'

export const rootReducer = combineReducers({
	form: formReducer,
	check_email,
	register,
	products_filters,
	products,
	cart,
	order
});

export type RootState = ReturnType<typeof rootReducer>;

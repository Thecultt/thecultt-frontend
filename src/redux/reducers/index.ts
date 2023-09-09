import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import check_email from './check_email'
import register from './register'
import products_filters from './products_filters'
import products from './products'
import cart from './cart'
import order from './order'
import favorites from './favorites'
import waiting from './waiting'
import header from './header'
import cabinet_sell from './cabinet_sell'

export const rootReducer = combineReducers({
	form: formReducer,
	check_email,
	register,
	products_filters,
	products,
	cart,
	order,
	favorites,
	waiting,
	header,
	cabinet_sell
});

export type RootState = ReturnType<typeof rootReducer>;

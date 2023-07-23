import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import check_email from './check_email'
import register from './register'
import products from './products'

export const rootReducer = combineReducers({
	form: formReducer,
	check_email,
	register,
	products
});

export type RootState = ReturnType<typeof rootReducer>;

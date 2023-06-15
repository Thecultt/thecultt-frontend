import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import reglog from './reglog'
import check_email from './check_email'
import register from './register'

export const rootReducer = combineReducers({
	form: formReducer,
	reglog,
	check_email,
	register
});

export type RootState = ReturnType<typeof rootReducer>;

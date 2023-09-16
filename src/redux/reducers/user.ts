import { UserState, UserActions, UserActionTypes } from '../types/IUser'

const initialState: UserState = {
	isLoaded: false,
	isSending: false,
	user: {}
}

const user = (state = initialState, action: UserActions) => {
	if (action.type === UserActionTypes.SET_USER) {
		return {
			...state,
			isLoaded: true,
			user: action.payload
		}
	}

	if (action.type === UserActionTypes.SET_USER_IS_SENDING) {
		return {
			...state,
			isSending: action.payload
		}
	}

	return state
}

export default user
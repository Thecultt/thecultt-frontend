export interface UserState {
	isLoaded: boolean
	isSending: boolean
	user: any
}

export enum UserActionTypes {
	SET_USER = "SET_USER",
	SET_USER_IS_SENDING = "SET_USER_IS_SENDING"
}

interface setUser {
	type: UserActionTypes.SET_USER;
	payload: any;
}

interface setUserIsSending {
	type: UserActionTypes.SET_USER_IS_SENDING;
	payload: boolean;
}

export type UserActions = setUser | setUserIsSending
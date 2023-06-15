export interface CheckEmailState {
	isSend: boolean
	email: string | null
}

export enum CheckEmailActionTypes {
	SET_CHECK_EMAIL_IS_SEND = "SET_CHECK_EMAIL_IS_SEND",
	SET_CHECK_EMAIL_EMAIL = "SET_CHECK_EMAIL_EMAIL",
}

interface setCheckEmailIsSend {
	type: CheckEmailActionTypes.SET_CHECK_EMAIL_IS_SEND;
	payload: boolean;
}

interface setCheckEmailEmail {
	type: CheckEmailActionTypes.SET_CHECK_EMAIL_EMAIL;
	payload: string;
}

export type CheckEmailActions = setCheckEmailIsSend | setCheckEmailEmail
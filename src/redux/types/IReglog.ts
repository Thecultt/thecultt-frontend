export enum ReglogStateTypesNotLogin {
	REGLOG = "reglog",

	LOGIN = "login",
	REGISTER = "register",

	WELCOME = "welcome",
}

export interface ReglogState {
	open: boolean;
	closeAnimation: boolean;
	changeCloseAnimation: boolean;

	type: ReglogStateTypesNotLogin;
}

export enum ReglogActionTypes {
	SET_REGLOG_OPEN = "SET_REGLOG_OPEN",
	SET_REGLOG_CLOSE_ANIMATION = "SET_REGLOG_CLOSE_ANIMATION",
	SET_REGLOG_CLOSE_CHANGE_ANIMATION = "SET_REGLOG_CLOSE_CHANGE_ANIMATION",
	SET_REGLOG_TYPE = "SET_REGLOG_TYPE",
}

interface setReglogOpen {
	type: ReglogActionTypes.SET_REGLOG_OPEN;
	payload: boolean;
}

interface setReglogCloseAnimation {
	type: ReglogActionTypes.SET_REGLOG_CLOSE_ANIMATION;
	payload: boolean;
}

interface setReglogCloseChangeAnimation {
	type: ReglogActionTypes.SET_REGLOG_CLOSE_CHANGE_ANIMATION;
	payload: boolean;
}

interface setReglogType {
	type: ReglogActionTypes.SET_REGLOG_TYPE;
	payload: string;
}

export type ReglogActions =
	| setReglogOpen
	| setReglogCloseAnimation
	| setReglogCloseChangeAnimation
	| setReglogType
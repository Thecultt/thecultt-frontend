export interface UserInfo {
	first_name: string,
	last_name: string,
}

export interface UserContact {
	email: string,
	phone: string,
}

export interface User extends UserInfo, UserContact {
	id: number,
	phone_is_verified: boolean,
	email_is_verified: boolean
}
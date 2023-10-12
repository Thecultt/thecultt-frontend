import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useTypedSelector } from "../../hooks/useTypedSelector";

import { sendCheckEmail } from "../../redux/actions/check_email";
import { sendRegister } from "../../redux/actions/register";
import { sendLogin } from "../../redux/actions/login";
import { sendRecoveryPassword, sendRecoveryPasswordConfirmed } from "../../redux/actions/recovery_password";

import {
	Popup,
	ReglogCheckEmail,
	ReglogLogin,
	ReglogRegister,
	ReglogWelcome,
	ReglogRecoveryPassword,
	ReglogRecoveryPasswordSuccess,
	ReglogRecoveryPasswordConfirmed,
} from "../../components/";

export enum ReglogStateTypesNotLogin {
	REGLOG = "reglog",

	LOGIN = "login",
	REGISTER = "register",

	WELCOME = "welcome",

	RECOVERY_PASSWORD = "recovery_password",
	RECOVERY_PASSWORD_SUCCESS = "recovery_password_success",

	RECOVERY_PASSWORD_CONFIRMED = "recovery_password_confirmed",
}

const Reglog: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { hash, pathname } = useLocation();

	const [type, setType] = React.useState<string>(
		ReglogStateTypesNotLogin.LOGIN
	);
	const [state, setState] = React.useState<boolean>(false);
	const [isChange, setIsChange] = React.useState<boolean>(false);

	React.useEffect(() => {
		const type_hash: string = hash.split("#")[1] && hash.split("#")[1].split("?") ? hash.split("#")[1].split("?")[0] : hash.split("#")[1];

		if (
			Object.values(ReglogStateTypesNotLogin).find(
				(type) => type == type_hash
			)
		) {
			if (state) {
				setIsChange(true);

				setTimeout(() => {
					setType(type_hash);
					setIsChange(false);
				}, 190);
			} else {
				setState(true);
				setIsChange(false);
				setType(type_hash);
			}
		} else {
			setState(false);
		}
	}, [hash, pathname]);

	const { email } = useTypedSelector(({ check_email }) => check_email);

	const closeFunc = () => {
		setState(false);

		navigate({
			pathname: window.location.pathname,
			search: window.location.search,
			hash: "",
		});
	};

	const onSubmitCheckEmail = (data: any) => {
		return dispatch(sendCheckEmail(data.email) as any);
	};

	const onSubmitRegister = (data: any) => {
		return dispatch(sendRegister(data) as any);
	};

	const onSubmitLogin = (data: any) => {
		return dispatch(sendLogin({ username: email, password: data.password }) as any);
	};

	const onSubmitRecoveryPassword = (data: any) => {
		return dispatch(sendRecoveryPassword(data.email) as any);
	};

	const onSubmitRecoveryPasswordConfirmed = (data: any) => {
		const code = new URLSearchParams(window.location.search).get("code") as string

		return dispatch(sendRecoveryPasswordConfirmed(data.password, code) as any);
	};

	return (
		<Popup state={state} setState={closeFunc} stateContent={!isChange}>
			<>
				{type === ReglogStateTypesNotLogin.REGLOG ? (
					<ReglogCheckEmail onSubmit={onSubmitCheckEmail} />
				) : null}

				{type === ReglogStateTypesNotLogin.LOGIN ? (
					<ReglogLogin onSubmit={onSubmitLogin} />
				) : null}

				{type === ReglogStateTypesNotLogin.REGISTER ? (
					<ReglogRegister onSubmit={onSubmitRegister} />
				) : null}

				{type === ReglogStateTypesNotLogin.WELCOME ? (
					<ReglogWelcome />
				) : null}

				{type === ReglogStateTypesNotLogin.RECOVERY_PASSWORD ? (
					<ReglogRecoveryPassword onSubmit={onSubmitRecoveryPassword} />
				) : null}

				{type === ReglogStateTypesNotLogin.RECOVERY_PASSWORD_SUCCESS ? (
					<ReglogRecoveryPasswordSuccess />
				) : null}

				{type === ReglogStateTypesNotLogin.RECOVERY_PASSWORD_CONFIRMED ? (
					<ReglogRecoveryPasswordConfirmed onSubmit={onSubmitRecoveryPasswordConfirmed} />
				) : null}
			</>
		</Popup>
	);
};

export default Reglog;

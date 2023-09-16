import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useTypedSelector } from "../../hooks/useTypedSelector";

import { sendCheckEmail } from "../../redux/actions/check_email";
import { sendRegister } from "../../redux/actions/register";
import { sendLogin } from "../../redux/actions/login";

import {
	Popup,
	ReglogCheckEmail,
	ReglogLogin,
	ReglogRegister,
	ReglogWelcome,
} from "../../components/";

export enum ReglogStateTypesNotLogin {
	REGLOG = "reglog",

	LOGIN = "login",
	REGISTER = "register",

	WELCOME = "welcome",
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
		const type_hash: string = hash.split("#")[1];

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
			</>
		</Popup>
	);
};

export default Reglog;

import { Dispatch } from "react";

import { ReglogActionTypes, ReglogActions } from "../types/IReglog";

export const setReglogOpen = () => {
	document.body.style.overflowY = "hidden";

	return {
		type: ReglogActionTypes.SET_REGLOG_OPEN,
		payload: true,
	};
};

export const setReglogClose = () => {
	return async (dispatch: Dispatch<ReglogActions>) => {
		dispatch({
			type: ReglogActionTypes.SET_REGLOG_CLOSE_ANIMATION,
			payload: true,
		});

		setTimeout(() => {
			document.body.style.overflowY = "visible";

			dispatch({
				type: ReglogActionTypes.SET_REGLOG_OPEN,
				payload: false,
			});

			dispatch({
				type: ReglogActionTypes.SET_REGLOG_CLOSE_ANIMATION,
				payload: false,
			});
		}, 180);
	}
};

export const setReglogType =
	(type: string, isOpen: boolean) => {
		return async (dispatch: Dispatch<ReglogActions>) => {
			if (isOpen) {
				dispatch({
					type: ReglogActionTypes.SET_REGLOG_CLOSE_CHANGE_ANIMATION,
					payload: true,
				});

				setTimeout(() => {
					dispatch({
						type: ReglogActionTypes.SET_REGLOG_TYPE,
						payload: type,
					});

					dispatch({
						type: ReglogActionTypes.SET_REGLOG_CLOSE_CHANGE_ANIMATION,
						payload: false,
					});
				}, 180);
			} else {
				dispatch({
					type: ReglogActionTypes.SET_REGLOG_TYPE,
					payload: type,
				});
			}
		}
	};

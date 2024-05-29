import axios from 'axios';
import { Dispatch } from 'react';

import { RecoveryPasswordActions, RecoveryPasswordActionTypes } from '../types/IRecoveryPassword';

export const sendRecoveryPassword = (email: string, isRedirect?: boolean) => {
    return async (dispatch: Dispatch<RecoveryPasswordActions>) => {
        dispatch({
            type: RecoveryPasswordActionTypes.SET_RECOVERY_PASSWORD_IS_SEND,
            payload: true,
        });

        return axios
            .post(`${process.env.REACT_APP_API_DOMEN}/reset_password/`, {
                email,
            })
            .then(({ data }) => {
                if (localStorage.getItem('redirect_reglog')) {
                    window.location.href = localStorage.getItem('redirect_reglog') as string;
                }

                if (isRedirect) window.location.hash = 'recovery_password_success';

                dispatch({
                    type: RecoveryPasswordActionTypes.SET_RECOVERY_PASSWORD_IS_SEND,
                    payload: false,
                });
            })
            .catch(({ response }) => {
                dispatch({
                    type: RecoveryPasswordActionTypes.SET_RECOVERY_PASSWORD_IS_SEND,
                    payload: false,
                });

                // if (response) {
                // 	throw new SubmissionError({
                // 		email: "Неверный пароль",
                // 	});
                // }
            });
    };
};

export const sendRecoveryPasswordConfirmed = (password: string, code: string) => {
    return async (dispatch: Dispatch<RecoveryPasswordActions>) => {
        dispatch({
            type: RecoveryPasswordActionTypes.SET_RECOVERY_PASSWORD_IS_SEND,
            payload: true,
        });

        return axios
            .post(`${process.env.REACT_APP_API_DOMEN}/reset_password_confirm/`, { password, code })
            .then(({ data }) => {
                localStorage.setItem('accessToken', data.access);

                window.location.hash = '';
                window.location.reload();

                dispatch({
                    type: RecoveryPasswordActionTypes.SET_RECOVERY_PASSWORD_IS_SEND,
                    payload: false,
                });
            })
            .catch(({ response }) => {
                dispatch({
                    type: RecoveryPasswordActionTypes.SET_RECOVERY_PASSWORD_IS_SEND,
                    payload: false,
                });
            });
    };
};

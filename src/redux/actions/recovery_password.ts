import axios from 'axios';
import { Dispatch } from 'react';

import { LS_KEYS } from 'src/constants/keys';
import { localStorageService } from 'src/services/storage';

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
                localStorageService.setItem(LS_KEYS.accessToken, data.access as string, { value: 1, unit: 'month' });

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

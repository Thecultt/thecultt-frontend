import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { sendCheckEmail } from 'src/redux/actions/check_email';
import { sendRegister } from 'src/redux/actions/register';
import { sendLogin } from 'src/redux/actions/login';
import { sendRecoveryPassword, sendRecoveryPasswordConfirmed } from 'src/redux/actions/recovery_password';
import {
    Popup,
    ReglogCheckEmail,
    ReglogLogin,
    ReglogRegister,
    ReglogWelcome,
    ReglogOldUserNewPassword,
    ReglogWarningBlockedEmailRegister,
    ReglogWarningBlockedEmailLogin,
    ReglogRecoveryPassword,
    ReglogRecoveryPasswordSuccess,
    ReglogRecoveryPasswordConfirmed,
} from 'src/components';

export enum ReglogStateTypesNotLogin {
    REGLOG = 'reglog',

    LOGIN = 'login',
    REGISTER = 'register',

    WELCOME = 'welcome',

    OLD_USER_NEW_PASSWORD = 'old_user_new_password',

    WARNING_BLOCKED_EMAIL_REGISTER = 'warning_blocked_email_register',
    WARNING_BLOCKED_EMAIL_LOGIN = 'warning_blocked_email_login',

    RECOVERY_PASSWORD = 'recovery_password',
    RECOVERY_PASSWORD_SUCCESS = 'recovery_password_success',

    RECOVERY_PASSWORD_CONFIRMED = 'recovery_password_confirmed',
}

const Reglog: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { hash, pathname } = useLocation();

    const [type, setType] = React.useState<string>(ReglogStateTypesNotLogin.LOGIN);
    const [state, setState] = React.useState<boolean>(false);
    const [isChange, setIsChange] = React.useState<boolean>(false);

    React.useEffect(() => {
        const type_hash: string =
            hash.split('#')[1] && hash.split('#')[1].split('?') ? hash.split('#')[1].split('?')[0] : hash.split('#')[1];

        if (new URLSearchParams(window.location.search).get('redirect')) {
            localStorage.setItem(
                'redirect_reglog',
                new URLSearchParams(window.location.search).get('redirect') as string,
            );
        } else {
            localStorage.removeItem('redirect_reglog');
        }

        if (Object.values(ReglogStateTypesNotLogin).find((type) => type == type_hash)) {
            if (state) {
                // setType(type_hash);

                // setIsChange(true);

                // setTimeout(() => {
                setType(type_hash);
                // setIsChange(false);
                // }, 190);
            } else {
                setState(true);
                // setIsChange(false);
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
            hash: '',
        });
    };

    const onSubmitCheckEmail = (data: any) => {
        localStorage.setItem('email', data.email);

        return dispatch(sendCheckEmail(data.email) as any);
    };

    const onSubmitRegister = (data: any) => {
        return dispatch(sendRegister(data) as any);
    };

    const onSubmitLogin = (data: any) => {
        return dispatch(sendLogin({ username: email, password: data.password }) as any);
    };

    const onSubmitRecoveryPassword = (data: any) => {
        return dispatch(sendRecoveryPassword(data.email, true) as any);
    };

    const onSubmitRecoveryPasswordConfirmed = (data: any) => {
        const code = new URLSearchParams(window.location.search).get('code') as string;

        return dispatch(sendRecoveryPasswordConfirmed(data.password, code) as any);
    };

    const popups: { [key: string]: React.ReactNode } = {
        [ReglogStateTypesNotLogin.REGLOG]: <ReglogCheckEmail onSubmit={onSubmitCheckEmail} />,
        [ReglogStateTypesNotLogin.LOGIN]: <ReglogLogin onSubmit={onSubmitLogin} />,
        [ReglogStateTypesNotLogin.REGISTER]: <ReglogRegister onSubmit={onSubmitRegister} />,
        [ReglogStateTypesNotLogin.WELCOME]: <ReglogWelcome />,
        [ReglogStateTypesNotLogin.OLD_USER_NEW_PASSWORD]: <ReglogOldUserNewPassword />,
        [ReglogStateTypesNotLogin.WARNING_BLOCKED_EMAIL_REGISTER]: <ReglogWarningBlockedEmailRegister />,
        [ReglogStateTypesNotLogin.WARNING_BLOCKED_EMAIL_LOGIN]: <ReglogWarningBlockedEmailLogin />,
        [ReglogStateTypesNotLogin.RECOVERY_PASSWORD]: <ReglogRecoveryPassword onSubmit={onSubmitRecoveryPassword} />,
        [ReglogStateTypesNotLogin.RECOVERY_PASSWORD_SUCCESS]: <ReglogRecoveryPasswordSuccess />,
        [ReglogStateTypesNotLogin.RECOVERY_PASSWORD_CONFIRMED]: (
            <ReglogRecoveryPasswordConfirmed onSubmit={onSubmitRecoveryPasswordConfirmed} />
        ),
    };

    return (
        <Popup state={state} setState={closeFunc} stateContent={!isChange}>
            {popups[type]}
        </Popup>
    );
};

export default Reglog;

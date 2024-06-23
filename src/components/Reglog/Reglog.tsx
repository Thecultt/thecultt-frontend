import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useLS } from 'src/hooks/useLS';
import { LS_KEYS } from 'src/constants/keys';
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

    const { hash, pathname, search } = useLocation();

    const [type, setType] = React.useState(ReglogStateTypesNotLogin.LOGIN);
    const [state, setState] = React.useState(false);
    const [isChange, setIsChange] = React.useState(false);

    const [_lsEmail, setLsEmail] = useLS(LS_KEYS.email, '');
    const [_lsRedirectReglog, setLsRedirectReglog, removeLsRedirectReglog] = useLS(LS_KEYS.redirectReglog, '');

    const { email } = useTypedSelector(({ check_email }) => check_email);

    React.useEffect(() => {
        const hashType = (
            hash.split('#')[1] && hash.split('#')[1].split('?') ? hash.split('#')[1].split('?')[0] : hash.split('#')[1]
        ) as ReglogStateTypesNotLogin;

        const redirectParam = new URLSearchParams(window.location.search).get('redirect');

        if (redirectParam) {
            setLsRedirectReglog(redirectParam);
        } else {
            removeLsRedirectReglog();
        }

        if (Object.values(ReglogStateTypesNotLogin).includes(hashType)) {
            if (state) {
                setIsChange(true);

                setTimeout(() => {
                    setType(hashType);
                    setIsChange(false);
                }, 190);
            } else {
                setState(true);
                setIsChange(false);
                setType(hashType);
            }
        } else {
            setState(false);
        }
    }, [hash, pathname]);

    const closeFunc = () => {
        setState(false);

        navigate({
            pathname,
            search,
            hash: '',
        });
    };

    const checkEmailNavigate = (type: ReglogStateTypesNotLogin) => {
        navigate(
            {
                pathname,
                search,
                hash: type,
            },
            {
                replace: true,
            },
        );
    };

    const onSubmitCheckEmail = (data: any) => {
        setLsEmail(data.email as string);
        dispatch(sendCheckEmail(data.email, checkEmailNavigate) as any);
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

    const popups: Record<ReglogStateTypesNotLogin, React.ReactNode> = {
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

    const visibleBackTypes = [
        ReglogStateTypesNotLogin.LOGIN,
        ReglogStateTypesNotLogin.REGISTER,
        ReglogStateTypesNotLogin.RECOVERY_PASSWORD,
    ];

    return (
        <Popup state={state} setState={closeFunc} stateContent={!isChange}>
            {visibleBackTypes.includes(type) && (
                <Link to={`${search}#reglog`} className="reglog-content-form-back">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15 18L9 12L15 6"
                            stroke="#202020"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </Link>
            )}

            {popups[type]}
        </Popup>
    );
};

export default Reglog;

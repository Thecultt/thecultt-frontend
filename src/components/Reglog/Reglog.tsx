import React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import {useTypedSelector} from "../../hooks/useTypedSelector";

import {ReglogStateTypesNotLogin} from "../../redux/types/IReglog";

import {
    setReglogOpen,
    setReglogClose,
    setReglogType,
} from "../../redux/actions/reglog";

import {sendCheckEmail} from "../../redux/actions/check_email";
import {sendRegister} from "../../redux/actions/register";
import {sendLogin} from "../../redux/actions/login";

import {ReglogCheckEmail, ReglogLogin, ReglogRegister, ReglogWelcome} from "../../components/";

const Reglog: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {closeAnimation, changeCloseAnimation, type} = useTypedSelector(
        ({reglog}) => reglog
    );
    const PopupRef = React.useRef<HTMLDivElement>(null);

    const {email} = useTypedSelector(({check_email}) => check_email);

    React.useEffect(() => {
        document.addEventListener("mousedown", toggleReglog);
        document.addEventListener("touchstart", toggleReglog);

        return () => {
            document.removeEventListener("mousedown", toggleReglog);
            document.removeEventListener("touchstart", toggleReglog);
        };
    }, [PopupRef]);

    const closeFunc = () => {
        dispatch(setReglogClose() as any);

        navigate({
            pathname: window.location.pathname,
            search: window.location.search,
            hash: "",
        });
    };

    const toggleReglog = (e: any) => {
        if (PopupRef.current && !PopupRef.current.contains(e.target)) {
            closeFunc();
        }
    };

    const onSubmitCheckEmail = (data: any) => {
        dispatch(sendCheckEmail(data.email) as any);
    };

    const onSubmitRegister = (data: any) => {
        dispatch(sendRegister(data) as any);
    };

    const onSubmitLogin = (data: any) => {
        dispatch(sendLogin({username: email, password: data.password}) as any);
    };

    return (
        <section className={`reglog ${closeAnimation ? "close" : ""}`}>
            <div
                className={`reglog-content ${
                    closeAnimation || changeCloseAnimation ? "close" : ""
                }`}
                ref={PopupRef}
            >
                <div className="reglog-content-close" onClick={closeFunc}>
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M18.4375 5.85156L6.4375 17.8516"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M6.4375 5.85156L18.4375 17.8516"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>

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
            </div>
        </section>
    );
};

const ReglogWrapper: React.FC = () => {
    const {hash, pathname} = useLocation();
    const dispatch = useDispatch();

    const {open} = useTypedSelector(({reglog}) => reglog);

    React.useEffect(() => {
        const type_hash: string = hash.split("#")[1];

        if (
            Object.values(ReglogStateTypesNotLogin).find(
                (type) => type == type_hash
            )
        ) {
            dispatch(setReglogType(type_hash, open) as any);
            dispatch(setReglogOpen());
        } else {
            dispatch(setReglogClose() as any);
        }
    }, [hash, pathname]);

    return <>{open ? <Reglog /> : null}</>;
};

export default ReglogWrapper;

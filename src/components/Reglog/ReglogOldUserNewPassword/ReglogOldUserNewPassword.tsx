import React from 'react';

const ReglogOldUserNewPassword: React.FC = () => {
    const [isSend, setIsSend] = React.useState<boolean>(false);
    const [seconds, setSeconds] = React.useState<number>(30);

    // const onSend = () => {
    //     setIsSend(true);
    //     dispatch(sendRecoveryPassword(localStorage.getItem('email') as any) as any);
    // };

    React.useEffect(() => {
        if (seconds > 0 && isSend) {
            setTimeout(setSeconds, 1000, seconds - 1);
        } else {
            setIsSend(false);
            setSeconds(30);
        }
    }, [seconds, isSend]);

    return (
        <div className="reglog-content-text">
            <h3 className="reglog-content-text__title">Обновите пароль от аккаунта</h3>
            <p className="reglog-content-text__description">
                На указанную почту отправлено письмо для сброса пароля. Задайте новый пароль для обеспечения
                безопасности ваших данных на новом сайте THE CULTT.
            </p>

            {/* 
				Ваня, пока попросил скрыть этот функционал, из за проблем с доходом писем 
			*/}

            <div className="reglog-content-text-btn">
                {/* {isSend ? (
					<p className="reglog-content-text-btn__disabled">Отправить письмо ещё раз через {seconds} сек.</p>
				) : (
					<>
						<button className="btn-regular reglog-content-text-btn__btn" onClick={onSend}>
							Отправить письмо ещё раз
						</button>

						<p className="reglog-content-text-btn__subbtn">
							Если письмо не пришло, мы отправим письмо повторно
						</p>
					</>
				)} */}

                <a href="https://t.me/thecultt_help_it" className="btn-regular reglog-content-text-btn__btn">
                    Связаться с нами
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_11905_63749)">
                            <path
                                d="M11 0.917969C5.43396 0.917969 0.916626 5.4353 0.916626 11.0013C0.916626 16.5673 5.43396 21.0846 11 21.0846C16.566 21.0846 21.0833 16.5673 21.0833 11.0013C21.0833 5.4353 16.566 0.917969 11 0.917969ZM15.6786 7.77464C15.5274 9.3678 14.872 13.2398 14.5392 15.0246C14.398 15.7808 14.1157 16.0329 13.8535 16.0631C13.2687 16.1136 12.825 15.68 12.2604 15.3069C11.373 14.7221 10.8689 14.3591 10.0118 13.7944C9.01354 13.139 9.65888 12.776 10.2336 12.1911C10.3849 12.0399 12.9662 9.69047 13.0166 9.47872C13.0236 9.44665 13.0227 9.41335 13.0139 9.38172C13.0051 9.35009 12.9888 9.32109 12.9662 9.29722C12.9057 9.2468 12.825 9.26697 12.7545 9.27705C12.6637 9.29722 11.252 10.235 8.49929 12.0903C8.09596 12.3626 7.73296 12.5037 7.41029 12.4936C7.04729 12.4836 6.36163 12.292 5.84738 12.1206C5.21213 11.9189 4.71804 11.808 4.75838 11.4551C4.77854 11.2736 5.03063 11.0921 5.50454 10.9005C8.44888 9.61989 10.405 8.77289 11.3831 8.36955C14.1863 7.19989 14.761 6.99822 15.1442 6.99822C15.2249 6.99822 15.4165 7.01839 15.5375 7.11922C15.6383 7.19989 15.6685 7.3108 15.6786 7.39147C15.6685 7.45197 15.6887 7.63347 15.6786 7.77464Z"
                                fill="#285141"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_11905_63749">
                                <rect width="22" height="22" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </a>

                <p className="reglog-content-text-btn__subbtn">
                    Проблема с авторизацией? Напишите в телеграмм{' '}
                    <a href="https://t.me/thecultt_help_it">@thecultt_help_it</a>
                </p>
            </div>
        </div>
    );
};

export default ReglogOldUserNewPassword;

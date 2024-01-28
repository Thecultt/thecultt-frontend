import React from 'react'
import { useDispatch } from 'react-redux'

import { sendRecoveryPassword } from "../../../redux/actions/recovery_password";

const ReglogOldUserNewPassword: React.FC = () => {
	const dispatch = useDispatch()

	const [isSend, setIsSend] = React.useState<boolean>(false)
	const [seconds, setSeconds] = React.useState<number>(30)

	const send = () => {
		// Send
		setIsSend(true)
 
		dispatch(sendRecoveryPassword(localStorage.getItem("email") as any) as any)
	}

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
			<h3 className="reglog-content-text__title">
				Задайте новый пароль
			</h3>
			<p className="reglog-content-text__description">
				В связи с обновлением сайта, просим вас задать новый пароль для вашего аккаунта, в целях обеспечения безопасности данных.

				<br />

				<b>Письмо уже направлено на вашу почту.</b>
			</p>

			<div className="reglog-content-text-btn">
				{isSend ? (
					<p className="reglog-content-text-btn__disabled">Отправить письмо ещё раз через {seconds} сек.</p>
				) : (
					<>
						<button className="btn-regular reglog-content-text-btn__btn" onClick={send}>
							Отправить письмо ещё раз
						</button>

						<p className="reglog-content-text-btn__subbtn">
							Если письмо не пришло, мы отправим письмо повторно
						</p>
					</>
				)}
			</div>
		</div>
	)
}

export default ReglogOldUserNewPassword
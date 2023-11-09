import React from "react";
import {
	Field,
	reduxForm,
	InjectedFormProps,
} from "redux-form";
import { createTextMask } from "redux-form-input-masks";

import { useTypedSelector } from "../../../hooks/useTypedSelector";

import { RenderInput } from "../../";

const CabinetSettingPaymentBlock: React.FC<{} & InjectedFormProps<{}, {}>> = ({
	handleSubmit,
	initialize,
	invalid,
	pristine,
	submitting,
}) => {
	const { user: { pasport, inn, bik, fullname, rs }, isSending } = useTypedSelector(({ user }) => user)

	const [state, setState] = React.useState<boolean>(pasport !== "" || pasport !== null ? true : false);
	const [isEdit, setIsEdit] = React.useState<boolean>(pasport === "" || pasport === null ? true : false)

	React.useEffect(() => {
		initialize({
			pasport, inn, bik, fullname, rs
		})
	}, [isEdit])

	const toggleState = () => {
		setState(!state);
	};

	React.useEffect(() => {
		if (!isSending) {
			setIsEdit(false)
		}
	}, [isSending])

	return (
		<form onSubmit={handleSubmit} className={`cabinet-setting-block ${state ? "active" : ""}`}>
			<div className="cabinet-setting-block-title">
				<h3 className="cabinet-setting-block-title__title">
					Реквизиты для выплат
				</h3>

				{state ? (
					isEdit ? (
						<>
							<button type="submit" className={`cabinet-setting-block-title__btn ${invalid || pristine || submitting ? "disabled" : ""}`}>
								Сохранить
							</button>

							<button type="button" className="cabinet-setting-block-title__btn" onClick={() => setIsEdit(!isEdit)}>
								Отменить
							</button>
						</>
					) : (
						<button type="button" className="cabinet-setting-block-title__btn" onClick={() => setIsEdit(true)}>
							Изменить
						</button>
					)
				) : null}
			</div>

			{
				state ? (
					<div className={`cabinet-setting-block-form ${isEdit ? "active" : ""}`}>
						<div className="cabinet-setting-block-form-input-wrapper">
							<div
								className="cabinet-setting-block-form-input"
								style={{ width: "100%" }}
							>
								<Field
									component={RenderInput}
									name="pasport"
									label="Серия и номер паспорта"
									bgWhite
								/>
							</div>

							<div
								className="cabinet-setting-block-form-input"
								style={{ width: "100%" }}
							>
								<Field
									component={RenderInput}
									name="bik"
									label="БИК"
									bgWhite
								/>
							</div>

							<div
								className="cabinet-setting-block-form-input"
								style={{ width: "100%" }}
							>
								<Field
									component={RenderInput}
									name="rs"
									label="Расчетный счёт"
									bgWhite
								/>
							</div>
						</div>
					</div>
				) : (
					<button
						className="cabinet-setting-block-form-add__btn"
						onClick={toggleState}
					>
						<svg
							width="30"
							height="31"
							viewBox="0 0 30 31"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect
								y="0.5"
								width="30"
								height="30"
								rx="6"
								fill="#F7F4F0"
							/>
							<path
								d="M15 8.5V22.5"
								stroke="#838383"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M8 15.5H22"
								stroke="#838383"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						Добавить реквизиты для выплат
					</button>
				)
			}
		</form >
	);
};

export default reduxForm<{}, {}>({
	form: "cabinet-setting-payment-form",
	// validate,
})(CabinetSettingPaymentBlock);

import React from "react";
import {
	Field,
	reduxForm,
	InjectedFormProps,
} from "redux-form";
import { createTextMask } from "redux-form-input-masks";

import { useTypedSelector } from "../../../hooks/useTypedSelector";

import { RenderInput, RenderRadioSelect } from "../../";

import { validate } from './validate'

const CabinetSettingInfoBlock: React.FC<{} & InjectedFormProps<{}, {}>> = ({
	handleSubmit,
	initialize,
	invalid,
	pristine,
	submitting,
}) => {
	const [isEdit, setIsEdit] = React.useState<boolean>(false)

	const { user: { name, middlename, lastname, dr }, isSending } = useTypedSelector(({ user }) => user)

	React.useEffect(() => {
		initialize({
			name, middlename, lastname, dr
		})
	}, [isEdit])

	React.useEffect(() => {
		if (!isSending) {
			setIsEdit(false)
		}
	}, [isSending])

	return (
		<form onSubmit={handleSubmit} className={`cabinet-setting-block ${isEdit ? "active" : ""}`}>
			<div className="cabinet-setting-block-title">
				<h3 className="cabinet-setting-block-title__title">
					Основные данные
				</h3>

				{isEdit ? (
					<>
						<button type="submit" className={`cabinet-setting-block-title__btn ${invalid || pristine || submitting ? "disabled" : ""}`}>
							Сохранить
						</button>
						<button type="button" className="cabinet-setting-block-title__btn" onClick={() => setIsEdit(false)}>
							Отменить
						</button>
					</>
				) : (
					<button type="submit" className="cabinet-setting-block-title__btn" onClick={() => setIsEdit(true)}>
						Изменить
					</button>
				)}
			</div>

			<div className={`cabinet-setting-block-form ${isEdit ? "active" : ""}`}>
				<div className="cabinet-setting-block-form-input-wrapper">
					<div
						className="cabinet-setting-block-form-input"
						style={{ width: "49%" }}
					>
						<Field
							component={RenderInput}
							label="Имя"
							name="name"
							bgWhite
						/>
					</div>

					<div
						className="cabinet-setting-block-form-input"
						style={{ width: "49%" }}
					>
						<Field
							component={RenderInput}
							label="Отчество"
							name="lastname"
							bgWhite
						/>
					</div>

					<div
						className="cabinet-setting-block-form-input"
						style={{ width: "49%" }}
					>
						<Field
							component={RenderInput}
							label="Фамилия"
							name="middlename"
							bgWhite
						/>
					</div>
					<div
						className="cabinet-setting-block-form-input"
						style={{ width: "49%" }}
					>
						<Field
							component={RenderInput}
							label="Дата рождения"
							name="dr"
							bgWhite
							{...createTextMask({
								pattern: "99.99.9999",
								guide: false,
								stripMask: false,
							})}
						/>
					</div>
				</div>

				<div className="cabinet-setting-block-form-radio-wrapper">
					<div className="cabinet-setting-block-form-radio">
						<Field component={RenderRadioSelect} label="Женский" name="gender" />
					</div>
					<div className="cabinet-setting-block-form-radio">
						<Field component={RenderRadioSelect} label="Мужской" name="gender" />
					</div>
				</div>
			</div>
		</form>
	);
};

export default reduxForm<{}, {}>({
	form: "cabinet-setting-info-form",
	validate,
})(CabinetSettingInfoBlock);

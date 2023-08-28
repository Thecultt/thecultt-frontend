import React from "react";
import { Link } from "react-router-dom";

import { Field, reduxForm, InjectedFormProps } from "redux-form";

import { RenderInput, RenderSelect } from "../../components/";

import { validate } from './validate'

const WaitingListCreateForm: React.FC<{} & InjectedFormProps<{}, {}>> = ({
	handleSubmit,
	initialize,
	invalid,
	pristine,
	submitting,
}) => {
	React.useEffect(() => {
		initialize(({
			email: localStorage.getItem("email")
		}))
	}, [])

	return (
		<form className="cabinet-waiting-list-form" onSubmit={handleSubmit}>
			<h2 className="cabinet-waiting-list-form__title">Подписаться на товар</h2>
			<p className="cabinet-waiting-list-form__description">
				Заполните заявку, чтобы узнать о появлении в наличии нужного вам аксессуара.
			</p>

			<div className="cabinet-waiting-list-form-auth-message">
				<svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect y="0.5" width="38" height="37.9979" rx="18.9989" fill="#F1EDE8" />
					<path d="M19.002 18.5C21.2111 18.5 23.002 16.7091 23.002 14.5C23.002 12.2909 21.2111 10.5 19.002 10.5C16.7928 10.5 15.002 12.2909 15.002 14.5C15.002 16.7091 16.7928 18.5 19.002 18.5Z" stroke="#285141" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
					<path d="M27 28.4961V26.4961C27 25.4352 26.5786 24.4178 25.8284 23.6677C25.0783 22.9175 24.0609 22.4961 23 22.4961H15C13.9391 22.4961 12.9217 22.9175 12.1716 23.6677C11.4214 24.4178 11 25.4352 11 26.4961V28.4961" stroke="#285141" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				</svg>

				<div className="cabinet-waiting-list-form-auth-message-text">
					<p className="cabinet-waiting-list-form-auth-message-text__title">
						Вам нужен аккаунт, чтобы создать заявку
					</p>

					<p className="cabinet-waiting-list-form-auth-message-text__link">
						<Link to="#reglog">Войдите</Link> или <Link to="#reglog">Зарегистрируйтесь</Link>
					</p>
				</div>
			</div>

			<div className="cabinet-waiting-list-form-content">
				<div
					className="cabinet-waiting-list-form-content-input"
					style={{ width: "100%" }}
				>
					<Field
						component={RenderInput}
						label="Почта для уведомлений"
						name="email"
						type="text"
					/>
				</div>

				<div
					className="cabinet-waiting-list-form-content-select"
					style={{ width: "100%" }}
				>
					<Field
						component={RenderSelect}
						label="Категория"
						items={["Сумка", "Аксессуар", "Обувь"]}
						name="category"
					/>
				</div>

				<div
					className="cabinet-waiting-list-form-content-select"
					style={{ width: "49%" }}
				>
					<Field
						component={RenderSelect}
						label="Тип продукта"
						items={["Тип 1", "Тип 2", "Тип 3"]}
						name="type"
					/>
				</div>

				<div
					className="cabinet-waiting-list-form-content-select"
					style={{ width: "49%" }}
				>
					<Field
						component={RenderSelect}
						label="Бренд"
						items={["Бренд 1", "Бренд 2", "Бренд 3"]}
						name="brand"
					/>
				</div>

				<button
					className={`btn ${invalid || submitting || pristine ? "disabled" : ""} cabinet-waiting-list-form-content__btn`}
					disabled={invalid || submitting || pristine}
				>
					Отправить заявку
				</button>
			</div>
		</form>
	);
};


export default reduxForm<{}, {}>({
	form: "waiting-list-form",
	validate,
})(WaitingListCreateForm);
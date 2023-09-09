import React from "react";

import { Field } from "redux-form";

import { RenderInput } from "../../";

const OrderFormContact: React.FC = () => {
	return (
		<div className="order-form-block">
			<h3 className="order-form-block__title">Контактная информация</h3>

			<div className="order-form-block-inputs-wrapper">
				<div className="order-form-block-input" style={{ width: "100%" }}>
					<Field component={RenderInput} type="text" name="email" label="Почта" />
				</div>

				<div className="order-form-block-input" style={{ width: "49%" }}>
					<Field component={RenderInput} type="text" name="name" label="Получатель" />
				</div>

				<div className="order-form-block-input" style={{ width: "49%" }}>
					<Field component={RenderInput} type="text" name="phone" label="Телефон" />
				</div>
			</div>
		</div>
	);
};

export default OrderFormContact;

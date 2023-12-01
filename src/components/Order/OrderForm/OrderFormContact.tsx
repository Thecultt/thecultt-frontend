import React from "react";
import { Field } from "redux-form";
import { createTextMask } from "redux-form-input-masks";

import { RenderInput } from "../../";

const OrderFormContact: React.FC = () => {
	return (
		<div className="order-form-block">
			<h3 className="order-form-block__title">Контактная информация</h3>

			<div className="order-form-block-inputs-wrapper">
				<div className="order-form-block-input" style={{ width: "100%" }}>
					<Field component={RenderInput} type="text" name="email" label="Почта" disabled />
				</div>

				<div className="order-form-block-input" style={{ width: "49%" }}>
					<Field component={RenderInput} type="text" name="name" label="Получатель ФИО" />
				</div>

				<div className="order-form-block-input" style={{ width: "49%" }}>
					<Field
						component={RenderInput}
						name="phone"
						label="Телефон"
						{...createTextMask({
							pattern: "+9 999 999 99-99",
							guide: false,
							stripMask: false,
						})}
					/>
				</div>
			</div>
		</div>
	);
};

export default OrderFormContact;

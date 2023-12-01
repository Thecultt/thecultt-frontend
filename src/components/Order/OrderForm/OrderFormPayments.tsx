import React from "react";
import { Field } from "redux-form";

import { RenderRadioSelect } from "../../";

const OrderFormPayments: React.FC = () => {
	const paymentItems: { title: string; description: string }[] = [
		{
			title: "На сайте",
			description:
				"К оплате не принимается платежная система Visa, а также карты американских и украинских банков. Важно: товары, оплаченные международными картами, не подлежат возврату."
		},
		{
			title: "Рассрочка от Тинькофф",
			description: ""
		},
		{
			title: "Кредит",
			description: ""
		},
	];

	return (
		<div className="order-form-block order-form-block-payments">
			<h3 className="order-form-block__title">Варианты оплаты</h3>

			<div className="order-form-block-checkboxs-wrapper">
				{paymentItems.map((item, index) => (
					<div
						className="order-form-block-checkbox"
						key={`order-form-block-checkbox-${index}`}
					>
						<Field
							component={RenderRadioSelect}
							label={item.title}
							description={item.description}
							type="radio"
							name="payment"
							value={item.title}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default OrderFormPayments;

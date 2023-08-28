import React from "react";

import { RadioSelect } from "../../";

const OrderFormDelivery: React.FC = () => {
	const deliveryItems: { title: string; description: string }[] = [
		{
			title: "Примерка",
			description:
				"Вы можете заказать доставку лотов (не более 2 сумок, не более, 4 аксессуаров, не более 2 пар обуви, не более 4 товаров в одном заказе) по Москве в пределах МКАД и принять решение о покупке после примерки. Курьер заранее согласует с вами время доставки в промежутке с 11 до 21 с понедельника по воскресенье.",
		},
		{
			title: "Бесплатная доставка (по Москве)",
			description:
				"Мы бесплатно доставим оплаченный вами заказ по Москве в пределах МКАД. Курьер заранее согласует с вами время доставки в промежутке 11 до 21 с пн по пт. Доставка будет осуществлена в течение 24 часов.",
		},
		{
			title: "Самовывоз",
			description:
				"Самовывоз из офиса осуществляется бесплатно по адресу- Трубная 25 строение 3, с понедельника по пятницу с 11 до 18. Оплаченный заказ может храниться 3 рабочих дня.",
		},
		{
			title: "Бесплатная доставка по России",
			description:
				"Мы бесплатно доставим оплаченный вами заказ с помощью курьерской службы СДЭК, срок доставки от 2 дней в зависимости от региона. Примерка недоступна.",
		},
		{
			title: "Доставка по странам СНГ",
			description:
				"Доставка осуществляется службой EMS. Стоимость доставки — 2.000₽. Страны: Азербайджан, Армения, Беларусь, Казахстан, Кырзызстан, Молдова, Таджикистан, Туркменистан, Узбекистан, Грузия. Важно: размер таможенных пошлин определяется законодательством той страны, в которую осуществляется доставка.",
		},
		{
			title: "Международная доставка",
			description:
				"Международная доставка осуществляется службой EMS. Стоимость доставки — 5.000₽. Важно: условия оплаты и размер таможенных пошлин определяются таможенным законодательством страны, в которую осуществляется доставка.",
		},
	];

	const [currentIndex, setCurrentIndex] = React.useState<number | null>(null);

	return (
		<div className="order-form-block order-form-block-delivery">
			<h3 className="order-form-block__title">Варианты доставки</h3>

			<div className="order-form-block-checkboxs-wrapper">
				{deliveryItems.map((item, index) => (
					<div
						className="order-form-block-checkbox"
						key={`order-form-block-checkbox-${index}`}
						onClick={() => setCurrentIndex(index)}
					>
						<RadioSelect label={item.title} name="delivery" />

						{currentIndex === index ? (
							<p
								className="order-form-block-checkbox__description"
								dangerouslySetInnerHTML={{
									__html: item.description,
								}}
							></p>
						) : null}
					</div>
				))}
			</div>
		</div>
	);
};

export default OrderFormDelivery;

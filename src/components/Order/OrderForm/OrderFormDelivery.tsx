import React from "react";
import { Field } from "redux-form";

import { useTypedSelector } from '../../../hooks/useTypedSelector'

import { RenderRadioSelect } from "../../";

const OrderFormDelivery: React.FC = () => {
	const { address: { country, city } } = useTypedSelector(({ order }) => order)

	const [currentCountry_lowerCase, setCurrentCountry_lowerCase] = React.useState<string>("")
	const [currentCity_lowerCase, setCurrentCity_lowerCase] = React.useState<string>("")

	React.useEffect(() => {
		setCurrentCountry_lowerCase(country.title.toLocaleLowerCase())
		setCurrentCity_lowerCase(city.title.toLocaleLowerCase())
	}, [country, city])

	const deliveryItemsRussiaMoscow: { title: string; description: string }[] = [
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
		}
	];

	const deliveryItemsRussia: { title: string; description: string }[] = [
		{
			title: "Бесплатная доставка по России",
			description:
				"Мы бесплатно доставим оплаченный вами заказ с помощью курьерской службы СДЭК, срок доставки от 2 дней в зависимости от региона. Примерка недоступна.",
		}
	];

	const deliveryItemsSng: { title: string; description: string }[] = [
		{
			title: "Доставка по странам СНГ",
			description:
				"Доставка осуществляется службой EMS. Стоимость доставки — 2.000₽. Страны: Азербайджан, Армения, Беларусь, Казахстан, Кырзызстан, Молдова, Таджикистан, Туркменистан, Узбекистан, Грузия. Важно: размер таможенных пошлин определяется законодательством той страны, в которую осуществляется доставка.",
		}
	];

	const sngCountrys = ["азербайджан", "армения", "беларусь", "казахстан", "кырзызстан", "молдова", "таджикистан", "туркмения", "туркменистан", "узбекистан", "грузия"]

	const deliveryItemsGlobal: { title: string; description: string }[] = [
		{
			title: "Международная доставка",
			description:
				"Международная доставка осуществляется службой EMS. Стоимость доставки — 5.000₽. Важно: условия оплаты и размер таможенных пошлин определяются таможенным законодательством страны, в которую осуществляется доставка.",
		},
	];

	return (
		<div className="order-form-block order-form-block-delivery">
			<h3 className="order-form-block__title">Варианты доставки</h3>

			<div className="order-form-block-checkboxs-wrapper">
				{currentCountry_lowerCase === "россия" && currentCity_lowerCase.indexOf("москва") !== -1 ? deliveryItemsRussiaMoscow.map((item, index) => (
					<div
						className="order-form-block-checkbox"
						key={`order-form-block-checkbox-${currentCountry_lowerCase}-${index}`}
					>
						<Field
							component={RenderRadioSelect}
							label={item.title}
							description={item.description}
							type="radio"
							name="delivery"
							value={item.title}
						/>
					</div>
				)) : null}

				{currentCountry_lowerCase === "россия" && currentCity_lowerCase.indexOf("москва") == -1 ? deliveryItemsRussia.map((item, index) => (
					<div
						className="order-form-block-checkbox"
						key={`order-form-block-checkbox-${currentCountry_lowerCase}-${index}`}
					>
						<Field
							component={RenderRadioSelect}
							label={item.title}
							description={item.description}
							type="radio"
							name="delivery"
							value={item.title}
						/>
					</div>
				)) : null}

				{sngCountrys.find((country) => country == currentCountry_lowerCase) ? deliveryItemsSng.map((item, index) => (
					<div
						className="order-form-block-checkbox"
						key={`order-form-block-checkbox-${currentCountry_lowerCase}-${index}`}
					>
						<Field
							component={RenderRadioSelect}
							label={item.title}
							description={item.description}
							type="radio"
							name="delivery"
							value={item.title}
						/>
					</div>
				)) : null}

				{["россия", ...sngCountrys].find((country) => country === currentCountry_lowerCase) ? null : deliveryItemsGlobal.map((item, index) => (
					<div
						className="order-form-block-checkbox"
						key={`order-form-block-checkbox-${currentCountry_lowerCase}-${index}`}
					>
						<Field
							component={RenderRadioSelect}
							label={item.title}
							description={item.description}
							type="radio"
							name="delivery"
							value={item.title}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default OrderFormDelivery;

import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { fetchCabinetSellParameters, setCabinetSellCurrentStep, sendCreateCabinetSell } from "../../redux/actions/cabinet_sell";

import { CabinetSellStepKeys } from '../../redux/types/ICabinetSell'

import { useTypedSelector } from '../../hooks/useTypedSelector'

import {
	Popup,
	SellSteps,
	SellCooperation,
	SellInfo,
	SellImages,
	SellContact,
	SellDelivery,
	SellProduct,
} from "../../components/";

const Sell: React.FC = () => {
	const dispatch = useDispatch()

	const { isLoadedParameters, isSend, currentStep, currentType } = useTypedSelector(({ cabinet_sell }) => cabinet_sell)

	React.useEffect(() => {
		dispatch(fetchCabinetSellParameters() as any)

		return () => {
			localStorage.removeItem("sell-info-form")
			localStorage.removeItem("sell-images-form")
			localStorage.removeItem("sell-contact-form")
			localStorage.removeItem("sell-product-form")
		}
	}, []);

	React.useEffect(() => {
		localStorage.removeItem("sell-info-form")
		localStorage.removeItem("sell-images-form")
		localStorage.removeItem("sell-contact-form")
		localStorage.removeItem("sell-product-form")
	}, [currentType]);

	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, [currentStep]);

	const onSubmitInfo = (data: any) => {
		localStorage.setItem("sell-info-global-category", data.category)
		localStorage.setItem("sell-info-form", JSON.stringify(data))

		window.dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
		window.dataLayer.push({
			event: "product_information_complete",
			ecommerce: {
				timestamp: Math.floor(Date.now() / 1000),
			}
		});

		dispatch(setCabinetSellCurrentStep(CabinetSellStepKeys.IMAGES))
	}

	const onSubmitContact = (data: any) => {
		localStorage.setItem("sell-contact-form", JSON.stringify(data))

		window.dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
		window.dataLayer.push({
			event: "contact_information_complete",
			ecommerce: {
				timestamp: Math.floor(Date.now() / 1000),
			}
		});

		dispatch(setCabinetSellCurrentStep(CabinetSellStepKeys.DELIVERY))
	}

	const onSubmitProduct = (data: any) => {
		localStorage.setItem("sell-product-form", JSON.stringify(data))

		window.dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
		window.dataLayer.push({
			event: "exchange_item_complete",
			ecommerce: {
				timestamp: Math.floor(Date.now() / 1000),
			}
		});

		dispatch(setCabinetSellCurrentStep(CabinetSellStepKeys.CONTACT))
	}

	const onSubmitDelivery = (data: any) => {
		const info = JSON.parse(localStorage.getItem("sell-info-form") as any)
		const images = JSON.parse(localStorage.getItem("sell-images-form") as any)
		const contact = JSON.parse(localStorage.getItem("sell-contact-form") as any)
		const product = JSON.parse(localStorage.getItem("sell-product-form") as any)

		const delivery = data

		const sell = {
			type: currentType === "sell" ? "Продажа" : "Обмен",

			category: info.category,
			vendor: info.brand,
			model: info.model,
			size_name: info.size ? info.size : "",
			state_name: info.condition,
			defects: info.defects,
			price: info.price,

			images: Object.keys(images).map(key => images[key]),

			product_link: product && product.link ? product.link : "",

			email: contact.email,
			phone: contact.phone,
			name: contact.name,
			surname: contact.surname,
			client_tg: contact.telegram,

			client_city: delivery.city ? delivery.city : "",
			client_street: delivery.street ? delivery.street : "",
			client_home: delivery.dom ? delivery.dom : "",
			client_room: delivery.flat ? delivery.flat : "",
			client_comment: delivery.comment ? delivery.comment : "",

		}

		window.dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
		window.dataLayer.push({
			event: "shipping_method_complete",
			ecommerce: {
				timestamp: Math.floor(Date.now() / 1000),
			}
		});

		dispatch(sendCreateCabinetSell(sell) as any)
	}

	return (
		<section className="sell">
			<div className="container">
				<div className="sell-wrapper">
					<SellSteps />

					{isLoadedParameters ? (
						<>
							{currentStep === CabinetSellStepKeys.COOPERATION ? (
								<SellCooperation />
							) : null}

							{currentStep === CabinetSellStepKeys.INFO ? (
								<SellInfo onSubmit={onSubmitInfo} />
							) : null}

							{currentStep === CabinetSellStepKeys.IMAGES ? (
								<SellImages />
							) : null}

							{currentStep === CabinetSellStepKeys.PRODUCT ? (
								<SellProduct onSubmit={onSubmitProduct} />
							) : null}

							{currentStep === CabinetSellStepKeys.CONTACT ? (
								<SellContact onSubmit={onSubmitContact} />
							) : null}

							{currentStep === CabinetSellStepKeys.DELIVERY ? (
								<SellDelivery onSubmit={onSubmitDelivery} />
							) : null}
						</>
					) : null}

					<Popup state={isSend} setState={() => window.location.reload()}>
						{localStorage.getItem("sell-info-global-type-delivery") === "Лично в офис" ? (
							<div className="sell-success">
								<h3 className="sell-success__title">
									Заявка отправлена, выберите время для записи!
								</h3>
								<p className="sell-success__description">
									Вы выбрали способ отправки товара - лично в офис. Для завершения заявки необходимо выбрать дату и время посещения.
								</p>
								<a href="https://calendly.com/thecultt/visit" target="_blank" className="btn sell-success__link">
									Выбрать дату и время
								</a>
							</div>
						) : (
							<div className="sell-success">
								<h3 className="sell-success__title">
									Заявка отправлена!
								</h3>
								<p className="sell-success__description">
									Ваша заявка принята в работу, менеджер свяжется с вами для обсуждения деталей. Вы можете  отследить статус  заявки в личном кабинете или на почте.
								</p>
								<button onClick={() => window.location.href = "/cabinet/sells"} className="btn sell-success__link">
									Перейти в личный кабинет
								</button>
							</div>
						)}
					</Popup>
				</div>
			</div>
		</section>
	);
};

export default Sell;

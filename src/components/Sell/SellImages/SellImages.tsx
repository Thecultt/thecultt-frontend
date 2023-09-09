import React from "react";
import { useDispatch } from "react-redux";

import { useTypedSelector } from "../../../hooks/useTypedSelector";

import { CabinetSellTypes, CabinetSellStepKeys } from "../../../redux/types/ICabinetSell";

import { setCabinetSellCurrentStep } from "../../../redux/actions/cabinet_sell";

import SellImagesImageBag1 from "../../../assets/images/sell/sell-images-image-bag-1.jpg";
import SellImagesImageBag2 from "../../../assets/images/sell/sell-images-image-bag-2.jpg";
import SellImagesImageBag3 from "../../../assets/images/sell/sell-images-image-bag-3.jpg";
import SellImagesImageBag4 from "../../../assets/images/sell/sell-images-image-bag-4.jpg";

import SellImagesImageShoes1 from "../../../assets/images/sell/sell-images-image-shoes-1.jpg";
import SellImagesImageShoes2 from "../../../assets/images/sell/sell-images-image-shoes-2.jpg";
import SellImagesImageShoes3 from "../../../assets/images/sell/sell-images-image-shoes-3.jpg";
import SellImagesImageShoes4 from "../../../assets/images/sell/sell-images-image-shoes-4.jpg";

import SellImagesImageAccess1 from "../../../assets/images/sell/sell-images-image-access-1.jpg";
import SellImagesImageAccess2 from "../../../assets/images/sell/sell-images-image-access-2.jpg";
import SellImagesImageAccess3 from "../../../assets/images/sell/sell-images-image-access-3.jpg";
import SellImagesImageAccess4 from "../../../assets/images/sell/sell-images-image-access-4.jpg";


import { SellBackBtn, SellImagesBlock } from "../../";

const SellImages: React.FC = () => {
	const dispatch = useDispatch()

	const category = localStorage.getItem("sell-info-global-category")

	const { currentType } = useTypedSelector(({ cabinet_sell }) => cabinet_sell)

	const [imageBlocksValue, setImageBlocksValue] = React.useState<{ [key: string]: string }>(localStorage.getItem("sell-images-form") ? JSON.parse(localStorage.getItem("sell-images-form") as any) : {})

	const imageBlocksBag: {
		image?: string;
		imageTitle?: string;
		imageDescription?: string;
		isMore?: any
	}[] = [
			{
				image: SellImagesImageBag1,
				imageTitle: "Лицевая сторона",
				imageDescription: "Сфотографируйте сумку спереди при дневном свете"
			},

			{
				image: SellImagesImageBag2,
				imageTitle: "Внутри",
				imageDescription: "Сфотографируйте внутреннее пространство сумки"
			},

			{
				image: SellImagesImageBag3,
				imageTitle: "Нюансы",
				imageDescription: "Сфотографируйте наиболее ярко выраженные нюансы"
			},

			{
				image: SellImagesImageBag4,
				imageTitle: "Размер",
				imageDescription:
					"Cфотографируйте сумку на себе, чтобы был понятен размер"
			},
			{
				isMore: true
			},
			{
				isMore: true
			}
		]

	const imageBlocksShoes: {
		image?: string;
		imageTitle?: string;
		imageDescription?: string;
		isMore?: any
	}[] = [
			{
				image: SellImagesImageShoes1,
				imageTitle: "Передняя часть",
				imageDescription: "Сфотографируйте пару сверху при дневном свете"
			},

			{
				image: SellImagesImageShoes2,
				imageTitle: "Нюансы",
				imageDescription: "Сфотографируйте внутреннее пространство сумки"
			},

			{
				image: SellImagesImageShoes3,
				imageTitle: "Подошва",
				imageDescription: "Сфотографируйте подошвы обеих частей сверху"
			},

			{
				image: SellImagesImageShoes4,
				imageTitle: "Комплект",
				imageDescription:
					"Сфотографируйте пару рядом с полным комплектом (коробка, пыльник)"
			},
			{
				isMore: true
			},
			{
				isMore: true
			}
		]

	const imageBlocksAccess: {
		image?: string;
		imageTitle?: string;
		imageDescription?: string;
		isMore?: any
	}[] = [
			{
				image: SellImagesImageAccess1,
				imageTitle: "Передняя часть",
				imageDescription: "Сфотографируйте пару сверху при дневном свете"
			},

			{
				image: SellImagesImageAccess2,
				imageTitle: "Нюансы",
				imageDescription: "Сфотографируйте внутреннее пространство сумки"
			},

			{
				image: SellImagesImageAccess3,
				imageTitle: "Подошва",
				imageDescription: "Сфотографируйте подошвы обеих частей сверху"
			},

			{
				image: SellImagesImageAccess4,
				imageTitle: "Комплект",
				imageDescription:
					"Сфотографируйте пару рядом с полным комплектом (коробка, пыльник)"
			},
			{
				isMore: true
			},
			{
				isMore: true
			}
		]

	const onChangeCustom = (result: any, index: number) => {
		setImageBlocksValue({ ...imageBlocksValue, [index]: result })
	};

	const isValid = () => {
		if (category === "Сумки") return Object.keys(imageBlocksValue).length >= imageBlocksBag.filter((image) => !image.isMore).length
		if (category === "Обувь") return Object.keys(imageBlocksValue).length >= imageBlocksShoes.filter((image) => !image.isMore).length
		if (category === "Аксессуары") return Object.keys(imageBlocksValue).length >= imageBlocksAccess.filter((image) => !image.isMore).length
	}

	const onSubmit = () => {
		localStorage.setItem("sell-images-form", JSON.stringify(imageBlocksValue))

		dispatch(setCabinetSellCurrentStep(currentType === CabinetSellTypes.EXCHANGE ? CabinetSellStepKeys.PRODUCT : CabinetSellStepKeys.CONTACT))
	}

	return (
		<div className="sell-block sell-block-images">
			<SellBackBtn onClick={() => dispatch(setCabinetSellCurrentStep(CabinetSellStepKeys.INFO))} />

			<h3 className="sell-block__title">Загрузка фотографий</h3>
			<p className="sell-block__subtitle">
				Загрузите как можно более четкие фотографии
			</p>

			<div className="sell-block-images-block-wrapper">
				{category === "Сумки" ? imageBlocksBag.map((block, index) => (
					<SellImagesBlock
						{...block}
						number={index + 1}
						key={`sell-block-images-block-${index}`}
						value={imageBlocksValue[index]}
						onChangeCustom={(result: any) => onChangeCustom(result, index)}
						disabled={block.isMore ? isValid() ? false : true : false}
					/>
				)) : null}

				{category === "Обувь" ? imageBlocksShoes.map((block, index) => (
					<SellImagesBlock
						{...block}
						number={index + 1}
						key={`sell-block-images-block-${index}`}
						value={imageBlocksValue[index]}
						onChangeCustom={(result: any) => onChangeCustom(result, index)}
						disabled={block.isMore ? isValid() ? false : true : false}
					/>
				)) : null}

				{category === "Аксессуары" ? imageBlocksAccess.map((block, index) => (
					<SellImagesBlock
						{...block}
						number={index + 1}
						key={`sell-block-images-block-${index}`}
						value={imageBlocksValue[index]}
						onChangeCustom={(result: any) => onChangeCustom(result, index)}
						disabled={block.isMore ? isValid() ? false : true : false}
					/>
				)) : null}

				<button
					className={`btn ${isValid() ? "" : "disabled"} sell-block__btn`}
					disabled={isValid() ? false : true}
					onClick={onSubmit}
				>
					Продолжить
				</button>
			</div>
		</div>
	);
};

export default SellImages;

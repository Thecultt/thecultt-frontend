import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Slider from "react-slick";

import { useTypedSelector } from '../../hooks/useTypedSelector'

import {
	addCartItem,
	setCartIsVisibleMessage,
} from "../../redux/actions/cart";

import { sendSaveFavorite, sendRemoveFavorite } from "../../redux/actions/favorites";

import { ProductBlock } from "../../components/";

import { Product } from "../../models/IProduct";
import { CartItem } from "../../models/ICartItem";

import MainBanner from '../../assets/images/doletskaya/main-banner.jpg'
import MainBannerMedia from '../../assets/images/doletskaya/main-banner-media.jpg'
import CharityLogo from '../../assets/images/doletskaya/charity-logo.svg'

import Lot1 from '../../assets/images/doletskaya/lot1.jpg'
import Lot1Media from '../../assets/images/doletskaya/lot1-media.jpg'

import Lot2 from '../../assets/images/doletskaya/lot2.jpg'
import Lot2Media from '../../assets/images/doletskaya/lot2-media.jpg'
import Lot2MoreImages from '../../assets/images/doletskaya/lot2-more-images.jpg'

import Deco1Images from '../../assets/images/doletskaya/deco-images-1.jpg'
import Deco1ImagesMedia from '../../assets/images/doletskaya/deco-images-1-media.jpg'

import Lot3 from '../../assets/images/doletskaya/lot3.jpg'
import Lot3Media from '../../assets/images/doletskaya/lot3-media.jpg'
import Lot3MoreImages from '../../assets/images/doletskaya/lot3-more-images.jpg'
import Lot3MoreImagesMedia from '../../assets/images/doletskaya/lot3-more-images-media.jpg'

import Deco2Images from '../../assets/images/doletskaya/deco-images-2.jpg'
import Deco2ImagesMedia from '../../assets/images/doletskaya/deco-images-2-media.jpg'

import Lot4 from '../../assets/images/doletskaya/lot4.jpg'
import Lot4Media from '../../assets/images/doletskaya/lot4-media.jpg'

import Lot5 from '../../assets/images/doletskaya/lot5.jpg'
import Lot5Media from '../../assets/images/doletskaya/lot5-media.jpg'

import Deco3Images from '../../assets/images/doletskaya/deco-images-3.jpg'

import Lot6 from '../../assets/images/doletskaya/lot6.jpg'
import Lot6Media from '../../assets/images/doletskaya/lot6-media.jpg'

import AboutTitle from '../../assets/images/doletskaya/about-title.svg'

import AboutImage1 from '../../assets/images/doletskaya/about-image1.jpg'
import AboutImage2 from '../../assets/images/doletskaya/about-image2.jpg'
import AboutImage3 from '../../assets/images/doletskaya/about-image3.jpg'
import AboutImage4 from '../../assets/images/doletskaya/about-image4.jpg'
import AboutImage5 from '../../assets/images/doletskaya/about-image5.jpg'
import AboutImage6 from '../../assets/images/doletskaya/about-image6.jpg'

const ProductSection: React.FC = () => {
	const dispatch = useDispatch();

	const { items, itemByArticleSimilar } = useTypedSelector(({ products }) => products)
	const cartItems = useTypedSelector(({ cart }) => cart.items);
	const favoritesItems = useTypedSelector(({ favorites }) => favorites.items);

	const SliderRef = React.useRef<any>(null)

	const settings = {
		arrows: false,
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 5,

		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		}]
	};

	const onClickPrev = () => {
		SliderRef.current.slickPrev()
	}

	const onClickNext = () => {
		SliderRef.current.slickNext()
	}

	const addCart = (item: CartItem) => {
		dispatch(setCartIsVisibleMessage(true));

		dispatch(addCartItem(item));

		setTimeout(() => {
			dispatch(setCartIsVisibleMessage(false));
		}, 5000);
	};

	const addFavorite = (item: Product) => {
		dispatch(sendSaveFavorite(item) as any)
	}

	const removeFavorite = (item: Product) => {
		dispatch(sendRemoveFavorite(item) as any)
	}

	const onClickProduct = (item: any, index: number) => {
		window.dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.

		window.dataLayer.push({
			event: "select_item",
			ecommerce: {
				timestamp: Math.floor(Date.now() / 1000),
				items: [{
					item_name: item.model_name,
					item_id: `${item.id}`,
					price: `${item.price}`,
					item_brand: item.manufacturer,
					item_category: item.category,
					item_category2: item.subcategory,
					item_category3: "-",
					item_category4: "-",
					item_list_name: "Search Results",
					item_list_id: item.article,
					index,
					quantity: 1
				}]
			}
		});
	}

	return (
		<>
			<div className="container">
				<div className="catalog-product-section">
					<Link to="/catalog" className="catalog-product-section__title">
						Архив Алёны Долецкой
					</Link>

					<div className="catalog-product-section-slider-wrapper">
						<button className="catalog-product-section-slider-arrow prev" onClick={onClickPrev}>
							<svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect y="0.476562" width="40" height="40" rx="20" fill="white" />
								<path d="M24 12.4766L16 20.4766L24 28.4766" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</button>

						<Slider {...settings} className='catalog-product-section-slider' ref={SliderRef}>
							{itemByArticleSimilar.length ? (
								itemByArticleSimilar.map((item, index) => (
									item.availability && !item.is_trial && item.images.length && item.price ? (
										<ProductBlock
											addClass="catalog-product-block"
											key={`catalog-product-block-${index}`}
											addCart={() =>
												addCart({
													id: item.id,
													checked: true,
													article: item.article,
													manufacturer: item.manufacturer,
													category: item.category,
													subcategory: item.subcategory,
													name: item.name,
													image: item.images[0],
													price: item.price,
													availability: item.availability,
													is_trial: item.is_trial
												})
											}
											onClickProduct={() => onClickProduct(item, index)}
											isCart={cartItems[item.article] ? true : false}
											addFavorite={() => addFavorite(item)}
											removeFavorite={() => removeFavorite(item)}
											isFavorite={favoritesItems[item.id] ? true : false}
											{...item}
										/>
									) : null
								))
							) : (
								items.map((item, index) => (
									item.availability && !item.is_trial && item.images.length && item.price ? (
										<ProductBlock
											addClass="catalog-product-block"
											key={`catalog-product-block-${index}`}
											addCart={() =>
												addCart({
													id: item.id,
													checked: true,
													article: item.article,
													manufacturer: item.manufacturer,
													category: item.category,
													subcategory: item.subcategory,
													name: item.name,
													image: item.images[0],
													price: item.price,
													availability: item.availability,
													is_trial: item.is_trial
												})
											}
											onClickProduct={() => onClickProduct(item, index)}
											isCart={cartItems[item.article] ? true : false}
											addFavorite={() => addFavorite(item)}
											removeFavorite={() => removeFavorite(item)}
											isFavorite={favoritesItems[item.id] ? true : false}
											{...item}
										/>
									) : null
								))
							)}
						</Slider>

						<button className="catalog-product-section-slider-arrow next" onClick={onClickNext}>
							<svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect y="0.476562" width="40" height="40" rx="20" fill="white" />
								<path d="M16 28.4766L24 20.4766L16 12.4766" fill="white" />
								<path d="M16 28.4766L24 20.4766L16 12.4766" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</button>
					</div>

					<div className="alyona-doletskaya-slider-btn">
						<Link to="" className="btn alyona-doletskaya-slider-btn__btn">
							Смотреть весь архив
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

const AlyonaDoletskaya: React.FC = () => {
	const SliderRef = React.useRef<any>(null)

	const settings = {
		arrows: false,
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};

	const onClickPrev = () => {
		SliderRef.current.slickPrev()
	}

	const onClickNext = () => {
		SliderRef.current.slickNext()
	}

	return (
		<>
			<section className='alyona-doletskaya-main'>
				<picture>
					<source srcSet={MainBannerMedia} media="(max-width: 1450px)" />
					<img src={MainBanner} alt="" className="alyona-doletskaya-main__image" />
				</picture>

				<div className="alyona-doletskaya-main-text">
					<p className="alyona-doletskaya-main-text__description">
						Алёна Долецкая, публицист, креативный консультант и журналист, а в прошлом первый главный редактор журнала VOGUE RUSSIA и Andy Warhol’s INTERVIEW , выбрала знаковые позиции из своих модных архивов и передала их THE CULTT. Это лоты одежды, обуви и аксессуаров. Многие из них — легендарные, у каждого богатая биография, которую теперь дополните вы.
					</p>

					<p className="alyona-doletskaya-main-text__description medium">
						«Я всегда любила, люблю и буду любить винтажные вещи.
						<br />
						Качество дизайна и материала у них часто лучше, чем у новых.
						<br />
						И что особенно важно: вы всегда будете одна такая, уникальная».
					</p>

					<a href="" className="btn alyona-doletskaya-main-text__btn">
						Смотреть весь архив
					</a>
				</div>

				<div className="alyona-doletskaya-main-charity">
					<h3 className="alyona-doletskaya-main-charity__title">
						Часть средств от продажи будет переведена
						<br /> в благотворительный фонд «Вера»
					</h3>

					<div className="alyona-doletskaya-main-charity-logo">
						<img src={CharityLogo} alt="" className="alyona-doletskaya-main-charity-logo__image" />

						<p className="alyona-doletskaya-main-charity-logo__text">
							Благотворительный фонд помощи хосписам «Вера» c 2006 года поддерживает неизлечимо больных людей и их близких, создавая примеры хосписов, в которых не страшно. Фонд «Вера» работает для того, чтобы у каждого была жизнь — на всю оставшуюся жизнь.
						</p>
					</div>
				</div>
			</section>

			<section className='alyona-doletskaya-lot1'>
				<picture>
					<source srcSet={Lot1Media} media="(max-width: 1450px)" />
					<img src={Lot1} alt="" className="alyona-doletskaya-lot1__image" />
				</picture>

				<div className="alyona-doletskaya-lot alyona-doletskaya-lot1-text">
					<div className="alyona-doletskaya-lot-title">
						<p className="alyona-doletskaya-lot-title__subtitle">
							НАЗВАНИЕ ЛОТА:
						</p>
						<p className="alyona-doletskaya-lot-title__title">
							ПЛАТЬЕ LOUIS VUITTON
						</p>
					</div>

					<div className="alyona-doletskaya-lot-text">
						<p className="alyona-doletskaya-lot-text__title">
							ИСТОРИЯ:
						</p>

						<p className="alyona-doletskaya-lot-text__description">
							Это платье Louis Vuitton, созданное Николя Жескьером. Оно феноменального качества, и в нем мне нравится сочетание трех фактур: очень крупные черные матовые стразы,  плотный креп, который комплиментарен фигуре абсолютно любого человека, и удивительно нежный, в сборку, шифоновый топ с бретелями цвета топленого молока. Платье само по себе — произведение очень  талантливого дизайна, но у него есть и добавленная стоимость: оно видело вручение приза журнала Vogue за лучшее стилевое решение фильма на московском кинофестивале и страшно понравилось нашей гостье по имени Мерил Стрип.
						</p>
					</div>
				</div>
			</section>

			<section className='alyona-doletskaya-lot2'>
				<picture>
					<source srcSet={Lot2Media} media="(max-width: 1450px)" />
					<img src={Lot2} alt="" className="alyona-doletskaya-lot2__image" />
				</picture>

				<div className="alyona-doletskaya-lot alyona-doletskaya-lot2-text">
					<div className="alyona-doletskaya-lot-title">
						<p className="alyona-doletskaya-lot-title__subtitle">
							НАЗВАНИЕ ЛОТА:
						</p>
						<p className="alyona-doletskaya-lot-title__title">
							ЮБКА CÉLINE
						</p>
					</div>

					<div className="alyona-doletskaya-lot-text">
						<p className="alyona-doletskaya-lot-text__title">
							ИСТОРИЯ:
						</p>

						<p className="alyona-doletskaya-lot-text__description">
							Это юбка Céline с аксаном на букве è, что говорит о том, что она была выполнена по дизайну моего любимого дизайнера Фиби Фило. Я увидела эту юбку в ее бутике в Париже и влюбилась с первого взгляда. Я понятия не имела, пойдет она мне или нет. Я поняла, что это идеальная юбка, которая, казалось бы, очень лаконична, но на самом деле невероятно дорогая с точки зрения того, как выглядит, как построена, как придумана. При том, что вы не увидите на ней ни одного шва, она хитро и умно скроена.
							Ремешок из настоящего питона цвета бургунди особенно элегантен.
						</p>
					</div>
				</div>
			</section>

			<section className='alyona-doletskaya-lot2-more'>
				<img src={Lot2MoreImages} alt="" className="alyona-doletskaya-lot2-more__image" />
			</section>

			<section className='alyona-doletskaya-deco1'>
				<picture>
					<source srcSet={Deco1ImagesMedia} media="(max-width: 1450px)" />
					<img src={Deco1Images} alt="" className="alyona-doletskaya-deco1__image" />
				</picture>
			</section>

			<section className='alyona-doletskaya-lot3'>
				<picture>
					<source srcSet={Lot3Media} media="(max-width: 1450px)" />
					<img src={Lot3} alt="" className="alyona-doletskaya-lot3__image" />
				</picture>

				<div className="alyona-doletskaya-lot alyona-doletskaya-lot3-text">
					<div className="alyona-doletskaya-lot-title">
						<p className="alyona-doletskaya-lot-title__subtitle">
							НАЗВАНИЕ ЛОТА:
						</p>
						<p className="alyona-doletskaya-lot-title__title">
							СУМКА CHRISTIAN DIOR
						</p>
					</div>

					<div className="alyona-doletskaya-lot-text">
						<p className="alyona-doletskaya-lot-text__title">
							ИСТОРИЯ:
						</p>

						<p className="alyona-doletskaya-lot-text__description">
							Чего только эта сумка Диор не видела внутри себя и кого только не встречала «лицом». Ей повезло, потому что в период редактирования глянца мне приходилось не только свое личное, но и пару номеров журнала (в 400-500 страниц) туда уложить. Лондон–Милан–Париж ликовали от этой блондинки красавицы.
						</p>
					</div>
				</div>
			</section>

			<section className='alyona-doletskaya-lot3-more'>
				<picture>
					<source srcSet={Lot3MoreImagesMedia} media="(max-width: 1450px)" />
					<img src={Lot3MoreImages} alt="" className="alyona-doletskaya-lot3-more__image" />
				</picture>
			</section>

			<ProductSection />

			<section className='alyona-doletskaya-deco2'>
				<picture>
					<source srcSet={Deco2ImagesMedia} media="(max-width: 1450px)" />
					<img src={Deco2Images} alt="" className="alyona-doletskaya-deco2__image" />
				</picture>
			</section>

			<section className='alyona-doletskaya-lot4'>
				<picture>
					<source srcSet={Lot4Media} media="(max-width: 1450px)" />
					<img src={Lot4} alt="" className="alyona-doletskaya-lot4__image" />
				</picture>

				<div className="alyona-doletskaya-lot alyona-doletskaya-lot4-text">
					<div className="alyona-doletskaya-lot-title">
						<p className="alyona-doletskaya-lot-title__subtitle">
							НАЗВАНИЕ ЛОТА:
						</p>
						<p className="alyona-doletskaya-lot-title__title">
							ПАЛЬТО GIAMBATTISTA VALLI
						</p>
					</div>

					<div className="alyona-doletskaya-lot-text">
						<p className="alyona-doletskaya-lot-text__title">
							ИСТОРИЯ:
						</p>

						<p className="alyona-doletskaya-lot-text__description">
							Признаюсь честно: оно мне досталось, как говорится, по дружбе и по симпатии. Я пришла на отсмотр коллекции, которые делают для редакторов после всех показов в шоуруме у дизайнера. Я увидела пальто и спросила Джамбаттиста, почему его не было на показе? Он сказал: «Как же не было, оно было, но в таком стайлинге, что его было довольно трудно определить». Я его шутливо примерила, а Джамбаттиста вдруг говорит: «На тебе оно лучше, чем на показе, просто забирай». Так и произошло. Пальто это я люблю за его способность быть  элегантным платьем, когда оно надето на голое тело. Но оно не менее интересно, современно и, при хорошем стайлинге, даже хулигански может смотреться в многослойности. Учитесь, смотрите, надевайте, покупайте.
						</p>
					</div>
				</div>
			</section>

			<section className='alyona-doletskaya-lot5'>
				<picture>
					<source srcSet={Lot5Media} media="(max-width: 1450px)" />
					<img src={Lot5} alt="" className="alyona-doletskaya-lot5__image" />
				</picture>

				<div className="alyona-doletskaya-lot alyona-doletskaya-lot5-text">
					<div className="alyona-doletskaya-lot-title">
						<p className="alyona-doletskaya-lot-title__subtitle">
							НАЗВАНИЕ ЛОТА:
						</p>
						<p className="alyona-doletskaya-lot-title__title">
							ПЛАТЬЕ VERSACE
						</p>
					</div>

					<div className="alyona-doletskaya-lot-text">
						<p className="alyona-doletskaya-lot-text__title">
							ИСТОРИЯ:
						</p>

						<p className="alyona-doletskaya-lot-text__description">
							Наверное, одна из самых дорогих моему сердцу вещей. Мы праздновали 10-летие русского Vogue в Милане вместе со всеми коллегами по издательскому цеху. Я понимала, кто  будет присутствовать на этом вечере, и выбрать платье было довольно непросто. Невероятно мне повезло, потому что это темно-синее платье, во-первых, очень комплиментарно. Оно делает женщину красивой, женственной и нарядной. В нем мне больше слышится Джанни, чем Донателла. Но  в этом платье важнее всего то, что оно настоящий  праздник в мире моды.  Оно встретилось с лучшими  дизайнерами и редакторами  своего времени
						</p>
					</div>
				</div>
			</section>

			<section className='alyona-doletskaya-deco3'>
				<img src={Deco3Images} alt="" className="alyona-doletskaya-deco3__image" />
			</section>

			<section className='alyona-doletskaya-lot6'>
				<picture className="alyona-doletskaya-lot6__image">
					<source srcSet={Lot6Media} media="(max-width: 1450px)" />
					<img src={Lot6} alt="" />
				</picture>

				<div className="alyona-doletskaya-lot alyona-doletskaya-lot6-text">
					<div className="alyona-doletskaya-lot-title">
						<p className="alyona-doletskaya-lot-title__subtitle">
							НАЗВАНИЕ ЛОТА:
						</p>
						<p className="alyona-doletskaya-lot-title__title">
							ЮБКА PRADA
						</p>
					</div>

					<div className="alyona-doletskaya-lot-text">
						<p className="alyona-doletskaya-lot-text__title">
							ИСТОРИЯ:
						</p>

						<p className="alyona-doletskaya-lot-text__description">
							Да, возможно, сейчас не самый яркий бум кружева, но кружево возвращается в моду, как солнце восходит на востоке и заходит на западе. Эта юбка вне времени, как мне кажется. Она была выполнена Миуччей Прада, когда кружева заказывались на Сицилии. Ощутить это можно только пощупав ее руками. Кружева плотные, но удивительно эластичные. Особенно я люблю ее подбой, нижнюю юбочку цвета обнаженного тела. Приятно, что когда я поднималась на какую-то встречу в этой юбке и в простой черной кашемировой водолазке, навстречу шла Анна Винтур, главный редактор американского Vogue. Она оценивающе  посмотрела на меня ровно так, как героиня  Мерил Стрип осматривает Энн Хэтэуэй — от шеи до пола. По взгляду оценка была 5, как говорили в школе — «на отлично».
						</p>
					</div>
				</div>
			</section>

			<ProductSection />

			<div className="alyona-doletskaya-about">
				<div className="alyona-doletskaya-about-title">
					<img src={AboutTitle} alt="" className='alyona-doletskaya-about-title__image' />
				</div>

				<div className="alyona-doletskaya-about-images">
					<img src={AboutImage1} alt="" className="alyona-doletskaya-about-images__image" />
					<img src={AboutImage2} alt="" className="alyona-doletskaya-about-images__image" />
					<img src={AboutImage3} alt="" className="alyona-doletskaya-about-images__image" />
					<img src={AboutImage4} alt="" className="alyona-doletskaya-about-images__image" />
					<img src={AboutImage5} alt="" className="alyona-doletskaya-about-images__image" />
					<img src={AboutImage6} alt="" className="alyona-doletskaya-about-images__image" />
				</div>

				<div className="alyona-doletskaya-about-images-slider-wrapper">
					<div className="alyona-doletskaya-about-images-slider-arrow prev" onClick={onClickPrev}>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M15 18L9 12L15 6" stroke="#202020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</div>

					<Slider {...settings} className="alyona-doletskaya-about-images-slider" ref={SliderRef}>
						<img src={AboutImage1} alt="" className="alyona-doletskaya-about-images-slider__image" />
						<img src={AboutImage2} alt="" className="alyona-doletskaya-about-images-slider__image" />
						<img src={AboutImage3} alt="" className="alyona-doletskaya-about-images-slider__image" />
						<img src={AboutImage4} alt="" className="alyona-doletskaya-about-images-slider__image" />
						<img src={AboutImage5} alt="" className="alyona-doletskaya-about-images-slider__image" />
						<img src={AboutImage6} alt="" className="alyona-doletskaya-about-images-slider__image" />
					</Slider>

					<div className="alyona-doletskaya-about-images-slider-arrow next" onClick={onClickNext}>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M9 18L15 12L9 6" stroke="#202020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</div>
				</div>
			</div>
		</>
	)
}

export default AlyonaDoletskaya
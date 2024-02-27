import React from 'react'
import { Link } from 'react-router-dom'
import Slider from "react-slick";

import HomeMainBannerImage14feb from '../../../assets/images/home/home-main-banner-14feb.jpg'
import HomeMainBannerImage14febMedia from '../../../assets/images/home/home-main-banner-14feb-media.jpg'
import HomeMainBannerImage1 from '../../../assets/images/home/home-main-banner1.jpg'
import HomeMainBannerImage2 from '../../../assets/images/home/home-main-banner2.jpg'
import HomeMainBannerImage3 from '../../../assets/images/home/home-main-banner3.jpg'

const HomeMainBanner: React.FC = () => {
	const SliderRef = React.useRef<any>(null)

	const [currentSlide, setCurrentSlide] = React.useState<number>(0)

	const settings = {
		arrows: false,
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,

		beforeChange: (index: number) => {
			setCurrentSlide(index)
		},
		afterChange: (index: number) => {
			setCurrentSlide(index)
		}
	};

	const onClickPrev = () => {
		SliderRef.current.slickPrev()
	}

	const onClickNext = () => {
		SliderRef.current.slickNext()
	}

	const slideCount = SliderRef?.current?.innerSlider?.state?.slideCount

	const onClickGoToSlide = (index: number) => {
		SliderRef.current.slickGoTo(index)
		setCurrentSlide(index)
	}

	return (
		<div className="home-main-banner">
			<div className="container">
				<div className="home-main-banner-wrapper">
					<button className="home-main-banner-arrow prev" onClick={onClickPrev}>
						<svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect y="0.476562" width="40" height="40" rx="20" fill="white" />
							<path d="M24 12.4766L16 20.4766L24 28.4766" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</button>

					<Slider {...settings} className='home-main-banner-slider' ref={SliderRef}>
						{/* <div className='home-main-banner-slider-item-wrapper'>
							<div className='home-main-banner-slider-item' style={{ backgroundImage: `url("${window.innerWidth > 500 ? HomeMainBannerImage14feb : HomeMainBannerImage14febMedia}")` }}>
								<div className="home-main-banner-slider-item-text">
									<h2 className="home-main-banner-slider-item-text__title">
										Попадание в сердце
									</h2>

									<p className="home-main-banner-slider-item-text__description">
										Подарки ко Дню всех влюбленных
									</p>

									<a href="/catalog?categories=Сумки&categories=Аксессуары&conditions=Новое&conditions=Отличное&brands=Chanel&brands=Hermes&brands=Hermès&brands=Saint+Laurent&brands=Celine&brands=Christian+Dior&brands=Louis+Vuitton&theme=Подарки+ко+дню+всех+влюбленных" className="home-main-banner-slider-item-text__btn white">
										Выбрать подарок
									</a>
								</div>
							</div>
						</div> */}

						<div className='home-main-banner-slider-item-wrapper'>
							<div className='home-main-banner-slider-item' style={{ backgroundImage: `url("${HomeMainBannerImage1}")` }}>
								<div className="home-main-banner-slider-item-text">
									<h2 className="home-main-banner-slider-item-text__title">
										Продавайте, покупайте, обменивайте <br /> сумки, обувь и аксессуары
									</h2>

									<p className="home-main-banner-slider-item-text__description">
										Станьте частью культуры нового потребления
									</p>

									<Link to="/sell" className="home-main-banner-slider-item-text__btn">
										Продать
									</Link>
								</div>
							</div>
						</div>

						<div className='home-main-banner-slider-item-wrapper'>
							<div className='home-main-banner-slider-item' style={{ backgroundImage: `url("${HomeMainBannerImage2}")` }}>
								<div className="home-main-banner-slider-item-text">
									<h2 className="home-main-banner-slider-item-text__title">
										Покупайте КУЛЬТовые лоты
									</h2>

									<p className="home-main-banner-slider-item-text__description">
										Дарите им вторую жизнь
									</p>

									<Link to="/catalog" className="home-main-banner-slider-item-text__btn">
										Перейти в каталог
									</Link>
								</div>
							</div>
						</div>

						<div className='home-main-banner-slider-item-wrapper'>
							<div className='home-main-banner-slider-item' style={{ backgroundImage: `url("${HomeMainBannerImage3}")` }}>
								<div className="home-main-banner-slider-item-text">
									<h2 className="home-main-banner-slider-item-text__title">
										Будьте разной — меняйте сумки с THE CULTT
									</h2>

									<p className="home-main-banner-slider-item-text__description">
										Запускайте круговорот сумок и меняйте свой гардероб
									</p>

									<Link to="/exchange" className="home-main-banner-slider-item-text__btn">
										Подробнее
									</Link>
								</div>
							</div>
						</div>
					</Slider>

					<button className="home-main-banner-arrow next" onClick={onClickNext}>
						<svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect y="0.476562" width="40" height="40" rx="20" fill="white" />
							<path d="M16 28.4766L24 20.4766L16 12.4766" fill="white" />
							<path d="M16 28.4766L24 20.4766L16 12.4766" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</button>

					<div className="home-main-banner-nav">
						{Array(slideCount)
							.fill(0)
							.map((_, index) => (
								<button className={`home-main-banner-nav-btn ${currentSlide === index ? "active" : ""}`} key={`home-main-banner-nav-btn-${index}`} onClick={() => onClickGoToSlide(index)}></button>
							))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomeMainBanner
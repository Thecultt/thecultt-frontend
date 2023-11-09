import React from 'react'
import { Link } from 'react-router-dom'
import Slider from "react-slick";

import HomeMainBannerImage from '../../../assets/images/home/home-main-banner1.jpg'
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
		autoplaySpeed: 10000,

		beforeChange: (index: number) => {
			setCurrentSlide(index)
		},
		afterChange: (index: number) => {
			setCurrentSlide(index)
		}
	};

	const slideCount = SliderRef?.current?.innerSlider?.state?.slideCount

	const onClickGoToSlide = (index: number) => {
		SliderRef.current.slickGoTo(index)
		setCurrentSlide(index)
	}

	return (
		<div className="home-main-banner-wrapper">
			<Slider {...settings} className='home-main-slider-banner' ref={SliderRef}>
				<div className='home-main-slider-banner-item-wrapper'>
					<div className='home-main-slider-banner-item' style={{ backgroundImage: `url("${HomeMainBannerImage}")` }}>
						<div className="home-main-slider-banner-item-text">
							<h2 className="home-main-slider-banner-item-text__title">
								Продавайте, покупайте, обменивайте <br /> сумки, обувь и аксессуары
							</h2>

							<p className="home-main-slider-banner-item-text__description">
								Станьте частью культуры нового потребления
							</p>

							<Link to="/sell" className="home-main-slider-banner-item-text__btn color">
								Продать
							</Link>
						</div>
					</div>
				</div>

				<div className='home-main-slider-banner-item-wrapper'>
					<div className='home-main-slider-banner-item' style={{ backgroundImage: `url("${HomeMainBannerImage2}")` }}>
						<div className="home-main-slider-banner-item-text">
							<h2 className="home-main-slider-banner-item-text__title">
								Покупайте КУЛЬТовые лоты
							</h2>

							<p className="home-main-slider-banner-item-text__description">
								Дарите им вторую жизнь
							</p>

							<Link to="/catalog" className="home-main-slider-banner-item-text__btn">
								Купить
							</Link>
						</div>
					</div>
				</div>

				<div className='home-main-slider-banner-item-wrapper'>
					<div className='home-main-slider-banner-item' style={{ backgroundImage: `url("${HomeMainBannerImage3}")` }}>
						<div className="home-main-slider-banner-item-text">
							<h2 className="home-main-slider-banner-item-text__title">
								Будьте разной — меняйте сумки с THE CULTT
							</h2>

							<p className="home-main-slider-banner-item-text__description">
								Запускайте круговорот сумок и меняйте свой гардероб
							</p>

							<Link to="/sell" className="home-main-slider-banner-item-text__btn">
								Обменять
							</Link>
						</div>
					</div>
				</div>
			</Slider>

			<div className="home-main-banner-nav">
				{Array(slideCount)
					.fill(0)
					.map((_, index) => (
						<button className={`home-main-banner-nav-btn ${currentSlide === index ? "active" : ""}`} key={`home-main-banner-nav-btn-${index}`} onClick={() => onClickGoToSlide(index)}></button>
					))}
			</div>
		</div>
	)
}

export default HomeMainBanner
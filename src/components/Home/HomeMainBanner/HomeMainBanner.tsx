import React from 'react'
import { Link } from 'react-router-dom'
import Slider from "react-slick";

import HomeMainBannerImage from '../../../assets/images/home/home-main-banner.jpg'
import HomeMainBannerImage2 from '../../../assets/images/home/home-main-banner2.jpg'

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
					<div className='home-main-slider-banner-item' style={{ backgroundImage: `url("${HomeMainBannerImage2}")` }}>
						<div className="home-main-slider-banner-item-text">
							<h2 className="home-main-slider-banner-item-text__title">
								Продавай, покупай, обменивай <br /> сумки, обувь и аксессуары
							</h2>

							<p className="home-main-slider-banner-item-text__description">
								Стань частью культуры нового потребления
							</p>

							<Link to="" className="home-main-slider-banner-item-text__btn">
								Продать
							</Link>
						</div>
					</div>
				</div>

				<div className='home-main-slider-banner-item-wrapper'>
					<div className='home-main-slider-banner-item' style={{ backgroundImage: `url("${HomeMainBannerImage}")` }}>
						<div className="home-main-slider-banner-item-text">
							<h2 className="home-main-slider-banner-item-text__title">
								Продавай, покупай, обменивай <br /> сумки, обувь и аксессуары
							</h2>

							<p className="home-main-slider-banner-item-text__description">
								Стань частью культуры нового потребления
							</p>

							<Link to="" className="home-main-slider-banner-item-text__btn">
								Продать
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
import React from "react";
import Slider from "react-slick";

interface ProductCoverProps {
	images: string[];
}

const ProductCover: React.FC<ProductCoverProps> = ({ images }) => {
	const [currentIndexImage, setCurrentIndexImage] = React.useState<number>(0);

	const onClickNext = () => {
		if (currentIndexImage + 1 < images.length) {
			setCurrentIndexImage(currentIndexImage + 1);
		} else {
			setCurrentIndexImage(0);
		}
	};

	const onClickPrev = () => {
		if (currentIndexImage > 0) {
			setCurrentIndexImage(currentIndexImage - 1);
		} else {
			setCurrentIndexImage(currentIndexImage - 1);
		}
	};

	const SliderRef = React.useRef<any>(null)

	const settings = {
		arrows: false,
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true
	};

	return (
		<>
			<div className="product-content-cover">
				<div className="product-content-cover-list-wrapper">
					<div className="product-content-cover-list">
						{images.map((image, index) => (
							<div
								className={`product-content-cover-list-item ${currentIndexImage === index ? "active" : ""
									}`}
								style={{ backgroundImage: `url("${image}")` }}
								key={`product-content-cover-list-item-${index}`}
								onMouseEnter={() => setCurrentIndexImage(index)}
							></div>
						))}
					</div>

					<div className="product-content-cover-list-nav">
						<svg
							width="20"
							height="11"
							viewBox="0 0 20 11"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1 1.31055L10 10.3105L19 1.31055"
								stroke="#202020"
								strokeWidth="1.35"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</div>
				</div>

				<div
					className="product-content-cover-main"
					style={{ backgroundImage: `url("${images[currentIndexImage]}")` }}
				>
					<div className="product-content-cover-main-nav">
						<div
							className="product-content-cover-main-nav-item prev"
							onClick={onClickPrev}
						>
							<svg
								width="37"
								height="36"
								viewBox="0 0 37 36"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect
									x="0.25"
									width="36"
									height="36"
									rx="18"
									fill="#F7F4F0"
								/>
								<path
									d="M20.5 11.6094L14.9998 17.5227L20.5 23.4361"
									fill="#F7F4F0"
								/>
								<path
									d="M20.5 11.6094L14.9998 17.5227L20.5 23.4361"
									stroke="#838383"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
						<div
							className="product-content-cover-main-nav-item next"
							onClick={onClickNext}
						>
							<svg
								width="37"
								height="36"
								viewBox="0 0 37 36"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect
									x="0.890625"
									width="36"
									height="36"
									rx="18"
									fill="#F7F4F0"
								/>
								<path
									d="M16.0039 23.4375L21.5041 17.5242L16.0039 11.6108"
									fill="#F7F4F0"
								/>
								<path
									d="M16.0039 23.4375L21.5041 17.5242L16.0039 11.6108"
									stroke="#838383"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>

			<div className="product-content-cover-media">
				<Slider {...settings} className='product-content-cover-media-slider' ref={SliderRef}>
					{images.map((image, index) => (
						<div className="product-content-cover-media-slider-image-wrapper" key={`product-content-cover-media-slider-image-${index}`}>
							<div className="product-content-cover-media-slider-image" style={{ backgroundImage: `url("${image}")` }}></div>
						</div>
					))}
				</Slider>
			</div >
		</>
	);
};

export default ProductCover;

import React from "react";

import SellImagesImage1 from "../../../assets/images/sell/sell-images-image-1.jpg";
import SellImagesImage2 from "../../../assets/images/sell/sell-images-image-2.jpg";
import SellImagesImage3 from "../../../assets/images/sell/sell-images-image-3.jpg";
import SellImagesImage4 from "../../../assets/images/sell/sell-images-image-4.jpg";

import {SellBackBtn, SellImagesBlock} from "../../";

interface SellImagesProps {
    next: any;
    prev?: any;
}

const SellImages: React.FC<SellImagesProps> = ({next, prev}) => {
    const imageBlocks: {
        image?: string;
        imageTitle?: string;
        imageDescription?: string;
    }[] = [
        {
            image: SellImagesImage1,
            imageTitle: "Лицевая сторона",
            imageDescription: "Сфотографируйте сумку спереди при дневном свете",
        },

        {
            image: SellImagesImage2,
            imageTitle: "Внутри",
            imageDescription: "Сфотографируйте внутреннее пространство сумки",
        },

        {
            image: SellImagesImage3,
            imageTitle: "Нюансы",
            imageDescription: "Сфотографируйте наиболее ярко выраженные нюансы",
        },

        {
            image: SellImagesImage4,
            imageTitle: "Размер",
            imageDescription:
                "Cфотографируйте сумку на себе, чтобы был понятен размер",
        },
    ];

    return (
        <div className="sell-block sell-block-images">
            <SellBackBtn prev={prev} />

            <h3 className="sell-block__title">Загрузка фотографий</h3>
            <p className="sell-block__subtitle">
                Загрузите как можно более четкие фотографии
            </p>

            <div className="sell-block-images-block-wrapper">
                {imageBlocks.map((block, index) => (
                    <SellImagesBlock
                        {...block}
                        number={index + 1}
                        key={`sell-block-images-block-${index}`}
                    />
                ))}

                <div className="sell-block-images-more">
                    <div className="sell-block-images-more-block">
                        <div className="sell-block-images-more-block-icon">
                            <svg
                                width="38"
                                height="38"
                                viewBox="0 0 38 38"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M19.001 7.91406V30.0807"
                                    stroke="#838383"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M7.91504 19H30.0817"
                                    stroke="#838383"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <rect
                                    x="1"
                                    y="1"
                                    width="36"
                                    height="36"
                                    rx="18"
                                    stroke="#838383"
                                    strokeWidth="2"
                                />
                            </svg>
                        </div>

                        <p className="sell-block-images-more-block__title">
                            Загрузить фотографию
                        </p>
                        <p className="sell-block-images-more-block__description">
                            Фотография 5
                        </p>
                    </div>

                    <div className="sell-block-images-more-block">
                        <div className="sell-block-images-more-block-icon">
                            <svg
                                width="38"
                                height="38"
                                viewBox="0 0 38 38"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M19.001 7.91406V30.0807"
                                    stroke="#838383"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M7.91504 19H30.0817"
                                    stroke="#838383"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <rect
                                    x="1"
                                    y="1"
                                    width="36"
                                    height="36"
                                    rx="18"
                                    stroke="#838383"
                                    strokeWidth="2"
                                />
                            </svg>
                        </div>

                        <p className="sell-block-images-more-block__title">
                            Загрузить фотографию
                        </p>
                        <p className="sell-block-images-more-block__description">
                            Фотография 6
                        </p>
                    </div>
                </div>

                <button className="btn sell-block__btn" onClick={next}>
                    Продолжить
                </button>
            </div>
        </div>
    );
};

export default SellImages;

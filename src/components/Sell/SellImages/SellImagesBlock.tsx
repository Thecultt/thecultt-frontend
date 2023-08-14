import React from "react";

interface SellImagesBlockProps {
    number: number;

    image?: string;
    imageTitle?: string;
    imageDescription?: string;
}

const SellImagesBlock: React.FC<SellImagesBlockProps> = ({
    number,
    image,
    imageTitle,
    imageDescription,
}) => {
    return (
        <div className="sell-block-images-block">
            <div
                className="sell-block-images-block-text"
                style={{width: image ? "50%" : "100%"}}
            >
                <div className="sell-block-images-block-text-icon">
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

                <p className="sell-block-images-block-text__title">
                    Загрузить фотографию
                </p>
                <p className="sell-block-images-block-text__description">
                    Фотография {number}
                </p>
            </div>

            {image ? (
                <div
                    className="sell-block-images-block-cover"
                    style={{backgroundImage: `url("${image}")`}}
                >
                    <h5 className="sell-block-images-block-cover__title">
                        {imageTitle}
                    </h5>
                    <p className="sell-block-images-block-cover__description">
                        {imageDescription}
                    </p>
                </div>
            ) : null}
        </div>
    );
};

export default SellImagesBlock;

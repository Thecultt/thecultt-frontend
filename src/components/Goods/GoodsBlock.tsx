import React from "react";

import GoodsImage from "../../assets/images/goods.jpg";

interface GoodsBlockProps {
    outStock?: boolean;
    isFavorite?: boolean;
    style?: any;
}

const GoodsBlock: React.FC<GoodsBlockProps> = ({
    outStock,
    isFavorite,
    style,
}) => {
    return (
        <div className="goods-block" style={{...style}}>
            <div className="goods-block-cover">
                <div className="goods-block-cover-arrow prev">
                    <svg
                        width="9"
                        height="16"
                        viewBox="0 0 9 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8 15L1 8L8 1"
                            stroke="#202020"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>

                <div className="goods-block-cover-arrow next">
                    <svg
                        width="9"
                        height="16"
                        viewBox="0 0 9 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1 15L8 8L1 1"
                            stroke="#202020"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>

                <div
                    className={`goods-block-cover-favorite ${
                        isFavorite ? "active" : ""
                    }`}
                >
                    {isFavorite ? (
                        <svg
                            width="19"
                            height="16"
                            viewBox="0 0 19 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M13.5032 0C11.7819 0 10.2749 0.74017 9.3355 1.9913C8.3961 0.74017 6.88912 0 5.16789 0C3.79775 0.00154 2.48418 0.54651 1.51534 1.51534C0.54651 2.48418 0.00154 3.79775 0 5.16788C0 11.0026 8.6512 15.7253 9.0196 15.9204C9.1167 15.9726 9.2253 16 9.3355 16C9.4458 16 9.5543 15.9726 9.6514 15.9204C10.0199 15.7253 18.6711 11.0026 18.6711 5.16788C18.6695 3.79775 18.1246 2.48418 17.1557 1.51534C16.1869 0.54651 14.8733 0.00154 13.5032 0Z"
                                fill="#285141"
                            />
                        </svg>
                    ) : (
                        <svg
                            width="19"
                            height="16"
                            viewBox="0 0 19 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M13.5032 0C11.7819 0 10.2749 0.740174 9.33554 1.9913C8.39615 0.740174 6.88912 0 5.16789 0C3.79775 0.00154431 2.48418 0.546512 1.51534 1.51534C0.546512 2.48418 0.00154431 3.79775 0 5.16789C0 11.0026 8.65121 15.7254 9.01963 15.9204C9.11673 15.9727 9.22527 16 9.33554 16C9.4458 16 9.55434 15.9727 9.65144 15.9204C10.0199 15.7254 18.6711 11.0026 18.6711 5.16789C18.6695 3.79775 18.1246 2.48418 17.1557 1.51534C16.1869 0.546512 14.8733 0.00154431 13.5032 0ZM9.33554 14.5701C7.81351 13.6832 1.33365 9.64311 1.33365 5.16789C1.33497 4.15139 1.73936 3.1769 2.45813 2.45813C3.1769 1.73936 4.15139 1.33497 5.16789 1.33365C6.7891 1.33365 8.15026 2.19718 8.71872 3.58418C8.76896 3.70648 8.85443 3.81109 8.96425 3.88471C9.07408 3.95832 9.20332 3.99763 9.33554 3.99763C9.46775 3.99763 9.59699 3.95832 9.70682 3.88471C9.81664 3.81109 9.90211 3.70648 9.95235 3.58418C10.5208 2.19468 11.882 1.33365 13.5032 1.33365C14.5197 1.33497 15.4942 1.73936 16.2129 2.45813C16.9317 3.1769 17.3361 4.15139 17.3374 5.16789C17.3374 9.63644 10.8559 13.6824 9.33554 14.5701Z" />
                        </svg>
                    )}
                    <span className="goods-block-cover-favorite__count">
                        12
                    </span>
                </div>
                <div className="goods-block-cover-dots">
                    <div className="goods-block-cover-dots-item"></div>
                    <div className="goods-block-cover-dots-item active"></div>
                    <div className="goods-block-cover-dots-item"></div>
                    <div className="goods-block-cover-dots-item"></div>
                </div>
                <div
                    className="goods-block-cover-image"
                    style={{backgroundImage: `url("${GoodsImage}")`}}
                ></div>
            </div>

            <div className="goods-block-text">
                <p className="goods-block-text__brand">Gucci</p>

                <h3 className="goods-block-text__model">MINI BUCKET BAG</h3>

                {outStock ? (
                    <>
                        <span className="goods-block-text__outstock">
                            Нет в наличии
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                    stroke="#202020"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M12 8V12"
                                    stroke="#202020"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M12 16H12.01"
                                    stroke="#202020"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>

                        <button className="btn-regular small black goods-block-text__btn">
                            Лист ожидания
                        </button>
                    </>
                ) : (
                    <>
                        <div className="goods-block-text-state">
                            <span className="goods-block-text-state__subtitle">
                                Состояние
                            </span>

                            <span className="goods-block-text-state__title">
                                <svg
                                    viewBox="0 0 11 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5.50781 11C8.26924 11 10.5078 8.76142 10.5078 6C10.5078 3.23858 8.26924 1 5.50781 1C2.74639 1 0.507812 3.23858 0.507812 6C0.507812 8.76142 2.74639 11 5.50781 11Z"
                                        stroke="#285141"
                                        strokeWidth="0.716034"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M3.28516 6.00369L4.95182 7.67036L7.7296 4.89258"
                                        stroke="#285141"
                                        strokeWidth="0.716034"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                Отличное
                            </span>
                        </div>

                        <div className="goods-block-text-priceretail">
                            <p className="goods-block-text-priceretail__message">
                                <span>Цена ретейла</span>: аксессуар не был в
                                носке, фирменные бирки сохранены или
                                отсутствуют.
                            </p>

                            <span className="goods-block-text-priceretail__subtitle">
                                Цена ретейла:
                            </span>

                            <span className="goods-block-text-priceretail__title">
                                180 000 ₽
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                        stroke="#202020"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M12 8V12"
                                        stroke="#202020"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M12 16H12.01"
                                        stroke="#202020"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                        </div>

                        <h3 className="goods-block-text__price">142 000 ₽</h3>

                        <button className="btn small goods-block-text__btn">
                            Добавить в корзину
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default GoodsBlock;

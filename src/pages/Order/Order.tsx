import React from "react";

interface OrderProps {
    status: string;
}

const Order: React.FC<OrderProps> = ({status}) => {
    return (
        <>
            {status === "success" ? (
                <section className="order">
                    <div className="container">
                        <div className="order-wrapper">
                            <div className="order-content">
                                <div className="order-content-info">
                                    <div className="order-content-info-circle left"></div>
                                    <div className="order-content-info-circle right"></div>

                                    <div className="order-content-info-icon">
                                        <svg
                                            width="71"
                                            height="70"
                                            viewBox="0 0 71 70"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <rect
                                                x="0.5"
                                                width="70"
                                                height="70"
                                                rx="35"
                                                fill="#285141"
                                                fillOpacity="0.3"
                                            />
                                            <rect
                                                x="11"
                                                y="10"
                                                width="50"
                                                height="50"
                                                rx="25"
                                                fill="#285141"
                                            />
                                            <path
                                                d="M46.6654 27L31.9987 41.6667L25.332 35"
                                                stroke="white"
                                                strokeWidth="4"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <h2 className="order-content-info__title">
                                        ЗАКАЗ СОЗДАН УСПЕШНО
                                    </h2>
                                    <p className="order-content-info__subtitle">
                                        Мы рады, что аксессуар мечты вы нашли
                                        именно у нас!
                                    </p>
                                    <p className="order-content-info__description">
                                        Ваш заказ № 2305/329 оформлен и принят в
                                        работу. Менеджер свяжется с вами в
                                        ближайшее время!
                                    </p>
                                    <div className="order-content-info-btn">
                                        <button className="btn order-content-info-btn__btn">
                                            Перейти в каталог
                                        </button>
                                        <button className="btn-regular order-content-info-btn__btn">
                                            Перейти в заказы
                                        </button>
                                    </div>
                                </div>
                                <div className="order-content-product-wrapper">
                                    <div className="order-content-good">
                                        <div
                                            className="order-content-good-image"
                                            style={{
                                                backgroundImage:
                                                    "url('https://thecultt.com/assets/cache_image/products/5703/3a62c0f2389228fdfb0474c35d4d2cb98a24df52_1000x1330_254.jpg')",
                                            }}
                                        ></div>
                                        <div className="order-content-good-text">
                                            <p className="order-content-good-text__brand">
                                                Gucci
                                            </p>
                                            <p className="order-content-good-text__model">
                                                MINI BUCKET BAG
                                            </p>
                                            <p className="order-content-good-text__option">
                                                <span>Цвет:</span> Белый
                                            </p>
                                            <p className="order-content-good-text__option">
                                                <span>Комплект:</span> Пыльник и
                                                ремешок
                                            </p>

                                            <div className="order-content-good-text-state">
                                                <span className="order-content-good-text-state__subtitle">
                                                    Состояние
                                                </span>

                                                <span className="order-content-good-text-state__title">
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
                                        </div>
                                    </div>
                                    <div className="order-content-good">
                                        <div
                                            className="order-content-good-image"
                                            style={{
                                                backgroundImage:
                                                    "url('https://thecultt.com/assets/cache_image/products/5703/3a62c0f2389228fdfb0474c35d4d2cb98a24df52_1000x1330_254.jpg')",
                                            }}
                                        ></div>
                                        <div className="order-content-good-text">
                                            <p className="order-content-good-text__brand">
                                                Gucci
                                            </p>
                                            <p className="order-content-good-text__model">
                                                MINI BUCKET BAG
                                            </p>
                                            <p className="order-content-good-text__option">
                                                <span>Цвет:</span> Белый
                                            </p>
                                            <p className="order-content-good-text__option">
                                                <span>Комплект:</span> Пыльник и
                                                ремешок
                                            </p>

                                            <div className="order-content-good-text-state">
                                                <span className="order-content-good-text-state__subtitle">
                                                    Состояние
                                                </span>

                                                <span className="order-content-good-text-state__title">
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
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="order-recipient">
                                <div className="order-recipient-block">
                                    <h3 className="order-recipient-block__title">
                                        Получатель
                                    </h3>

                                    <p className="order-recipient-block__subtitle">
                                        <span>Имя:</span> Максим Андреевич К.
                                    </p>

                                    <p className="order-recipient-block__subtitle">
                                        <span>Телефон:</span> +7896316621
                                    </p>
                                </div>
                                <div className="order-recipient-block">
                                    <h3 className="order-recipient-block__title">
                                        Доставка
                                    </h3>

                                    <p className="order-recipient-block__subtitle">
                                        <span>Вариант доставки:</span> Беспалтно
                                        по Москве
                                    </p>

                                    <p className="order-recipient-block__subtitle">
                                        <span>Адрес доставки:</span> М.
                                        Сухоревская, 12д 2й этаж
                                    </p>
                                </div>
                                <div className="order-recipient-block">
                                    <h3 className="order-recipient-block__title">
                                        Оплата
                                    </h3>

                                    <p className="order-recipient-block__subtitle">
                                        <span>Тип оплаты:</span> Дебетовая карта
                                    </p>

                                    <p className="order-recipient-block__subtitle">
                                        <span>Статус:</span>{" "}
                                        <p className="payment">
                                            Оплачено{" "}
                                            <svg
                                                width="16"
                                                height="15"
                                                viewBox="0 0 16 15"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g id="Group">
                                                    <path
                                                        id="Vector"
                                                        d="M7.50781 14.5C11.3738 14.5 14.5078 11.366 14.5078 7.5C14.5078 3.63401 11.3738 0.5 7.50781 0.5C3.64182 0.5 0.507812 3.63401 0.507812 7.5C0.507812 11.366 3.64182 14.5 7.50781 14.5Z"
                                                        stroke="#285141"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        id="Vector_2"
                                                        d="M4.39844 7.50477L6.73177 9.83811L10.6207 5.94922"
                                                        stroke="#285141"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </g>
                                            </svg>
                                        </p>
                                    </p>
                                </div>
                                <div className="order-recipient-svg">
                                    <svg
                                        width="100%"
                                        height="76"
                                        viewBox="0 0 600 76"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M167.857 1.64412e-05C152.078 1.64412e-05 17.9946 -6.54611e-05 0 0.000136335V47.035C0 62.8165 12.7919 75.6099 28.5714 75.6099H32.1429C32.1429 65.7465 40.1378 57.7506 50 57.7506C59.8622 57.7506 67.8571 65.7465 67.8571 75.6099H82.1429C82.1429 65.7465 90.1378 57.7506 100 57.7506C109.862 57.7506 117.857 65.7465 117.857 75.6099H132.143C132.143 65.7465 140.138 57.7506 150 57.7506C159.862 57.7506 167.857 65.7465 167.857 75.6099H182.143C182.143 65.7465 190.138 57.7506 200 57.7506C209.862 57.7506 217.857 65.7465 217.857 75.6099H232.143C232.143 65.7465 240.138 57.7506 250 57.7506C259.862 57.7506 267.857 65.7465 267.857 75.6099H282.143C282.143 65.7465 290.138 57.7506 300 57.7506C309.862 57.7506 317.857 65.7465 317.857 75.6099H332.143C332.143 65.7465 340.138 57.7506 350 57.7506C359.862 57.7506 367.857 65.7465 367.857 75.6099H382.143C382.143 65.7465 390.138 57.7506 400 57.7506C409.862 57.7506 417.857 65.7465 417.857 75.6099H432.143C432.143 65.7465 440.138 57.7506 450 57.7506C459.862 57.7506 467.857 65.7465 467.857 75.6099H482.143C482.143 65.7465 490.138 57.7506 500 57.7506C509.862 57.7506 517.857 65.7465 517.857 75.6099H532.143C532.143 65.7465 540.138 57.7506 550 57.7506C559.862 57.7506 567.857 65.7465 567.857 75.6099H571.429C587.208 75.6099 600 62.8165 600 47.035V0.000136335C571.429 -5.32365e-05 565.78 0.000136335 550 0.000136335L167.857 1.64412e-05Z"
                                            fill="#F7F4F0"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                <section className="order">
                    <div className="container">
                        <div className="order-wrapper">
                            <div className="order-content">
                                <div className="order-content-info">
                                    <div className="order-content-info-circle left"></div>
                                    <div className="order-content-info-circle right"></div>

                                    <div className="order-content-info-icon">
                                        <svg
                                            width="71"
                                            height="70"
                                            viewBox="0 0 71 70"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <rect
                                                x="0.5"
                                                width="70"
                                                height="70"
                                                rx="35"
                                                fill="#E46267"
                                                fillOpacity="0.2"
                                            />
                                            <rect
                                                x="11"
                                                y="10"
                                                width="50"
                                                height="50"
                                                rx="25"
                                                fill="#9A1A1A"
                                            />
                                            <path
                                                d="M44 27L28 43M28 27L44 43"
                                                stroke="white"
                                                strokeWidth="4"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <h2 className="order-content-info__title">
                                        Не смогли обработать ваш заказ
                                    </h2>
                                    <p className="order-content-info__subtitle">
                                        К сожалению, не прошла оплата <br />{" "}
                                        Попробуйте оплатить ещё раз
                                    </p>
                                    <p className="order-content-info__description">
                                        Товар зарезервирован на 10 минут
                                    </p>
                                    <button className="btn-black order-content-info__repeatbtn">
                                        Оплатите ещё раз{" "}
                                        <svg
                                            width="23"
                                            height="22"
                                            viewBox="0 0 23 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M11.3889 6.55556C11.3889 5.61256 11.0143 4.70819 10.3475 4.0414C9.6807 3.3746 8.77633 3 7.83333 3H2.5V16.3333H8.72222C9.42947 16.3333 10.1077 16.6143 10.6078 17.1144C11.1079 17.6145 11.3889 18.2928 11.3889 19M11.3889 6.55556V19M11.3889 6.55556C11.3889 5.61256 11.7635 4.70819 12.4303 4.0414C13.0971 3.3746 14.0015 3 14.9444 3H20.2778V16.3333H14.0556C13.3483 16.3333 12.67 16.6143 12.1699 17.1144C11.6698 17.6145 11.3889 18.2928 11.3889 19"
                                                stroke="#F1EDE8"
                                                strokeWidth="1.2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <div className="order-content-product-wrapper">
                                    <div className="order-content-good">
                                        <div
                                            className="order-content-good-image"
                                            style={{
                                                backgroundImage:
                                                    "url('https://thecultt.com/assets/cache_image/products/5703/3a62c0f2389228fdfb0474c35d4d2cb98a24df52_1000x1330_254.jpg')",
                                            }}
                                        ></div>
                                        <div className="order-content-good-text">
                                            <p className="order-content-good-text__brand">
                                                Gucci
                                            </p>
                                            <p className="order-content-good-text__model">
                                                MINI BUCKET BAG
                                            </p>
                                            <p className="order-content-good-text__option">
                                                <span>Цвет:</span> Белый
                                            </p>
                                            <p className="order-content-good-text__option">
                                                <span>Комплект:</span> Пыльник и
                                                ремешок
                                            </p>

                                            <div className="order-content-good-text-state">
                                                <span className="order-content-good-text-state__subtitle">
                                                    Состояние
                                                </span>

                                                <span className="order-content-good-text-state__title">
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
                                        </div>
                                    </div>
                                    <div className="order-content-good">
                                        <div
                                            className="order-content-good-image"
                                            style={{
                                                backgroundImage:
                                                    "url('https://thecultt.com/assets/cache_image/products/5703/3a62c0f2389228fdfb0474c35d4d2cb98a24df52_1000x1330_254.jpg')",
                                            }}
                                        ></div>
                                        <div className="order-content-good-text">
                                            <p className="order-content-good-text__brand">
                                                Gucci
                                            </p>
                                            <p className="order-content-good-text__model">
                                                MINI BUCKET BAG
                                            </p>
                                            <p className="order-content-good-text__option">
                                                <span>Цвет:</span> Белый
                                            </p>
                                            <p className="order-content-good-text__option">
                                                <span>Комплект:</span> Пыльник и
                                                ремешок
                                            </p>

                                            <div className="order-content-good-text-state">
                                                <span className="order-content-good-text-state__subtitle">
                                                    Состояние
                                                </span>

                                                <span className="order-content-good-text-state__title">
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
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="order-recipient">
                                <div className="order-recipient-block">
                                    <h3 className="order-recipient-block__title">
                                        Получатель
                                    </h3>

                                    <p className="order-recipient-block__subtitle">
                                        <span>Имя:</span> Максим Андреевич К.
                                    </p>

                                    <p className="order-recipient-block__subtitle">
                                        <span>Телефон:</span> +7896316621
                                    </p>
                                </div>
                                <div className="order-recipient-block">
                                    <h3 className="order-recipient-block__title">
                                        Доставка
                                    </h3>

                                    <p className="order-recipient-block__subtitle">
                                        <span>Вариант доставки:</span> Беспалтно
                                        по Москве
                                    </p>

                                    <p className="order-recipient-block__subtitle">
                                        <span>Адрес доставки:</span> М.
                                        Сухоревская, 12д 2й этаж
                                    </p>
                                </div>
                                <div className="order-recipient-block">
                                    <h3 className="order-recipient-block__title">
                                        Оплата
                                    </h3>

                                    <p className="order-recipient-block__subtitle">
                                        <span>Тип оплаты:</span> Дебетовая карта
                                    </p>

                                    <p className="order-recipient-block__subtitle">
                                        <span>Статус:</span>{" "}
                                        <p className="payment-error">
                                            Ошибка
                                        </p>
                                    </p>
                                </div>
                                <div className="order-recipient-svg">
                                    <svg
                                        width="100%"
                                        height="76"
                                        viewBox="0 0 600 76"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M167.857 1.64412e-05C152.078 1.64412e-05 17.9946 -6.54611e-05 0 0.000136335V47.035C0 62.8165 12.7919 75.6099 28.5714 75.6099H32.1429C32.1429 65.7465 40.1378 57.7506 50 57.7506C59.8622 57.7506 67.8571 65.7465 67.8571 75.6099H82.1429C82.1429 65.7465 90.1378 57.7506 100 57.7506C109.862 57.7506 117.857 65.7465 117.857 75.6099H132.143C132.143 65.7465 140.138 57.7506 150 57.7506C159.862 57.7506 167.857 65.7465 167.857 75.6099H182.143C182.143 65.7465 190.138 57.7506 200 57.7506C209.862 57.7506 217.857 65.7465 217.857 75.6099H232.143C232.143 65.7465 240.138 57.7506 250 57.7506C259.862 57.7506 267.857 65.7465 267.857 75.6099H282.143C282.143 65.7465 290.138 57.7506 300 57.7506C309.862 57.7506 317.857 65.7465 317.857 75.6099H332.143C332.143 65.7465 340.138 57.7506 350 57.7506C359.862 57.7506 367.857 65.7465 367.857 75.6099H382.143C382.143 65.7465 390.138 57.7506 400 57.7506C409.862 57.7506 417.857 65.7465 417.857 75.6099H432.143C432.143 65.7465 440.138 57.7506 450 57.7506C459.862 57.7506 467.857 65.7465 467.857 75.6099H482.143C482.143 65.7465 490.138 57.7506 500 57.7506C509.862 57.7506 517.857 65.7465 517.857 75.6099H532.143C532.143 65.7465 540.138 57.7506 550 57.7506C559.862 57.7506 567.857 65.7465 567.857 75.6099H571.429C587.208 75.6099 600 62.8165 600 47.035V0.000136335C571.429 -5.32365e-05 565.78 0.000136335 550 0.000136335L167.857 1.64412e-05Z"
                                            fill="#F7F4F0"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default Order;

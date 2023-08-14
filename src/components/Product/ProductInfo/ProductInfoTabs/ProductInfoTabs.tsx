import React from "react";
import AnimateHeight from "react-animate-height";

const ProductInfoTabs: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const [isOpen2, setIsOpen2] = React.useState<boolean>(false);
    const [isOpen3, setIsOpen3] = React.useState<boolean>(false);

    return (
        <div className="product-content-info-tabs">
            <div
                className="product-content-info-tabs-item"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="product-content-info-tabs-item-top">
                    <h4 className="product-content-info-tabs-item-top__title">
                        Доставка
                    </h4>
                    <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9.75 4.25V14.75"
                            stroke="#202020"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M4.5 9.5H15"
                            stroke="#202020"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>

                <AnimateHeight duration={300} height={isOpen ? "auto" : 1}>
                    <p className="product-content-info-tabs-item__description">
                        Доставка по Москве (внутри МКАД) собственным курьером
                        платформы THE CULTT. Доставка по России курьерской
                        службой СДЭК до пункта самовывоза или вашего адреса.
                        Доставка оплаченных заказов по Москве и России —
                        бесплатно. Услуга доставки с примеркой по Москве — 600₽.
                        Доставка международных заказов осуществляется службой
                        Boxberry Стоимость международной доставки — 4.000₽
                    </p>
                </AnimateHeight>
            </div>

            <div
                className="product-content-info-tabs-item"
                onClick={() => setIsOpen2(!isOpen2)}
            >
                <div className="product-content-info-tabs-item-top">
                    <h4 className="product-content-info-tabs-item-top__title">
                        Оплата
                    </h4>

                    <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9.75 4.25V14.75"
                            stroke="#202020"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M4.5 9.5H15"
                            stroke="#202020"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>

                <AnimateHeight duration={300} height={isOpen2 ? "auto" : 1}>
                    <p className="product-content-info-tabs-item__description">
                        Вы можете оплатить заказ банковской картой на сайте или
                        наличными при получении заказа (действует только для
                        услуги «Примерка»). Подробнее см. в разделе «Доставка и
                        оплата».
                    </p>
                </AnimateHeight>
            </div>

            <div
                className="product-content-info-tabs-item"
                onClick={() => setIsOpen3(!isOpen3)}
            >
                <div className="product-content-info-tabs-item-top">
                    <h4 className="product-content-info-tabs-item-top__title">
                        Возврат
                    </h4>

                    <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9.75 4.25V14.75"
                            stroke="#202020"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M4.5 9.5H15"
                            stroke="#202020"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>

                <AnimateHeight duration={300} height={isOpen3 ? "auto" : 1}>
                    <p className="product-content-info-tabs-item__description">
                        Мы принимаем возврат в течение трех дней с момента
                        получения заказа. Подробнее в разделе «Возврат».
                    </p>
                </AnimateHeight>
            </div>
        </div>
    );
};

export default ProductInfoTabs;

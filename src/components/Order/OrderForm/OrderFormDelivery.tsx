import React from "react";

import {RadioSelect} from "../../";

const OrderFormDelivery: React.FC = () => {
    const deliveryItems: {title: string; description: string}[] = [
        {
            title: "Международная доставка",
            description:
                "Международная доставка осуществляется службами EMS. Стоимость доставки — 5.000₽. Важно! Условия оплаты и размер таможенных пошлин определяются таможенным законодательством страны, в которую осуществляется доставка.",
        },
        {
            title: "Примерка (по Москве)",
            description:
                "Вы можете заказать доставку лотов (не более 2 сумок, не более 4 товаров в одном заказе) по Москве в пределах МКАД и принять решение о покупке после примерки. Курьер заранее согласует с вами время доставки в промежутке 11 до 21 с пн по воскр. <br /> Стоимость услуги примерки - 600₽. Время ожидания курьера - 15 минут.",
        },
        {
            title: "Бесплатная доставка (по Москве)",
            description:
                "Мы бесплатно доставим оплаченный вами заказ по Москве в пределах МКАД. Курьер заранее согласует с вами время доставки в промежутке 11 до 21 с пн по пт. Доставка будет осуществлена в течение 24 часов.",
        },
    ];

    const [currentIndex, setCurrentIndex] = React.useState<number | null>(null);

    return (
        <div className="order-form-block order-form-block-delivery">
            <h3 className="order-form-block__title">Варианты доставки</h3>

            <div className="order-form-block-checkboxs-wrapper">
                {deliveryItems.map((item, index) => (
                    <div
                        className="order-form-block-checkbox"
                        key={`order-form-block-checkbox-${index}`}
                        onClick={() => setCurrentIndex(index)}
                    >
                        <RadioSelect label={item.title} name="delivery" />

                        {currentIndex === index ? (
                            <p
                                className="order-form-block-checkbox__description"
                                dangerouslySetInnerHTML={{
                                    __html: item.description,
                                }}
                            ></p>
                        ) : null}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderFormDelivery;

import React from "react";

import {RadioSelect} from "../../";

const OrderFormPayments: React.FC = () => {
    const paymentItems: {title: string; description: string}[] = [
        {
            title: "На сайте",
            description:
                "К оплате не принимается платежная система Visa, а также карты американских и украинских банков. Важно: товары, оплаченные международными картами, не подлежат возврату.",
        },
        {
            title: "Рассрочка от Тинькофф",
            description: "",
        },
        {
            title: "Кредит",
            description: "",
        },
    ];

    const [currentIndex, setCurrentIndex] = React.useState<number | null>(null);

    return (
        <div className="order-form-block order-form-block-payments">
            <h3 className="order-form-block__title">Варианты доставки</h3>

            <div className="order-form-block-checkboxs-wrapper">
                {paymentItems.map((item, index) => (
                    <div
                        className="order-form-block-checkbox"
                        key={`order-form-block-checkbox-${index}`}
                        onClick={() => setCurrentIndex(index)}
                    >
                        <RadioSelect label={item.title} name="payments" />

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

export default OrderFormPayments;
import React from "react";

import {Input, Textarea} from "../../";

const OrderFormAddress: React.FC = () => {
    return (
        <div className="order-form-block">
            <h3 className="order-form-block__title">Адресс</h3>

            <div className="order-form-block-inputs-wrapper">
                <div
                    className="order-form-block-input"
                    style={{width: "32.5%"}}
                >
                    <Input type="text" name="" label="Улица" />
                </div>

                <div
                    className="order-form-block-input"
                    style={{width: "32.5%"}}
                >
                    <Input type="text" name="" label="Дом" />
                </div>

                <div
                    className="order-form-block-input"
                    style={{width: "32.5%"}}
                >
                    <Input type="text" name="" label="Квартра" />
                </div>

                <div className="order-form-block-input" style={{width: "100%"}}>
                    <Textarea name="" label="Комментарий" />
                </div>
            </div>
        </div>
    );
};

export default OrderFormAddress;

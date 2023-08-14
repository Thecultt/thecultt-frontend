import React from "react";

import {Input} from "../../";

const OrderFormContact: React.FC = () => {
    return (
        <div className="order-form-block">
            <h3 className="order-form-block__title">Контактная информация</h3>

            <div className="order-form-block-inputs-wrapper">
                <div className="order-form-block-input" style={{width: "100%"}}>
                    <Input type="text" name="" label="Почта" />
                </div>

                <div className="order-form-block-input" style={{width: "49%"}}>
                    <Input type="text" name="" label="Получатель" />
                </div>

                <div className="order-form-block-input" style={{width: "49%"}}>
                    <Input type="text" name="" label="Телефон" />
                </div>
            </div>
        </div>
    );
};

export default OrderFormContact;

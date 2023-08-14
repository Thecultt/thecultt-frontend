import React from "react";

import {Select} from "../../";

const OrderFormCountry: React.FC = () => {
    return (
        <div className="order-form-block">
            <h3 className="order-form-block__title">Страна и город доставки</h3>

            <div className="order-form-block-inputs-wrapper">
                <div className="order-form-block-input" style={{width: "49%"}}>
                    <Select items={["Россия"]} label="Страна" />
                </div>

                <div className="order-form-block-input" style={{width: "49%"}}>
                    <Select items={["Россия"]} label="Город" />
                </div>
            </div>
        </div>
    );
};

export default OrderFormCountry;

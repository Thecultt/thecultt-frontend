import React from "react";

import {SellBackBtn, SellDeliveryTypes, Input, Select, Textarea} from "../../";

interface SellDeliveryProps {
    next: any;
    prev?: any;
}

const SellDelivery: React.FC<SellDeliveryProps> = ({next, prev}) => {
    return (
        <div className="sell-block sell-block-delivery">
            <SellBackBtn prev={prev} />

            <h3 className="sell-block__title">Cпособ отправки товара</h3>
            <p className="sell-block__subtitle">
                Выберите город, из которого товар будет отправлен к нам в офис.
            </p>

            <div className="sell-block-select">
                <Select label="Город" items={["Москва"]} />
            </div>

            <SellDeliveryTypes />

            <div className="sell-block-delivery-form">
                <h5 className="sell-block-delivery-form__title">Адресс</h5>

                <div className="sell-block-input-wrapper">
                    <div className="sell-block-input" style={{width: "100%"}}>
                        <Input
                            label="Улица"
                            name="street"
                            type="text"
                            bgWhite
                        />
                    </div>

                    <div className="sell-block-input" style={{width: "49%"}}>
                        <Input label="Дом" name="dom" type="text" bgWhite />
                    </div>

                    <div className="sell-block-input" style={{width: "49%"}}>
                        <Input label="Кв" name="kv" type="text" bgWhite />
                    </div>

                    <div className="sell-block-input" style={{width: "100%"}}>
                        <Textarea label="Комментарий" name="comm" bgWhite />
                    </div>
                </div>
            </div>

            <button className="btn sell-block__btn" onClick={next}>
                Продолжить
            </button>
        </div>
    );
};

export default SellDelivery;

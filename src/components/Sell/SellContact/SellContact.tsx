import React from "react";

import {SellBackBtn, Input} from "../../";

interface SellContactProps {
    next: any;
    prev?: any;
}

const SellContact: React.FC<SellContactProps> = ({next, prev}) => {
    return (
        <div className="sell-block sell-block-contact">
            <SellBackBtn prev={prev} />

            <h3 className="sell-block__title">Контактные данные</h3>
            <p className="sell-block__subtitle">
                Заполните контактные данные в соответствие с паспортными,
                укажите актуальные номер телефона и почту для связи.
            </p>

            <div className="sell-block-input-wrapper">
                <div className="sell-block-input" style={{width: "49%"}}>
                    <Input label="Ваше имя" name="name" type="text" bgWhite />
                </div>

                <div className="sell-block-input" style={{width: "49%"}}>
                    <Input
                        label="Ваша фамилия"
                        name="surname"
                        type="text"
                        bgWhite
                    />
                </div>

                <div className="sell-block-input" style={{width: "100%"}}>
                    <Input
                        label="Ваша почта"
                        name="email"
                        type="text"
                        bgWhite
                    />
                </div>

                <div className="sell-block-input" style={{width: "100%"}}>
                    <Input
                        label="Ваш номер телефона"
                        name="phone"
                        type="text"
                        bgWhite
                    />
                </div>
            </div>

            <button className="btn sell-block__btn" onClick={next}>
                Продолжить
            </button>
        </div>
    );
};

export default SellContact;

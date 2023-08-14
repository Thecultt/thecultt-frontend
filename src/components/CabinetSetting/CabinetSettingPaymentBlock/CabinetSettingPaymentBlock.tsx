import React from "react";

import {Input} from "../../";

const CabinetSettingPaymentBlock: React.FC = () => {
    const [state, setState] = React.useState<boolean>(false);

    const toggleState = () => {
        setState(!state);
    };

    return (
        <div className="cabinet-setting-block">
            <div className="cabinet-setting-block-title">
                <h3 className="cabinet-setting-block-title__title">
                    Реквизит для выплат
                </h3>

                {state ? (
                    <div className="cabinet-setting-block-title-btn">
                        <button className="cabinet-setting-block-title-btn__btn">
                            Сохранить
                        </button>
                        <button className="cabinet-setting-block-title-btn__btn">
                            Отменить
                        </button>
                    </div>
                ) : null}
            </div>

            {state ? (
                <div className="cabinet-setting-block-form">
                    <div className="cabinet-setting-block-form-input-wrapper">
                        <div
                            className="cabinet-setting-block-form-input"
                            style={{width: "49%"}}
                        >
                            <Input
                                type="text"
                                name=""
                                label="Серия и номер паспорта"
                                bgWhite
                            />
                        </div>

                        <div
                            className="cabinet-setting-block-form-input"
                            style={{width: "49%"}}
                        >
                            <Input type="text" name="" label="ИНН" bgWhite />
                        </div>

                        <div
                            className="cabinet-setting-block-form-input"
                            style={{width: "49%"}}
                        >
                            <Input type="text" name="" label="БИК" bgWhite />
                        </div>

                        <div
                            className="cabinet-setting-block-form-input"
                            style={{width: "49%"}}
                        >
                            <Input
                                type="text"
                                name=""
                                label="Владелец счёта"
                                bgWhite
                            />
                        </div>

                        <div
                            className="cabinet-setting-block-form-input"
                            style={{width: "100%"}}
                        >
                            <Input
                                type="text"
                                name=""
                                label="Расчетный счёт"
                                bgWhite
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <button
                    className="cabinet-setting-block-form-add__btn"
                    onClick={toggleState}
                >
                    <svg
                        width="30"
                        height="31"
                        viewBox="0 0 30 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            y="0.5"
                            width="30"
                            height="30"
                            rx="6"
                            fill="#F7F4F0"
                        />
                        <path
                            d="M15 8.5V22.5"
                            stroke="#838383"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M8 15.5H22"
                            stroke="#838383"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    Добавить реквизиты для выплат
                </button>
            )}
        </div>
    );
};

export default CabinetSettingPaymentBlock;

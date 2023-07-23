import React from "react";

import {Select, Input, Textarea} from "../../";

const CabinetSettingAddressBlock: React.FC = () => {
    const [state, setState] = React.useState<boolean>(false);

    const toggleState = () => {
        setState(!state);
    };

    return (
        <div className="cabinet-setting-block">
            <div className="cabinet-setting-block-title">
                <h3 className="cabinet-setting-block-title__title">Адрес</h3>
            </div>

            {state ? (
                <div className="cabinet-setting-block-form">
                    <div className="cabinet-setting-block-form-input-wrapper">
                        <div
                            className="cabinet-setting-block-form-input"
                            style={{width: "49%"}}
                        >
                            <Select items={["Россия"]} label="Страна" />
                        </div>

                        <div
                            className="cabinet-setting-block-form-input"
                            style={{width: "49%"}}
                        >
                            <Select items={["Москва"]} label="Город" />
                        </div>

                        <div
                            className="cabinet-setting-block-form-input"
                            style={{width: "32%"}}
                        >
                            <Input type="text" name="" label="Улица" bgWhite />
                        </div>

                        <div
                            className="cabinet-setting-block-form-input"
                            style={{width: "32%"}}
                        >
                            <Input type="text" name="" label="Дом" bgWhite />
                        </div>

                        <div
                            className="cabinet-setting-block-form-input"
                            style={{width: "32%"}}
                        >
                            <Input
                                type="text"
                                name=""
                                label="Квартира"
                                bgWhite
                            />
                        </div>

                        <div
                            className="cabinet-setting-block-form-input"
                            style={{width: "100%"}}
                        >
                            <Textarea name="" label="Комментарий" bgWhite />
                        </div>
                    </div>
                    <div className="cabinet-setting-block-form-btn">
                        <button className="btn cabinet-setting-block-form-btn__btn">
                            Сохранить
                        </button>
                        <button className="btn-regular black cabinet-setting-block-form-btn__btn">
                            Отменить
                        </button>
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
                    Добавить новый адрес
                </button>
            )}
        </div>
    );
};

export default CabinetSettingAddressBlock;

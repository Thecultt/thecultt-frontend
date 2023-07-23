import React from "react";

import {Input} from "../";

const CabinetSettingContactBlock: React.FC = () => {
    return (
        <div className="cabinet-setting-block">
            <div className="cabinet-setting-block-title">
                <h3 className="cabinet-setting-block-title__title">
                    Контактные данные
                </h3>

                <button className="cabinet-setting-block-title__edit">
                    Изменить
                </button>
            </div>
            <div className="cabinet-setting-block-form">
                <div className="cabinet-setting-block-form-input-wrapper">
                    <div
                        className="cabinet-setting-block-form-input"
                        style={{width: "49%"}}
                    >
                        <Input type="text" name="" label="Ваша почта" bgWhite />
                    </div>

                    <div
                        className="cabinet-setting-block-form-input"
                        style={{width: "49%"}}
                    >
                        <Input
                            type="text"
                            name=""
                            label="Ваш номер телефона"
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
                            label="Укажите ваш ник в Telegram"
                            bgWhite
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CabinetSettingContactBlock;

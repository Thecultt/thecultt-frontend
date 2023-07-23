import React from "react";
import {Link} from "react-router-dom";

import {Input} from "../../";
const CabinetSettingPasswordRecoveryForm: React.FC = () => {
    return (
        <div className="cabinet-setting-password-recovery-form">
            <h2 className="cabinet-setting-password-recovery-form__title">
                Установите новый пароль
            </h2>

            <div className="cabinet-setting-password-recovery-form-content">
                <div className="cabinet-setting-password-recovery-form-content-input">
                    <h4 className="cabinet-setting-password-recovery-form-content-input__title">
                        Старый Пароль
                    </h4>

                    <Input type="text" name="" label="Старый Пароль" />
                </div>

                <div className="cabinet-setting-password-recovery-form-content-input">
                    <h4 className="cabinet-setting-password-recovery-form-content-input__title">
                        Новый пароль
                    </h4>

                    <Input type="text" name="" label="Новый пароль" />
                </div>

                <div className="cabinet-setting-password-recovery-form-content-input">
                    <h4 className="cabinet-setting-password-recovery-form-content-input__title">
                        Повторите пароль
                    </h4>

                    <Input type="text" name="" label="Повторите пароль" />
                </div>

                <Link
                    to="/"
                    className="cabinet-setting-password-recovery-form-content__link"
                >
                    Забыли пароль?
                </Link>

                <button className="btn cabinet-setting-password-recovery-form-content__btn">
                    Поменять пароль
                </button>

                <p className="cabinet-setting-password-recovery-form-content__description">
                    В личном кабинете вы сможете отследить статус вашей
                    продажи/заказа
                </p>
            </div>
        </div>
    );
};

export default CabinetSettingPasswordRecoveryForm;

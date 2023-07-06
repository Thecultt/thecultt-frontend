import React from "react";

import {Input, Select, Textarea} from "../../components/";

interface CabinetWaitingListFormProps {
    onSend: () => void;
}

const CabinetWaitingListForm: React.FC<CabinetWaitingListFormProps> = ({
    onSend,
}) => {
    return (
        <div className="cabinet-waiting-list-form">
            <h2 className="cabinet-waiting-list-form__title">WAITING LIST</h2>
            <p className="cabinet-waiting-list-form__description">
                Заполните заявку, чтобы узнать о появлении в наличие нужного вам
                аксессуара.
            </p>
            <div className="cabinet-waiting-list-form-content">
                <div
                    className="cabinet-waiting-list-form-content-select"
                    style={{width: "100%"}}
                >
                    <Select
                        label="Тип продукта"
                        items={["Сумка", "Аксессуар", "Обувь"]}
                    />
                </div>
                <div
                    className="cabinet-waiting-list-form-content-select"
                    style={{width: "49%"}}
                >
                    <Select
                        label="Бренд"
                        items={["Бренд 1", "Бренд 2", "Бренд 3"]}
                    />
                </div>
                <div
                    className="cabinet-waiting-list-form-content-select"
                    style={{width: "49%"}}
                >
                    <Select
                        label="Модель"
                        items={["Модель 1", "Модель 2", "Модель 3"]}
                    />
                </div>
                <div
                    className="cabinet-waiting-list-form-content-input"
                    style={{width: "100%"}}
                >
                    <Textarea label="Комментарий" name="comment" />
                </div>
                <button
                    className="btn cabinet-waiting-list-form-content__btn"
                    onClick={onSend}
                >
                    Отправить заявку
                </button>
            </div>
        </div>
    );
};

export default CabinetWaitingListForm;

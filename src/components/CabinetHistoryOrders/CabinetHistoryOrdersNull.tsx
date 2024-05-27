import React from 'react';
import { Link } from 'react-router-dom';

const CabinetHistoryOrdersNull: React.FC = () => {
    return (
        <div className="cabinet-history-orders-null">
            <h5 className="cabinet-history-orders-null__title">Ваш список заказов пока пуст</h5>

            <Link to="/catalog" className="btn-regular cabinet-history-orders-null__btn">
                Перейти в каталог
            </Link>
        </div>
    );
};

export default CabinetHistoryOrdersNull;

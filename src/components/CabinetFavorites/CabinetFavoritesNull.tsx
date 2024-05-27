import React from 'react';
import { Link } from 'react-router-dom';

const CabinetFavoritesNull: React.FC = () => {
    return (
        <div className="cabinet-favorites-null">
            <h5 className="cabinet-favorites-null__title">Ваш список избранного пока пуст</h5>

            <Link to="/catalog" className="btn-regular cabinet-favorites-null__btn">
                Перейти в каталог
            </Link>
        </div>
    );
};

export default CabinetFavoritesNull;

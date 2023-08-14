import React from "react";

const ProductInfoParameters: React.FC = () => {
    return (
        <div className="product-content-info-parameters">
            <h4 className="product-content-info-parameters__title">
                Информация о товаре
            </h4>

            <p className="product-content-info-parameters__item">
                <span>Пол:</span> Мужской
            </p>
            <p className="product-content-info-parameters__item">
                <span>Цвет:</span> Белый
            </p>
            <p className="product-content-info-parameters__item">
                <span>Размер:</span> 6 x 20 x 24 (высота, длинна, ширина)
            </p>
            <p className="product-content-info-parameters__item">
                <span>Следы жизни::</span> Следы носки на текстиле.
            </p>
        </div>
    );
};

export default ProductInfoParameters;

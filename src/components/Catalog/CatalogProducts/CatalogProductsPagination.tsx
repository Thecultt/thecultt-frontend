import React from "react";

const CatalogProductsPagination: React.FC = () => {
    return (
        <div className="catalog-product-pagination">
            <button className="btn catalog-product-pagination__btn">
                Показать ещё
            </button>

            <div className="catalog-product-pagination-pages">
                <div className="catalog-product-pagination-pages-item active">
                    1
                </div>
                <div className="catalog-product-pagination-pages-item">2</div>
                <div className="catalog-product-pagination-pages-item">3</div>
                <div className="catalog-product-pagination-pages-item">4</div>
            </div>
        </div>
    );
};

export default CatalogProductsPagination;

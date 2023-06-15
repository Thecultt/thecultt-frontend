import React from "react";

const CatalogGoodsPagination: React.FC = () => {
    return (
        <div className="catalog-goods-pagination">
            <button className="btn catalog-goods-pagination__btn">
                Показать ещё
            </button>

            <div className="catalog-goods-pagination-pages">
                <div className="catalog-goods-pagination-pages-item active">
                    1
                </div>
                <div className="catalog-goods-pagination-pages-item">2</div>
                <div className="catalog-goods-pagination-pages-item">3</div>
                <div className="catalog-goods-pagination-pages-item">4</div>
            </div>
        </div>
    );
};

export default CatalogGoodsPagination;

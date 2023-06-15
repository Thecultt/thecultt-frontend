import React from "react";

import {CatalogGoodsBlock, CatalogGoodsPagination} from "../../";

const CatalogGoods: React.FC = () => {
    return (
        <div className="catalog-goods-wrapper">
            <CatalogGoodsBlock />
            <CatalogGoodsBlock outStock />
            <CatalogGoodsBlock />
            <CatalogGoodsBlock />
            <CatalogGoodsBlock />
            <CatalogGoodsBlock />
            <CatalogGoodsBlock />
            <CatalogGoodsBlock />
            <CatalogGoodsBlock />
            <CatalogGoodsBlock />
            <CatalogGoodsBlock />
            <CatalogGoodsBlock />

            <CatalogGoodsPagination />
        </div>
    );
};

export default CatalogGoods;

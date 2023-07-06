import React from "react";

import {GoodsBlock, CatalogGoodsPagination} from "../../";

const CatalogGoods: React.FC = () => {
    return (
        <div className="catalog-goods-wrapper">
            <GoodsBlock style={{width: "24%"}} />
            <GoodsBlock style={{width: "24%"}} />
            <GoodsBlock style={{width: "24%"}} />
            <GoodsBlock style={{width: "24%"}} />
            <GoodsBlock style={{width: "24%"}} />
            <GoodsBlock style={{width: "24%"}} />
            <GoodsBlock style={{width: "24%"}} />
            <GoodsBlock style={{width: "24%"}} />
            <GoodsBlock style={{width: "24%"}} />

            <CatalogGoodsPagination />
        </div>
    );
};

export default CatalogGoods;

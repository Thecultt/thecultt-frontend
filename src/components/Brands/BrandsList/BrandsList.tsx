import React from "react";

import {BrandsListBlock} from "../../";

const BrandsList: React.FC = () => {
    return (
        <div className="brands-list">
            <BrandsListBlock />
            <BrandsListBlock />
            <BrandsListBlock />
            <BrandsListBlock />
            <BrandsListBlock />
        </div>
    );
};

export default BrandsList;

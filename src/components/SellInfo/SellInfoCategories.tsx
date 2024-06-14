import React from 'react';
import { Link } from 'react-router-dom';

import HomeCategoriesBagImage from 'src/assets/images/home/home-categories-bag.jpg';
import HomeCategoriesShoesImage from 'src/assets/images/home/home-categories-shoes.jpg';
import HomeCategoriesDecorationImage from 'src/assets/images/home/home-categories-decoration.jpg';
import SellInfoCategoriesAccessoriesImage from 'src/assets/images/sell-info/sell-info-categories-accessories.jpg';

import { CategoriesItem } from 'src/components/Home/HomeCategories/HomeCategories';

const categories: CategoriesItem[] = [
    {
        image: HomeCategoriesBagImage,
        title: 'Сумки',
    },
    {
        image: HomeCategoriesShoesImage,
        title: 'Обувь',
    },
    {
        image: HomeCategoriesDecorationImage,
        title: 'Украшения',
    },
    {
        image: SellInfoCategoriesAccessoriesImage,
        title: 'Аксессуары',
    },
];

const SellInfoCategories: React.FC = () => {
    return (
        <div className="sell-info-categories">
            <h2 className="sell-info__title">Какие категории мы принимаем для продажи</h2>

            <div className="sell-info-categories-blocks">
                {categories.map((category, index) => (
                    <Link
                        to="/cabinet/sell"
                        className="sell-info-categories-blocks-block"
                        key={`sell-info-categories-blocks-block-${index}`}
                    >
                        <div className="home-categories-item">
                            <div
                                className="home-categories-item-image"
                                style={{ backgroundImage: `url("${category.image}")` }}
                            ></div>

                            <h2 className="home-categories-item__title">{category.title}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SellInfoCategories;

import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderHoverMenuCategory } from '../Header';

interface HeaderHoverMenuProps extends HeaderHoverMenuCategory {
    isOpenHoverMenu: boolean;

    onOpen: () => void;
    onClose: () => void;
}

const HeaderHoverMenu: React.FC<HeaderHoverMenuProps> = ({
    title,
    types,
    brands,
    fullTextView,
    image,
    isOpenHoverMenu,
    onOpen,
    onClose,
}) => {
    return (
        <div className={`header-hover-menu-wrapper-wrapper ${isOpenHoverMenu ? 'active' : ''}`}>
            <div
                className={`header-hover-menu-wrapper ${isOpenHoverMenu ? 'active' : ''}`}
                onMouseOver={() => onOpen()}
                onMouseOut={() => onClose()}
            >
                <nav className={`header-hover-menu`}>
                    <div className="header-hover-menu-list-wrapper">
                        <div className="header-hover-menu-list type">
                            <h3 className="header-hover-menu-list__title">Тип</h3>

                            <div className="header-hover-menu-list-coll-wrapper">
                                <div className="header-hover-menu-list-coll">
                                    {types
                                        .map((type, index) => (
                                            <Link
                                                onClick={onClose}
                                                to={`/catalog?categories=${title}&types=${type}`}
                                                className="header-hover-menu-list-coll__item"
                                                key={`header-hover-menu-list-coll__item-${type}-${index}`}
                                            >
                                                {type}
                                            </Link>
                                        ))
                                        .slice(0, 4)}
                                    {/* 4 / 7 */}

                                    <Link
                                        onClick={onClose}
                                        to={`/catalog?categories=${title}`}
                                        className="header-hover-menu-list-coll__item last"
                                    >
                                        {fullTextView}
                                    </Link>

                                    <Link
                                        onClick={onClose}
                                        to={`/catalog?categories=${title}&boutique=true`}
                                        className="header-hover-menu-list-boutique"
                                    >
                                        <p className="header-hover-menu-list-boutique__btn">Из бутика</p>
                                        <p className="header-hover-menu-list-boutique__subtitle">
                                            Новые, <br /> не были в носке
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="header-hover-menu-list">
                            <h3 className="header-hover-menu-list__title">Бренды</h3>

                            <div className="header-hover-menu-list-coll-wrapper">
                                <div className="header-hover-menu-list-coll">
                                    {brands
                                        .map((brand, index) => (
                                            <Link
                                                onClick={onClose}
                                                to={`/catalog?categories=${title}&brands=${brand}`}
                                                className="header-hover-menu-list-coll__item"
                                                key={`header-hover-menu-list-coll__item-${brand}-${index}`}
                                            >
                                                {brand}
                                            </Link>
                                        ))
                                        .slice(0, 8)}
                                </div>

                                <div className="header-hover-menu-list-coll">
                                    {brands
                                        .map((brand, index) => (
                                            <Link
                                                onClick={onClose}
                                                to={`/catalog?categories=${title}&brands=${brand}`}
                                                className="header-hover-menu-list-coll__item"
                                                key={`header-hover-menu-list-coll__item-${brand}-${index}`}
                                            >
                                                {brand}
                                            </Link>
                                        ))
                                        .slice(8, 15)}

                                    <Link
                                        onClick={onClose}
                                        to="/brands"
                                        className="header-hover-menu-list-coll__item last"
                                    >
                                        Все бренды
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="header-hover-menu-image" style={{ backgroundImage: `url("${image}")` }}></div>
                </nav>
            </div>
        </div>
    );
};

export default HeaderHoverMenu;

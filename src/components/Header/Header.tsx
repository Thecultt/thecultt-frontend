import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from 'src/hooks/useTypedSelector';
import {
    HeaderTopMessage,
    HeaderCart,
    HeaderUser,
    HeaderHoverMenu,
    HeaderSearchBox,
    HeaderMedia,
} from 'src/components';
import { setHeaderSearchValue, fetchHeaderSearchItems } from 'src/redux/actions/header';
import { useDebounce } from 'src/hooks/useDebounce';
import { getCatalogFiltersUrl } from 'src/functions/getCatalogFiltersUrl';

import Logo from 'src/assets/images/logo.svg';
import HeaderHoverImageBag from 'src/assets/images/header/header-image-hover-menu-bag.jpg';
import HeaderHoverImageAccessories from 'src/assets/images/header/header-image-hover-menu-accessories.jpg';
import HeaderHoverImageShoes from 'src/assets/images/header/header-image-hover-menu-shoes.jpg';
import HeaderHoverImageDecoration from 'src/assets/images/header/header-image-hover-menu-decoration.jpg';
import { useAuthUser } from 'src/hooks/useAuthUser';

export interface HeaderHoverMenuCategory {
    title: string;
    types: string[];
    brands: string[];
    fullTextView: string;
    image: string;
}

const categories: {
    title: string;
    types: string[];
    brands: string[];
    fullTextView: string;
    image: string;
}[] = [
    {
        title: 'Сумки',
        types: [
            'Дорожная сумка',
            'Клатч',
            'Поясная сумка',
            'Рюкзак',
            'Сумка кроссбоди',
            'Сумка на плечо',
            'Сумка с ручками',
        ],
        brands: [
            'Acne Studios',
            'Balenciaga',
            'Bottega Veneta',
            'Burberry',
            'Celine',
            'Chanel',
            'Chloe',
            'Christian Dior',
            'Fendi',
            'Gucci',
            'Hermes',
            'Jil Sander',
            'Loewe',
            'Louis Vuitton',
            'Prada',
            'Saint Laurent',
            'Wandler',
        ],
        fullTextView: 'Все сумки',
        image: HeaderHoverImageBag,
    },
    {
        title: 'Аксессуары',
        types: [
            'Аксессуары для сумок',
            'Головные уборы',
            'Аксессуары для волос',
            'Кошельки',
            'Косметички',
            'Очки',
            'Платки и шарфы',
            'Ремни',
            'Обложки и футляры',
        ],
        brands: [
            'Balenciaga',
            'Bottega Veneta',
            'Brunello Cucinelli',
            'Loro Piana',
            'Celine',
            'Chanel',
            'Christian Dior',
            'Fendi',
            'Gucci',
            'Hermes',
            'Jil Sander',
            'Louis Vuitton',
            'Marni',
            'Miu Miu',
            'Prada',
        ],
        fullTextView: 'Все аксессуары',
        image: HeaderHoverImageAccessories,
    },
    {
        title: 'Обувь',
        types: [
            'Балетки',
            'Ботильоны',
            'Ботинки',
            'Босоножки',
            'Кеды и кроссовки',
            'Лоферы',
            'Мюли',
            'Сандали',
            'Сапоги',
            'Туфли',
        ],
        brands: [
            'Acne Studios',
            'Alaia',
            'Alexander Wang',
            'Bottega Veneta',
            'Celine',
            'Chanel',
            'Chloe',
            'Ganni',
            'Gia Borghini',
            'Hereu',
            'Hermes',
            'Isabel Marant',
            'JW Anderson',
            'Mach & Mach',
            'Maison Margiela',
            'Manolo Blahnik',
            'Proenza Schouler',
        ],
        fullTextView: 'Вся обувь',
        image: HeaderHoverImageShoes,
    },
    {
        title: 'Украшения',
        types: ['Браслеты', 'Колье и подвески', 'Кольца', 'Часы', 'Броши'],
        brands: [
            'Balenciaga',
            'Bottega Veneta',
            'Bulgari',
            'Cartier',
            'Celine',
            'Chanel',
            'Christian Dior',
            'Gucci',
            'Hermes',
            'Jil Sander',
            'Louis Vuitton',
            'Miu Miu',
            'Prada',
            'Tiffani',
            'Van Cleef & Arpels',
        ],
        fullTextView: 'Все украшения',
        image: HeaderHoverImageDecoration,
    },
];

const Header: React.FC = () => {
    const { pathname } = useLocation();

    const dispatch = useDispatch();

    const [currentCategoryHoverMenuIndex, setCurrentCategoryHoverMenuIndex] = React.useState(0);
    const [isOpenHoverMenu, setIsOpenHoverMenu] = React.useState(false);
    const [isOpenSearch, setIsOpenSearch] = React.useState(false);

    const { search } = useTypedSelector(({ header }) => header);
    const debouncedValue = useDebounce(search.value);

    const { isLoggedIn } = useAuthUser();

    const openHoverMenu = (index: number) => {
        if (!isOpenSearch) {
            setCurrentCategoryHoverMenuIndex(index);

            setIsOpenHoverMenu(true);
        }
    };

    const closeHoverMenu = () => {
        setIsOpenHoverMenu(false);
    };

    const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setHeaderSearchValue(e.target.value) as any);
        setIsOpenSearch(true);
    };

    React.useEffect(() => {
        if (debouncedValue !== '') dispatch(fetchHeaderSearchItems(search.value) as any);
    }, [debouncedValue]);

    React.useEffect(() => {
        setIsOpenHoverMenu(false);
        setIsOpenSearch(false);
    }, [pathname]);

    return (
        <div className="header-global-wrapper">
            {localStorage.getItem('header-message-visit-22.10.2023-isClose') ? null : <HeaderTopMessage />}

            <div className="header-container">
                <header className="header">
                    <div className="container">
                        <div className="header-wrapper">
                            <div className="header-wrapper-block">
                                <div className="header-block">
                                    <Link to="/" className="header-block-logo">
                                        <img src={Logo} alt="THECULTT" className="header-block-logo__image" />
                                    </Link>

                                    <div className="input-light" onClick={() => setIsOpenSearch(true)}>
                                        <svg
                                            width="20"
                                            height="21"
                                            viewBox="0 0 20 21"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M9.16667 16.3177C12.8486 16.3177 15.8333 13.3329 15.8333 9.65104C15.8333 5.96914 12.8486 2.98438 9.16667 2.98438C5.48477 2.98438 2.5 5.96914 2.5 9.65104C2.5 13.3329 5.48477 16.3177 9.16667 16.3177Z"
                                                stroke="#838383"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M17.5 17.9844L13.875 14.3594"
                                                stroke="#838383"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>

                                        <input
                                            type="text"
                                            className="input-light__field"
                                            placeholder="Поиск"
                                            onChange={onChangeSearchInput}
                                            value={search.value}
                                        />
                                    </div>
                                </div>

                                <div className="header-block">
                                    <div className="header-block-btn">
                                        <Link
                                            to={isLoggedIn ? '/cabinet/sell' : 'sell'}
                                            className="header-block-btn__btn"
                                            onClick={() => {
                                                window.dataLayer.push({
                                                    ecommerce: null,
                                                }); // Clear the previous ecommerce object.
                                                window.dataLayer.push({
                                                    event: 'sell_click',
                                                    ecommerce: {
                                                        timestamp: Math.floor(Date.now() / 1000),
                                                    },
                                                });
                                            }}
                                        >
                                            Продать
                                        </Link>
                                        <Link
                                            to="/exchange"
                                            className="header-block-btn__btn regular"
                                            onClick={() => {
                                                window.dataLayer.push({
                                                    ecommerce: null,
                                                }); // Clear the previous ecommerce object.
                                                window.dataLayer.push({
                                                    event: 'swap_click',
                                                    ecommerce: {
                                                        timestamp: Math.floor(Date.now() / 1000),
                                                    },
                                                });
                                            }}
                                        >
                                            Обменять
                                        </Link>
                                    </div>

                                    {/* <button className="header-block__language">
									<svg
										width="22"
										height="22"
										viewBox="0 0 22 22"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M11 20.9844C16.5228 20.9844 21 16.5072 21 10.9844C21 5.46153 16.5228 0.984375 11 0.984375C5.47715 0.984375 1 5.46153 1 10.9844C1 16.5072 5.47715 20.9844 11 20.9844Z"
											stroke="black"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M1 10.9844H21M14.8462 10.9844C14.6572 14.6413 13.3103 18.1434 11 20.9844C8.68972 18.1434 7.34277 14.6413 7.15385 10.9844C7.34277 7.32747 8.68972 3.82538 11 0.984375C13.3103 3.82538 14.6572 7.32747 14.8462 10.9844Z"
											stroke="black"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</button> */}

                                    <HeaderUser />

                                    <HeaderCart />
                                </div>
                            </div>

                            <nav className="header-menu">
                                <Link
                                    to={getCatalogFiltersUrl({
                                        boutique: false,
                                        categories: ['Сумки', 'Аксессуары', 'Обувь', 'Украшения'],
                                        availability: ['Доступно', 'На примерке', 'Нет в наличии'],
                                        price_drop: false,
                                        page: 1,
                                        sort: 'a',
                                    })}
                                    className="header-menu__link"
                                >
                                    Новинки
                                </Link>

                                <Link
                                    to={getCatalogFiltersUrl({
                                        boutique: false,
                                        categories: ['Сумки', 'Аксессуары', 'Обувь', 'Украшения'],
                                        availability: ['Доступно', 'На примерке', 'Нет в наличии'],
                                        price_drop: false,
                                        page: 1,
                                        sort: 'popular',
                                    })}
                                    className="header-menu__link"
                                >
                                    Популярное
                                </Link>

                                {categories.map((category, index) => (
                                    <Link
                                        to={getCatalogFiltersUrl({
                                            categories: [category.title],
                                            availability: ['Доступно', 'На примерке', 'Нет в наличии'],
                                            page: 1,
                                            sort: 'a',
                                        })}
                                        className="header-menu__link"
                                        key={`header-menu__link-${index}`}
                                        onMouseOver={() => openHoverMenu(index)}
                                        onMouseOut={closeHoverMenu}
                                        onClick={closeHoverMenu}
                                    >
                                        {category.title}
                                    </Link>
                                ))}

                                <Link to="/brands" className="header-menu__link">
                                    Бренды
                                </Link>

                                <Link to="/auth" className="header-menu__link">
                                    Подлинность
                                </Link>
                                {/* 
								<a href="/catalog?categories=Сумки&categories=Обувь&categories=Аксессуары&availability=Доступно&availability=На+примерке&selections=1&utm_source=website&utm_medium=header&utm_campaign=selection_Doletskaya" className="header-menu__link">
									Архив Алены Долецкой
								</a> */}

                                <Link
                                    to={getCatalogFiltersUrl({
                                        boutique: false,
                                        price_drop: true,
                                        categories: ['Сумки', 'Аксессуары', 'Обувь', 'Украшения'],
                                        availability: ['Доступно', 'На примерке'],
                                        page: 1,
                                        sort: 'popular',
                                    })}
                                    className="header-menu__link"
                                >
                                    <b>THE CULTT SALE</b>
                                </Link>
                            </nav>
                        </div>
                    </div>
                </header>

                <HeaderHoverMenu
                    {...categories[currentCategoryHoverMenuIndex]}
                    isOpenHoverMenu={isOpenHoverMenu}
                    onOpen={() => setIsOpenHoverMenu(true)}
                    onClose={() => setIsOpenHoverMenu(false)}
                />

                <HeaderSearchBox state={isOpenSearch} onClose={() => setIsOpenSearch(false)} />

                <HeaderMedia setIsOpenSearch={setIsOpenSearch} />
            </div>
        </div>
    );
};

export default Header;

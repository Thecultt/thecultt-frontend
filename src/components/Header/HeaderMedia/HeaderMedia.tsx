import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { getClassNames } from 'src/functions/getClassNames';
import { getCatalogFiltersUrl } from 'src/functions/getCatalogFiltersUrl';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { HeaderMediaLinkTab, Footer } from 'src/components';
import { CATEGORIES } from 'src/constants/catalog';

import Logo from 'src/assets/images/logo.svg';
import { useAuthUser } from 'src/hooks/useAuthUser';

import { HeaderMediaSelectionsBanner } from './HeaderMediaSelectionsBanner';

interface HeaderMediaProps {
    setIsOpenSearch: (bool: boolean) => void;
}

const HeaderMedia: React.FC<HeaderMediaProps> = ({ setIsOpenSearch }) => {
    const { pathname, search } = useLocation();

    const [state, setState] = React.useState<boolean>(false);

    const ModalRef = React.useRef<HTMLDivElement>(null);

    const { categories: filtersCategories, isLoaded: filtersIsLoaded } = useTypedSelector(
        ({ products_filters }) => products_filters,
    );
    const { items } = useTypedSelector(({ cart }) => cart);
    const { items: selections } = useTypedSelector(({ selections }) => selections);

    const mappedCategories = CATEGORIES.map((item) => ({ title: item, ...filtersCategories[item] }));

    const { isLoggedIn } = useAuthUser();

    const categoryAllTitles: Record<string, string> = {
        Обувь: 'Вся обувь',
        Сумки: 'Все сумки',
        Аксессуары: 'Все аксессуары',
    };

    React.useEffect(() => {
        document.addEventListener('mousedown', hiddeModal);
        document.addEventListener('touchstart', hiddeModal);

        return () => {
            document.removeEventListener('mousedown', hiddeModal);
            document.removeEventListener('touchstart', hiddeModal);
        };
    }, [ModalRef]);

    React.useEffect(() => {
        setState(false);
    }, [pathname, search]);

    React.useEffect(() => {
        if (state) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
    }, [state]);

    const hiddeModal = (e: any) => {
        if (ModalRef.current && !ModalRef.current.contains(e.target)) {
            setState(false);
        }
    };

    const toggleState = () => {
        setState(!state);
    };

    return (
        <header className="header-media" ref={ModalRef}>
            <div className="container">
                <div className="header-media-wrapper">
                    <div className="header-media-icon-group">
                        <div className="header-media-icon" onClick={toggleState}>
                            {state ? (
                                <svg
                                    width="24"
                                    height="18"
                                    viewBox="0 0 24 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M20 1L12 9M12 9L4 17M12 9L4 1M12 9L20 17"
                                        stroke="#202020"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    width="24"
                                    height="18"
                                    viewBox="0 0 24 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M23 1H1" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M23 9H1" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M23 17H1" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            )}
                        </div>

                        <div className="header-media-icon" onClick={() => setIsOpenSearch(true)}>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                                    stroke="#202020"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>

                    <Link to="/" className="header-media-logo">
                        <img src={Logo} alt="THECULTT" className="header-media-logo__image" />
                    </Link>

                    <div className="header-media-icon-group">
                        <Link to={isLoggedIn ? '/cabinet/setting' : `${search}#reglog`} className="header-media-icon">
                            <svg
                                width="28"
                                height="28"
                                viewBox="0 0 28 28"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <mask id="path-1-inside-1_145_1345" fill="white">
                                    <path d="M9.95539 8.24194C9.95539 5.62304 12.0273 3.5 14.5832 3.5C17.139 3.5 19.2109 5.62304 19.2109 8.24194C19.2109 10.8608 17.139 12.9839 14.5832 12.9839C12.0273 12.9839 9.95539 10.8608 9.95539 8.24194Z" />
                                    <path d="M14.5832 14.3387C7.07985 14.3391 4.6665 19.7471 4.6665 21.1074C4.6665 22.4677 4.6665 24.5 14.5832 24.5C24.4998 24.5 24.4998 22.4677 24.4998 21.1074C24.4998 19.7581 22.0207 14.3383 14.5832 14.3387Z" />
                                </mask>
                                <path
                                    d="M14.5832 14.3387L14.5831 12.8387L14.5832 14.3387ZM14.5832 11.4839C12.89 11.4839 11.4554 10.0671 11.4554 8.24194H8.45539C8.45539 11.6546 11.1646 14.4839 14.5832 14.4839V11.4839ZM17.7109 8.24194C17.7109 10.0671 16.2763 11.4839 14.5832 11.4839V14.4839C18.0017 14.4839 20.7109 11.6546 20.7109 8.24194H17.7109ZM14.5832 5C16.2763 5 17.7109 6.4168 17.7109 8.24194H20.7109C20.7109 4.82928 18.0017 2 14.5832 2V5ZM14.5832 2C11.1646 2 8.45539 4.82928 8.45539 8.24194H11.4554C11.4554 6.4168 12.89 5 14.5832 5V2ZM6.1665 21.1074C6.1665 21.1295 6.16702 21.0455 6.22549 20.8439C6.27944 20.6579 6.3698 20.4166 6.50681 20.1381C6.78083 19.581 7.22085 18.9166 7.8651 18.2804C9.12787 17.0333 11.2293 15.8389 14.5832 15.8387L14.5831 12.8387C10.4337 12.8389 7.57681 14.3487 5.75709 16.1458C4.86008 17.0317 4.22781 17.9744 3.81485 18.8139C3.42431 19.6079 3.1665 20.4403 3.1665 21.1074H6.1665ZM14.5832 15.8387C17.8999 15.8385 20.0038 17.0327 21.2789 18.2865C21.9288 18.9256 22.3755 19.5926 22.6544 20.1509C22.7938 20.43 22.8859 20.6711 22.9408 20.856C23.0006 21.0576 22.9998 21.1368 22.9998 21.1074H25.9998C25.9998 20.4347 25.7323 19.5991 25.3381 18.8101C24.9198 17.9727 24.2818 17.0318 23.3822 16.1473C21.5584 14.354 18.7039 12.8385 14.5831 12.8387L14.5832 15.8387ZM22.9998 21.1074C22.9998 21.4762 22.9847 21.5741 22.955 21.6474C22.9504 21.6587 22.9079 21.7968 22.5404 21.9979C21.6665 22.4759 19.5351 23 14.5832 23V26C19.5479 26 22.3749 25.5079 23.9801 24.6298C24.8521 24.1528 25.4295 23.5278 25.7348 22.7755C26.015 22.0851 25.9998 21.4188 25.9998 21.1074H22.9998ZM14.5832 23C9.63123 23 7.49988 22.4759 6.62597 21.9979C6.25839 21.7968 6.21596 21.6587 6.21136 21.6474C6.18163 21.5741 6.1665 21.4762 6.1665 21.1074H3.1665C3.1665 21.4188 3.15138 22.0851 3.43154 22.7755C3.73684 23.5278 4.3142 24.1528 5.1862 24.6298C6.79146 25.5079 9.61844 26 14.5832 26V23Z"
                                    fill="#202020"
                                    mask="url(#path-1-inside-1_145_1345)"
                                />
                            </svg>
                        </Link>

                        <Link to="/cart" className="header-media-icon">
                            {Object.keys(items).length ? (
                                <span className="header-media-icon__count">{Object.keys(items).length}</span>
                            ) : null}

                            <svg
                                width="28"
                                height="28"
                                viewBox="0 0 28 28"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.1122 10.0247C10.2125 10.4266 10.6196 10.6711 11.0215 10.5708C11.4234 10.4705 11.6679 10.0634 11.5676 9.66151L10.1122 10.0247ZM10.3693 7.95762L11.097 7.77601L10.3693 7.95762ZM17.3181 7.95762L16.5904 7.77602V7.77602L17.3181 7.95762ZM16.202 4.38764L15.7077 4.95164L16.202 4.38764ZM11.4854 4.38764L10.991 3.82363V3.82363L11.4854 4.38764ZM6.49564 22.4776L5.79549 22.7464H5.79549L6.49564 22.4776ZM9.04941 9.6654L8.70768 8.99777L8.60384 9.05092L8.52105 9.13311L9.04941 9.6654ZM21.5047 22.4776L22.2048 22.7464L21.5047 22.4776ZM18.9509 9.6654L19.4793 9.13311L19.3965 9.05092L19.2926 8.99777L18.9509 9.6654ZM13.8437 3.5L13.8437 4.25L13.8437 3.5ZM16.1199 9.66151C16.0196 10.0634 16.2641 10.4705 16.6659 10.5708C17.0678 10.6711 17.4749 10.4266 17.5752 10.0247L16.1199 9.66151ZM11.5676 9.66151L11.097 7.77601L9.64164 8.13923L10.1122 10.0247L11.5676 9.66151ZM15.7077 4.95164C16.5071 5.65236 16.8483 6.74284 16.5904 7.77602L18.0458 8.13923C18.4396 6.56141 17.9189 4.89518 16.6964 3.82363L15.7077 4.95164ZM11.097 7.77601C10.8392 6.74284 11.1803 5.65236 11.9798 4.95164L10.991 3.82363C9.76852 4.89518 9.24787 6.56141 9.64164 8.13923L11.097 7.77601ZM7.19578 22.2087C6.52727 20.4679 6.40643 18.1596 6.8319 15.906C7.25758 13.6513 8.21021 11.5552 9.57778 10.1977L8.52105 9.13311C6.87555 10.7665 5.82102 13.1748 5.35794 15.6277C4.89465 18.0816 5.00345 20.684 5.79549 22.7464L7.19578 22.2087ZM9.39114 10.333C10.5809 9.72406 12.1067 9.03803 14.1368 9.09154L14.1764 7.59206C11.7639 7.52848 9.96369 8.35488 8.70768 8.99777L9.39114 10.333ZM14.1643 23.75C12.3947 23.732 10.6577 23.5376 9.32445 23.2076C8.65557 23.042 8.11772 22.8493 7.73557 22.6451C7.32892 22.4279 7.21561 22.2603 7.19578 22.2087L5.79549 22.7464C6.01155 23.3091 6.52086 23.6968 7.02871 23.9681C7.56104 24.2526 8.22953 24.4818 8.96398 24.6636C10.4374 25.0284 12.2949 25.231 14.1489 25.25L14.1643 23.75ZM22.2048 22.7464C22.9969 20.684 23.1057 18.0816 22.6424 15.6277C22.1793 13.1748 21.1248 10.7665 19.4793 9.13311L18.4225 10.1977C19.7901 11.5552 20.7427 13.6513 21.1684 15.906C21.5939 18.1596 21.4731 20.4679 20.8045 22.2087L22.2048 22.7464ZM19.2926 8.99777C18.0366 8.35488 16.2364 7.52848 13.824 7.59206L13.8635 9.09154C15.8936 9.03803 17.4195 9.72406 18.6092 10.333L19.2926 8.99777ZM13.8514 25.25C15.7054 25.231 17.5629 25.0284 19.0363 24.6636C19.7708 24.4818 20.4393 24.2526 20.9716 23.9681C21.4795 23.6968 21.9888 23.3091 22.2048 22.7464L20.8045 22.2087C20.7847 22.2603 20.6714 22.4279 20.2648 22.6451C19.8826 22.8493 19.3448 23.042 18.6759 23.2076C17.3426 23.5376 15.6056 23.732 13.8361 23.75L13.8514 25.25ZM11.9798 4.95165C12.5136 4.48368 13.178 4.25 13.8437 4.25L13.8437 2.75C12.8263 2.74999 11.8074 3.10807 10.991 3.82363L11.9798 4.95165ZM13.8437 4.25C14.5094 4.25 15.1738 4.48369 15.7077 4.95164L16.6964 3.82363C15.88 3.10808 14.8612 2.75001 13.8437 2.75L13.8437 4.25ZM17.5752 10.0247L18.0458 8.13923L16.5904 7.77602L16.1199 9.66151L17.5752 10.0247Z"
                                    fill="#202020"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>

            <div
                className={getClassNames('header-media-modal-menu', {
                    active: state,
                })}
            >
                <div className="header-media-modal-menu-wrapper">
                    <HeaderMediaSelectionsBanner />

                    <p className="header-media-modal-menu__title">Меню</p>

                    <div className="header-media-modal-menu-links">
                        <Link
                            to={getCatalogFiltersUrl({
                                boutique: false,
                                categories: ['Сумки', 'Аксессуары', 'Обувь', 'Украшения'],
                                availability: ['Доступно', 'На примерке', 'Нет в наличии'],
                                price_drop: false,
                                page: 1,
                                sort: 'a',
                            })}
                            className="header-media-modal-menu-links-link"
                            onClick={toggleState}
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
                            className="header-media-modal-menu-links-link"
                            onClick={toggleState}
                        >
                            Популярное
                        </Link>

                        {selections.length > 0 && (
                            <HeaderMediaLinkTab title="Подборки">
                                {selections.map((item) => (
                                    <Link
                                        to={getCatalogFiltersUrl({
                                            selection: item.id,
                                            sort: 'popular',
                                        })}
                                        className="header-media-modal-menu-links__link"
                                        key={item.id}
                                        onClick={toggleState}
                                    >
                                        {item.title || '-'}
                                    </Link>
                                ))}
                            </HeaderMediaLinkTab>
                        )}

                        {mappedCategories.map((category, index) => (
                            <HeaderMediaLinkTab
                                title={category.title}
                                linkTitle={getCatalogFiltersUrl({
                                    categories: [category.title],
                                    availability: ['Доступно', 'На примерке', 'Нет в наличии'],
                                    page: 1,
                                    sort: 'a',
                                })}
                                key={`header-media-modal-menu-links-tab${index}`}
                            >
                                {filtersIsLoaded &&
                                    Object.keys(category.subsubcategories).map((subsubcategory, subindex) => (
                                        <Link
                                            to={getCatalogFiltersUrl({
                                                categories: [category.title],
                                                types: [subsubcategory],
                                                availability: ['Доступно', 'На примерке', 'Нет в наличии'],
                                                page: 1,
                                                sort: 'a',
                                            })}
                                            className="header-media-modal-menu-links__link"
                                            key={`header-media-modal-menu-links__link-${category}-${subsubcategory}-${subindex}`}
                                            onClick={toggleState}
                                        >
                                            {subsubcategory}
                                        </Link>
                                    ))}

                                {['Обувь', 'Сумки', 'Аксессуары'].includes(category.title) ? (
                                    <Link
                                        to={getCatalogFiltersUrl({
                                            categories: [category.title],
                                            availability: ['Доступно', 'На примерке', 'Нет в наличии'],
                                            page: 1,
                                            sort: 'a',
                                        })}
                                        className="header-media-modal-menu-links__link"
                                        onClick={toggleState}
                                    >
                                        {categoryAllTitles[category.title]}
                                    </Link>
                                ) : null}

                                <Link
                                    onClick={toggleState}
                                    to={getCatalogFiltersUrl({
                                        boutique: true,
                                        categories: [category.title],
                                        page: 1,
                                        sort: 'a',
                                    })}
                                    className="header-media-modal-menu-links-boutique"
                                >
                                    <span className="header-media-modal-menu-links-boutique__badge">Из бутика</span>

                                    <p className="header-media-modal-menu-links-boutique__subtitle">
                                        Новые, не были в носке
                                    </p>
                                </Link>
                            </HeaderMediaLinkTab>
                        ))}

                        <Link to="/concierge" className="header-media-modal-menu-links-link" onClick={toggleState}>
                            Консьерж
                        </Link>

                        <Link to="/brands" className="header-media-modal-menu-links-link" onClick={toggleState}>
                            Бренды
                        </Link>

                        <Link to="/auth" className="header-media-modal-menu-links-link" onClick={toggleState}>
                            Подлинность
                        </Link>

                        {/* <a href="/catalog?categories=Сумки&categories=Обувь&categories=Аксессуары&availability=Доступно&availability=На+примерке&selections=1&utm_source=website&utm_medium=header&utm_campaign=selection_Doletskaya" className="header-media-modal-menu-links-link">
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
                            className="header-media-modal-menu-links-link"
                            onClick={toggleState}
                        >
                            <b>THE CULTT SALE</b>
                        </Link>

                        <HeaderMediaLinkTab title="Личный кабинет">
                            <Link
                                to="/cabinet/setting"
                                className="header-media-modal-menu-links__link"
                                onClick={toggleState}
                            >
                                Профиль
                            </Link>
                            <Link
                                to={isLoggedIn ? '/cabinet/sell' : 'sell'}
                                className="header-media-modal-menu-links__link"
                                onClick={toggleState}
                            >
                                Мои продажи
                            </Link>
                            <Link
                                to="/cabinet/history"
                                className="header-media-modal-menu-links__link"
                                onClick={toggleState}
                            >
                                История заказов
                            </Link>
                            <Link
                                to="/cabinet/favorites"
                                className="header-media-modal-menu-links__link"
                                onClick={toggleState}
                            >
                                Избранное
                            </Link>
                            <Link
                                to="/cabinet/waiting"
                                className="header-media-modal-menu-links__link"
                                onClick={toggleState}
                            >
                                Лист ожидания
                            </Link>
                        </HeaderMediaLinkTab>

                        <HeaderMediaLinkTab title="Сервисы для продажи">
                            <Link to="/sell" className="header-media-modal-menu-links__link" onClick={toggleState}>
                                Продажа
                            </Link>
                            <Link to="/exchange" className="header-media-modal-menu-links__link" onClick={toggleState}>
                                Обмен
                            </Link>
                            <Link
                                to="/vipservice"
                                className="header-media-modal-menu-links__link"
                                onClick={toggleState}
                            >
                                VIP-сервис
                            </Link>
                        </HeaderMediaLinkTab>
                    </div>

                    <div className="header-media-modal-menu-btn">
                        <Link
                            to={isLoggedIn ? '/cabinet/sell' : 'sell'}
                            className="btn header-media-modal-menu-btn__btn"
                            onClick={() => {
                                window.dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.
                                window.dataLayer.push({
                                    event: 'sell_click',
                                    ecommerce: {
                                        timestamp: Math.floor(Date.now() / 1000),
                                    },
                                });

                                toggleState();
                            }}
                        >
                            Продать
                        </Link>
                    </div>
                </div>

                <Footer />
            </div>
        </header>
    );
};

export default HeaderMedia;

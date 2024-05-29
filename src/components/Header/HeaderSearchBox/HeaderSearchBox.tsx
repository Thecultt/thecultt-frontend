import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { addCartItem, setCartIsVisibleMessage } from 'src/redux/actions/cart';
import { sendSaveFavorite, sendRemoveFavorite } from 'src/redux/actions/favorites';
import { setHeaderSearchValue } from 'src/redux/actions/header';
import { Product } from 'src/models/IProduct';
import { CartItem } from 'src/models/ICartItem';
import { ProductBlock } from 'src/components';
import { checkDeclension } from 'src/functions/checkDeclension';

interface HeaderSearchBoxProps {
    state: boolean;
    onClose: () => void;
}

const HeaderSearchBox: React.FC<HeaderSearchBoxProps> = ({ state, onClose }) => {
    const dispatch = useDispatch();

    const { pathname } = useLocation();

    const cartItems = useTypedSelector(({ cart }) => cart.items);
    const favoritesItems = useTypedSelector(({ favorites }) => favorites.items);

    const newItems = useTypedSelector(({ products }) => products.items);
    const { search } = useTypedSelector(({ header }) => header);

    const PopupRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        document.addEventListener('mousedown', togglePopup);
        document.addEventListener('touchstart', togglePopup);

        return () => {
            document.removeEventListener('mousedown', togglePopup);
            document.removeEventListener('touchstart', togglePopup);
        };
    }, [PopupRef]);

    const addCart = (item: CartItem) => {
        dispatch(setCartIsVisibleMessage(true));

        dispatch(addCartItem(item));

        setTimeout(() => {
            dispatch(setCartIsVisibleMessage(false));
        }, 5000);
    };

    const addFavorite = (item: Product) => {
        dispatch(sendSaveFavorite(item) as any);
    };

    const removeFavorite = (item: Product) => {
        dispatch(sendRemoveFavorite(item) as any);
    };

    const togglePopup = (e: any) => {
        if (PopupRef.current && !PopupRef.current.contains(e.target)) {
            onClose();
        }
    };

    const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setHeaderSearchValue(e.target.value) as any);
    };

    React.useEffect(() => {
        if (search.value !== '') dispatch(setHeaderSearchValue(''));
    }, [pathname]);

    const onClickProduct = (item: any, index: number) => {
        window.dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.

        window.dataLayer.push({
            event: 'select_item',
            ecommerce: {
                items: [
                    {
                        item_name: item.model_name,
                        item_id: `${item.id}`,
                        price: `${item.price}`,
                        item_brand: item.manufacturer,
                        item_category: item.category,
                        item_category2: item.subcategory,
                        item_category3: '-',
                        item_category4: '-',
                        item_list_name: 'Search Results',
                        item_list_id: item.article,
                        index,
                        quantity: 1,
                    },
                ],
            },
        });
    };

    return (
        <div className={`header-search-box-wrapper ${state ? 'active' : ''}`}>
            <div className={`header-search-box ${state ? 'active' : ''}`} ref={PopupRef}>
                <div className="header-search-box-media-input-wrapper">
                    <div className={`input-light header-search-box-media-input ${search.value !== '' ? 'active' : ''}`}>
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
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

                        {search.value !== '' ? (
                            <span
                                className="header-search-box-media-input__clear"
                                onClick={() => dispatch(setHeaderSearchValue('') as any)}
                            >
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M13.5 4.5L4.5 13.5M4.5 4.5L13.5 13.5"
                                        stroke="#202020"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                        ) : null}
                    </div>

                    <button className="header-search-box-media-input__close" onClick={onClose}>
                        Закрыть
                    </button>
                </div>

                <div className="header-search-box-history">
                    <div className="header-search-box-history-often">
                        <p className="header-search-box-history-often__title">Часто ищут</p>

                        <div className="header-search-box-history-often-items-wrapper">
                            {['Сумка Louis Vuitton', 'Hermes Birkin', 'Сумка Gucci', 'Prada'].map((search, index) => (
                                <p
                                    className="header-search-box-history-often__item"
                                    key={`header-search-box-history-often__item-${index}`}
                                    onClick={() => dispatch(setHeaderSearchValue(search))}
                                >
                                    {search}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* 
				<div className="header-search-box-history-search">
					<p className="header-search-box-history-search__title">
						История поиска
					</p>

					<div className="header-search-box-history-search-items-wrapper">
						<p className="header-search-box-history-search__item">
							Cartier

							<svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M21 21.4805L16.65 17.1305M19 11.4805C19 15.8987 15.4183 19.4805 11 19.4805C6.58172 19.4805 3 15.8987 3 11.4805C3 7.06219 6.58172 3.48047 11 3.48047C15.4183 3.48047 19 7.06219 19 11.4805Z" stroke="#202020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</p>

						<p className="header-search-box-history-search__item">
							Сумка

							<svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M21 21.4805L16.65 17.1305M19 11.4805C19 15.8987 15.4183 19.4805 11 19.4805C6.58172 19.4805 3 15.8987 3 11.4805C3 7.06219 6.58172 3.48047 11 3.48047C15.4183 3.48047 19 7.06219 19 11.4805Z" stroke="#202020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</p>

						<p className="header-search-box-history-search__item">
							Часы Cartier

							<svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M21 21.4805L16.65 17.1305M19 11.4805C19 15.8987 15.4183 19.4805 11 19.4805C6.58172 19.4805 3 15.8987 3 11.4805C3 7.06219 6.58172 3.48047 11 3.48047C15.4183 3.48047 19 7.06219 19 11.4805Z" stroke="#202020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</p>
					</div>
				</div> */}
                </div>

                <div className={`header-search-box-products ${search.isFetch ? 'fetch' : ''}`}>
                    <h3 className="header-search-box-products__title">
                        {search.value !== ''
                            ? `${checkDeclension(search.totalCount, ['Найден', 'Найдено', 'Найдено']).text}: ${checkDeclension(search.totalCount, ['товар', 'товара', 'товаров']).title}`
                            : 'Новинки'}

                        {search.value !== '' && !search.items.length ? (
                            <a href={`/catalog`} onClick={onClose}>
                                Перейти в каталог
                            </a>
                        ) : (
                            <a href={`/catalog?search=${search.value}`} onClick={onClose}>
                                Смотреть все
                            </a>
                        )}
                    </h3>

                    {search.value !== '' ? (
                        <p className="header-search-box-products-media__subtitle">Результаты поиска</p>
                    ) : null}

                    <div className="header-search-box-products-blocks-wrapper">
                        {search.value !== '' ? (
                            search.items.length ? (
                                search.items.map((item, index) => (
                                    <div
                                        className="header-search-box-products-block"
                                        key={`header-search-box-products-block-${index}`}
                                    >
                                        <ProductBlock
                                            addCart={() =>
                                                addCart({
                                                    id: item.id,
                                                    checked: true,
                                                    article: item.article,
                                                    manufacturer: item.manufacturer,
                                                    category: item.category,
                                                    subcategory: item.subcategory,
                                                    name: item.name,
                                                    image: item.images[0],
                                                    price: item.price,
                                                    availability: item.availability,
                                                    is_trial: item.is_trial,
                                                })
                                            }
                                            onClickProduct={() => onClickProduct(item, index)}
                                            isCart={cartItems[item.article] ? true : false}
                                            addFavorite={() => addFavorite(item)}
                                            removeFavorite={() => removeFavorite(item)}
                                            isFavorite={favoritesItems[item.id] ? true : false}
                                            {...item}
                                        />
                                    </div>
                                ))
                            ) : (
                                <p className="header-search-box-products-blocks__null">
                                    К сожалению, мы не смогли ничего найти
                                </p>
                            )
                        ) : (
                            newItems
                                .map((item, index) => (
                                    <div
                                        className="header-search-box-products-block"
                                        key={`header-search-box-products-block-${index}`}
                                    >
                                        <ProductBlock
                                            addCart={() =>
                                                addCart({
                                                    id: item.id,
                                                    checked: true,
                                                    article: item.article,
                                                    manufacturer: item.manufacturer,
                                                    category: item.category,
                                                    subcategory: item.subcategory,
                                                    name: item.name,
                                                    image: item.images[0],
                                                    price: item.price,
                                                    availability: item.availability,
                                                    is_trial: item.is_trial,
                                                })
                                            }
                                            onClickProduct={() => onClickProduct(item, index)}
                                            isCart={cartItems[item.article] ? true : false}
                                            addFavorite={() => addFavorite(item)}
                                            removeFavorite={() => removeFavorite(item)}
                                            isFavorite={favoritesItems[item.id] ? true : false}
                                            {...item}
                                        />
                                    </div>
                                ))
                                .splice(0, 4)
                        )}
                    </div>

                    {/* <Link to="/catalog" className='btn-regular header-search-box-products__more' onClick={onClose}>Больше</Link> */}
                </div>
            </div>
        </div>
    );
};

export default HeaderSearchBox;

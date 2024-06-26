import React from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { CartItem } from 'src/models/ICartItem';
import { fetchFavorites } from 'src/redux/actions/favorites';
import { addCartItem, setCartIsVisibleMessage } from 'src/redux/actions/cart';
import { sendSaveFavorite, sendRemoveFavorite } from 'src/redux/actions/favorites';
import { CabinetMenu, ProductBlock, CabinetFavoritesShare, CabinetFavoritesNull, PageLoader } from 'src/components';
import { Product } from 'src/models/IProduct';

const CabinetFavorites: React.FC = () => {
    const dispatch = useDispatch();

    const { isLoaded, items } = useTypedSelector(({ favorites }) => favorites);
    const cartItems = useTypedSelector(({ cart }) => cart.items);
    const favoritesItems = useTypedSelector(({ favorites }) => favorites.items);

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

    React.useEffect(() => {
        dispatch(fetchFavorites() as any);
    }, []);

    const onClickProduct = (item: any, index: number) => {
        window.dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.

        window.dataLayer.push({
            event: 'select_item',
            ecommerce: {
                timestamp: Math.floor(Date.now() / 1000),
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
        <section className="cabinet">
            <div className="container">
                <div className="cabinet-wrapper">
                    <CabinetMenu />

                    {isLoaded ? (
                        <div className="cabinet-content cabinet-favorites">
                            <CabinetFavoritesShare />

                            {Object.keys(items).length ? (
                                <div className="cabinet-favorites-blocks-wrapper">
                                    {Object.keys(items).map((key, index) => (
                                        <ProductBlock
                                            addClass="cabinet-favorites-block"
                                            key={`cabinet-favorites-block-${items[key].article}-${index}`}
                                            addCart={() =>
                                                addCart({
                                                    id: items[key].id,
                                                    checked: true,
                                                    article: items[key].article,
                                                    manufacturer: items[key].manufacturer,
                                                    category: items[key].category,
                                                    subcategory: items[key].subcategory,
                                                    name: items[key].name,
                                                    image: items[key].images[0],
                                                    price: items[key].price,
                                                    availability: items[key].availability,
                                                    is_trial: items[key].is_trial,
                                                })
                                            }
                                            onClickProduct={() => onClickProduct(items[key], index)}
                                            isCart={cartItems[items[key].article] ? true : false}
                                            addFavorite={() => addFavorite(items[key])}
                                            removeFavorite={() => removeFavorite(items[key])}
                                            isFavorite={favoritesItems[items[key].id] ? true : false}
                                            {...items[key]}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <CabinetFavoritesNull />
                            )}
                        </div>
                    ) : (
                        <PageLoader />
                    )}
                </div>
            </div>
        </section>
    );
};

export default CabinetFavorites;

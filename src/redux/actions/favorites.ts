import { Dispatch } from 'react';

import $api from 'src/http';
import { Product } from 'src/models/IProduct';
import { localStorageService } from 'src/services/storage';
import { LS_KEYS } from 'src/constants/keys';
import { sendMindbox } from 'src/functions/mindbox';

import { FavoritesActionTypes, FavoritesActions } from '../types/IFavorites';

export const fetchFavorites = () => async (dispatch: Dispatch<FavoritesActions>) => {
    const {
        data: { items },
    } = await $api.get<{ items: Product[] }>(`/favorite-products/`);

    sendMindbox('Website.SetWishList', {
        productList: items.map((product) => ({
            product: {
                ids: {
                    website: `${product.id}`,
                },
            },
            count: 1,
            pricePerItem: product.price,
        })),
    });

    dispatch({
        type: FavoritesActionTypes.SET_FAVORITES_ITEMS,
        payload: items,
    });
};

export const sendSaveFavorite = (item: Product) => async (dispatch: Dispatch<FavoritesActions>) => {
    if (localStorageService.getItem<string>(LS_KEYS.accessToken)) {
        await $api.post(`/add-favorite-product/${item.id}/`);

        window.dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.
        window.dataLayer.push({
            event: 'add_to_wishlist',
            ecommerce: {
                timestamp: Math.floor(Date.now() / 1000),
                items: [
                    {
                        item_name: item.name,
                        item_id: `${item.id}`,
                        price: `${item.price}`,
                        item_brand: item.manufacturer,
                        item_category: item.category,
                        item_category2: item.subcategory,
                        item_category3: '-',
                        item_category4: '-',
                        item_list_name: 'Search Results',
                        item_list_id: item.article,
                        index: 1,
                        quantity: 1,
                    },
                ],
                currency: 'RUB',
                value: `${item.price}`,
            },
        });

        dispatch(fetchFavorites() as any);
    } else {
        window.location.hash = 'reglog';
    }
};

export const sendRemoveFavorite = (item: Product) => async (dispatch: Dispatch<FavoritesActions>) => {
    await $api.delete(`/remove-favorite-product/${item.id}/`);

    try {
        sendMindbox('Website.RemoveFromWishList', {
            removeProductFromList: {
                product: {
                    ids: {
                        website: `${item.id}`,
                    },
                },
                pricePerItem: item.price,
            },
        });
    } catch (e) {
        console.log(e);
    }

    dispatch(fetchFavorites() as any);
};

import axios from 'axios';
import { Dispatch } from 'redux';

import $api from 'src/http';

import { ProductActionTypes, ProductTypes, ProductsStateFilters } from '../types/IProducts';

import { Product, ProductPage } from 'src/models/IProduct';

export const fetchFirstProductsCatalog = () => async (dispatch: Dispatch<ProductTypes>) => {
    const {
        data: { total_pages, total_items, items },
    } = await $api.get<{
        total_pages: number;
        current_page: number;
        total_items: number;
        items: Product[];
    }>(`/catalog?availability=1&sort_by=a`);

    // Measure product views / impressions
    window.dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.
    window.dataLayer.push({
        event: 'view_item_list',
        ecommerce: {
            timestamp: Math.floor(Date.now() / 1000),
            items: items.map((item, index) => ({
                item_name: item.name,
                item_id: `${item.article}`,
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
            })),
        },
    });

    dispatch({
        type: ProductActionTypes.SET_PRODUCTS_PAGE_COUNT,
        payload: total_pages,
    });

    dispatch({
        type: ProductActionTypes.SET_PRODUCTS_ITEMS_COUNT,
        payload: total_items,
    });

    dispatch({
        type: ProductActionTypes.SET_PRODUCTS_ITEMS,
        payload: items,
    });
};

export const fetchProductsCatalog =
    (
        filters: {
            search: string;

            price: {
                min: number;
                max: number;
            };

            conditions: { [key: string]: string };
            categories: { [key: string]: string };
            types: { [key: string]: string };
            brands: { [key: string]: string };
            models: { [key: string]: string };
            colors: { [key: string]: string };
            sex: { [key: string]: string };
            availability: { [key: string]: string };
            size: { [key: string]: string };
            selections: { [key: string]: string };

            boutique: boolean;
            price_drop: boolean;

            glass_frame: { [key: string]: string };

            sort: string;
        },
        page: number,
        typeFetch: 'btn-more' | 'btn-page',
    ) =>
    async (dispatch: Dispatch<ProductTypes>) => {
        dispatch({
            type:
                typeFetch === 'btn-more'
                    ? ProductActionTypes.SET_PRODUCTS_IS_FETCH_MORE
                    : ProductActionTypes.SET_PRODUCTS_IS_FETCH_PAGE,
            payload: true,
        });

        const params = new URLSearchParams();

        const conditionsArrray = Object.keys(filters.conditions).map((key) => key);
        const categoriesArrray = Object.keys(filters.categories).map((key) => key);
        const typesArrray = Object.keys(filters.types).map((key) => key);
        const brandsArrray = Object.keys(filters.brands).map((key) => key);
        const modelsArrray = Object.keys(filters.models).map((key) => key);
        const colorsArrray = Object.keys(filters.colors).map((key) => key);
        const sexArrray = Object.keys(filters.sex).map((key) => key);
        const availabilityArrray = Object.keys(filters.availability).map((key) => key);
        const sizeArrray = Object.keys(filters.size).map((key) => key);
        const selectionsArrray = Object.keys(filters.selections).map((key) => key);
        const glassFrameArrray = Object.keys(filters.glass_frame).map((key) => key);

        params.append('search', filters.search);

        if (filters.price.max !== 0) {
            params.append('price_from', String(filters.price.min));
            params.append('price_to', String(filters.price.max));
        }

        if (filters.price.min !== 0 && filters.price.max === 0) {
            params.append('price_from', String(filters.price.min));
        }

        conditionsArrray.map((condition) => params.append('conditions', condition));
        categoriesArrray.map((categories) => params.append('category', categories));
        typesArrray.map((type) => params.append('subcategories', type));
        brandsArrray.map((brand) => params.append('manufacturer', brand));
        modelsArrray.map((model) => params.append('model_names', model));
        colorsArrray.map((color) => params.append('color', color));
        sexArrray.map((sex) => params.append('genders', sex));

        glassFrameArrray.map((glass_frame) => params.append('glass_frame', glass_frame));

        if (availabilityArrray.length) {
            // availabilityArrray.map((availability) => availability == "Доступно" ? params.append("availability", "1") : params.append("availability", "0"))
            availabilityArrray.map((availability) => {
                if (availability == 'Доступно') {
                    params.append('availability', '1');
                } else if (availability == 'На примерке') {
                    params.append('availability', '-1');
                } else {
                    params.append('availability', '0');
                }
            });
        }
        // else {
        // 	params.append("availability", "1")
        // }

        sizeArrray.map((size) => params.append('size', size));
        selectionsArrray.map((selection) => params.append('selections', selection));

        if (filters.boutique) params.append('from_boutique', String(filters.boutique));
        if (filters.price_drop) params.append('price_drop', String(filters.price_drop));

        params.append('sort_by', filters.sort);

        params.append('page', String(page));

        const {
            data: { total_pages, total_items, items },
        } = await $api.get<{
            total_pages: number;
            current_page: number;
            total_items: number;
            items: Product[];
        }>(`/catalog`, { params: params });

        // Measure product views / impressions
        window.dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.
        window.dataLayer.push({
            event: 'view_item_list',
            ecommerce: {
                timestamp: Math.floor(Date.now() / 1000),
                items: items.map((item, index) => ({
                    item_name: item.name,
                    item_id: `${item.article}`,
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
                })),
            },
        });

        dispatch({
            type: ProductActionTypes.SET_PRODUCTS_IS_LOADED,
            payload: true,
        });

        dispatch({
            type: ProductActionTypes.SET_PRODUCTS_PAGE_COUNT,
            payload: total_pages,
        });

        dispatch({
            type: ProductActionTypes.SET_PRODUCTS_ITEMS_COUNT,
            payload: total_items,
        });

        dispatch({
            type:
                typeFetch === 'btn-more'
                    ? ProductActionTypes.SET_PRODUCTS_ITEMS_MORE
                    : ProductActionTypes.SET_PRODUCTS_ITEMS_PAGE,
            payload: items,
        });

        dispatch({
            type:
                typeFetch === 'btn-more'
                    ? ProductActionTypes.SET_PRODUCTS_IS_FETCH_MORE
                    : ProductActionTypes.SET_PRODUCTS_IS_FETCH_PAGE,
            payload: false,
        });
    };

export const fetchProductByArticle = (article: string) => async (dispatch: Dispatch<ProductTypes>) => {
    dispatch({
        type: ProductActionTypes.SET_PRODUCTS_ITEM_BY_ARTICLE_IS_LOADED,
        payload: false,
    });

    await $api
        .get<ProductPage>(`/product/${article}`)
        .then(async ({ data }) => {
            const similar = await $api
                .get<{ items: Product[] }>(`/product/${article}/similar`)
                .then(({ data }) => data.items);

            window.dataLayer.push({ ecommerce: null });
            window.dataLayer.push({
                event: 'view_item',
                ecommerce: {
                    timestamp: Math.floor(Date.now() / 1000),
                    items: [
                        {
                            item_name: data.name,
                            item_id: `${data.article}`,
                            price: `${data.price}`,
                            item_brand: data.manufacturer,
                            item_category: data.category,
                            item_category2: data.subcategory,
                            item_category3: '-',
                            item_category4: '-',
                            item_list_name: 'Search Results',
                            item_list_id: data.article,
                            index: 1,
                            quantity: 1,
                        },
                    ],
                },
            });

            try {
                if (localStorage.getItem('mindboxDeviceUUID')) {
                    axios.post(
                        `https://api.mindbox.ru/v3/operations/async?endpointId=thecultt.Website&operation=Website.ViewProduct&deviceUUID=${localStorage.getItem('mindboxDeviceUUID')}`,
                        {
                            viewProduct: {
                                product: {
                                    ids: {
                                        website: `${data.id}`,
                                    },
                                },
                                price: `${data.price}`,
                                customerAction: {
                                    customFields: {
                                        brand: `${data.manufacturer}`,
                                        coctoyanie: `${data.condition}`,
                                        defecti: `${data.nuances}`,
                                        kategoria: `${data.category}`,
                                        model: `${data.name}`,
                                    },
                                },
                            },
                        },
                        {
                            headers: {
                                'Content-Type': 'application/json; charset=utf-8',
                                Accept: 'application/json',
                                Authorization: 'Mindbox secretKey="Lyv5BiL99IxxpHRgOFX0N875s6buFjii"',
                            },
                        },
                    );
                }
            } catch (e) {
                console.log(e);
            }

            dispatch({
                type: ProductActionTypes.SET_PRODUCTS_ITEM_BY_ARTICLE,
                payload: { data, similar },
            });
        })
        .catch(() => {
            dispatch({
                type: ProductActionTypes.SET_PRODUCTS_ITEM_BY_ARTICLE_IS_LOADED,
                payload: true,
            });
        });
};

export const setProductsTypeFetch = (type: 'btn-more' | 'btn-page') => ({
    type: ProductActionTypes.SET_PRODUCTS_TYPE_FETCH,
    payload: type,
});

export const setCurrentPageProduct = (number: number) => ({
    type: ProductActionTypes.SET_PRODUCTS_CURRENT_PAGE,
    payload: number,
});

export const setFiltersCatalog = (filters: ProductsStateFilters) => ({
    type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG,
    payload: filters,
});

export const setFiltersPriceProduct = (price: { min: number; max: number }) => ({
    type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_PRICE,
    payload: price,
});

export const setFiltersConditionsProduct = (condition: string) => ({
    type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_CONDITIONS,
    payload: condition,
});

export const setFiltersCategoriesProduct = (category: string) => ({
    type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_CATEGORIES,
    payload: category,
});

export const setFiltersTypesProduct = (type: string) => ({
    type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_TYPES,
    payload: type,
});

export const setFiltersBrandsProduct = (brand: string) => ({
    type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_BRANDS,
    payload: brand,
});

export const setFiltersModelsProduct = (model: string) => ({
    type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_MODELS,
    payload: model,
});

export const setFiltersColorsProduct = (color: string) => ({
    type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_COLORS,
    payload: color,
});

export const setFiltersSexProduct = (sex: string) => ({
    type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_SEX,
    payload: sex,
});

export const setFiltersAvailabilityProduct = (availability: string) => ({
    type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_AVAILABILITY,
    payload: availability,
});

export const setFiltersSizeProduct = (size: string) => ({
    type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_SIZE,
    payload: size,
});

export const setFiltersSelectionsProduct = (selection: string) => ({
    type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_SELECTIONS,
    payload: selection,
});

export const setFiltersBoutiqueProduct = (boutique: boolean) => ({
    type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_BOUTIQUE,
    payload: boutique,
});

export const setFiltersGlassFrameProduct = (glass_frame: string) => ({
    type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_GLASS_FRAME,
    payload: glass_frame,
});

export const setFiltersPriceDropProduct = (price_drop: boolean) => ({
    type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_PRICE_DROP,
    payload: price_drop,
});

export const setFiltersSortProduct = (sort: string) => ({
    type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_SORT,
    payload: sort,
});

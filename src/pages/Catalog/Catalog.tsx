import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from 'usehooks-ts';

import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { fetchProductsCatalog, setLastSearchString } from 'src/redux/actions/products';
import {
    CatalogBanner,
    CatalogBannerMedia,
    PageLoader,
    CatalogFiltersTop,
    CatalogFilters,
    CatalogProducts,
} from 'src/components';
import { MEDIA_SIZES } from 'src/constants/styles';
import { useCatalogScroll } from 'src/hooks/catalog/useCatalogScroll';

const Catalog: React.FC = () => {
    const dispatch = useDispatch();
    const { search } = useLocation();
    const isMobile = useMediaQuery(`(max-width: ${MEDIA_SIZES.tablet})`);

    const { filters, currentPage, typeFetch, lastSearchString } = useTypedSelector(({ products }) => products);
    const { isLoaded: isLoadedFilters } = useTypedSelector(({ products_filters }) => products_filters);

    const [isFirstRender, setIsFirstRender] = React.useState(true);
    const [isOpenFiltersMedia, setIsOpenFiltersMedia] = React.useState(false);

    React.useEffect(() => {
        if (filters.isParse) {
            if (isFirstRender && lastSearchString === search) {
                setIsFirstRender(false);

                return;
            }

            dispatch(fetchProductsCatalog(filters, currentPage, typeFetch) as any);
        }

        setIsFirstRender(false);
    }, [
        filters.isParse,
        filters.search,
        filters.price.min,
        filters.price.max,
        Object.keys(filters.categories).length,
        filters.categories[Object.keys(filters.categories)[0]],
        Object.keys(filters.conditions).length,
        Object.keys(filters.types).length,
        filters.types[Object.keys(filters.types)[0]],
        Object.keys(filters.brands).length,
        Object.keys(filters.models).length,
        filters.models[Object.keys(filters.models)[0]],
        Object.keys(filters.colors).length,
        Object.keys(filters.sex).length,
        // Object.keys(filters.availability)[0],
        Object.keys(filters.availability).length,
        Object.keys(filters.size).length,
        Object.keys(filters.selections).length,
        Object.keys(filters.glass_frame).length,
        filters.boutique,
        filters.price_drop,
        filters.sort,
        currentPage,
    ]);

    React.useEffect(
        () => () => {
            dispatch(setLastSearchString(search));
        },
        [search],
    );

    useCatalogScroll();

    return (
        <>
            <section className="catalog">
                <div className="container">
                    <div className="catalog-wrapper">
                        {!isMobile ? <CatalogBanner /> : <CatalogBannerMedia />}

                        {isLoadedFilters ? (
                            <>
                                <CatalogFiltersTop
                                    setIsOpenFiltersMedia={setIsOpenFiltersMedia}
                                    isOpenFiltersMedia={isOpenFiltersMedia}
                                />

                                <div className="catalog-blocks-and-filters-wrapper">
                                    <CatalogFilters
                                        setIsOpenFiltersMedia={setIsOpenFiltersMedia}
                                        isOpenFiltersMedia={isOpenFiltersMedia}
                                    />

                                    <CatalogProducts />
                                </div>
                            </>
                        ) : (
                            <PageLoader />
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Catalog;

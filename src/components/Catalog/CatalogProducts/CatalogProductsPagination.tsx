import React from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { setProductsTypeFetch, setCurrentPageProduct } from 'src/redux/actions/products';
import { Loader } from 'src/components';

const CatalogProductsPagination: React.FC = () => {
    const dispatch = useDispatch();

    const { pageCount, currentPage, isFetchMore } = useTypedSelector(({ products }) => products);

    const totalPagesArray: number[] = Array(pageCount)
        .fill(0)
        .map((_, index) => index + 1);

    const onClickFetchProductsMore = (page: number) => {
        if (page >= 1 && page <= pageCount) {
            dispatch(setProductsTypeFetch('btn-more'));
            dispatch(setCurrentPageProduct(page));
        }
    };

    const onClickFetchProductsPage = (page: number) => {
        if (page >= 1 && page <= pageCount) {
            window?.scrollTo(0, 350);

            dispatch(setProductsTypeFetch('btn-page'));
            dispatch(setCurrentPageProduct(page));
        }
    };

    return (
        <div className="catalog-product-pagination">
            {currentPage !== pageCount ? (
                isFetchMore ? (
                    <button className="btn loader catalog-product-pagination__btn">
                        <Loader />
                    </button>
                ) : (
                    <button
                        className="btn catalog-product-pagination__btn"
                        onClick={() => onClickFetchProductsMore(currentPage + 1)}
                    >
                        Показать ещё
                    </button>
                )
            ) : null}

            <div className="catalog-product-pagination-pages">
                <button
                    className={`catalog-product-pagination-pages__btn ${currentPage === 1 ? 'disabled' : ''}`}
                    onClick={() => onClickFetchProductsPage(1)}
                >
                    Первая
                </button>

                {currentPage > 2 ? (
                    <>
                        <div
                            className={`catalog-product-pagination-pages-item`}
                            onClick={() => onClickFetchProductsPage(currentPage - 2)}
                        >
                            {currentPage - 2}
                        </div>

                        <div
                            className={`catalog-product-pagination-pages-item`}
                            onClick={() => onClickFetchProductsPage(currentPage - 1)}
                        >
                            {currentPage - 1}
                        </div>
                    </>
                ) : (
                    <>
                        {currentPage > 1 ? (
                            <div
                                className={`catalog-product-pagination-pages-item`}
                                onClick={() => onClickFetchProductsPage(1)}
                            >
                                {1}
                            </div>
                        ) : null}

                        {currentPage > 2 ? (
                            <div
                                className={`catalog-product-pagination-pages-item`}
                                onClick={() => onClickFetchProductsPage(2)}
                            >
                                {2}
                            </div>
                        ) : null}
                    </>
                )}

                {totalPagesArray
                    .slice(currentPage - 1, currentPage > 2 ? currentPage + 2 : currentPage + 4)
                    .map((page, index) => (
                        <div
                            className={`catalog-product-pagination-pages-item ${page === currentPage ? 'active' : ''}`}
                            key={`catalog-product-pagination-pages-item-${index}`}
                            onClick={() => onClickFetchProductsPage(page)}
                        >
                            {page}
                        </div>
                    ))}

                <button
                    className={`catalog-product-pagination-pages__btn ${currentPage === pageCount ? 'disabled' : ''}`}
                    onClick={() => onClickFetchProductsPage(pageCount)}
                >
                    Последняя
                </button>
            </div>
        </div>
    );
};

export default CatalogProductsPagination;

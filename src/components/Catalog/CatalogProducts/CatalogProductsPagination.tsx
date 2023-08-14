import React from "react";
import {useDispatch} from "react-redux";

// @ts-ignore
import Loader from "react-dots-loader";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

import {
    setCurrentPageProduct,
    fetchProductsMore,
    fetchProductsPage,
} from "../../../redux/actions/products";

const CatalogProductsPagination: React.FC = () => {
    const dispatch = useDispatch();

    const {pageCount, currentPage, isFetchMore} = useTypedSelector(
        ({products}) => products
    );

    const totalPagesArray: number[] = Array(pageCount)
        .fill(0)
        .map((_, index) => index + 1);

    const onClickFetchProductsMore = (page: number) => {
        if (page >= 1 && page <= pageCount) {
            dispatch(setCurrentPageProduct(page));
            dispatch(fetchProductsMore(page) as any);
        }
    };

    const onClickFetchProductsPage = (page: number) => {
        if (page >= 1 && page <= pageCount) {
            window?.scrollTo(0, 350);

            dispatch(setCurrentPageProduct(page));
            dispatch(fetchProductsPage(page) as any);
        }
    };

    return (
        <div className="catalog-product-pagination">
            {isFetchMore ? (
                <button className="btn catalog-product-pagination__btn loader">
                    <Loader size={7} color="#FFFFFF" />
                </button>
            ) : (
                <button
                    className="btn catalog-product-pagination__btn"
                    onClick={() => onClickFetchProductsMore(currentPage + 1)}
                >
                    Показать ещё
                </button>
            )}

            <div className="catalog-product-pagination-pages">
                <button
                    className={`catalog-product-pagination-pages__btn ${
                        currentPage === 1 ? "disabled" : ""
                    }`}
                    onClick={() => onClickFetchProductsPage(1)}
                >
                    Первая
                </button>

                {totalPagesArray
                    .slice(
                        currentPage + 3 < pageCount
                            ? currentPage - 1
                            : pageCount - 4,
                        currentPage + 3
                    )
                    .map((page, index) => (
                        <div
                            className={`catalog-product-pagination-pages-item ${
                                page === currentPage ? "active" : ""
                            }`}
                            key={`catalog-product-pagination-pages-item-${index}`}
                            onClick={() => onClickFetchProductsPage(page)}
                        >
                            {page}
                        </div>
                    ))}

                <button
                    className={`catalog-product-pagination-pages__btn ${
                        currentPage === pageCount ? "disabled" : ""
                    }`}
                    onClick={() => onClickFetchProductsPage(pageCount)}
                >
                    Последняя
                </button>
            </div>
        </div>
    );
};

export default CatalogProductsPagination;

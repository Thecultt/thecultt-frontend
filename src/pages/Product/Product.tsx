import React from 'react';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { fetchProductByArticle } from 'src/redux/actions/products';
import {
    ProductInfoBreadCrumbs,
    ProductCover,
    ProductInfo,
    CatalogProductsSection,
    ProductExchange,
    PageLoader,
} from 'src/components';
import { NotFound } from 'src/pages';

const Product: React.FC = () => {
    const dispatch = useDispatch();
    const { article } = useParams();

    const { itemByArticle, itemByArticleIsLoaded } = useTypedSelector(({ products }) => products);

    React.useEffect(() => {
        window.scrollTo(0, 0);

        dispatch(fetchProductByArticle(article ? article : '') as any);
    }, [article]);

    return (
        <>
            <Helmet>
                <title>
                    {`Купить ${itemByArticle.name} по цене ${itemByArticle.price}₽ на ресейл-платформе THE CULTT, доставка по РФ.`}
                </title>

                <meta
                    name="description"
                    content={`${itemByArticle.name} ${itemByArticle.color} цвет по цене ${itemByArticle.price}₽, состояние – ${itemByArticle.condition}, 100% оригинал с доставкой по всей России.`}
                />

                <meta
                    property="og:title"
                    content={`Купить ${itemByArticle.name} по цене ${itemByArticle.price}₽ на ресейл-платформе THE CULTT, доставка по РФ.`}
                />

                <meta
                    property="og:description"
                    content={`${itemByArticle.name} ${itemByArticle.color} цвет по цене ${itemByArticle.price}₽, состояние – ${itemByArticle.condition}, 100% оригинал с доставкой по всей России.`}
                />

                <meta property="og:type" content={`website`} />

                <meta property="og:image" content={`${itemByArticle.images[0]}`} />
            </Helmet>

            {itemByArticleIsLoaded ? (
                itemByArticle.article !== '' ? (
                    <>
                        <section className="product">
                            <div className="container">
                                <div className="product-wrapper">
                                    <ProductInfoBreadCrumbs
                                        category={itemByArticle.category}
                                        brand={itemByArticle.manufacturer}
                                        model={itemByArticle.name}
                                    />

                                    <div className="product-content">
                                        <ProductCover {...itemByArticle} />

                                        <ProductInfo {...itemByArticle} />
                                    </div>
                                </div>
                            </div>
                        </section>

                        <CatalogProductsSection title="Может быть интересно" />

                        <ProductExchange />
                    </>
                ) : (
                    <NotFound />
                )
            ) : (
                <PageLoader />
            )}
        </>
    );
};

export default Product;

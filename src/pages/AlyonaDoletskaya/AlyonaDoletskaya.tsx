import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Slider from 'react-slick';

import $api from 'src/http';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { addCartItem, setCartIsVisibleMessage } from 'src/redux/actions/cart';
import { sendSaveFavorite, sendRemoveFavorite } from 'src/redux/actions/favorites';
import { ProductBlock } from 'src/components';
import { Product } from 'src/models/IProduct';
import { CartItem } from 'src/models/ICartItem';

import MainBanner from 'src/assets/images/doletskaya/main-banner.jpg';
import MainBannerMedia from 'src/assets/images/doletskaya/main-banner-media.jpg';
import CharityLogo from 'src/assets/images/doletskaya/charity-logo.svg';

import Lot1 from 'src/assets/images/doletskaya/lot1.jpg';
import Lot1Media from 'src/assets/images/doletskaya/lot1-media.jpg';

import Lot2 from 'src/assets/images/doletskaya/lot2.jpg';
import Lot2Media from 'src/assets/images/doletskaya/lot2-media.jpg';
import Lot2MoreImages from 'src/assets/images/doletskaya/lot2-more-images.jpg';

import Deco1Images from 'src/assets/images/doletskaya/deco-images-1.jpg';
import Deco1ImagesMedia from 'src/assets/images/doletskaya/deco-images-1-media.jpg';

import Lot3 from 'src/assets/images/doletskaya/lot3.jpg';
import Lot3Media from 'src/assets/images/doletskaya/lot3-media.jpg';
import Lot3MoreImages from 'src/assets/images/doletskaya/lot3-more-images.jpg';
import Lot3MoreImagesMedia from 'src/assets/images/doletskaya/lot3-more-images-media.jpg';

import Deco2Images from 'src/assets/images/doletskaya/deco-images-2.jpg';
import Deco2ImagesMedia from 'src/assets/images/doletskaya/deco-images-2-media.jpg';

import Lot4 from 'src/assets/images/doletskaya/lot4.jpg';
import Lot4Media from 'src/assets/images/doletskaya/lot4-media.jpg';

import Lot5 from 'src/assets/images/doletskaya/lot5.jpg';
import Lot5Media from 'src/assets/images/doletskaya/lot5-media.jpg';

import Deco3Images from 'src/assets/images/doletskaya/deco-images-3.jpg';

import Lot6 from 'src/assets/images/doletskaya/lot6.jpg';
import Lot6Media from 'src/assets/images/doletskaya/lot6-media.jpg';

import AboutTitle from 'src/assets/images/doletskaya/about-title.svg';

import AboutImage1 from 'src/assets/images/doletskaya/about-image1.jpg';
import AboutImage2 from 'src/assets/images/doletskaya/about-image2.jpg';
import AboutImage3 from 'src/assets/images/doletskaya/about-image3.jpg';
import AboutImage4 from 'src/assets/images/doletskaya/about-image4.jpg';
import AboutImage5 from 'src/assets/images/doletskaya/about-image5.jpg';
import AboutImage6 from 'src/assets/images/doletskaya/about-image6.jpg';

const ProductSection: React.FC = () => {
    const dispatch = useDispatch();

    const [items, setItems] = React.useState<Product[]>([]);

    const cartItems = useTypedSelector(({ cart }) => cart.items);
    const favoritesItems = useTypedSelector(({ favorites }) => favorites.items);

    const SliderRef = React.useRef<any>(null);

    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };

    React.useEffect(() => {
        $api.get<{ items: Product[] }>(
            `/catalog/?category=Сумки&category=Аксессуары&category=Обувь&category=Одежда&availability=1&availability=-1&selections=1`,
        ).then(({ data }) => {
            setItems(data.items);
        });
    }, []);

    const onClickPrev = () => {
        SliderRef.current.slickPrev();
    };

    const onClickNext = () => {
        SliderRef.current.slickNext();
    };

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
        <div className="container">
            <div className="catalog-product-section">
                <Link to="/catalog" className="catalog-product-section__title">
                    Архив Алёны Долецкой
                </Link>

                <div className="catalog-product-section-slider-wrapper">
                    <button className="catalog-product-section-slider-arrow prev" onClick={onClickPrev}>
                        <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.476562" width="40" height="40" rx="20" fill="white" />
                            <path
                                d="M24 12.4766L16 20.4766L24 28.4766"
                                stroke="#202020"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>

                    <Slider {...settings} className="catalog-product-section-slider" ref={SliderRef}>
                        {items.map((item, index) =>
                            item.availability && !item.is_trial && item.images.length && item.price ? (
                                <ProductBlock
                                    addClass="catalog-slider-product-block"
                                    key={`catalog-slider-product-block-${index}`}
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
                            ) : null,
                        )}
                    </Slider>

                    <button className="catalog-product-section-slider-arrow next" onClick={onClickNext}>
                        <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.476562" width="40" height="40" rx="20" fill="white" />
                            <path d="M16 28.4766L24 20.4766L16 12.4766" fill="white" />
                            <path
                                d="M16 28.4766L24 20.4766L16 12.4766"
                                stroke="#202020"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>

                <div className="alyona-doletskaya-slider-btn">
                    <a
                        href="/catalog?categories=Сумки&categories=Обувь&categories=Аксессуары&availability=Доступно&availability=На+примерке&selections=1&utm_source=website&utm_medium=landing&utm_campaign=selection_Doletskaya"
                        className="btn alyona-doletskaya-slider-btn__btn"
                    >
                        Смотреть весь архив
                    </a>
                </div>
            </div>
        </div>
    );
};

const AlyonaDoletskaya: React.FC = () => {
    const SliderRef = React.useRef<any>(null);

    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const onClickPrev = () => {
        SliderRef.current.slickPrev();
    };

    const onClickNext = () => {
        SliderRef.current.slickNext();
    };

    return (
        <>
            <section className="alyona-doletskaya-main">
                <picture>
                    <source srcSet={MainBannerMedia} media="(max-width: 1400px)" />
                    <img src={MainBanner} alt="" className="alyona-doletskaya-main__image" />
                </picture>

                <div className="alyona-doletskaya-main-text">
                    <p className="alyona-doletskaya-main-text__description">
                        Алёна Долецкая, публицист, креативный консультант и&nbsp;журналист, а&nbsp;в&nbsp;прошлом первый
                        главный редактор журнала VOGUE RUSSIA и&nbsp;Andy Warhol&rsquo;s INTERVIEW , выбрала знаковые
                        позиции из&nbsp;своих модных архивов и&nbsp;передала их&nbsp;THE CULTT. Это лоты одежды, обуви
                        и&nbsp;аксессуаров. Многие из&nbsp;них&nbsp;&mdash; легендарные, у&nbsp;каждого богатая
                        биография, которую теперь дополните&nbsp;вы.
                    </p>

                    <p className="alyona-doletskaya-main-text__description medium">
                        &laquo;Я&nbsp;всегда любила, люблю и&nbsp;буду любить винтажные вещи. Качество дизайна
                        и&nbsp;материала у&nbsp;них часто лучше, чем у&nbsp;новых. И&nbsp;что особенно важно:
                        вы&nbsp;всегда будете одна такая, уникальная&raquo;.
                    </p>

                    <a
                        target="_blank"
                        href="/catalog?categories=Сумки&categories=Обувь&categories=Аксессуары&availability=Доступно&availability=На+примерке&selections=1&utm_source=website&utm_medium=landing&utm_campaign=selection_Doletskaya"
                        className="btn alyona-doletskaya-main-text__btn"
                    >
                        Смотреть весь архив
                    </a>
                </div>

                <div className="alyona-doletskaya-main-charity">
                    <h3 className="alyona-doletskaya-main-charity__title">
                        Часть средств от продажи будет направлена
                        <br /> в благотворительный фонд «Вера»
                    </h3>

                    <div className="alyona-doletskaya-main-charity-logo">
                        <img src={CharityLogo} alt="" className="alyona-doletskaya-main-charity-logo__image" />

                        <p className="alyona-doletskaya-main-charity-logo__text">
                            Благотворительный фонд помощи хосписам &laquo;Вера&raquo; c&nbsp;2006 года поддерживает
                            неизлечимо больных людей и&nbsp;их&nbsp;близких, создавая примеры хосписов, в&nbsp;которых
                            не&nbsp;страшно. Фонд &laquo;Вера&raquo; работает для того, чтобы у&nbsp;каждого была
                            жизнь&nbsp;&mdash; на&nbsp;всю оставшуюся жизнь.
                        </p>
                    </div>
                </div>
            </section>

            <a
                target="_blank"
                href="https://thecultt.com/product/SP225894513?utm_source=website&utm_medium=landing&utm_campaign=selection_Doletskaya"
                className="alyona-doletskaya-lot1"
                rel="noreferrer"
            >
                <picture>
                    <source srcSet={Lot1Media} media="(max-width: 1400px)" />
                    <img src={Lot1} alt="" className="alyona-doletskaya-lot1__image" />
                </picture>

                <div className="alyona-doletskaya-lot alyona-doletskaya-lot1-text">
                    <div className="alyona-doletskaya-lot-title">
                        <p className="alyona-doletskaya-lot-title__subtitle">НАЗВАНИЕ ЛОТА:</p>
                        <p className="alyona-doletskaya-lot-title__title">ПЛАТЬЕ LOUIS VUITTON</p>
                    </div>

                    <div className="alyona-doletskaya-lot-text">
                        <p className="alyona-doletskaya-lot-text__title">ИСТОРИЯ:</p>

                        <p className="alyona-doletskaya-lot-text__description">
                            Это платье Louis Vuitton, созданное Николя Жескьером. Оно феноменального качества,
                            и&nbsp;в&nbsp;нем мне нравится сочетание трех фактур: очень крупные черные матовые стразы,
                            плотный креп, который комплиментарен фигуре абсолютно любого человека, и&nbsp;удивительно
                            нежный, в&nbsp;сборку, шифоновый топ с&nbsp;бретелями цвета топленого молока. Платье само
                            по&nbsp;себе&nbsp;&mdash; произведение очень талантливого дизайна, но&nbsp;у&nbsp;него есть
                            и&nbsp;добавленная стоимость: оно видело вручение приза журнала Vogue за&nbsp;лучшее
                            стилевое решение фильма на&nbsp;московском кинофестивале и&nbsp;страшно понравилось нашей
                            гостье по&nbsp;имени Мерил Стрип.
                        </p>
                    </div>
                </div>
            </a>

            <a
                className="alyona-doletskaya-lot2"
                target="_blank"
                href="https://thecultt.com/product/SP6425906827?utm_source=website&utm_medium=landing&utm_campaign=selection_Doletskaya"
                rel="noreferrer"
            >
                <picture>
                    <source srcSet={Lot2Media} media="(max-width: 1400px)" />
                    <img src={Lot2} alt="" className="alyona-doletskaya-lot2__image" />
                </picture>

                <div className="alyona-doletskaya-lot alyona-doletskaya-lot2-text">
                    <div className="alyona-doletskaya-lot-title">
                        <p className="alyona-doletskaya-lot-title__subtitle">НАЗВАНИЕ ЛОТА:</p>
                        <p className="alyona-doletskaya-lot-title__title">ЮБКА CÉLINE</p>
                    </div>

                    <div className="alyona-doletskaya-lot-text">
                        <p className="alyona-doletskaya-lot-text__title">ИСТОРИЯ:</p>

                        <p className="alyona-doletskaya-lot-text__description">
                            Это юбка C&eacute;line с&nbsp;аксаном на&nbsp;букве&nbsp;&egrave;, что говорит о&nbsp;том,
                            что она была выполнена по&nbsp;дизайну моего любимого дизайнера Фиби Фило. Я&nbsp;увидела
                            эту юбку в&nbsp;ее&nbsp;бутике в&nbsp;Париже и&nbsp;влюбилась с&nbsp;первого взгляда,
                            но&nbsp;понятия не&nbsp;имела, пойдет она мне или нет. Это идеальная юбка, которая,
                            казалось&nbsp;бы, очень лаконична, но&nbsp;на&nbsp;самом деле невероятно дорогая
                            с&nbsp;точки зрения того, как выглядит, как построена, как придумана. При том, что
                            вы&nbsp;не&nbsp;увидите на&nbsp;ней ни&nbsp;одного шва, она хитро и&nbsp;умно скроена.
                            Ремешок из&nbsp;настоящего питона цвета бургунди особенно элегантен.
                        </p>
                    </div>
                </div>
            </a>

            <section className="alyona-doletskaya-lot2-more">
                <img src={Lot2MoreImages} alt="" className="alyona-doletskaya-lot2-more__image" />
            </section>

            <section className="alyona-doletskaya-deco1">
                <picture>
                    <source srcSet={Deco1ImagesMedia} media="(max-width: 1400px)" />
                    <img src={Deco1Images} alt="" className="alyona-doletskaya-deco1__image" />
                </picture>
            </section>

            <a
                className="alyona-doletskaya-lot3"
                target="_blank"
                href="https://thecultt.com/product/SP2325899513?utm_source=website&utm_medium=landing&utm_campaign=selection_Doletskaya"
                rel="noreferrer"
            >
                <picture>
                    <source srcSet={Lot3Media} media="(max-width: 1400px)" />
                    <img src={Lot3} alt="" className="alyona-doletskaya-lot3__image" />
                </picture>

                <div className="alyona-doletskaya-lot alyona-doletskaya-lot3-text">
                    <div className="alyona-doletskaya-lot-title">
                        <p className="alyona-doletskaya-lot-title__subtitle">НАЗВАНИЕ ЛОТА:</p>
                        <p className="alyona-doletskaya-lot-title__title">СУМКА CHRISTIAN DIOR</p>
                    </div>

                    <div className="alyona-doletskaya-lot-text">
                        <p className="alyona-doletskaya-lot-text__title">ИСТОРИЯ:</p>

                        <p className="alyona-doletskaya-lot-text__description">
                            Чего только эта сумка Диор не&nbsp;видела внутри себя и&nbsp;кого только не&nbsp;встречала
                            &laquo;лицом&raquo;. Ей&nbsp;повезло, потому что в&nbsp;период редактирования глянца мне
                            приходилось не&nbsp;только свое личное, но&nbsp;и&nbsp;пару номеров журнала
                            (в&nbsp;400-500&nbsp;страниц) туда уложить. Лондон&mdash;Милан&mdash;Париж ликовали
                            от&nbsp;этой блондинки красавицы.
                        </p>
                    </div>
                </div>
            </a>

            <section className="alyona-doletskaya-lot3-more">
                <picture>
                    <source srcSet={Lot3MoreImagesMedia} media="(max-width: 1400px)" />
                    <img src={Lot3MoreImages} alt="" className="alyona-doletskaya-lot3-more__image" />
                </picture>
            </section>

            <ProductSection />

            <section className="alyona-doletskaya-deco2">
                <picture>
                    <source srcSet={Deco2ImagesMedia} media="(max-width: 1400px)" />
                    <img src={Deco2Images} alt="" className="alyona-doletskaya-deco2__image" />
                </picture>
            </section>

            <a
                className="alyona-doletskaya-lot4"
                target="_blank"
                href="https://thecultt.com/product/SP3025899781?utm_source=website&utm_medium=landing&utm_campaign=selection_Doletskaya"
                rel="noreferrer"
            >
                <picture>
                    <source srcSet={Lot4Media} media="(max-width: 1400px)" />
                    <img src={Lot4} alt="" className="alyona-doletskaya-lot4__image" />
                </picture>

                <div className="alyona-doletskaya-lot alyona-doletskaya-lot4-text">
                    <div className="alyona-doletskaya-lot-title">
                        <p className="alyona-doletskaya-lot-title__subtitle">НАЗВАНИЕ ЛОТА:</p>
                        <p className="alyona-doletskaya-lot-title__title">ПАЛЬТО GIAMBATTISTA VALLI</p>
                    </div>

                    <div className="alyona-doletskaya-lot-text">
                        <p className="alyona-doletskaya-lot-text__title">ИСТОРИЯ:</p>

                        <p className="alyona-doletskaya-lot-text__description">
                            Признаюсь честно: оно мне досталось, как говорится, по&nbsp;дружбе и&nbsp;по&nbsp;симпатии.
                            Я&nbsp;пришла на&nbsp;отсмотр коллекции, которые делают для редакторов после всех показов
                            в&nbsp;шоуруме у&nbsp;дизайнера. Я&nbsp;увидела пальто и&nbsp;спросила Джамбаттиста, почему
                            его не&nbsp;было на&nbsp;показе? Он&nbsp;сказал: &laquo;Как&nbsp;же не&nbsp;было, оно было,
                            но&nbsp;в&nbsp;таком стайлинге, что его было довольно трудно определить&raquo;. Я&nbsp;его
                            шутливо примерила, а&nbsp;Джамбаттиста вдруг говорит: &laquo;На&nbsp;тебе оно лучше, чем
                            на&nbsp;показе, просто забирай&raquo;. Так и&nbsp;произошло. Пальто это я&nbsp;люблю
                            за&nbsp;его способность быть элегантным платьем, когда оно надето на&nbsp;голое тело.
                            Но&nbsp;оно не&nbsp;менее интересно, современно&nbsp;и, при хорошем стайлинге, даже
                            хулигански может смотреться в&nbsp;многослойности. Учитесь, смотрите, надевайте, покупайте.
                        </p>
                    </div>
                </div>
            </a>

            <a
                className="alyona-doletskaya-lot5"
                target="_blank"
                href="https://thecultt.com/product/SP5125902493?utm_source=website&utm_medium=landing&utm_campaign=selection_Doletskaya"
                rel="noreferrer"
            >
                <picture>
                    <source srcSet={Lot5Media} media="(max-width: 1400px)" />
                    <img src={Lot5} alt="" className="alyona-doletskaya-lot5__image" />
                </picture>

                <div className="alyona-doletskaya-lot alyona-doletskaya-lot5-text">
                    <div className="alyona-doletskaya-lot-title">
                        <p className="alyona-doletskaya-lot-title__subtitle">НАЗВАНИЕ ЛОТА:</p>
                        <p className="alyona-doletskaya-lot-title__title">ПЛАТЬЕ VERSACE</p>
                    </div>

                    <div className="alyona-doletskaya-lot-text">
                        <p className="alyona-doletskaya-lot-text__title">ИСТОРИЯ:</p>

                        <p className="alyona-doletskaya-lot-text__description">
                            Наверное, одна из&nbsp;самых дорогих моему сердцу вещей. Мы&nbsp;праздновали 10-летие
                            русского Vogue в&nbsp;Милане вместе со&nbsp;всеми коллегами по&nbsp;издательскому цеху.
                            Я&nbsp;понимала, кто будет присутствовать на&nbsp;этом вечере, и&nbsp;выбрать платье было
                            довольно непросто. Невероятно мне повезло, потому что это темно-синее платье, во-первых,
                            очень комплиментарно. Оно делает женщину красивой, женственной и&nbsp;нарядной. В&nbsp;нем
                            мне больше слышится Джанни, чем Донателла. Но&nbsp;в&nbsp;этом платье важнее всего&nbsp;то,
                            что оно настоящий праздник в&nbsp;мире моды. Оно встретилось с&nbsp;лучшими дизайнерами
                            и&nbsp;редакторами своего времени
                        </p>
                    </div>
                </div>
            </a>

            <section className="alyona-doletskaya-deco3">
                <img src={Deco3Images} alt="" className="alyona-doletskaya-deco3__image" />
            </section>

            <a
                className="alyona-doletskaya-lot6"
                target="_blank"
                href="https://thecultt.com/product/SP325894523?utm_source=website&utm_medium=landing&utm_campaign=selection_Doletskaya"
                rel="noreferrer"
            >
                <picture className="alyona-doletskaya-lot6__image">
                    <source srcSet={Lot6Media} media="(max-width: 1400px)" />
                    <img src={Lot6} alt="" />
                </picture>

                <div className="alyona-doletskaya-lot alyona-doletskaya-lot6-text">
                    <div className="alyona-doletskaya-lot-title">
                        <p className="alyona-doletskaya-lot-title__subtitle">НАЗВАНИЕ ЛОТА:</p>
                        <p className="alyona-doletskaya-lot-title__title">ЮБКА PRADA</p>
                    </div>

                    <div className="alyona-doletskaya-lot-text">
                        <p className="alyona-doletskaya-lot-text__title">ИСТОРИЯ:</p>

                        <p className="alyona-doletskaya-lot-text__description">
                            Да, возможно, сейчас не&nbsp;самый яркий бум кружева, но&nbsp;кружево возвращается
                            в&nbsp;моду, как солнце восходит на&nbsp;востоке и&nbsp;заходит на&nbsp;западе. Эта юбка вне
                            времени, как мне кажется. Она была выполнена Миуччей Прада, когда кружева заказывались
                            на&nbsp;Сицилии. Ощутить это можно только пощупав ее&nbsp;руками. Кружева плотные,
                            но&nbsp;удивительно эластичные. Особенно я&nbsp;люблю ее&nbsp;подбой, нижнюю юбочку цвета
                            обнаженного тела. Приятно, что когда я&nbsp;поднималась на&nbsp;какую-то встречу в&nbsp;этой
                            юбке и&nbsp;в&nbsp;простой черной кашемировой водолазке, навстречу шла Анна Винтур, главный
                            редактор американского Vogue. Она оценивающе посмотрела на&nbsp;меня ровно так, как героиня
                            Мерил Стрип осматривает Энн Хэтэуэй&nbsp;&mdash; от&nbsp;шеи до&nbsp;пола. По&nbsp;взгляду
                            оценка была&nbsp;5, как говорили в&nbsp;школе&nbsp;&mdash; &laquo;на&nbsp;отлично&raquo;.
                        </p>
                    </div>
                </div>
            </a>

            <ProductSection />

            <div className="alyona-doletskaya-about">
                <div className="alyona-doletskaya-about-title">
                    <img src={AboutTitle} alt="" className="alyona-doletskaya-about-title__image" />
                </div>

                <div className="alyona-doletskaya-about-images">
                    <img src={AboutImage1} alt="" className="alyona-doletskaya-about-images__image" />
                    <img src={AboutImage2} alt="" className="alyona-doletskaya-about-images__image" />
                    <img src={AboutImage3} alt="" className="alyona-doletskaya-about-images__image" />
                    <img src={AboutImage4} alt="" className="alyona-doletskaya-about-images__image" />
                    <img src={AboutImage5} alt="" className="alyona-doletskaya-about-images__image" />
                    <img src={AboutImage6} alt="" className="alyona-doletskaya-about-images__image" />
                </div>

                <div className="alyona-doletskaya-about-images-slider-wrapper">
                    <div className="alyona-doletskaya-about-images-slider-arrow prev" onClick={onClickPrev}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15 18L9 12L15 6"
                                stroke="#202020"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>

                    <Slider {...settings} className="alyona-doletskaya-about-images-slider" ref={SliderRef}>
                        <img src={AboutImage1} alt="" className="alyona-doletskaya-about-images-slider__image" />
                        <img src={AboutImage2} alt="" className="alyona-doletskaya-about-images-slider__image" />
                        <img src={AboutImage3} alt="" className="alyona-doletskaya-about-images-slider__image" />
                        <img src={AboutImage4} alt="" className="alyona-doletskaya-about-images-slider__image" />
                        <img src={AboutImage5} alt="" className="alyona-doletskaya-about-images-slider__image" />
                        <img src={AboutImage6} alt="" className="alyona-doletskaya-about-images-slider__image" />
                    </Slider>

                    <div className="alyona-doletskaya-about-images-slider-arrow next" onClick={onClickNext}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9 18L15 12L9 6"
                                stroke="#202020"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AlyonaDoletskaya;

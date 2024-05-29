import React from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { compose } from 'redux';

import 'react-dots-loader/index.css';

import 'moment/locale/ru';

import { useTypedSelector } from './hooks/useTypedSelector';

import {
    NotificationsServer,
    MenuMedia,
    Header,
    Reglog,
    Footer,
    OrderStatus,
    WaitingListCreate,
    WaitingListDelete,
} from './components';

import {
    NotFound,
    Home,
    Catalog,
    Product,
    About,
    Auth,
    Contact,
    Faq,
    FaqDelivery,
    FaqReturn,
    FaqPublicOfferte,
    FaqUserAgreement,
    Brands,
    CabinetHistoryOrders,
    CabinetFavorites,
    CabinetWaitingList,
    CabinetSetting,
    Visit,
    Order,
    Sell,
    SellAdmin,
    SellInfo,
    SellInfoBrands,
    Concierge,
    Exchange,
    CabinetSellsList,
    Cart,
    SubscribeEmail,
    PublicFavorites,
    AlyonaDoletskaya,
    BuyerTheCulttMain,
    BuyerTheCulttProduct,
} from './pages/';

import { fetchProductsFilters } from './redux/actions/products_filters';
import { fetchFirstProductsCatalog } from './redux/actions/products';
import { fetchFavorites } from './redux/actions/favorites';
import { fetchUser } from './redux/actions/user';
import { checkAvailabilityCartItems } from './redux/actions/cart';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
        cp: any;
        dataLayer: any;
        YaPay: any;
        mindbox: any;
    }
}

const App = () => {
    const dispatch = useDispatch();

    const isLoadedFilters = useTypedSelector(({ products_filters }) => products_filters.isLoaded);

    const isLoadedProducts = useTypedSelector(({ products }) => products.isLoaded);

    const cartItems = useTypedSelector(({ cart }) => cart.items);

    const isLoadedUser = useTypedSelector(({ user }) => user.isLoaded);
    const { user } = useTypedSelector(({ user }) => user);

    const { pathname, search } = useLocation();

    const isLogin = localStorage.getItem('accessToken');

    React.useEffect(() => {
        const cords: any = ['scrollX', 'scrollY'];

        window.addEventListener('unload', (e) => cords.forEach((cord: any) => (localStorage[cord] = window[cord])));
        window.scroll(...cords.map((cord: any) => localStorage[cord]));

        if (!isLoadedFilters) {
            dispatch(fetchProductsFilters() as any);
        }

        if (!isLoadedProducts && pathname !== '/catalog') {
            dispatch(fetchFirstProductsCatalog() as any);
        }

        if (isLogin) {
            dispatch(fetchFavorites() as any);
            dispatch(fetchUser() as any);
        }

        dispatch(checkAvailabilityCartItems(cartItems) as any);

        const query: any = new URLSearchParams(search);

        if (localStorage.getItem('accessToken') && !localStorage.getItem('accessToken_is_remove')) {
            localStorage.removeItem('accessToken');
            localStorage.setItem('accessToken_is_remove', 'true');
            window.location.reload();
        }

        if (query.get('utm_source')) {
            localStorage.setItem('utm_source', query.get('utm_source'));
        }

        if (query.get('utm_medium')) {
            localStorage.setItem('utm_medium', query.get('utm_medium'));
        }

        if (query.get('utm_campaign')) {
            localStorage.setItem('utm_campaign', query.get('utm_campaign'));
        }

        if (query.get('utm_content')) {
            localStorage.setItem('utm_content', query.get('utm_content'));
        }

        if (query.get('utm_term')) {
            localStorage.setItem('utm_term', query.get('utm_term'));
        }
    }, []);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    React.useEffect(() => {
        if (isLoadedUser) {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({ user_id: `${user.user_id}` });
        }
    }, [isLoadedUser]);

    return (
        <div className="wrapper" id="wrapper">
            {/* {pathname.indexOf("/cabinet/sell") !== -1 ? null : <MenuMedia />} */}

            <NotificationsServer />

            <Header />

            <Reglog />

            <WaitingListCreate />
            <WaitingListDelete />

            <React.Suspense fallback={<></>}>
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/catalog" element={<Catalog />} />

                    <Route path="/product/:article" element={<Product />} />

                    <Route path="/about" element={<About />} />

                    <Route path="/auth" element={<Auth />} />

                    <Route path="/contact" element={<Contact />} />

                    <Route path="/help" element={<Navigate to="/help/all" />} />
                    <Route path="/help/:block" element={<Faq />} />
                    <Route path="/help-delivery" element={<FaqDelivery />} />
                    <Route path="/help-return" element={<FaqReturn />} />
                    <Route path="/help/public-offerte" element={<FaqPublicOfferte />} />
                    <Route path="/help/user-agreement" element={<FaqUserAgreement />} />

                    <Route path="/brands" element={<Brands />} />

                    <Route path="/visit" element={<Visit />} />

                    <Route
                        path="/cabinet/history"
                        element={isLogin ? <CabinetHistoryOrders /> : <Navigate to="/#reglog" />}
                    />

                    <Route
                        path="/cabinet/favorites"
                        element={isLogin ? <CabinetFavorites /> : <Navigate to="/#reglog" />}
                    />

                    <Route
                        path="/cabinet/waiting"
                        element={isLogin ? <CabinetWaitingList /> : <Navigate to="/#reglog" />}
                    />

                    <Route
                        path="/cabinet/setting"
                        element={isLogin ? <CabinetSetting /> : <Navigate to="/#reglog" />}
                    />

                    <Route
                        path="/cabinet/sells"
                        element={isLogin ? <CabinetSellsList /> : <Navigate to="/#reglog" />}
                    />

                    <Route path="/cabinet/sell" element={<Sell />} />

                    {/* <Route
						path="/cabinet/sell-admin"
						element={<SellAdmin />}
					/> */}

                    <Route path="/order" element={<Order />} />

                    <Route path="/order/:id" element={<OrderStatus />} />

                    {/* <Route
						path="/order/error"
						element={<OrderStatus status="error" />}
					/> */}

                    <Route path="/sell" element={<SellInfo />} />
                    <Route path="/sell/brands" element={<SellInfoBrands />} />

                    <Route path="/vipservice" element={<Concierge />} />

                    <Route path="/exchange" element={<Exchange />} />

                    <Route path="/cart" element={<Cart />} />

                    <Route path="/subscribe" element={<SubscribeEmail />} />

                    <Route path="/favorites/:userId" element={<PublicFavorites />} />

                    <Route path="/AlionaDoletskaya" element={<AlyonaDoletskaya />} />

                    <Route path="/concierge" element={<BuyerTheCulttMain />} />
                    <Route path="/concierge/product/:id" element={<BuyerTheCulttProduct />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </React.Suspense>

            <Footer />
        </div>
    );
};

export default App;

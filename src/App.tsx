import React from "react";
import {useDispatch} from "react-redux";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import {compose} from "redux";

import "react-dots-loader/index.css";

import "moment/locale/ru";

import {MenuMedia, Header, Reglog, Footer} from "./components";

import {
    Home,
    Catalog,
    Product,
    About,
    Auth,
    Contact,
    FaqDelivery,
    FaqReturn,
    Brands,
    CabinetHistoryOrders,
    CabinetFavorites,
    CabinetWaitingList,
    CabinetSetting,
    Visit,
    Order,
    Sell,
    SellInfo,
} from "./pages/";
import OrderStatus from "./components/Order/OrderStatus/OrderStatus";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
        cp: any;
    }
}

const App = () => {
    const dispatch = useDispatch();

    const {pathname} = useLocation();

    React.useEffect(() => {
        let cords: any = ["scrollX", "scrollY"];

        window.addEventListener("unload", (e) =>
            cords.forEach((cord: any) => (localStorage[cord] = window[cord]))
        );
        window.scroll(...cords.map((cord: any) => localStorage[cord]));
    }, []);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="wrapper" id="wrapper">
            <MenuMedia />

            <Header />

            <Reglog />

            <React.Suspense fallback={<></>}>
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/catalog" element={<Catalog />} />

                    <Route path="/product/:article" element={<Product />} />

                    <Route path="/about" element={<About />} />

                    <Route path="/auth" element={<Auth />} />

                    <Route path="/contact" element={<Contact />} />

                    <Route path="/faq-delivery" element={<FaqDelivery />} />
                    <Route path="/faq-return" element={<FaqReturn />} />

                    <Route path="/brands" element={<Brands />} />

                    <Route path="/visit" element={<Visit />} />

                    <Route
                        path="/cabinet/history"
                        element={<CabinetHistoryOrders />}
                    />

                    <Route
                        path="/cabinet/favorites"
                        element={<CabinetFavorites />}
                    />

                    <Route
                        path="/cabinet/waiting"
                        element={<CabinetWaitingList />}
                    />

                    <Route
                        path="/cabinet/setting"
                        element={<CabinetSetting />}
                    />

                    <Route path="/cabinet/sell" element={<Sell />} />

                    <Route path="/order" element={<Order />} />

                    <Route
                        path="/order/success"
                        element={<OrderStatus status="success" />}
                    />
                    <Route
                        path="/order/error"
                        element={<OrderStatus status="error" />}
                    />

                    <Route path="/sell" element={<SellInfo />} />

                    <Route path="*" element={<></>} />
                </Routes>
            </React.Suspense>

            <Footer />
        </div>
    );
};

export default App;

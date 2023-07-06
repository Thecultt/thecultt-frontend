import React from "react";
import {useDispatch} from "react-redux";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";

import "moment/locale/ru";

import {Header, Reglog, Footer} from "./components";

import {
    Home,
    Catalog,
    Product,
    About,
    Auth,
    Contact,
    Faq,
	Brands,
	CabinetHistoryOrders,
    CabinetFavorites,
    CabinetWaitingList,
    Visit,
} from "./pages/";

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
        <div className="wrapper">
            <Header isFaq={pathname.indexOf("/faq") !== -1 ? true : false} />

            <Reglog />

            <React.Suspense fallback={<></>}>
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/catalog" element={<Catalog />} />

                    <Route path="/product" element={<Product />} />

                    <Route path="/about" element={<About />} />

                    <Route path="/auth" element={<Auth />} />

                    <Route path="/contact" element={<Contact />} />

                    <Route path="/faq" element={<Faq />} />

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

                    <Route path="*" element={<></>} />
                </Routes>
            </React.Suspense>

            <Footer />
        </div>
    );
};

export default App;

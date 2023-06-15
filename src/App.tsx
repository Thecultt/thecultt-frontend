import React from "react";
import {useDispatch} from "react-redux";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";

import "moment/locale/ru";

import {Header, Reglog, Footer} from "./components";

import {Home, Catalog, Product} from "./pages/";

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
            <Header />

            <Reglog />

            <React.Suspense fallback={<></>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/product" element={<Product />} />

                    <Route path="*" element={<></>} />
                </Routes>
            </React.Suspense>

            <Footer />
        </div>
    );
};

export default App;

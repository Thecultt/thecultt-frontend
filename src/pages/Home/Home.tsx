import React from 'react';
import { Helmet } from 'react-helmet';

import {
    HomeMainBanner,
    HomeCategories,
    CatalogProductsSection,
    HomeVisit,
    HomeSell,
    HomeSellPartners,
    HomeAbout,
    HomeWaiting,
    SelectionsSlider,
} from 'src/components';

const Home: React.FC = () => {
    return (
        <>
            <Helmet>{/* <script src="//code.jivo.ru/widget/zAUiclp1Hy" async></script> */}</Helmet>

            <HomeMainBanner />

            <section className="home">
                <div className="container">
                    <div className="home-wrapper">
                        <HomeCategories />

                        <SelectionsSlider />

                        <CatalogProductsSection title="Новинки" />

                        <HomeVisit />

                        <HomeSell />

                        <HomeSellPartners />

                        <HomeAbout />

                        <HomeWaiting />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;

import React from 'react';

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
    SelectionsBanners,
} from 'src/components';

const Home: React.FC = () => {
    return (
        <>
            <HomeMainBanner />
            <section className="home">
                <div className="container">
                    <div className="home-wrapper">
                        <HomeCategories />
                        <SelectionsSlider />
                        <CatalogProductsSection title="Новинки" />
                        <SelectionsBanners />
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

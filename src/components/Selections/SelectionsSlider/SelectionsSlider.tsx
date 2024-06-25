import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'usehooks-ts';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import { SELECTIONS_IDS } from 'src/constants/catalog';
import { getCatalogFiltersUrl } from 'src/functions/getCatalogFiltersUrl';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { MEDIA_SIZES, MEDIA_SIZES_NUMBERS } from 'src/constants/styles';

import { SelectionSliderCard } from '../SelectionSliderCard/SelectionSliderCard';

import 'swiper/css';
import './styles.sass';

export const SelectionsSlider = () => {
    const sliderRef = React.useRef<SwiperRef>(null);

    const { items, isLoaded } = useTypedSelector(({ selections }) => selections);

    const isMobile = useMediaQuery(`(max-width: ${MEDIA_SIZES.tablet})`);

    const onClickPrev = () => {
        sliderRef.current?.swiper.slidePrev();
    };

    const onClickNext = () => {
        sliderRef.current?.swiper.slideNext();
    };

    if (!isLoaded || items.length === 0) {
        return null;
    }

    return (
        <div className="selections-slider">
            <Link
                to={getCatalogFiltersUrl({
                    selection: SELECTIONS_IDS.summerBags,
                    sort: 'popular',
                })}
                className="selections-slider__title"
            >
                Подборки
            </Link>

            <div className="selections-slider__wrapper">
                <Swiper
                    ref={sliderRef}
                    className="selections-slider__carousel"
                    slidesPerView="auto"
                    spaceBetween={8}
                    breakpoints={{
                        [MEDIA_SIZES_NUMBERS.tablet]: {
                            slidesPerView: 4,
                            spaceBetween: 16,
                        },
                    }}
                    loop
                >
                    {items.map((item, index) => (
                        <SwiperSlide key={index}>
                            <SelectionSliderCard data={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {!isMobile && (
                    <>
                        <button
                            className="selections-slider__arrow selections-slider__arrow--prev"
                            onClick={onClickPrev}
                        >
                            <svg
                                width="40"
                                height="41"
                                viewBox="0 0 40 41"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect y="0.476562" width="40" height="40" rx="20" fill="white" />
                                <path
                                    d="M24 12.4766L16 20.4766L24 28.4766"
                                    stroke="#202020"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>

                        <button
                            className="selections-slider__arrow selections-slider__arrow--next"
                            onClick={onClickNext}
                        >
                            <svg
                                width="40"
                                height="41"
                                viewBox="0 0 40 41"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
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
                    </>
                )}
            </div>
        </div>
    );
};

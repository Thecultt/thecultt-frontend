import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { useMediaQuery } from 'usehooks-ts';

import { SELECTIONS_IDS } from 'src/constants/catalog';
import { getCatalogFiltersUrl } from 'src/functions/getCatalogFiltersUrl';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { MEDIA_SIZES, MEDIA_SIZES_NUMBERS } from 'src/constants/styles';

import { SelectionSliderCard } from '../SelectionSliderCard/SelectionSliderCard';

import './styles.sass';

export const SelectionsSlider = () => {
    const SliderRef = React.useRef<any>(null);

    const { items, isLoaded } = useTypedSelector(({ selections }) => selections);

    const isMobile = useMediaQuery(`(max-width: ${MEDIA_SIZES.tablet})`);

    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,

        responsive: [
            {
                breakpoint: MEDIA_SIZES_NUMBERS.tablet,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };

    const onClickPrev = () => {
        SliderRef.current.slickPrev();
    };

    const onClickNext = () => {
        SliderRef.current.slickNext();
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
                {!isMobile && (
                    <button className="selections-slider__arrow selections-slider__arrow--prev" onClick={onClickPrev}>
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
                )}

                <Slider {...settings} className="selections-slider__carousel" ref={SliderRef}>
                    {items.map((item, index) => (
                        <SelectionSliderCard key={index} data={item} />
                    ))}
                </Slider>

                {!isMobile && (
                    <button className="selections-slider__arrow selections-slider__arrow--next" onClick={onClickNext}>
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
                )}
            </div>
        </div>
    );
};

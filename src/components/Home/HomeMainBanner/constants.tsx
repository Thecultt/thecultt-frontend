import React from 'react';

import { getCatalogFiltersUrl } from 'src/functions/getCatalogFiltersUrl';
import { SORT } from 'src/constants/catalog';

import homeMainBannerImageNew from 'src/assets/images/home/home-main-banner-new.jpg';
import homeMainBannerImageConcierge from 'src/assets/images/home/home-main-banner-concierge.jpg';
import homeMainBannerImageConciergeMobile from 'src/assets/images/home/home-main-banner-concierge-mobile.jpg';
import homeMainBannerImageBoutique from 'src/assets/images/home/home-main-banner-boutique.jpg';
import homeMainBannerImageVip from 'src/assets/images/home/home-main-banner-vip.jpg';

interface IMainBannerSlide {
    title: string;
    description: React.ReactNode;
    image: {
        desktop: string;
        mobile?: string;
    };
    link: {
        title: string;
        href: string;
    };
}

export const MAIN_BANNER_SLIDES: IMainBannerSlide[] = [
    {
        title: 'Главные новинки недели',
        description: (
            <>
                Новые лоты Hermes, Chanel, Celine,
                <br />
                Louis Vuitton, Prada и Saint Laurent
            </>
        ),
        image: {
            desktop: homeMainBannerImageNew,
        },
        link: {
            title: 'Смотреть',
            href: getCatalogFiltersUrl({
                categories: ['Сумки', 'Аксессуары', 'Обувь', 'Украшения'],
                availability: ['Доступно', 'На примерке', 'Нет в наличии'],
                price_drop: false,
                boutique: false,
                page: 1,
                sort: SORT.a,
            }),
        },
    },
    {
        title: 'Консьерж-сервис',
        description:
            'Доставим для вас из Европы украшения Cartier, Bvlgari, Messika, Van Cleef & Arpels и часы главных часовых брендов.',
        image: {
            desktop: homeMainBannerImageConcierge,
            mobile: homeMainBannerImageConciergeMobile,
        },
        link: {
            title: 'Узнать больше',
            href: '/concierge',
        },
    },
    {
        title: 'Коллекция THE CULTT из бутика',
        description:
            'Лоты, доставленные напрямую из бутика-партнера или от частного байера — в таком состоянии, в каком вы бы купили их в магазине бренда.',
        image: {
            desktop: homeMainBannerImageBoutique,
        },
        link: {
            title: 'Смотреть подборку',
            href: getCatalogFiltersUrl({
                categories: ['Сумки', 'Аксессуары', 'Обувь', 'Украшения'],
                availability: ['Доступно', 'На примерке', 'Нет в наличии'],
                price_drop: false,
                boutique: true,
                page: 1,
                sort: SORT.a,
            }),
        },
    },
    {
        title: 'Разгрузите гардероб с VIP-сервисом ТНЕ CULTT',
        description:
            'Нужно продать 7 и более лотов? Закажите бесплатный VIP-сервис. Вам не нужно заполнять заявки, фотографировать вещи, искать покупателей - все это мы берем на себя.',
        image: {
            desktop: homeMainBannerImageVip,
        },
        link: {
            title: 'Узнать больше',
            href: '/vipservice',
        },
    },
];

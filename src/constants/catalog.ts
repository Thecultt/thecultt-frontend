import { SortType } from 'src/redux/types/IProducts';

export const categories = ['Сумки', 'Аксессуары', 'Обувь', 'Украшения'];

export const SORT: Record<SortType, SortType> = {
    a: 'a',
    price: 'price',
    '-price': '-price',
    popular: 'popular',
};

export const SELECTIONS_IDS = {
    itBags: 5,
} as const;

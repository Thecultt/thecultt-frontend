import { SortType } from 'src/redux/types/IProducts';

export const categories = ['Сумки', 'Аксессуары', 'Обувь', 'Украшения'];

export const SORT: Record<SortType, SortType> = {
    a: 'a',
    price: 'price',
    '-price': '-price',
    popular: 'popular',
};

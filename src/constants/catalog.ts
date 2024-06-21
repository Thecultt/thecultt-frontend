import { SortType } from 'src/redux/types/IProducts';

export const CATEGORY_NAMES = {
    bags: 'Сумки',
    accessories: 'Аксессуары',
    shoes: 'Обувь',
    decorations: 'Украшения',
} as const;

export const CATEGORIES = Object.values(CATEGORY_NAMES);

export const SORT: Record<SortType, SortType> = {
    a: 'a',
    price: 'price',
    '-price': '-price',
    popular: 'popular',
};

export const SELECTIONS_IDS = {
    summerBags: 4,
    itBags: 5,
    investmentsBags: 6,
} as const;

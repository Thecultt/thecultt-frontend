import { UTM_KEYS, LS_KEYS } from 'src/constants/keys';
import { localStorageService } from 'src/services/storage';

type UtmKeys = keyof typeof UTM_KEYS;
type UtmStorage = Partial<Record<(typeof UTM_KEYS)[UtmKeys], string>>;

export const getUtm = () => localStorageService.getItem<UtmStorage>(LS_KEYS.utm, {});

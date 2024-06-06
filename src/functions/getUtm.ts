import { UTM_KEYS, UTM_LS_KEY } from 'src/constants/keys';
import { localStorageService } from 'src/services/storage';

type UtmKeys = keyof typeof UTM_KEYS;
type UtmStorage = Partial<Record<(typeof UTM_KEYS)[UtmKeys], string>>;

export const getUtm = () => localStorageService.getItem<UtmStorage>(UTM_LS_KEY, {});

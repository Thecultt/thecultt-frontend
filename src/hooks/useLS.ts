import { useLocalStorage } from 'usehooks-ts';

import { IStorageExpiredOptions, localStorageService } from 'src/services/storage';

export function useLS<T>(key: string, initialValue: T | null, expiredOptions?: IStorageExpiredOptions) {
    return useLocalStorage(localStorageService.addPrefix(key), initialValue, {
        serializer: (value) => localStorageService.serializer(value, expiredOptions),
        deserializer: (raw) => localStorageService.deserializer(raw, key, initialValue),
    });
}

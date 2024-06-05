import dayjs from 'dayjs';

interface IStorageItem<T> {
    value: T;
    expired: string | null;
}

export interface IStorageExpiredOptions {
    value: number;
    unit: dayjs.ManipulateType;
}

class StorageService {
    private _prefix = 'tc_';

    constructor(protected readonly storage: Storage) {}

    addPrefix(key: string) {
        return `${this._prefix}${key}`;
    }

    serializer<T>(value: T, expiredOptions?: IStorageExpiredOptions): string {
        const expired = expiredOptions ? dayjs().add(expiredOptions.value, expiredOptions.unit).format() : null;
        const storageItem: IStorageItem<T> = { value, expired };

        return JSON.stringify(storageItem);
    }

    deserializer<T>(raw: string, key: string, otherwise?: T): T | null {
        try {
            const { value, expired }: IStorageItem<T> = JSON.parse(raw);

            if (expired !== null && dayjs().isAfter(dayjs(expired))) {
                this.removeItem(key);
                return otherwise ?? null;
            }

            return value;
        } catch (e) {
            return otherwise ?? null;
        }
    }

    setItem<T>(key: string, value: T, expiredOptions?: IStorageExpiredOptions): void {
        try {
            this.storage.setItem(this.addPrefix(key), this.serializer(value, expiredOptions));
        } catch (e) {
            console.error('StorageService setItem', e);
        }
    }

    removeItem(key: string): void {
        try {
            this.storage.removeItem(this.addPrefix(key));
        } catch (e) {
            console.error('StorageService removeItem', e);
        }
    }

    getItem<T>(key: string): T | null;
    getItem<T>(key: string, otherwise: T): T;
    getItem<T>(key: string, otherwise?: T): T | null {
        try {
            const data = this.storage.getItem(this.addPrefix(key));

            if (data) {
                return this.deserializer<T>(data, key, otherwise);
            }

            return otherwise ?? null;
        } catch (e) {
            console.error('StorageService getItem', e);
            return otherwise ?? null;
        }
    }

    hasItem(key: string): boolean {
        try {
            return this.getItem(key) !== null;
        } catch (e) {
            console.error('StorageService hasItem', e);
            return false;
        }
    }
}

export const localStorageService = new StorageService(window.localStorage);
export const sessionStorageService = new StorageService(window.sessionStorage);

/// <reference types="react-scripts" />

declare namespace NodeJS {
    interface ProcessEnv {
        REACT_APP_API_DOMEN: string;
        REACT_APP_EMAIL_SUPPORT: string;
        REACT_APP_DADATA_API_KEY: string;
        REACT_APP_CLOUD_PAYMENTS_PUBLIC_ID: string;
        REACT_APP_YANDEX_SPLIT_MERCHANT_ID: string;
        REACT_APP_TINKOFF_SHOP_ID: string;
        REACT_APP_TINKOFF_SHOW_CASE_ID: string;
        REACT_APP_MINDBOX_SECRET_KEY: string;
    }
}

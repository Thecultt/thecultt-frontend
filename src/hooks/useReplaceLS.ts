import React from 'react';

import { LS_KEYS } from 'src/constants/keys';
import { useLS } from './useLS';

export const useReplaceLS = () => {
    const [_cart, setCartLS] = useLS<any>(LS_KEYS.cart, {});
    const [_token, setTokenLS] = useLS<string>(LS_KEYS.accessToken, '');
    const [_email, setEmailLS] = useLS<string>(LS_KEYS.email, '');

    React.useEffect(() => {
        const oldCartLS = localStorage.getItem('cart');
        if (oldCartLS) {
            setCartLS(JSON.parse(oldCartLS) as any);
            localStorage.removeItem('cart');
        }

        const oldAccessTokenLS = localStorage.getItem('accessToken');
        if (oldAccessTokenLS) {
            setTokenLS(oldAccessTokenLS);
            localStorage.removeItem('accessToken');
        }

        const oldEmailLS = localStorage.getItem('email');
        if (oldEmailLS) {
            setEmailLS(oldEmailLS);
            localStorage.removeItem('email');
        }
    }, []);
};

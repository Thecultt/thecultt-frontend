import React from 'react';
import { useLocation } from 'react-router-dom';
import omitBy from 'lodash.omitby';

import { UTM_KEYS, LS_KEYS } from 'src/constants/keys';
import { localStorageService } from 'src/services/storage';

export const useAppUtm = () => {
    const { search } = useLocation();
    const query = new URLSearchParams(search);

    React.useEffect(() => {
        const utmFromQuery = {
            [UTM_KEYS.source]: query.get(UTM_KEYS.source),
            [UTM_KEYS.medium]: query.get(UTM_KEYS.medium),
            [UTM_KEYS.campaign]: query.get(UTM_KEYS.campaign),
            [UTM_KEYS.content]: query.get(UTM_KEYS.content),
            [UTM_KEYS.term]: query.get(UTM_KEYS.term),
        };

        const result = omitBy(utmFromQuery, (item) => !item);

        if (Object.keys(result).length > 0) {
            localStorageService.setItem(LS_KEYS.utm, result);
        }
    }, []);
};

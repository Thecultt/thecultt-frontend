import React from 'react';
import { useLocation } from 'react-router-dom';

import { UTM_KEYS, UTM_LS_KEY } from 'src/constants/keys';
import { localStorageService } from 'src/services/storage';

export const useAppUtm = () => {
    const { search } = useLocation();
    const query = new URLSearchParams(search);

    React.useEffect(() => {
        const utmSource = query.get(UTM_KEYS.source);
        const utmMedium = query.get(UTM_KEYS.medium);
        const utmCampaign = query.get(UTM_KEYS.campaign);
        const utmContent = query.get(UTM_KEYS.content);
        const utmTerm = query.get(UTM_KEYS.term);

        localStorageService.setItem(UTM_LS_KEY, {
            [UTM_KEYS.source]: utmSource || '',
            [UTM_KEYS.medium]: utmMedium || '',
            [UTM_KEYS.campaign]: utmCampaign || '',
            [UTM_KEYS.content]: utmContent || '',
            [UTM_KEYS.term]: utmTerm || '',
        });
    }, []);
};

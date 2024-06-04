import React from 'react';
import { useLocation } from 'react-router-dom';

import { UTM_KEYS } from 'src/constants/keys';

export const useAppUtm = () => {
    const { search } = useLocation();
    const query = new URLSearchParams(search);

    React.useEffect(() => {
        const utmSource = query.get(UTM_KEYS.source);
        const utmMedium = query.get(UTM_KEYS.medium);
        const utmCampaign = query.get(UTM_KEYS.campaign);
        const utmContent = query.get(UTM_KEYS.content);
        const utmTerm = query.get(UTM_KEYS.term);

        if (utmSource) {
            localStorage.setItem(UTM_KEYS.source, utmSource);
        }

        if (utmMedium) {
            localStorage.setItem(UTM_KEYS.medium, utmMedium);
        }

        if (utmCampaign) {
            localStorage.setItem(UTM_KEYS.campaign, utmCampaign);
        }

        if (utmContent) {
            localStorage.setItem(UTM_KEYS.content, utmContent);
        }

        if (utmTerm) {
            localStorage.setItem(UTM_KEYS.term, utmTerm);
        }
    }, []);
};

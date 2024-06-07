import { LS_KEYS } from 'src/constants/keys';
import { useLS } from './useLS';
import { useTypedSelector } from './useTypedSelector';
import { useCallback } from 'react';

export const useAuthUser = () => {
    const [accessToken, _setAccessToken, removeAccessToken] = useLS<string | null>(LS_KEYS.accessToken, null);
    const userState = useTypedSelector(({ user }) => user);

    const logout = useCallback(() => {
        removeAccessToken();
        window.location.reload();
    }, []);

    return {
        ...userState,
        isLoggedIn: !!accessToken,
        logout,
    };
};

import { LS_KEYS } from 'src/constants/keys';
import { useLS } from './useLS';
import { useTypedSelector } from './useTypedSelector';

export const useAuthUser = () => {
    const [accessToken, _setAccessToken, removeAccessToken] = useLS<string>(LS_KEYS.accessToken, null);
    const userState = useTypedSelector(({ user }) => user);

    const logout = () => {
        removeAccessToken();
        window.location.reload();
    };

    return {
        ...userState,
        isLoggedIn: !!accessToken,
        logout,
    };
};

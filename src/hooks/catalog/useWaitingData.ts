import { LS_KEYS } from 'src/constants/keys';
import { useLS } from '../useLS';

export const useWaitingData = () => {
    const [waitingData, setWaitingData, removeWaitingData] = useLS<any>(LS_KEYS.waiting, null);

    return { waitingData, setWaitingData, removeWaitingData };
};

import React from 'react';

export const useDebounce = (value: string) => {
    const [debouncedValue, setDebouncedValue] = React.useState(value);

    React.useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), 500);

        return () => {
            clearTimeout(timer);
        };
    }, [value]);

    return debouncedValue;
};

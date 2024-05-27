import React from 'react';
import { WrappedFieldProps, change } from 'redux-form';

interface RenderSelectArrayProps extends WrappedFieldProps {
    label: string;
    items: string[];
    disabled?: boolean;
}

const RenderSelectArray: React.FC<RenderSelectArrayProps> = ({
    label,
    items,
    disabled,
    input,
    meta: { form, dispatch, initial },
}) => {
    const [state, setState] = React.useState<boolean>(false);
    const [currentItems, setCurrentItems] = React.useState<{
        [key: string]: string;
    }>({});

    const SelectRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        document.addEventListener('mousedown', toggleSelect);
        document.addEventListener('touchstart', toggleSelect);

        return () => {
            document.removeEventListener('mousedown', toggleSelect);
            document.removeEventListener('touchstart', toggleSelect);
        };
    }, [SelectRef]);

    const toggleSelect = (e: any) => {
        if (SelectRef.current && !SelectRef.current.contains(e.target)) {
            setState(false);
        }
    };

    const toggleCurrentItem = (item: string) => {
        if (item === 'Отсутствует' || item === 'Нет дефектов') {
            setCurrentItems({ [item]: item });
        } else {
            if (currentItems[item]) {
                const newItems = { ...currentItems };

                delete newItems[item];

                setCurrentItems(newItems);
            } else {
                const newItems: { [key: string]: string } = {};

                Object.keys(currentItems).map((key) => {
                    if (key !== 'Отсутствует' && key !== 'Нет дефектов') {
                        newItems[key] = key;
                    }
                });

                setCurrentItems({ ...newItems, [item]: item });
            }
        }
    };

    React.useEffect(() => {
        if (initial && !Object.keys(currentItems).length) {
            const newItems: { [key: string]: string } = {};
            const itemsArray: string[] = initial.split(', ');

            itemsArray.map((item) => (newItems[item] = item));

            setCurrentItems(newItems);
        }
    }, [initial]);

    React.useEffect(() => {
        if (input.value === '' && Object.keys(currentItems).length) {
            setCurrentItems({});
        }
    }, [input.value]);

    React.useEffect(() => {
        dispatch(
            change(
                form,
                input.name,
                Object.keys(currentItems).length
                    ? Object.keys(currentItems)
                          .map((title) => title)
                          .join(', ')
                    : '',
            ),
        );
    }, [Object.keys(currentItems).map((item) => item)]);

    return (
        <div className={`select-wrapper`} ref={SelectRef}>
            <div
                className={`select ${disabled ? 'disabled' : ''} ${state ? 'active' : ''}`}
                onClick={() => setState(!state)}
            >
                <p className="select__label">
                    {Object.keys(currentItems).length ? (
                        Object.keys(currentItems)
                            .map((title) => title)
                            .join(', ')
                    ) : (
                        <span>{label}</span>
                    )}
                </p>

                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Icons">
                        <path
                            id="Vector"
                            d="M3 6L10 13L17 6"
                            stroke="#202020"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </g>
                </svg>
            </div>

            <div className={`select-list ${state ? 'active' : ''}`}>
                <div className="select-list-items-wrapper">
                    {items.map((item, index) => (
                        <p
                            className={`select-list__item ${currentItems[item] ? 'active' : ''}`}
                            key={`select-list__item-${item}-${index}`}
                            onClick={() => toggleCurrentItem(item)}
                        >
                            {item}

                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="Icons">
                                    <path
                                        id="Vector"
                                        d="M20 6L9 17L4 12"
                                        stroke="#285141"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </g>
                            </svg>
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RenderSelectArray;

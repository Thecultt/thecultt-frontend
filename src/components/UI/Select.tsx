import React from 'react';
import { getClassNames } from 'src/functions/getClassNames';

interface SelectProps {
    label: string;
    items: string[];
}

const Select: React.FC<SelectProps> = ({ label, items }) => {
    const [state, setState] = React.useState<boolean>(false);
    const [currentItem, setCurrentItem] = React.useState<string>('');

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
        setCurrentItem(item);

        setTimeout(() => {
            setState(false);
        }, 300);
    };

    return (
        <div className="select" ref={SelectRef} onClick={() => setState(true)}>
            <p className="select__label">{currentItem !== '' ? currentItem : <span>{label}</span>}</p>

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

            <div
                className={getClassNames('select-list', {
                    active: state,
                })}
            >
                {items.map((item, index) => (
                    <p
                        className={getClassNames('select-list__item', {
                            active: item === currentItem,
                        })}
                        key={`select-list__item-${index}`}
                        onClick={() => toggleCurrentItem(item)}
                    >
                        {item}

                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    );
};

export default Select;

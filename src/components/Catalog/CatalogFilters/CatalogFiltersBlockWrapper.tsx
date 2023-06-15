import React from "react";
import AnimateHeight from "react-animate-height";

interface CatalogFiltersBlockWrapperProps {
    title: string;
    children: React.ReactNode;
    disabled?: boolean;
}

const CatalogFiltersBlockWrapper: React.FC<CatalogFiltersBlockWrapperProps> = ({
    title,
    children,
    disabled,
}) => {
    const [isAllVisible, setIsAllVisible] = React.useState<boolean>(false);

    const ObjectsFiltersBlockWrapperRef = React.useRef<HTMLDivElement>(null);

    const toggleIsAllVisibleOnClick = () => {
        setIsAllVisible(!isAllVisible);
    };

    return (
        <div
            className={`catalog-filters-block ${disabled ? "disabled" : ""}`}
            ref={ObjectsFiltersBlockWrapperRef}
        >
            <div
                className="catalog-filters-block-top"
                onClick={toggleIsAllVisibleOnClick}
            >
                <p className="catalog-filters-block-top__title">{title}</p>

                {isAllVisible ? (
                    <svg
                        width="22"
                        height="23"
                        viewBox="0 0 22 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M18 15.5L11 8.5L4 15.5"
                            stroke="#202020"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                ) : (
                    <svg
                        width="22"
                        height="23"
                        viewBox="0 0 22 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M11 5.08398V17.9173"
                            stroke="#202020"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M4.58203 11.5H17.4154"
                            stroke="#202020"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                )}
            </div>

            <AnimateHeight duration={300} height={isAllVisible ? "auto" : 1}>
                <div className="catalog-filters-block-content">{children}</div>
            </AnimateHeight>
        </div>
    );
};

export default CatalogFiltersBlockWrapper;

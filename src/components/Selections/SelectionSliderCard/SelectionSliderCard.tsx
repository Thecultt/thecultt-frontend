import React from 'react';
import { Link } from 'react-router-dom';

import { ISelection } from 'src/models/ISelection';

import './styles.sass';
import { getCatalogFiltersUrl } from 'src/functions/getCatalogFiltersUrl';

interface Props {
    data: ISelection;
}

export const SelectionSliderCard: React.FC<Props> = ({ data }) => {
    const { id, title, background_image } = data;

    return (
        <Link
            to={getCatalogFiltersUrl({
                selection: id,
                sort: 'popular',
            })}
            className="selection-slider-card"
        >
            <div className="selection-slider-card__wrapper">
                <div className="selection-slider-card__cover">
                    {!!background_image && !!title && (
                        <img src={background_image} className="selection-slider-card__image" alt={title} />
                    )}
                </div>
                <h3 className="selection-slider-card__title">{title}</h3>
            </div>
        </Link>
    );
};

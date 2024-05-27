import React from 'react';
import { v4 } from 'uuid';
import { WrappedFieldProps } from 'redux-form';

interface CheckboxProps extends WrappedFieldProps {
    label: string;
    small?: boolean;
}

const RenderCheckbox: React.FC<CheckboxProps> = ({ label, input, small }) => {
    const id = v4();

    return (
        <div className="checkbox-wrapper">
            <input
                {...input}
                id={id}
                type="checkbox"
                className={`checkbox ${small ? 'small' : ''}`}
                defaultChecked={true}
                // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                //     onChange && onChange(e.target.checked)
                // }
                // checked={checked}
            />

            <label htmlFor={id} className={`checkbox__label ${small ? 'small' : ''}`}>
                <p className="checkbox__label__text" dangerouslySetInnerHTML={{ __html: label }}></p>
            </label>
        </div>
    );
};

export default RenderCheckbox;

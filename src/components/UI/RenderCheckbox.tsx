import React from 'react';
import { v4 } from 'uuid';
import { WrappedFieldProps } from 'redux-form';

import { getClassNames } from 'src/functions/getClassNames';

interface CheckboxProps extends WrappedFieldProps {
    label: string;
    small?: boolean;
    gray?: boolean;
}

const RenderCheckbox: React.FC<CheckboxProps> = ({ label, input, small, gray }) => {
    const id = v4();

    return (
        <div className="checkbox-wrapper">
            <input
                {...input}
                id={id}
                type="checkbox"
                className={getClassNames('checkbox', {
                    small: !!small,
                    gray: !!gray,
                })}
                // defaultChecked={true}
                // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                //     onChange && onChange(e.target.checked)
                // }
                // checked={checked}
            />

            <label
                htmlFor={id}
                className={getClassNames('checkbox__label', {
                    small: !!small,
                    gray: !!gray,
                })}
            >
                <p className="checkbox__label__text" dangerouslySetInnerHTML={{ __html: label }}></p>
            </label>
        </div>
    );
};

export default RenderCheckbox;

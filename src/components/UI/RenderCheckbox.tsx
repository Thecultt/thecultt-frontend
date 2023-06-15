import React from "react";
import {v4} from "uuid";
import {WrappedFieldProps} from "redux-form";

interface CheckboxProps extends WrappedFieldProps {
    label: string;
}

const RenderCheckbox: React.FC<CheckboxProps> = ({label, input}) => {
    const id = v4();

    return (
        <div className="checkbox-wrapper">
            <input
                {...input}
                id={id}
                type="checkbox"
                className="checkbox"
                // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                //     onChange && onChange(e.target.checked)
                // }
                // checked={checked}
            />

            <label htmlFor={id} className={`checkbox__label`}>
                <p className="checkbox__label__text">{label}</p>
            </label>
        </div>
    );
};

export default RenderCheckbox;

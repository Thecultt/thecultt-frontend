import React from "react";
import {v4} from "uuid";

interface CheckboxProps {
    label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({label}) => {
    const id = v4();

    return (
        <div className="checkbox-wrapper">
            <input
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

export default Checkbox;

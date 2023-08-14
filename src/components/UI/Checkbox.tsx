import React from "react";

interface CheckboxProps {
    id?: string;
    label: string;
    onChange?: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({id, label, onChange}) => {
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
                onChange={onChange}
            />

            <label htmlFor={id} className={`checkbox__label`}>
                <p className="checkbox__label__text">{label}</p>
            </label>
        </div>
    );
};

export default Checkbox;

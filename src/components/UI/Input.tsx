import React from "react";

interface InputProps {
    type: string;
    name: string;
    label: string;
}

const Input: React.FC<InputProps> = ({type, name, label}) => {
    return (
        <div className="input">
            <input type={type} className="input__field" id={name} required />

            <label className="input__label" htmlFor={name}>
                {label}
            </label>
        </div>
    );
};

export default Input;

import React from 'react';

interface InputProps {
    type: string;
    name: string;
    label: string;
    bgWhite?: boolean;
}

const Input: React.FC<InputProps> = ({ type, name, label, bgWhite }) => {
    return (
        <div className={`input ${bgWhite ? 'bgWhite' : ''}`}>
            <input type={type} className="input__field" id={name} placeholder={label} />
        </div>
    );
};

export default Input;

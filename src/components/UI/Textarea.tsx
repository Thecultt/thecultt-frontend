import React from "react";

interface InputProps {
    name: string;
    label: string;
}

const Textarea: React.FC<InputProps> = ({name, label}) => {
    return (
        <div className="textarea">
            <textarea className="textarea__field" id={name} required />

            <label className="textarea__label" htmlFor={name}>
                {label}
            </label>
        </div>
    );
};

export default Textarea;

import React from "react";

interface InputProps {
    name: string;
    label: string;
    bgWhite?: boolean;
}

const Textarea: React.FC<InputProps> = ({name, label, bgWhite}) => {
    return (
        <div className={`textarea ${bgWhite ? "bgWhite" : ""}`}>
            <textarea
                className="textarea__field"
                id={name}
                placeholder={label}
            />
        </div>
    );
};

export default Textarea;

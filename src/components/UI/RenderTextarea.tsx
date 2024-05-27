import React from 'react';
import { WrappedFieldProps } from 'redux-form';

interface RenderTextareaProps extends WrappedFieldProps {
    name: string;
    label: string;
    bgWhite?: boolean;
}

const RenderTextarea: React.FC<RenderTextareaProps> = ({ label, input, meta: { touched, error }, bgWhite }) => {
    return (
        <div className={`textarea ${bgWhite ? 'bgWhite' : ''}`}>
            <textarea {...input} className="textarea__field" placeholder={label} />
        </div>
    );
};

export default RenderTextarea;

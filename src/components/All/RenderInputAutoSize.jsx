import React from "react";
import TextareaAutosize from "react-textarea-autosize";

const RenderInputAutoSize = ({input, type, label, meta: {error, touched}}) => {
    return (
        <div className="input">
            <TextareaAutosize
                {...input}
                type={type}
                className={`input__field ${touched && error ? "error" : ""}`}
                required
            />

            <label
                className={`input__label ${touched && error ? "error" : ""}`}
            >
                {label}
            </label>

            {touched && error && <span className="input__error">{error}</span>}
        </div>
    );
};

export default RenderInputAutoSize;

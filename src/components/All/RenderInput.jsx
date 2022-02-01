import React from "react";

const RednerInput = ({input, type, label, meta: {error, touched}}) => {
    return (
        <div className="input">
            <input
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

export default RednerInput;

import React from "react"

function Input({ placeholder, type, value, onChange }) {
    return (
        <div className="input-cont">
            <label>
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onchange={onChange}
                />
            </label>

        </div>
    );
};

export default Input;

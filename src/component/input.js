import React from "react"

function Input({ placeholder, type, value, onChange }) {
    return (
        <div className="input-cont">
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onchange={onChange}
            />
        </div>
    );
}

export default Input;

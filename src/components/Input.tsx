import React, { memo } from 'react';
import { throttle } from "../helpers/throttle";
import '../styles/Input.css';

type InputProps = {
    successMessage?: string;
    errorMessage?: string;
    delay?: number;
    onChange: (value: string) => void;
    placeholder?: string;
    extraInformation?: string;
}

export const Input: React.FC<InputProps> = memo(({ extraInformation, successMessage, errorMessage, delay = 2000, onChange,  placeholder = '...' }) => {
    const handleThrottledChange = throttle((event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target?.value;
        onChange(newValue);
    }, delay);

    return (
        <div className="searchBar">
            <input type="text" onChange={handleThrottledChange}  placeholder={placeholder} />
            {successMessage ? <p className="successMessage">{successMessage}</p> : null}
            {errorMessage ? <p className="errorMessage">{errorMessage}</p> : null}
            {extraInformation ? <p className="extraMessage">{extraInformation}</p> : null}
        </div>
    );
})

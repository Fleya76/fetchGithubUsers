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

/**
 * Description: Input component to execute a callback onChange to get users from API.
 */
export const Input: React.FC<InputProps> = memo(({ extraInformation, successMessage, errorMessage, delay = 2000, onChange,  placeholder = '...' }) => {
    const handleThrottledChange = throttle((event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target?.value;
        onChange(newValue);
    }, delay);

    const renderSuccessMessage = successMessage && <p className="successMessage">{successMessage}</p>;
    const renderErrorMessage = errorMessage && <p className="errorMessage">{errorMessage}</p>;
    const renderExtraMessage = extraInformation && <p className="extraMessage">{extraInformation}</p>;
  
    return (
        <div className="searchBar">
            <input type="text" onChange={handleThrottledChange}  placeholder={placeholder} />
            {renderSuccessMessage}
            {renderErrorMessage}
            {renderExtraMessage}
        </div>
    );
})

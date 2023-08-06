import React from 'react'
import {debounce} from "../helpers/debounce";

import '../styles/Input.css';

type InputProps = {
    debounceDelay?: number;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export const Input: React.FC<InputProps>  = ({debounceDelay = 30, onChange, value, placeholder = '...'}) => {

    const handleInputChangeDebounced = debounce((value: string) => {
        onChange(value);
    }, debounceDelay);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        handleInputChangeDebounced(newValue);
    };

    return (
        <div className="searchBar">
            <input type="text" value={value} onChange={handleChange} placeholder={placeholder}/>
        </div>
    )
}

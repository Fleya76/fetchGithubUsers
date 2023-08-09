import React, { memo }  from 'react'

import '../styles/Checkbox.css';

type CheckboxProps = {
    label?: string;
    isChecked?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Description: An simple checkbox to select an item and execute an action on it.
 */
export const Checkbox: React.FC<CheckboxProps>  = memo(({isChecked, label, onChange}) => {
    return (
        <>    
            <input type="checkbox" className="checkbox" id="checkbox" name="checkbox" checked={isChecked} onChange={onChange}/> 
            {label ?<label htmlFor="checkbox" className="checkboxLabel">{label}</label> : null}  
        </>
    )
})

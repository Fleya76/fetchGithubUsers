import React, { memo }  from 'react'

import '../styles/Checkbox.css';

type CheckboxProps = {
    countCheckedItems?: number;
    label?: string;
    isChecked?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: React.FC<CheckboxProps>  = memo(({isChecked, countCheckedItems = 0, label, onChange}) => {
    return (
        <>    
            <input type="checkbox" className="checkbox" id="checkbox" name="checkbox" checked={isChecked} onChange={onChange}/> 
            {label ?<label htmlFor="checkbox" className="checkboxLabel">{label}</label> : null}  
        </>
    )
})

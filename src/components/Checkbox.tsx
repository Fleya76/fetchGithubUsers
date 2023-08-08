import React, { memo }  from 'react'
import locale from "../locales/en.json";

import '../styles/Checkbox.css';

type CheckboxProps = {
    countCheckedItems?: number;
    withLabel?: boolean;
}

export const Checkbox: React.FC<CheckboxProps>  = memo(({countCheckedItems = 0, withLabel = false}) => {
    return (
        <>    
            {withLabel ? <input type="checkbox" className="checkbox" id="checkbox" name="checkbox" value="checkbox" /> : null} 
            <label htmlFor="checkbox" className="checkboxLabel">{countCheckedItems} {locale.checkboxItems}</label>  
        </>
    )
})

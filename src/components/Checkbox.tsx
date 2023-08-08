import React, { memo }  from 'react'

import '../styles/Checkbox.css';

type CheckboxProps = {
}

export const Checkbox: React.FC<CheckboxProps>  = memo(() => {
 return (
    <input type="checkbox" className="checkbox" id="checkbox" name="checkbox" value="checkbox" />
 )
})

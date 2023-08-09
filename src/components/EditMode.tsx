import React, { memo }  from 'react'
import { useEditMode } from '../context/EditModeContext';

import '../styles/EditMode.css';

type EditModeProps = {
    text: string;
}

/**
 * Description: A simple button to toggle the edit mode.
 */
export const EditMode: React.FC<EditModeProps>  = memo(({text}) => {
    const { editMode, toggleEditMode } = useEditMode();
    return (
        <button className="editMode" onClick={toggleEditMode}>
            {text} {editMode ? 'ON' : 'OFF'}
        </button>
    )
})

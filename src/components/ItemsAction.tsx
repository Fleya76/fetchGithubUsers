import React from "react";
import { useUserContext } from "../context/UserContext";
import { Checkbox } from "./Checkbox";
import { Trash } from "./Trash";
import { Duplicate } from "./Duplicate";
import locale from "../locales/en.json";

import '../styles/ItemsAction.css';


type ItemsActionProps = {
    withDuplicate?: boolean;
    withDelete?: boolean;
    withCheckbox?: boolean;
}

/**
 * Description: ItemsAction component to display actions of items and execute them by a context.
 */
export const ItemsAction: React.FC<ItemsActionProps>  = ({withCheckbox = false, withDelete = false, withDuplicate = false}) => {
    const { countCheckedItems, handleUserCheck, deleteSelectedUsers, duplicateSelectedUsers} = useUserContext();
    
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleUserCheck(event.target.checked);
    }

    const handleDuplicateClick = () => {
        duplicateSelectedUsers()
    }

    const handleDeleteClick = () => {
        deleteSelectedUsers()
    }

    const checkboxElement = withCheckbox ? (
        <span><Checkbox label={`${countCheckedItems()} ${locale.checkboxItems}`} onChange={handleCheckboxChange} /></span>
      ) : null;
    const duplicateElement = withDuplicate ? <Duplicate onClick={handleDuplicateClick} /> : null;
    const deleteElement = withDelete ? <Trash onClick={handleDeleteClick} /> : null;

    return (
        <div className="itemsAction">
            {checkboxElement}
            <span>
                {duplicateElement}
                {deleteElement}
            </span>
        </div>
    )
}

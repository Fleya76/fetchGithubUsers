import React from "react";

import '../styles/ItemsAction.css';
import { Checkbox } from "./Checkbox";
import { useUserContext } from "../context/UserContext";

import { Trash } from "./Trash";
import { Duplicate } from "./Duplicate";
import locale from "../locales/en.json";

type ItemsActionProps = {
    withDuplicate: boolean;
    withDelete: boolean;
    withCheckbox: boolean;
}

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


    return (
        <div className="itemsAction">
            <span>
                {withCheckbox ? <Checkbox label={`${countCheckedItems()} ${locale.checkboxItems}`} onChange={handleCheckboxChange}/> : null}
            </span>
            <span>
                {withDuplicate ? <Duplicate onClick={handleDuplicateClick} /> : null}
                {withDelete ? <Trash onClick={handleDeleteClick}/> : null}
            </span>
        </div>
    )
}

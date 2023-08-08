import React from "react";

import '../styles/ItemsAction.css';
import { Checkbox } from "./Checkbox";

type ItemsActionProps = {
    withDuplicate: boolean;
    withDelete: boolean;
    withCheckbox: boolean;
}

export const ItemsAction: React.FC<ItemsActionProps>  = ({withCheckbox = false, withDelete = false, withDuplicate = false}) => {
 return (
        <div className="itemsAction">
            {withCheckbox && <Checkbox withLabel/>}
        </div>
 )
}

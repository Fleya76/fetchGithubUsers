import React from "react";

import '../styles/Action.css';
import { Checkbox } from "./Checkbox";

type ActionProps = {
    withDuplicate: boolean;
    withDelete: boolean;
    withCheckbox: boolean;
}

export const Action: React.FC<ActionProps>  = () => {
 return (
        <div className="action">
            <Checkbox />
        </div>
 )
}

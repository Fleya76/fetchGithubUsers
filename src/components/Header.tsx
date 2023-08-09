import React, { memo }  from 'react'
import { EditMode } from './EditMode';

import '../styles/Header.css';

type HeaderProps = {
    text: string;
}

/**
 * Description: A simple header component to display a text.
 */
export const Header: React.FC<HeaderProps>  = memo(({text}) => {
    return (
        <header className="header">
            <h1>{text}</h1>
            <EditMode text="Edit mode" />
        </header>
    )
})

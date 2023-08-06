import React, { memo }  from 'react'

import '../styles/Header.css';

type HeaderProps = {
    text: string;
}

export const Header: React.FC<HeaderProps>  = memo(({text}) => {
 return (
     <header className="Header">
         <h1>{text}</h1>
     </header>
 )
})

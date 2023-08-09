import React, {memo}  from 'react'
import { Checkbox } from "./Checkbox";
import {truncateString} from "../helpers/truncateString";
import {TUser} from "../types/users";
import locale from "../locales/en.json";
import { useUserContext } from '../context/UserContext';

import '../styles/Card.css';

type CardProps = Pick<TUser, 'avatar_url' | 'login' | 'html_url' | 'id' | 'isChecked'>;

export const Card: React.FC<CardProps>  = memo(({avatar_url,login,html_url,id, isChecked}) => {
    const { handleUserCheck } = useUserContext();
    
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleUserCheck(event.target.checked, id)
    }

    const truncatedLogin = truncateString(login, 10);

    return (
        <div className="card">
            <div className='card-header'>
            <Checkbox isChecked={isChecked} onChange={handleCheckboxChange}/>
            <img src={avatar_url} alt="avatar" />
            </div>
            <p>{id}</p>
            <p className="login">{truncatedLogin}</p>
            <a href={html_url} target="_blank" rel="noopener noreferrer"><button>{locale.profil}</button></a>
        </div>
    )
})

import React  from 'react'
import {truncateString} from "../helpers/truncateString";
import {TUser} from "../types/users";
import locale from "../locales/en.json";

import '../styles/Card.css';

type CardProps = Pick<TUser, 'avatar_url' | 'login' | 'html_url' | 'id'>;

export const Card: React.FC<CardProps>  = ({avatar_url,login,html_url,id}) => {
 return (
     <div className="card">
        <img src={avatar_url} />
         <p>{id}</p>
         <p className="login">{truncateString(login, 10)}</p>
         <a href={html_url} target="_blank"><button>{locale.profil}</button></a>
     </div>
 )
}

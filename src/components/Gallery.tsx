import React, { memo }  from 'react'
import {TUser} from "../types/users";

import '../styles/Gallery.css';
import {Card} from "./Card";

type GalleryProps = {
    isEmptyMessage?: string;
    items: TUser[];
}

export const Gallery: React.FC<GalleryProps>  = memo(({isEmptyMessage, items}) => {
 return (
     <div className="gallery">
         {items.length > 0 ? items.map(({avatar_url,login,html_url,id}) => (
             <Card key={id} avatar_url={avatar_url} login={login} html_url={html_url} id={id} />
         )) : <p>{isEmptyMessage}</p>}
     </div>
 )
})

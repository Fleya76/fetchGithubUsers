import React, { memo }  from 'react'
import {TUser} from "../types/users";

import '../styles/Gallery.css';
import {Card} from "./Card";

type GalleryProps = {
    isEmptyMessage?: string;
    items: TUser[];
}

/**
 * Description: Gallery component to display a list of users.
 */
export const Gallery: React.FC<GalleryProps>  = memo(({isEmptyMessage, items}) => {

const galleryContent = items.length > 0 ? (
    items.map(({ avatar_url, login, html_url, id, isChecked }) => (
        <Card key={id} avatar_url={avatar_url} login={login} html_url={html_url} id={id} isChecked={isChecked} />
    ))
    ) : (
    <p>{isEmptyMessage}</p>
    );

 return (
     <div className="gallery">
         {galleryContent}
     </div>
 )
})

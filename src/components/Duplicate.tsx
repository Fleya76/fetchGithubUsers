import React, { memo }  from 'react'
import '../styles/Svg.css';

type DuplicateProps = {
    onClick: () => void;
}

/**
 * Description: An svg component to duplicate an item.
 */
export const Duplicate: React.FC<DuplicateProps>  = memo(({onClick}) => {
    return (
        <svg className='duplicate' xmlns="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" version="1.1"  width="20px" height="20px"  onClick={onClick} aria-label="Duplicate">
            <path  d="M 3 2 L 3 12 L 6 12 L 6 14 L 14 14 L 14 7 L 11 4 L 10 4 L 8 2 L 3 2 Z M 4 3 L 7 3 L 7 4 L 6 4 L 6 11 L 4 11 L 4 3 Z M 7 5 L 10 5 L 10 8 L 13 8 L 13 13 L 7 13 L 7 5 Z"/>
        </svg>
    )
})

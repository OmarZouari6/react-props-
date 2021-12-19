import React from 'react';
import '../profile/photo.css';

const Photo = (props) => {
    return (
    <div>
        <img src={props.src} alt=''/>
        {props.children}
    </div>
    )
}
export default Photo ;


import React from 'react';
import style from './ComponentStyle.css';

function CardInfo(props) {

    return(
        <div className='card-title'>
            <p>{props.title}</p>
            <p>{props.subTitle}</p>
            <p>{props.region}</p>
        </div>
    );
}

export default CardInfo;
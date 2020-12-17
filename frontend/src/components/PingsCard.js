import React from 'react';
import CardInfo from './ContentCardInfo';
import style from './ComponentStyle.css';

function Card(props) {
    return(
    <div className="d-inline-block c-card">
        <img className="content-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
        {props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} />}
    </div>
    );
}

export default Card;
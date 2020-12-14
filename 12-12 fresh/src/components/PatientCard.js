import React from 'react';
import CardInfo from './PatientCardInfo';
import style from './ComponentStyle.css';

function Card(props) {
    return(
    <div className="d-inline-block c-card">
        <img className="patient-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
        {props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} age={props.item.age} percentFinished={props.item.percentFinished}/>}
    </div>
    );
}

export default Card;
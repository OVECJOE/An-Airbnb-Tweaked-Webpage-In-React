import React from 'react';

export default function Card(props) {
    return (
        <div className="exp-card">
            <img src={require(`../images/${props.img}`)} alt="" className="exp-card-img" />

            <div className="exp-card-stats">
                <span className="stats__rating">
                    <i className="fa-solid fa-star"></i>
                    {props.rating}
                </span>
                <span className="faded">({props.rating_score})&bull;{props.country}</span>
            </div>
            <h4 className="exp-card-topic">{props.topic}</h4>
            <p><span className="bold">From {`$${props.price}`}</span> / person</p>
        </div>
    )
}
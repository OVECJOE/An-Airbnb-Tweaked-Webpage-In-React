import React from 'react';

export default function HeroCard({photos, }) {
    return (
        <div className="hero-card">
            <div className="hero-pics">
                {photos.map(element => {
                    return <img
                        src={require(`../images/${element}`)} alt=""
                    />
                })}
            </div>
            <div className='hero-content'>
                <h1 className='title'>
                    Online Experiences
                </h1>
                <p className='hero-text'>
                    Join unique interactive activities led by
                    one-of-a-kind hosts — all without leaving home.
                </p>
            </div>
        </div>
    )
}
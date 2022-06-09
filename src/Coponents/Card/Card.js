import React from 'react';
import './Card.css'

const Card = ({ emoji, heading, Detail }) => {
    return (
        <div className='card'>
            <img src={emoji} alt="" />
            <span style={{ paddingTop: '15px' }}>{heading}</span>
            <p>{Detail}</p>
            <button className='c-button'>Learn More</button>
        </div>
    );
};

export default Card;
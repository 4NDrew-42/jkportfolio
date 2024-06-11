import React from 'react';
import './card.css';

function Card({ title, imageUrl, link, description }) {
    return (
        <div className="card">
            <a className="img-card" href={link}>
                <img src={imageUrl} alt={title} />
            </a>
            <div className="card-content">
                <h4 className="card-title">
                    <a href={link}>{title}</a>
                </h4>
                <p>{description}</p>
            </div>
            <div className="card-read-more">
                <a href={link} className="btn btn-link btn-block">
                    Read More
                </a>
            </div>
        </div>
    );
}

export default Card;

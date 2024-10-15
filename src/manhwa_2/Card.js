import React from 'react';
import '../App.css';

function ManhwaCard({ title, imageSrc, writer, genre, releaseYears, description }) {
    return (
        <div className="manhwa-card">
            <h2>{title}</h2>
            <img src={imageSrc} alt={title} className="manhwa-image" />
            <ul className="manhwa-details">
                <li><strong>Writer:</strong> {writer}</li>
                <li><strong>Genre:</strong> {genre}</li>
                <li><strong>Release Years:</strong> {releaseYears}</li>
            </ul>
            <p className="manhwa-description">{description}</p>
        </div>
    );
}

export default ManhwaCard;

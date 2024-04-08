import React from 'react'
import './ReleaseDate.style.css'

const ReleaseDate = ({ date }) => {
    const dateObj = new Date(date);
    const formattedDate = dateObj.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    return (
        <div className='release-date-container'>
            Release at {formattedDate}
        </div>
    )
}

export default ReleaseDate
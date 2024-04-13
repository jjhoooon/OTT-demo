import './GenreButton.style.css'
import { useState } from 'react';

const GenreButton = ({ genre, genreFilter, setGenreFilter }) => {

    const isSelected = genreFilter == genre.id

    const updateFilter = () => {
        if (isSelected) {
            setGenreFilter("")
        } else {
            setGenreFilter(genre.id)
        }
    }

    console.log("ggggg", genre)
    return (
        <button className={`button ${isSelected ? 'button-focused' : ''}`} onClick={updateFilter}>
            {genre.name}
        </button>
    )
}

export default GenreButton
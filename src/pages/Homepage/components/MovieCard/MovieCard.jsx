import { useState } from 'react'
import './MovieCard.style.css'
import ReleaseDate from './components/ReleaseDate'
import { Badge } from 'react-bootstrap'

let imagePath = `https://www.themoviedb.org/t/p/w1066_and_h600_bestv2`

const MovieCard = ({ movie }) => {


    return (
        <div className='movie-card-image' style={{
            backgroundImage: "url(" + `${imagePath + movie.backdrop_path}` + ")"
        }} >
            <ReleaseDate
                className='release-title'
                date={movie.release_date}
            />
            <div className='overlay'>
                <h3>{movie.title}</h3>
                <div>
                    <Badge bg="warning" style={{ color: 'black' }}>IMDb</Badge>
                    {movie.vote_average}
                </div>
            </div>
        </div>
    )
}

export default MovieCard
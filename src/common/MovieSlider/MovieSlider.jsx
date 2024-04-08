import React from 'react'
import './MovieSlider.style.css'
import Carousel from 'react-multi-carousel';
import MovieCard from '../MovieCard/MovieCard'

const MovieSlider = ({ title, movies, responsive }) => {

    console.log("mmm", movies)

    return (
        <div>
            <div className='movie-slider-title'>{title}</div>
            <Carousel
                infinite={true}
                centerMode={true}
                itemClass="movie-slider p-1"
                containerClass="carousel-container"
                responsive={responsive}
            >
                {movies?.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </Carousel>;
        </div>
    )
}

export default MovieSlider
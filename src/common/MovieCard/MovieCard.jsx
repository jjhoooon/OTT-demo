import { useState } from 'react'
import './MovieCard.style.css'
import ReleaseDate from './components/ReleaseDate/ReleaseDate'
import { Badge } from 'react-bootstrap'
import MovieInfoBadge from './components/MovieInfoBadge/MovieInfoBadge'
import { useMovieGenreQuery } from '../../hooks/useMovieGenre'
import { useNavigate } from 'react-router-dom'

let imagePath = `https://www.themoviedb.org/t/p/w1066_and_h600_bestv2`

const MovieCard = ({ movie }) => {
    const navigate = useNavigate()

    const showMovieDetail = (id) => {
        navigate(`/movies/${id}`)
    }

    const { data: genreData } = useMovieGenreQuery()
    const movie_genre_id = movie.genre_ids

    const showGenre = (genreIdList) => {
        if (!genreData) return []
        const genreNameList = genreIdList.map((id) => {
            const genreObj = genreData.find((genre) => genre.id === id)
            return genreObj.name
        })

        return genreNameList
    }

    const movie_score = movie.vote_average.toFixed(1)
    const movie_vote = movie.vote_count
    const movie_popularity = Math.floor(movie.popularity)

    return (
        <div className='movie-card-image' style={{
            backgroundImage: "url(" + `${imagePath + movie.backdrop_path}` + ")"
        }}
            onClick={() => showMovieDetail(movie.id)}
        >
            <ReleaseDate
                className='release-title'
                date={movie.release_date}
            />
            <div className='overlay'>
                <div>{movie.title}</div>
                {showGenre(movie_genre_id).map((genre, idx) => (
                    <MovieInfoBadge key={idx} title={genre} bg="danger" color="black" info="" />
                ))}
                {movie.adult && <MovieInfoBadge title="Adult Only" bg="danger" color="white" info="" />}
                <MovieInfoBadge title="LIKES" bg="success" color="black" info={movie_vote} />
                <MovieInfoBadge title="SCORE" bg="warning" color="black" info={movie_score} />
                <MovieInfoBadge title="POPULARITY" bg="secondary" color="black" info={movie_popularity} />

            </div>
        </div>
    )
}

export default MovieCard
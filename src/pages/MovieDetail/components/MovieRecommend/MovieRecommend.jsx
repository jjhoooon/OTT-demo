import MovieCard from '../../../../common/MovieCard/MovieCard'
import './MovieRecommend.style.css'

const MovieRecommend = ({ recommends }) => {
    console.log("추천 영화", recommends)
    return (
        <div>
            {recommends.map((recommend, id) => (
                <MovieCard key={id} movie={recommend} />
            ))}
        </div>
    )
}

export default MovieRecommend
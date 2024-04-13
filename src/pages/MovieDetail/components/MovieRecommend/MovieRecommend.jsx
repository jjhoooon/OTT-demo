import MovieCard from '../../../../common/MovieCard/MovieCard'
import MovieSlider from '../../../../common/MovieSlider/MovieSlider'
import { responsive } from '../../../../constants/responsive'
import './MovieRecommend.style.css'

const MovieRecommend = ({ recommends }) => {
    console.log("추천 영화", recommends)
    return (
        <div>
            {/* {recommends.map((recommend, id) => (
                <MovieCard key={id} movie={recommend} />
            ))} */}
            <MovieSlider title="Recommend Movies" movies={recommends} responsive={responsive} />
        </div>
    )
}

export default MovieRecommend
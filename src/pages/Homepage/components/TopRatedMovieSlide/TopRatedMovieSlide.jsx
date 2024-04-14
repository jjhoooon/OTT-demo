import { useTopRatedMovies } from "../../../../hooks/useTopRatedMovies";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider"
import 'react-multi-carousel/lib/styles.css';
import { responsive } from "../../../../constants/responsive";
import { Alert } from 'bootstrap'

const TopRatedMovieSlide = () => {

    const { data, isLoading, isError, error } = useTopRatedMovies()

    if (isLoading) {
        return <h1></h1>
    }
    if (isError) {
        return <Alert variant="danger">{error.message}</Alert>
    }

    return (
        <div>
            <MovieSlider title="Top Rated Movies" movies={data.results} responsive={responsive} />
        </div>
    )
}

export default TopRatedMovieSlide
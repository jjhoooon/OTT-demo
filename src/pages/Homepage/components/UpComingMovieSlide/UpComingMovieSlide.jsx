import { usePopularMoviesQuery } from "../../../../hooks/useUpComingMovies"
import MovieSlider from "../../../../common/MovieSlider/MovieSlider"
import 'react-multi-carousel/lib/styles.css';
import { responsive } from "../../../../constants/responsive";
import { Alert } from 'bootstrap'

const UpComingMovieSlide = () => {

    const { data, isLoading, isError, error } = usePopularMoviesQuery()

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (isError) {
        return <Alert variant="danger">{error.message}</Alert>
    }

    return (
        <div>
            <MovieSlider title="Upcoming Movies" movies={data.results} responsive={responsive} />
        </div>
    )
}

export default UpComingMovieSlide
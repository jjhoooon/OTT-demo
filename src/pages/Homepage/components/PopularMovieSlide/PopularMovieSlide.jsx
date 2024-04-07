import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies"
import "./PopularMovieSlide.style.css"
import { Alert } from 'bootstrap'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from "../MovieCard/MovieCard";

const PopularMovieSlide = () => {

    const { data, isLoading, isError, error } = usePopularMoviesQuery()

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        }
    };

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (isError) {
        return <Alert variant="danger">{error.message}</Alert>
    }

    console.log(data.results[0].title)

    return (
        <div className="movie-slide">
            <h3>Popular Movies</h3>
            <Carousel
                infinite={true}
                centerMode={true}
                itemClass="movie-slider p-1"
                containerClass="carousel-container"
                responsive={responsive}
            >
                {data?.results.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </Carousel>;
        </div>
    )
}

export default PopularMovieSlide
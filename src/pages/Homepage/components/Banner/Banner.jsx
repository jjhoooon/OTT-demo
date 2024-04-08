import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import Alert from 'react-bootstrap/Alert';
import './Banner.style.css'
// 1. loading spinner
const Banner = () => {
    const { data, isLoading, isError, error } = usePopularMoviesQuery()
    console.log("ddd", data, isLoading, isError, error)
    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (isError) {
        return <Alert variant='danger'>{error.message}</Alert>
    }

    let poster_path = data.results[0].poster_path
    let title = data?.results[0].title
    let overview = data?.results[0].overview

    return (
        <div className='banner' style={{
            backgroundImage: "url(https://media.themoviedb.org/t/p/w533_and_h300_bestv2/" + `${poster_path}` + ")"
        }}>
            <div className='text-white banner-text-area'>
                <div className='banner-title'>{title}</div>
                <div className='banner-overview'>{overview}</div>
            </div>
        </div>
    )
}

export default Banner
import { useState } from 'react'
import { useParams } from "react-router-dom"
import { useMovieDetailQuery } from '../../hooks/useMovieDetail'
import { useMovieReviewQuery } from '../../hooks/useMovieReview'
import MovieDetailCard from '../../common/MovieDetailCard/MovieDetailCard'
import MovieReview from './components/MovieReview/MovieReview'
import { useRecommendMovies } from '../../hooks/useRecommendMovies'
import MovieRecommend from './components/MovieRecommend/MovieRecommend'
import Container from 'react-bootstrap/Container'
import './MovieDetailPage.style.css'
import { useMovieVideoQuery } from '../../hooks/useMovieVideo'
import Spinner from 'react-bootstrap/Spinner';

const MovieDetailPage = () => {

    let { id } = useParams()
    const [tabState, setTabState] = useState("review")


    const { data: md, isLoading, isError, error } = useMovieDetailQuery({ id })
    const { data: reviews } = useMovieReviewQuery({ id })
    const { data: recommends } = useRecommendMovies({ id })
    const { data: videos } = useMovieVideoQuery({ id })

    let poster_path = 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2' + md?.poster_path

    const detailInfo = {
        id: id,
        poster_path: poster_path,
        title: md?.original_title,
        popularity: md?.popularity,
        overview: md?.overview,
        budget: md?.budget,
        release_date: md?.release_date,
    }


    // console.log("iii", id) //movieId 로 할때는 왜 undefined??

    // console.log("dada", detailInfo)

    if (isLoading) {
        return <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    }
    if (isError) {
        return <div>{error.message}</div>
    }

    const handleTab = (tabName) => {
        setTabState(tabName)
    }


    return (
        <Container>
            <MovieDetailCard detailInfo={detailInfo} videos={videos} />
            <button className='detail-tab-button' onClick={() => handleTab("review")}>리뷰</button>
            <button className='detail-tab-button' onClick={() => handleTab("recommend")}>추천</button>
            {tabState == "review" && <MovieReview reviews={reviews} />}
            {tabState == "recommend" && <MovieRecommend recommends={recommends} />}
        </Container>
    )
}

export default MovieDetailPage
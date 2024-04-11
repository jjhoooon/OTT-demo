import React from 'react'
import { useParams } from "react-router-dom"
import { useMovieDetailQuery } from '../../hooks/useMovieDetail'
// 1. MovieCard 클릭하면, MovieDetailPage로 넘어간다.
//useNavigate() : complete

// 2. url의 :id 값을 가져온다. :complete
// 가져온 id에 해당하는 movieDetail 정보를 받아온다.
// -> api 호출 커스텀 훅 만들자

const MovieDetailPage = () => {

    let { id } = useParams()

    const { data, isLoading, isError, error } = useMovieDetailQuery({ id })
    //위에 왜 구조 분해 해야지 data 받아옴?

    console.log("iii", id) //movieId 로 할때는 왜 undefined??

    console.log("dada", data)

    if (isLoading) {
        return <div>isLoading</div>
    }

    if (isError) {
        return <div>{error.message}</div>
    }

    return (
        <div>MovieDetailPage : {id}</div>
    )
}

export default MovieDetailPage
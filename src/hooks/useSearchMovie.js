import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

const fetchSearchedMovie = ({ keyword }) => {
    //키워드가 있고 없고의 분기 지점.
    //상황에 따라 2개의 다른 url을 호출.
    return keyword ? api.get(`search/movie?query=${keyword}`)
        : api.get('/movie/popular')


}

export const useSearchMovieQuery = ({ keyword }) => {
    return useQuery({
        queryKey: ['movie-search', keyword],
        queryFn: () => fetchSearchedMovie({ keyword }), //여기는 왜 콜백함수?
        select: (result) => result.data
    })
}
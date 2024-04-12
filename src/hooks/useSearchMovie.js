import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

const fetchSearchedMovie = ({ keyword, page }) => {
    //키워드가 있고 없고의 분기 지점.
    //상황에 따라 2개의 다른 url을 호출.
    return keyword ? api.get(`search/movie?query=${keyword}&page=${page}&language=ko-KR`)
        : api.get(`/movie/popular?page=${page}`)


}

export const useSearchMovieQuery = ({ keyword, page }) => {
    return useQuery({
        queryKey: ['movie-search', { keyword, page }],
        queryFn: () => fetchSearchedMovie({ keyword, page }), //여기는 왜 콜백함수?
        select: (result) => result.data
    })
}
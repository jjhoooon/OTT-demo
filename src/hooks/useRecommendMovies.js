import { useQuery } from '@tanstack/react-query'
import api from '../utils/api'

const fetchRecommendMovies = ({ id }) => {
    return api.get(`movie/${id}/recommendations`)
}

export const useRecommendMovies = ({ id }) => {
    return useQuery({
        queryKey: ['movie-recommend', id],
        queryFn: () => fetchRecommendMovies({ id }),
        select: (result) => result.data.results
    })
}

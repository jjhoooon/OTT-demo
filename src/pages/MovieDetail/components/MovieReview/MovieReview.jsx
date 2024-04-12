import MovieReviewCard from '../../../../common/MovieReviewCard/MovieReviewCard'
import './MovieReview.style.css'

const MovieReview = ({ reviews }) => {

    console.log("rsrs", reviews)

    return (
        <div>
            {reviews?.map((review, id) => (
                <MovieReviewCard key={id} review={review} />
            ))}
        </div>
    )
}

export default MovieReview
import './MovieReviewCard.style.css'

const MovieReviewCard = ({ review }) => {

    console.log("aaa", review.author)

    return (
        <div>
            <h1>{review.author}</h1>
            <div>{review.content}</div>
        </div>
    )
}

export default MovieReviewCard
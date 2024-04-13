import { useState } from 'react'
import './MovieReviewCard.style.css'

const MovieReviewCard = ({ review }) => {

    console.log("aaa", review.author)

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <div>
            <h1>{review.author}</h1>
            {/* <div>{review.content}</div> */}
            <div className={`content ${isExpanded ? 'expanded' : 'collapsed'}`}>
                {review.content}
            </div>
            {review.content.split('\n').length > 2 &&
                <button onClick={toggleExpand}>
                    {isExpanded ? '접기' : '더보기'}
                </button>
            }
        </div>
    )
}

export default MovieReviewCard
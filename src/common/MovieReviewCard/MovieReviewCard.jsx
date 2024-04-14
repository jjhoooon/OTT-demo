import { useState } from 'react'
import './MovieReviewCard.style.css'
import { ReactComponent as AuthorLogo } from '../../assets/author.svg'

const MovieReviewCard = ({ review }) => {

    // console.log("aaa", review.author)

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <div className='review-card-container'>
            <div className='review-author'>
                <AuthorLogo className='author-logo' />
                {review.author}
            </div>
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
import './MovieDetailCard.style.css'

const MovieDetailCard = ({ detailInfo }) => {
    const { poster_path, title, popularity, overview, budget, release_date } = detailInfo
    console.log("dddd", poster_path, title, popularity, overview, budget, release_date)
    return (
        <div>
            <div className='movie-detail-image' style={{
                backgroundImage: `url(${poster_path})`
            }}></div>
            <div className='right'>
                <div className='title'>{title}</div>
                <div className='popularity'>{popularity}</div>
                <div className='overview'>{overview}</div>
                <div className='budget'>{budget}</div>
                <div className='release_date'>{release_date}</div>
            </div>
        </div>
    )
}

export default MovieDetailCard

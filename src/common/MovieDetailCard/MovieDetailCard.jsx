import './MovieDetailCard.style.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ReactComponent as PopularityLogo } from '../../assets/popularity.svg'


function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const MovieDetailCard = ({ detailInfo }) => {
    console.log("detailInfo", detailInfo)
    const { poster_path, title, popularity, overview, budget, release_date } = detailInfo

    const date = new Date(release_date)
    let release_year = date.getFullYear()

    let movie_budget = formatNumber(budget)

    return (
        <Container style={{ maxWidth: '1500px' }}>
            <Row>
                <Col lg={3}>
                    <div className='movie-detail-image' style={{
                        backgroundImage: `url(${poster_path})`
                    }}></div>
                </Col>
                <Col lg={9}>
                    <div className='title'>{title} ({release_year})</div>
                    <div className='popularity'>
                        <PopularityLogo className='logo' />
                        {popularity}
                    </div>
                    <div className='overview'>
                        <h3>개요</h3>
                        {overview}
                    </div>
                    <div className='budget'>
                        {movie_budget}
                    </div>
                    <div className='release_date'>{release_date}</div>
                </Col>
            </Row>
        </Container>
    )
}

export default MovieDetailCard

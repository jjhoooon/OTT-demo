import './MovieDetailCard.style.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const MovieDetailCard = ({ detailInfo }) => {
    const { poster_path, title, popularity, overview, budget, release_date } = detailInfo
    console.log("dddd", poster_path, title, popularity, overview, budget, release_date)
    return (
        <Container style={{ maxWidth: '960px' }}>
            <Row>
                <Col lg={4}>
                    <div className='movie-detail-image' style={{
                        backgroundImage: `url(${poster_path})`
                    }}></div>
                </Col>
                <Col lg={8}>
                    <div className='title'>{title}</div>
                    <div className='popularity'>{popularity}</div>
                    <div className='overview'>{overview}</div>
                    <div className='budget'>{budget}</div>
                    <div className='release_date'>{release_date}</div>
                </Col>
            </Row>
        </Container>
    )
}

export default MovieDetailCard

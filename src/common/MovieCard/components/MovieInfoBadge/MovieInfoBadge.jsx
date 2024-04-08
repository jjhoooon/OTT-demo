import './MovieInfoBadge.style.css'
import { Badge } from 'react-bootstrap'

const MovieInfoBadge = ({ title, bg, color, info }) => {
    return (
        <div className='movie-info-container'>
            <Badge bg={bg} style={{ color: color }}>{title}</Badge>
            <div className='info-content'>{info}</div>
        </div>
    )
}

export default MovieInfoBadge
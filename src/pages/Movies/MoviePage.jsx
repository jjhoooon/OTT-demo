import { useEffect, useState } from 'react'
import { useSearchMovieQuery } from '../../hooks/useSearchMovie'
import { useSearchParams } from 'react-router-dom'
import { Alert } from 'bootstrap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MovieCard from '../../common/MovieCard/MovieCard'
import ReactPaginate from 'react-paginate';
import { useMovieGenreQuery } from '../../hooks/useMovieGenre'
import GenreButton from './components/GenreButton/GenreButton'
import './MoviePage.style.css'
import Spinner from 'react-bootstrap/Spinner';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const MoviePage = () => {
    const [sortOrder, setSortOrder] = useState("")
    const [query, setQuery] = useSearchParams()
    const [page, setPage] = useState(1)
    const [genreFilter, setGenreFilter] = useState("")
    const [filteredMovies, setFilteredMovies] = useState([])
    const keyword = query.get("q")

    const { data, isLoading, isError, error } = useSearchMovieQuery({ keyword, page })
    const { data: genreData } = useMovieGenreQuery()


    const handlePageClick = (page) => {
        console.log("ppp", page)
        setPage(page.selected + 1)
    }

    const handleSortMovie = (order) => {
        setSortOrder(order)
    }

    useEffect(() => {
        if (genreFilter) {
            const filtered = data?.results.filter(movie => movie.genre_ids.includes(parseInt(genreFilter)));
            setFilteredMovies(filtered);
        } else {
            setFilteredMovies(data?.results);
        }
    }, [data, genreFilter, sortOrder]);



    if (sortOrder === "popularity-asc") {
        data?.results.sort((a, b) => a.popularity - b.popularity)
    }

    if (sortOrder === "popularity-dsc") {
        data?.results.sort((a, b) => b.popularity - a.popularity)
    }

    if (sortOrder === "vote-asc") {
        data?.results.sort((a, b) => a.vote - b.vote)
    }

    if (sortOrder === "vote-dsc") {
        data?.results.sort((a, b) => b.vote - a.vote)
    }

    if (sortOrder === "release-asc") {
        data?.results.sort((a, b) => {
            const dateA = new Date(a.release_date);
            const dateB = new Date(b.release_date);
            return dateA - dateB;
        });
    }

    if (sortOrder === "release-dsc") {
        data?.results.sort((a, b) => {
            const dateA = new Date(a.release_date);
            const dateB = new Date(b.release_date);
            return dateB - dateA;
        });
    }

    if (isLoading) {
        return <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    }

    if (isError) {
        return <Alert variant="danger">{error.message}</Alert>
    }

    return (
        <Container>
            <Row>
                <Col lg={4} xs={12}>
                    <div>
                        {genreData?.map((genre, index) =>
                            <GenreButton key={index} genre={genre} genreFilter={genreFilter} setGenreFilter={setGenreFilter} />
                        )}
                    </div>
                    <DropdownButton variant='secondary' className='sort-button custom-dropdown' title="정렬기준">
                        <Dropdown.Item onClick={() => handleSortMovie("popularity-asc")}>인기도 오름차순</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleSortMovie("popularity-dsc")}>인기도 내림차순</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleSortMovie("vote-asc")}>투표 오름차순</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleSortMovie("vote-dsc")}>투표 내림차순</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleSortMovie("release-asc")}>출시일 오름차순</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleSortMovie("release-dsc")}>출시일 내림차순</Dropdown.Item>
                    </DropdownButton>
                </Col>
                <Col lg={8} xs={12}>
                    <Row>
                        {genreFilter && filteredMovies.map((movie, index) => movie.backdrop_path &&
                            <Col className='movie-card-container' key={index} lg={4} xs={12}>
                                <MovieCard className='mobile-card' movie={movie} />
                            </Col>)}
                        {!genreFilter && data?.results.map((movie, index) => movie.backdrop_path &&
                            <Col className='movie-card-container' key={index} lg={4} xs={12}>
                                <MovieCard className='mobile-card' movie={movie} />
                            </Col>)}
                    </Row>
                </Col>
            </Row>
            <div className='pagination-container'>
                <ReactPaginate
                    nextLabel="NEXT"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={1}
                    pageCount={data?.total_pages} // 전체 페이지 수
                    previousLabel="PREVIOUS"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                    forcePage={page - 1}
                />
            </div>
        </Container>
    )
}

export default MoviePage
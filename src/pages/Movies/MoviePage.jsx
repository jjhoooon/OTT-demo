import { useEffect, useState } from 'react'
import { useSearchMovieQuery } from '../../hooks/useSearchMovie'
import { useSearchParams } from 'react-router-dom'
import { Alert } from 'bootstrap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MovieCard from '../../common/MovieCard/MovieCard'
import ReactPaginate from 'react-paginate';
// 경로 2가지
// navBar에서 클릭해서 온경우 => popularMovie 보여주기
// keyword를 입력해서 온경우 => keyword와 관련된 영화들을 보여줌

// 페이지네이션 설치
// page state 만들기
// 페이지네이션 클릭할때마다 page 바꿔주기
// page 값이 바뀔때 마다 useSearchMovie에 page까지 넣어서 fetch
const MoviePage = () => {
    const [sortOrder, setSortOrder] = useState(false)
    const [query, setQuery] = useSearchParams()
    const [page, setPage] = useState(1)
    const keyword = query.get("q")

    const { data, isLoading, isError, error } = useSearchMovieQuery({ keyword, page })

    const handlePageClick = (page) => {
        console.log("ppp", page)
        setPage(page.selected + 1)
    }

    const handleSortMovie = () => {
        setSortOrder(true)
        if (sortOrder) {
            setSortOrder(false)
        }
    }

    useEffect(() => {

    }, [sortOrder])

    if (sortOrder) {
        data?.results.sort((a, b) => a.popularity - b.popularity)
    }

    if (!sortOrder) {
        data?.results.sort((a, b) => b.popularity - a.popularity)
    }


    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (isError) {
        return <Alert variant="danger">{error.message}</Alert>
    }


    console.log("aaa", data)
    return (
        <Container>
            <Row>
                <Col lg={4} xs={12}>
                    <button onClick={handleSortMovie}>인기도 오름차순 정렬</button>
                </Col>
                <Col lg={8} xs={12}>
                    {/* 카드의 정렬을 위한 Row */}
                    <Row>
                        {data?.results.map((movie, index) => movie.backdrop_path &&
                            <Col key={index} lg={4} xs={12}>
                                <MovieCard movie={movie} />
                            </Col>)}
                    </Row>
                </Col>
                <ReactPaginate
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={data?.total_pages} //전체 페이지
                    previousLabel="< previous"
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
            </Row>
        </Container>
    )
}

export default MoviePage
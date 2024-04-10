import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, useNavigate } from "react-router-dom"
import './AppLayout.style.css'
import { ReactComponent as Logo } from '../assets/jhoon_logo.svg'
import { useState } from 'react';

const AppLayout = () => {
    const [keyword, setKeyword] = useState("")
    const navigate = useNavigate()

    const searchByKeyword = (event) => {
        event.preventDefault() // refresh 막기
        //url을 바꿔주기
        navigate(`/movies?q=${keyword}`)
        setKeyword("")
    }
    return (
        <div>
            <Navbar expand="lg" className="navbar-main-container" >
                <Container className='navbar-main-container' fluid>
                    <Navbar.Brand href="/">
                        <Logo width={150} height={80} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link className="nav-link" href="/">Home</Nav.Link>
                            <Nav.Link className="nav-link" href="/movies">Movie</Nav.Link>
                        </Nav>
                        <Form className="d-flex" onSubmit={searchByKeyword}>
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                data-bs-theme="dark"
                                value={keyword}
                                onChange={(event) => setKeyword(event.target.value)}
                            />
                            <Button variant="outline-danger" type='submit'>Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </div>
    )
}

export default AppLayout
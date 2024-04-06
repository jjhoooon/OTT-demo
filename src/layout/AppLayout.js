import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from "react-router-dom"
import './AppLayout.style.css'

const AppLayout = () => {
    return (
        <div>
            <Navbar expand="lg" className="navbar-main-container" >
                <Container className='navbar-main-container' fluid>
                    <Navbar.Brand href="/">
                        <img
                            src='data:image/jpeg;base64,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'
                            width={120}
                            height={60}
                        />
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
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                data-bs-theme="dark"
                            />
                            <Button variant="outline-danger">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </div>
    )
}

export default AppLayout
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Root() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">t4tclt</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about_us">About Us</Nav.Link>
                            <Nav.Link href="#events_calendar">Events Calendar</Nav.Link>
                            <NavDropdown title="Resources" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action4">
                                    Placeholder 1
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action5">
                                    Placeholder 2
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
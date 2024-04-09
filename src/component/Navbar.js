import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Navbars() {
    const [expanded, setExpanded] = useState(false);

    const handleNavbarToggle = () => {
        setExpanded(!expanded);
    };

    return (
        <Navbar
            expand="lg"
            expanded={expanded}
            className="d-flex align-items-center"
            data-bs-theme="dark"
            style={{ backgroundColor: 'black', zIndex: 100 }}
        >
            <Container>
                <Navbar.Brand
                    href="#"
                    style={{ fontFamily: 'Racing Sans One', fontSize: '1.2rem', textTransform: 'uppercase', color: 'rgb(173, 173, 173)' }}
                >
                    Ultra Gym
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    onClick={handleNavbarToggle}
                    style={{ border: 'none', outline: 'none' }} // Remove border and outline
                />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="mx-auto">
                        {/* Use Link from react-router-dom instead of Nav.Link */}
                        <Nav.Link as={Link} to="/" style={{ fontFamily: 'Racing Sans One', fontSize: '1.2rem' }}>Home</Nav.Link>
                        <Nav.Link as={Link} to="/about" style={{ fontFamily: 'Racing Sans One', fontSize: '1.2rem' }}>About</Nav.Link>
                        <Nav.Link as={Link} to="/contact" style={{ fontFamily: 'Racing Sans One', fontSize: '1.2rem' }}>Contact Us</Nav.Link>
                        <Nav.Link as={Link} to="/register" style={{ fontFamily: 'Racing Sans One', fontSize: '1.2rem' }}>Register</Nav.Link>
                        {/* <Nav.Link as={Link} to="/login" style={{ fontFamily: 'Racing Sans One', fontSize: '1.2rem' }}>Login</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbars;

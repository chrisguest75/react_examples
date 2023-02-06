import styles from './navbar.module.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">TestCard Generator</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Resolutions" id="basic-nav-dropdown">
              <NavDropdown.Item href="testcard16_9">1920x1080 16:9</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">1440x1080 4:3</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">1350x1080 5:4</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
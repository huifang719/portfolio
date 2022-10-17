import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaHome, FaUserAlt, FaCode, FaEnvelope, FaLaptop } from 'react-icons/fa'
import { IconContext } from 'react-icons'

function MyNavbar() {
  return (
    <IconContext.Provider value={{color:"lightgrey"}}>
      <Navbar variant="dark" expand="lg" style={{height:"5rem"}}>
        <Container fluid>
          <Navbar.Brand href="../pages/home">Huifang GU</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-end">
              <Nav.Link href="../pages/home"><FaHome /> Home</Nav.Link>
              <Nav.Link href="../pages/about"><FaUserAlt /> About Me</Nav.Link>
              <Nav.Link href="../pages/skills"><FaCode /> My Skills</Nav.Link>
              <Nav.Link href="../pages/projects"><FaLaptop /> My Projects</Nav.Link>
              <Nav.Link href="../pages/contact"><FaEnvelope />Contact Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </IconContext.Provider>
  );
}

export default MyNavbar;
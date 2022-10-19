import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaHome, FaUserAlt, FaCode, FaEnvelope, FaLaptop } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import brand from '../images/brand.png'

function MyNavbar() {
  return (
    <IconContext.Provider value={{color:"lightgrey"}}>
      <Navbar variant="dark" expand="lg">
        <Container fluid style={{height:"5rem"}}>
          <Navbar.Brand href="../pages/home"><img src={brand} style={{height:"70px", width:"auto"}} alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-end" style={{ width: "90%" }}>
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
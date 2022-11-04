import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaHome, FaUserAlt, FaCode, FaEnvelope, FaLaptop } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import brand from '../images/brand.png'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"


function MyNavbar() {
  return (
    <IconContext.Provider value={{color:"lightgrey"}}>
      <Navbar variant="dark" expand="lg">
        <Container fluid >
          <Navbar.Brand className='sm-ms-0 md-ms-4 lg-ms-6' as={Link} to="/">
            <motion.div
              animate={{rotate: [0,360,360,0],x:[0,180,180,0]}}
              transition={{duration:2, repeat:Infinity}}>
                <img src={brand} style={{height:"70px", width:"auto", marginLeft:"1rem"}} alt="" />
            </motion.div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-end" style={{ width: "90%" }}>
              <Nav.Link as={Link} to ="/"><FaHome /> Home</Nav.Link>
              <Nav.Link as={Link} to="../about"><FaUserAlt /> About Me</Nav.Link>
              <Nav.Link as={Link} to="../skills"><FaCode /> My Skills</Nav.Link>
              <Nav.Link as={Link} to="../projects"><FaLaptop /> My Projects</Nav.Link>
              <Nav.Link as={Link} to="../contact"><FaEnvelope /> Contact Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </IconContext.Provider>
  );
}

export default MyNavbar;
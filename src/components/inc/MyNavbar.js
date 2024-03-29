import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  FaHome, FaUserAlt, FaCode, FaEnvelope, FaLaptop,
} from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import brand from '../images/brand.png';

function MyNavbar() {
  const [expanded, setExpanded] = useState(false);
  return (
    <IconContext.Provider value={{ color: 'lightgrey' }}>
      <Navbar expanded={expanded} variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand className="sm-ms-0 md-ms-4 lg-ms-6" as={Link} to="/">
            <motion.div
              animate={{ rotate: [0, 360, 360, 0], x: [0, 180, 180, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <img src={brand} style={{ height: '70px', width: 'auto', marginLeft: '1rem' }} alt="" />
            </motion.div>
          </Navbar.Brand>
          <Navbar.Toggle onClick={() => setExpanded(expanded ? false : 'expanded')} aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-end" style={{ width: '90%' }}>
              <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/">
                <FaHome />
                Home
              </Nav.Link>
              <Nav.Link onClick={() => setExpanded(false)} as={Link} to="../about">
                <FaUserAlt />
                About Me
              </Nav.Link>
              <Nav.Link onClick={() => setExpanded(false)} as={Link} to="../skills">
                <FaCode />
                My Skills
              </Nav.Link>
              <Nav.Link onClick={() => setExpanded(false)} as={Link} to="../projects">
                <FaLaptop />
                My Projects
              </Nav.Link>
              <Nav.Link onClick={() => setExpanded(false)} as={Link} to="../contact">
                <FaEnvelope />
                Contact Me
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </IconContext.Provider>
  );
}

export default MyNavbar;

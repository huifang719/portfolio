import { motion } from "framer-motion"
import { Col, Container, Row } from "react-bootstrap"
import './skills.css'
import css from "./images/css.png"
import javascript from "./images/js.png"
import html from "./images/html.png"
import python from './images/python.png'
import ruby from './images/ruby.png'
import psql from './images/psql.png'
import react from './images/react.png'
import bootstrap from './images/bootstrap.png'
import indesign from './images/indesign.png'
import ps from './images/ps.png'
import illustrator from './images/illustrator.png'
import express from './images/express.png'
import fm from './images/fm.png'
import jest from './images/jest.png'
import nodejs from './images/nodejs.png'
import sinatra from './images/sinatra.png'
import pr from './images/pr.png'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function Skills() {
  const skillsVariants = {
    hidden: {
      y: '50vw',
      x: 100,
      opacity:0,
      scale:0
    },
    visible: {
      y:0,
      x:0,
      scale:1,
      opacity:0.8,
      transition: {
        delay:0.2,
        type:"spring",
        duration:6
      }
    },
    hover: {
      scale:1.4,
      opacity:1,
      transition: {
        type:"spring",
        yoyo: 5
      }
    }  
  }

  return(
    <Container className="mt-4">
      <Row xs={1} md={3}>
        <Col style={{border:"1px solid lightgrey", height:"70vh",color:"lightgrey"}}>
          <h3 className="text-center">Languages</h3>
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip>
                JavaScript
              </Tooltip>
            }
          >
            <motion.img src={javascript} id="js" style={{width:"20%"}} 
              variants={skillsVariants}
              initial='hidden'
              animate='visible'
              whileHover="hover">
            </motion.img> 
          </OverlayTrigger>

          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip>
                Python
              </Tooltip>
            }
          >
            <motion.img src={python} id="python" style={{width:"15%"}}
              variants={skillsVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover">  
            </motion.img>
          </OverlayTrigger>
          
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip>
                Ruby
              </Tooltip>
            }
          >
            <motion.img src={ruby} id="ruby" style={{width:"15%"}}
              variants={skillsVariants}
              initial="hidden"
              animate="visible"
              whileHover='hover'>
            </motion.img>
          </OverlayTrigger>

          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip>
                HTML
              </Tooltip>
            }
          >
            <motion.img src={html} id="html" style={{width:"15%"}}
              variants={skillsVariants}
              initial="hidden"
              animate="visible"
              whileHover='hover'>
            </motion.img>
          </OverlayTrigger>
          
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip>
                CSS
              </Tooltip>
            }
          >
            <motion.img src={css} id="css" style={{width:"15%"}}
              variants={skillsVariants}
              initial="hidden"
              animate="visible"
              whileHover='hover'>
            </motion.img>
          </OverlayTrigger>
          
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip>
                PostgreSQL
              </Tooltip>
            }
          >
            <motion.img src={psql} id="psql" style={{width:"20%"}}
              variants={skillsVariants}
              initial="hidden"
              animate="visible"
              whileHover='hover'>
            </motion.img>
          </OverlayTrigger>
          
        </Col>
        <Col style={{border:"1px solid lightgrey", height:"70vh", color:"lightgrey"}}>
          <h3 className="text-center">Frameworks & Libraries</h3>
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip>
                React JS
              </Tooltip>
            }
          >
            <motion.img src={react} id="react" style={{width:"20%"}}
              variants={skillsVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"> 
            </motion.img>
          </OverlayTrigger>

          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip>
                Bootstrap
              </Tooltip>
            }
          >
            <motion.img src={bootstrap} id="bootstrap" style={{width:"15%"}}
              variants={skillsVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"> 
            </motion.img> 
          </OverlayTrigger>

          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip>
                Node JS
              </Tooltip>
            }
          >
            <motion.img src={nodejs} id="nodejs" style={{width:"15%"}}
              variants={skillsVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"> 
            </motion.img>
          </OverlayTrigger>

          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip>
                Express
              </Tooltip>
            }
          >
            <motion.img src={express} id="express" style={{width:"20%"}}
              variants={skillsVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"> 
            </motion.img>  
          </OverlayTrigger>

          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip>
                Sinatra
              </Tooltip>
            }
          >
            <motion.img src={sinatra} id="sinatra" style={{width:"15%"}}
              variants={skillsVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"> 
            </motion.img>  
          </OverlayTrigger>
          
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip>
                Jest
              </Tooltip>
            }
          >
            <motion.img src={jest} id="jest" style={{width:"15%"}}
              variants={skillsVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"> 
            </motion.img>  
          </OverlayTrigger>
     
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip>
                Framer Motion
              </Tooltip>
            }
          >
            <motion.img src={fm} id="fm" style={{width:"15%"}}
              variants={skillsVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"> 
            </motion.img>
          </OverlayTrigger>
        </Col>
        <Col style={{border:"1px solid lightgrey", height:"70vh",color:"lightgrey"}}>
          <h3 className="text-center">Other Skills</h3>
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip>
                InDesign
              </Tooltip>
            }
          >
            <motion.img src={indesign} id="indesign" style={{width:"15%"}}
              variants={skillsVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover">          
            </motion.img>
          </OverlayTrigger>

          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip>
                Illustrator
              </Tooltip>
            }
          >
            <motion.img src={illustrator} id="illustrator" style={{width:"15%"}}
              variants={skillsVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"> 
            </motion.img>
          </OverlayTrigger>

          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip>
                PhotoShop
              </Tooltip>
            }
          >
            <motion.img src={ps} id="ps" style={{width:"15%"}}
              variants={skillsVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"> 
            </motion.img>
          </OverlayTrigger>
          
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip>
                Premiere
              </Tooltip>
            }
          >
            <motion.img src={pr} id="pr" style={{width:"15%"}}
              variants={skillsVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"> 
            </motion.img>
          </OverlayTrigger>
          
          
          
        </Col>
      </Row>
    </Container>
  )
}

export default Skills
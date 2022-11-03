import { motion } from "framer-motion"
import { Col, Row } from "react-bootstrap"
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
      opacity:0.5,
      transition: {
        delay:0.2,
        type:"spring",
        duration:8
      }
    },
    hover: {
      rotate:[0,240,120,360],
      opacity:1,
      transition: {
        type:"spring",
        yoyo: 5
      }
    }  
  }

  return(
    <Row xs={1} md={3}>
      <Col style={{border:"1px solid lightgrey", height:"70vh",color:"lightgrey"}}>
        <h3 className="text-center">Languages</h3>
        <motion.img src={javascript} id="js" style={{width:"20%"}} 
          variants={skillsVariants}
          initial='hidden'
          animate='visible'
          whileHover="hover">
        </motion.img>  
        <motion.img src={python} id="python" style={{width:"10%"}}
          variants={skillsVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover">  
        </motion.img>
        <motion.img src={ruby} id="ruby" style={{width:"15%"}}
          variants={skillsVariants}
          initial="hidden"
          animate="visible"
          whileHover='hover'>
        </motion.img>
        <motion.img src={html} id="html" style={{width:"15%"}}
          variants={skillsVariants}
          initial="hidden"
          animate="visible"
          whileHover='hover'>
        </motion.img>
        <motion.img src={css} id="css" style={{width:"15%"}}
          variants={skillsVariants}
          initial="hidden"
          animate="visible"
          whileHover='hover'>
        </motion.img>
        <motion.img src={psql} id="psql" style={{width:"20%"}}
          variants={skillsVariants}
          initial="hidden"
          animate="visible"
          whileHover='hover'>
        </motion.img>
      </Col>
      <Col style={{border:"1px solid lightgrey", height:"70vh", color:"lightgrey"}}>
        <h3 className="text-center">Frameworks & Libraries</h3>
        <motion.img src={react} id="react" style={{width:"20%"}}
          variants={skillsVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"> 
        </motion.img>
        <motion.img src={bootstrap} id="bootstrap" style={{width:"15%"}}
          variants={skillsVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"> 
        </motion.img>      
      </Col>
      <Col style={{border:"1px solid lightgrey", height:"70vh",color:"lightgrey"}}>
        <h3 className="text-center">Other Skills</h3>
        <motion.img src={ps} id="ps" style={{width:"20%"}}
          variants={skillsVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"> 
        </motion.img>
        <motion.img src={indesign} id="indesign" style={{width:"15%"}}
          variants={skillsVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover">          
        </motion.img>
        <motion.img src={illustrator} id="illustrator" style={{width:"10%"}}
          variants={skillsVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"> 
        </motion.img>
      </Col>
    </Row>
  )
}

export default Skills
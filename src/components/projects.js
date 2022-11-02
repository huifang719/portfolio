import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { motion } from "framer-motion"
import  jobtracker from "./images/jobtracker.png"
import  findYourBaker  from "./images/findYourBaker.png"
import photoguru from "./images/photoguru.png"
import tictactoe from "./images/tictactoe.png"
import "./projects.css"
function Projects() {
  return (
    <motion.div style={{maxHeight: "72vh"}}
      intial={{opacity: 0}}
      animate={{opacity:1}}
      exit={{opacity:0}}>
      <Row xs={1} md={2} className="g-4 mx-2">
        <Col>
          <Card style={{ maxwidth: '380px', width: "100%", backgroundColor:"rgb(12,12,100)", color: "lightgray" }}>
            <Card.Img variant="top" className='projectImage' style={{marginTop:"0", width:"100%", height:"160px"}} src={jobtracker} 
            />
            <Card.Body>
              <Card.Title>Job Tracker</Card.Title>
              <Card.Link className='projectLink' href="https://github.com/huifang719/jobtracker_server">See code</Card.Link>
              <Card.Link className='projectLink' href="bayou-44223.herokuap">Demo</Card.Link>
              </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ maxwidth: '380px', width: "100%", backgroundColor:"rgb(12,12,100)", color: "lightgray" }}>
            <Card.Img variant="top" className='projectImage' style={{marginTop:"0", width:"100%", height:"160px"}} src={findYourBaker} />
            <Card.Body>
              <Card.Title>Find Your Baker</Card.Title>
              <Card.Link className='projectLink' href="https://github.com/huifang719/find_your_baker">See code</Card.Link>
              <Card.Link className='projectLink' href="https://find-your-baker.herokuapp.com/">Demo</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ maxwidth: '380px', width: "100%", backgroundColor:"rgb(12,12,100)", color: "lightgray", textAlign:"center" }}>
            <Card.Img variant="top" className='projectImage' style={{marginTop:"0", width:"100%", height:"160px"}} src={photoguru} />
            <Card.Body>
              <Card.Title>PhotoGuru</Card.Title>
              <Card.Link className='projectLink' href="https://github.com/huifang719/PhotoGuru">See code</Card.Link>
              <Card.Link className='projectLink' href="https://arcane-oasis-62521.herokuapp.com/">Demo</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ maxwidth: '380px', width: "100%", backgroundColor:"rgb(12,12,100)", color: "lightgray" }}>
            <Card.Img variant="top" className='projectImage'style={{marginTop:"0", width:"100%", height:"160px"}} src={tictactoe} />
            <Card.Body>
              <Card.Title>Tic Tac Tac</Card.Title>
              <Card.Link className='projectLink' href="https://github.com/huifang719/PhotoGuru">See code</Card.Link>
              <Card.Link className='projectLink' href="https://arcane-oasis-62521.herokuapp.com/">Demo</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </motion.div>
  );
}

export default Projects;

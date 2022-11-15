import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import  jobtracker from "./images/jobtracker.png"
import  findYourBaker  from "./images/findYourBaker.png"
import photoguru from "./images/photoguru.png"
import tictactoe from "./images/tictactoe.png"
import "./projects.css"
import { Container } from 'react-bootstrap';
function Projects() {
  return (
    <Container>
    <Row xs={1} md={2} className="mx-2 justify-content-center" >
      <Col style={{display:"inline-block"}}>
        <Card style={{ maxWidth: '380px', width: "100%", backgroundColor:"rgb(12,12,100)", color: "lightgray" }}>
          <Card.Img variant="top" className='projectImage' style={{marginTop:"0", width:"100%", height:"160px"}} src={jobtracker} 
          />
          <Card.Body>
            <Card.Title>Job Tracker</Card.Title>
            <Card.Link className='projectLink' href="https://github.com/huifang719/jobtracker_server">See code</Card.Link>
            <Card.Link className='projectLink' href="bayou-44223.herokuap">Demo</Card.Link>
            </Card.Body>
        </Card>
      </Col>
      <Col style={{display:"inline-block"}}>
        <Card style={{ maxWidth: '380px', width: "100%", backgroundColor:"rgb(12,12,100)", color: "lightgray" }}>
          <Card.Img variant="top" className='projectImage' style={{marginTop:"0", width:"100%", height:"160px"}} src={findYourBaker} />
          <Card.Body>
            <Card.Title>Find Your Baker</Card.Title>
            <Card.Link className='projectLink' href="https://github.com/huifang719/find_your_baker">See code</Card.Link>
            <Card.Link className='projectLink' href="https://find-your-baker.herokuapp.com/">Demo</Card.Link>
          </Card.Body>
        </Card>
      </Col>
      <Col style={{display:"inline-block"}}>
        <Card style={{ maxWidth: '380px', width: "100%", backgroundColor:"rgb(12,12,100)", color: "lightgray" }}>
          <Card.Img variant="top" className='projectImage' style={{marginTop:"0", width:"100%", height:"160px"}} src={photoguru} />
          <Card.Body>
            <Card.Title>PhotoGuru</Card.Title>
            <Card.Link className='projectLink' href="https://github.com/huifang719/PhotoGuru">See code</Card.Link>
            <Card.Link className='projectLink' href="https://arcane-oasis-62521.herokuapp.com/">Demo</Card.Link>
          </Card.Body>
        </Card>
      </Col>
      <Col style={{display:"inline-block"}}>
        <Card style={{ maxWidth: '380px', width: "100%", backgroundColor:"rgb(12,12,100)", color: "lightgray" }}>
          <Card.Img variant="top" className='projectImage'style={{marginTop:"0", width:"100%", height:"160px"}} src={tictactoe} />
          <Card.Body>
            <Card.Title>Tic Tac Tac</Card.Title>
            <Card.Link className='projectLink' href="https://github.com/huifang719/react_tictactoe.git">See code</Card.Link>
            <Card.Link className='projectLink' href="https://tic-tac-toe-got.netlify.app/">Demo</Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </Container>
  );
}

export default Projects;

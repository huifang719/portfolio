import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { motion } from "framer-motion"
function Projects() {

  return (
    <motion.div style={{maxHeight: "72vh"}}
      intial={{opacity: 0}}
      animate={{opacity:1}}
      exit={{opacity:0}}>
      <Row xs={1} md={2} className="g-4 mx-2">
        <Col>
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" style={{marginTop:"0", width:"100%", height:"160px"}} src="https://user-images.githubusercontent.com/112321294/198415697-245053f1-46ff-49c0-9164-2b148a4e655c.png" 
            />
            <Card.Body>
              <Card.Title>Job Tracker</Card.Title>
              <Card.Link href="https://github.com/huifang719/jobtracker_server">See code</Card.Link>
              <Card.Link href="bayou-44223.herokuap">Demo</Card.Link>
              </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" style={{marginTop:"0", width:"100%", height:"160px"}} src="https://user-images.githubusercontent.com/112321294/198415697-245053f1-46ff-49c0-9164-2b148a4e655c.png" />
            <Card.Body>
              <Card.Title>Find Your Baker</Card.Title>
              <Card.Link href="https://github.com/huifang719/find_your_baker">See code</Card.Link>
              <Card.Link href="https://find-your-baker.herokuapp.com/">Demo</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" style={{marginTop:"0", width:"100%", height:"160px"}} src="https://user-images.githubusercontent.com/112321294/198415697-245053f1-46ff-49c0-9164-2b148a4e655c.png" />
            <Card.Body>
              <Card.Title>Find Your Baker</Card.Title>
              <Card.Link href="https://github.com/huifang719/PhotoGuru">See code</Card.Link>
              <Card.Link href="https://arcane-oasis-62521.herokuapp.com/">Demo</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" style={{marginTop:"0", width:"100%", height:"160px"}} src="https://user-images.githubusercontent.com/112321294/198415697-245053f1-46ff-49c0-9164-2b148a4e655c.png" />
            <Card.Body>
              <Card.Title>Tic Tac Tac</Card.Title>
              <Card.Link href="https://github.com/huifang719/PhotoGuru">See code</Card.Link>
              <Card.Link href="https://arcane-oasis-62521.herokuapp.com/">Demo</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </motion.div>
  );
}

export default Projects;

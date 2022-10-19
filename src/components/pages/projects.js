import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Projects() {
  return (
    <Row xs={1} md={2} className="g-4 mx-2">
        <Col>
          <Card>
            <Card.Img variant="top" style={{width:"80%", height:"160px", margin:"0,auto"}} src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">See code</Card.Link>
              <Card.Link href="#">Demo</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" style={{width:"80%", height:"160px", margin:"0,auto"}} src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
            <Card.Body>
              <Card.Title>Find Your Barker</Card.Title>
              <Card.Text>
                A RESTful web app allows bakers to provide/update details and users to search bakers in nearby area as well as rating and reviewing bakers.
              </Card.Text>
              <Card.Link href="https://github.com/huifang719/find_your_baker">See code</Card.Link>
              <Card.Link href="https://find-your-baker.herokuapp.com/">Demo</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" style={{width:"80%", height:"160px", margin:"0,auto"}} src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
            <Card.Body>
              <Card.Title>PhotoGuru</Card.Title>
              <Card.Text>
                A CRUD web app built with sinatra to provide a community and learning experience for photographers
              </Card.Text>
              <Card.Link href="https://github.com/huifang719/PhotoGuru">See code</Card.Link>
              <Card.Link href="https://arcane-oasis-62521.herokuapp.com/">Demo</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" style={{width:"80%", height:"160px", margin:"0,auto"}}src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
            <Card.Body>
              <Card.Title>Tic Tac Toe</Card.Title>
              <Card.Text>
                A classic mini game, but insteaded of pen and paper, we have a game of throne themed tic tac toe, even with theme music.

              </Card.Text>
              <Card.Link href="#">See code</Card.Link>
              <Card.Link href="#">Demo</Card.Link>
            </Card.Body>
          </Card>
        </Col>
    </Row>
  );
}

export default Projects;

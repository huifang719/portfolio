import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import  jobtracker from "./images/jobtracker.png"
import  findYourBaker  from "./images/findYourBaker.png"
import photoguru from "./images/photoguru.png"
import tictactoe from "./images/tictactoe.png"
import "./projects.css"
import { Container } from 'react-bootstrap';
function Projects() {
  return (
    <Container>
      <Carousel>
        <Carousel.Item>
          <Card className='w-100'>
            <Card.Img variant="top" src={jobtracker} />
            <Card.Body>
              <Card.Title>Job Tracker</Card.Title>
              <Card.Text>
                A RESTful web app where user can login and search for jobs, as well as save jobs, adding important dates to their calender<br />
                -integrate React JS for frontend with Express JS for backend<br />
                -use PostgreSQL for database to store saved jobs and user detail<br />
                -use React Bootstrap for styling as well as React icons<br />
                -use Adzuna api and Regex<br />
              </Card.Text>
                <Button href='https://dry-bayou-44223.herokuapp.com/' className='me-1' variant="primary">Demo</Button>
                <Button href='https://github.com/huifang719/jobtracker_server.git' variant="primary">Code</Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card className='w-100'>
            <Card.Img variant="top" src={findYourBaker} />
            <Card.Body>
              <Card.Title>Find Your Baker</Card.Title>
              <Card.Text>
                A RESTful web app allows bakers to provide/update details and users to search bakers in nearby area as well as rating and reviewing bakers.<br />
                -work collaboratively via Git and GitHub<br/>
                -CRUD system using Express JS and PostgreSQL<br />
                -use React Bootstrap, Bing map API , Fontawesome<br /><br />
              </Card.Text>
                <Button href='https://find-your-baker.herokuapp.com/' className='me-1' variant="primary">Demo</Button>
                <Button href='https://github.com/huifang719/find_your_baker.git' variant="primary">Code</Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card className='w-100'>
              <Card.Img variant="top" src={photoguru} />
              <Card.Body>
                <Card.Title>PhotoGuru</Card.Title>
                <Card.Text>
                  A CRUD web app built with sinatra to provide a community and learning experience for photographers.<br />
                  -using google YouTube data API<br />
                  -implement CRUD system in Ruby and PostgreSQL<br />
                  -use bootstrap for styling<br /><br />
                </Card.Text>
                <Button href='https://arcane-oasis-62521.herokuapp.com/' className='me-1' variant="primary">Demo</Button>
                <Button href='https://github.com/huifang719/PhotoGuru.git' variant="primary">Code</Button>
              </Card.Body>
            </Card> 
        </Carousel.Item>
        <Carousel.Item>
          <Card className='w-100'>
              <Card.Img variant="top" src={tictactoe} />
              <Card.Body>
                <Card.Title>Tic Tac Toe</Card.Title>
                <Card.Text>
                  A classic game but with Game of Thrones theme<br />
                  -using React, and usestate hook<br />
                  -using React Bootstrap for Styling and React typewriter<br />
                  -using Game of Throne Quote API <br />
                </Card.Text>
                  <Button href='https://tic-tac-toe-got.netlify.app/' className='me-1' variant="primary">Demo</Button>
                  <Button href='https://github.com/huifang719/react_tictactoe.git' variant="primary">Code</Button>
              </Card.Body>
            </Card> 
        </Carousel.Item>
      </Carousel>
      
    </Container>
  );
}

export default Projects;

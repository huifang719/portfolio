import React from 'react';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import jobtracker from './images/jobtracker.png';
import findYourBaker from './images/findYourBaker.png';
import photoguru from './images/photoguru.png';
import tictactoe from './images/tictactoe.png';
import lightstory from './images/lightstory.png';
import './projects.css';

function Projects() {
  return (
    <Container>
      <Carousel indicators={false}>
        <Carousel.Item>
          <Card className="w-100 bg-primary">
            <Card.Img fluid variant="top" src={lightstory} />
            <Card.Body style={{ color: 'lightgray' }}>
              <Card.Title>LightStory Photography</Card.Title>
              <Card.Text>
                A photography portfolio website built with react to showcase my work and providing services information.
                {'\n'}
                -use react for UI and react slick carousel for displaying images
                {'\n'}
                -use React Bootstrap for styling as well as React icons
                {'\n'}
                -use frame motion and react-intersection-observer for animation on scroll.
                {'\n'}
                eslint for creating cleaner and more consistant codes
                {'\n'}
              </Card.Text>
            </Card.Body>
          </Card>
          <div className="w-6 d-flex justify-content-center mt-2">
            <Button href="https://lightstoryphotography.com.au" className="me-4" variant="primary">Demo</Button>
            <Button href="https://github.com/huifang719/lightstory.git" variant="primary">Code</Button>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <Card className="w-100 bg-primary">
            <Card.Img fluid variant="top" src={jobtracker} />
            <Card.Body style={{ color: 'lightgray' }}>
              <Card.Title>Job Tracker</Card.Title>
              <Card.Text>
                A RESTful web app where user can login and search for jobs, as well as save jobs, adding important dates to their calender
                {'\n'}
                -integrate React JS for frontend with Express JS for backend
                {'\n'}
                -use PostgreSQL for database to store saved jobs and user detail
                {'\n'}
                -use React Bootstrap for styling as well as React icons
                {'\n'}
                -use Adzuna api and Regex
                {'\n'}
              </Card.Text>
            </Card.Body>
          </Card>
          <div className="w-6 d-flex justify-content-center mt-2">
            <Button href="https://jobtracker.fly.dev/" className="me-4" variant="primary">Demo</Button>
            <Button href="https://github.com/huifang719/jobtracker_server.git" variant="primary">Code</Button>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <Card className="w-100  bg-primary">
            <Card.Img fluid variant="top" src={findYourBaker} />
            <Card.Body style={{ color: 'lightgray' }}>
              <Card.Title>Find Your Baker</Card.Title>
              <Card.Text>
                A RESTful web app allows bakers to provide/update details and users to search bakers in nearby area as well as rating and reviewing bakers.
                {'\n'}
                -work collaboratively via Git and GitHub
                {'\n'}
                -CRUD system using Express JS and PostgreSQL
                {'\n'}
                -use React Bootstrap, Bing map API , Fontawesome
                {'\n'}
              </Card.Text>
            </Card.Body>
          </Card>
          <div className="w-6 d-flex justify-content-center mt-2">
            <Button href="https://find-your-baker.onrender.com/" className="me-4" variant="primary">Demo</Button>
            <Button href="https://github.com/huifang719/find_your_baker.git" variant="primary">Code</Button>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <Card className="w-100  bg-primary">
            <Card.Img fluid variant="top" src={photoguru} />
            <Card.Body style={{ color: 'lightgray' }}>
              <Card.Title>PhotoGuru</Card.Title>
              <Card.Text>
                A CRUD web app built with sinatra to provide a community and learning experience for photographers.
                {'\n'}
                -using google YouTube data API
                {'\n'}
                -implement CRUD system in Ruby and PostgreSQL
                {'\n'}
                -use bootstrap for Styling
                {'\n'}
              </Card.Text>
            </Card.Body>
          </Card>
          <div className="w-6 d-flex justify-content-center mt-2">
            <Button href="https://photoguru.onrender.com" className="me-4" variant="primary">Demo</Button>
            <Button href="https://github.com/huifang719/PhotoGuru.git" variant="primary">Code</Button>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <Card className="w-100  bg-primary">
            <Card.Img fluid variant="top" src={tictactoe} />
            <Card.Body style={{ color: 'lightgray' }}>
              <Card.Title>Tic Tac Toe</Card.Title>
              <Card.Text>
                A classic game but with Game of Thrones theme
                {'\n'}
                -using React, and usestate hook
                {'\n'}
                -using React Bootstrap for Styling and React typewriter
                {'\n'}
                -using Game of Throne Quote API
                {'\n'}
              </Card.Text>
            </Card.Body>
          </Card>
          <div className="w-6 d-flex justify-content-center mt-2">
            <Button href="https://tic-tac-toe-got.netlify.app/" className="me-4" variant="primary">Demo</Button>
            <Button href="https://github.com/huifang719/react_tictactoe.git" variant="primary">Code</Button>
          </div>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Projects;

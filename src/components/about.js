import { Container } from "react-bootstrap"
import Carousel from 'react-bootstrap/Carousel';
import whoami from "./images/1.jpg"
import liviagu from "./images/2.jpg"
import core from "./images/3.jpg"
import "../main.css"

function About() {
  return (
    <Container>
      <Carousel>
      <Carousel.Item className="info">
        <img 
          className="info-img"
          src={whoami}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className="info">
        <img
          className="info-img"
          src={liviagu}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className="info">
        <img
          className="info-img"
          src={core}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </Container>
  )
}

export default About
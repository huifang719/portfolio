import { Container } from "react-bootstrap"
import Carousel from 'react-bootstrap/Carousel';
import whoami from "./images/1.jpg"
import liviagu from "./images/2.jpg"
import core from "./images/3.jpg"

function About() {
  return (
    <Container>
      <Carousel>
      <Carousel.Item style={{height:"70vh", textAlign:"center"}}>
        <img
          className="d-inline-block h-100 w-auto"
          src={whoami}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item style={{height:"70vh", textAlign:"center"}}>
        <img
          className="d-inline-block h-100 w-auto"
          src={liviagu}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item style={{height:"70vh", textAlign:"center"}}>
        <img
          className="d-inline-block h-100 w-auto"
          src={core}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </Container>
  )
}

export default About
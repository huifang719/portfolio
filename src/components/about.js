import { Container, Row } from "react-bootstrap"
import Carousel from 'react-bootstrap/Carousel';
import React from 'react'
import ReactPlayer from 'react-player'
import whoami from "./images/1.jpg"
import liviagu from "./images/2.jpg"
import core from "./images/3.jpg"
import "../main.css"

function About() {
  return (
    <Container>
      <Row className="g-4 mx-2 justify-content-center" >     
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
      </Row>
        <Row className="justify-content-center mt-4">
          <ReactPlayer
            className="video-profile"
            style={{display:"flex", margin:"1rem, auto"}}
            url="https://youtu.be/4jQbpJGdpY8"
            controls
            config={{
              youtube: {
                playerVars: { showinfo: 1 }
              }
            }}
          />
        </Row>    
    </Container>
  ) 
}

export default About
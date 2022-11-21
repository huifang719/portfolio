import { Container, Row } from "react-bootstrap"
import Carousel from 'react-bootstrap/Carousel';
import React from 'react'
import ReactPlayer from 'react-player'
import whoAmI from "./images/1.png"
import liviaGu from "./images/2.png"
import core from "./images/3.png"
import lookForRole from "./images/4.png"
import "../main.css"

function About() {
  return (
    <Container>
      <Row className="g-4 mx-2 justify-content-center" >     
        <Carousel>
          <Carousel.Item className="info">
            <img 
              className="info-img"
              src={whoAmI}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item className="info">
            <img
              className="info-img"
              src={liviaGu}
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
          <Carousel.Item className="info">
            <img
              className="info-img"
              src={lookForRole}
              alt="Four slide"
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
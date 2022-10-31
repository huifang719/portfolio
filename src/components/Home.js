import Typewriter from 'typewriter-effect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image'
import profile from './images/profile.png'
function Home() {
  return (
    <Row xs={1} md={2}>
    <Col style={{color:"lightgrey", fontSize:"3rem", paddingLeft:"3rem", paddingTop:"1rem"}}>
      <Typewriter
        options={{
          strings: ['Hello, Welcome to my site'],
          autoStart: true,
          loop: true,
        }}
      />
      <Typewriter
        options={{
          strings: ["I'm Livia Gu"],
          autoStart: true,
          loop: true,
        }}
      />
      <Typewriter
        options={{
          strings: ["I am a web developer"],
          autoStart: true,
          loop: true,
        }}
      />
    </Col>
    <Col>
      <Image className='fluid' style={{width:"70%", margin:"0,auto"}} src={profile}>
      </Image>
    </Col>
    </Row>
  );
}

export default Home;
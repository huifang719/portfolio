import Typewriter from 'typewriter-effect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image'
import profile from './images/profile.png'
import { motion } from "framer-motion"
import { Container, Card } from 'react-bootstrap';

function Home() {
  return (
    <Container style={{maxHeight: "72vh"}} className='mx-auto'>
      <motion.div className='w-6 mx-auto d-flex justify-content-center'
        initial={{scale: 0}}
        animate={{scale: 0.8}}
        whileHover={{scale:1}}
        transition={{type:"spring", bounce:"0.8"}}>
          <Image className='fluid' style={{width:"30%", margin:"0,auto"}} src={profile}>
          </Image>
      </motion.div>
      <Row className='w-8 mx-auto d-flex text-center mt-1 mb-2' style={{color:"lightgrey", fontSize:"2rem"}}>
        <Typewriter style={{color:"lightgrey", fontSize:"2rem"}}
          options={{
            strings: ["I'm Livia Gu, an enthusiastic full stack web developer"],
            autoStart: true,
            loop: true,
          }}
          /> 
      </Row>
      <Card style={{background:"none", color:"lightgrey", border:"1px solid lightgrey", marginTop:"2rem"}} >
      <Card.Header>Quote</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Learn as if you were not reaching your goal and as though you were scared of missing it{' '}
          </p>
          <div className="blockquote-footer">
            Confucius
          </div>
        </blockquote>
      </Card.Body>
      </Card>    
    
      

      {/* <motion.div style={{maxHeight: "72vh"}}>
      <Row xs={1} md={2} 
        intial={{opacity: 0}}
        animate={{opacity:1}}
        exit={{opacity:0}}>
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
        
     
      </Row>
    </motion.div> */}
    </Container>
  );
}

export default Home;
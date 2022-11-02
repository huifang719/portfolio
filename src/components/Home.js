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
              “Learning is the only thing the mind never exhausts, never fears, and never regrets.”{' '}
            </p>
            <div className="blockquote-footer">
              Leonardo da Vinci
            </div>
          </blockquote>
        </Card.Body>
      </Card>    
    </Container>
  );
}

export default Home;
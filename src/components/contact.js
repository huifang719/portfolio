import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import '../main.css'

function Contact() {
 return (
  <Container style={{color: "lightgray", width:"70%"}}>
    <Form action="https://mailthis.to/livia.gu0719@gmail.com" method="POST" encType="multipart/form-data">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label><span style={{color:"red"}}>*</span>Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Enter your name" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label><span style={{color:"red"}}>*</span>Email</Form.Label>
        <Form.Control type="text" name="email" placeholder="Enter your email" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="text" name="subject" placeholder="Subject" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label><span style={{color:"red"}}>*</span>Message</Form.Label>
        <Form.Control type="text" as="textarea" rows="6" name="message" placeholder="Message" required/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </Container>

 )
}

export default Contact
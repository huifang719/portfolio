import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contact() {
 return (
  <div className="container mt-3" style={{color: "lightgray"}}>
      <Form className='w-6 mx-auto' action="https://mailthis.to/livia.gu0719@gmail.com" method="POST" encType="multipart/form-data">
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
  </div>
 )
}

export default Contact
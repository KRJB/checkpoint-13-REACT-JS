import { Form,Button,Navbar,Container,Nav} from 'react-bootstrap';
import './App.css'; 

function App() {
  return (
    <div > 
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Form App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div id="form">
      <img src="https://raw.githubusercontent.com/briancodex/react-form-v1/286f4a4603bda257ae001dc57c74d7f30bd4eedb/public/img/img-2.svg" alt="img"/>
      <Form>
      <Form.Group className="mb-3">
        <Form.Label className='name'>User name</Form.Label>
        <Form.Control  placeholder="User name" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className='name'>Email address</Form.Label>
        <Form.Control  placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className='name'>Password</Form.Label>
        <Form.Control  placeholder="Password" />
      </Form.Group>
      
      

      <Form.Group className="mb-3" >
        <Form.Label className='name'>Confirm Password</Form.Label>
        <Form.Control  placeholder="Confirm Password" />
      </Form.Group>

      <Button id='butt' variant="primary" type="submit">
        sign up
      </Button>
    </Form>
    </div>
    </div>
  );
}

export default App;

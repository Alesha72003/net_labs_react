import logo from './logo.svg';
import './App.css';
import {Card, Col, Row, Button, Container} from "react-bootstrap";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src="/img/1.png" />
            <Card.Body>
              <Card.Title>Test</Card.Title>
              <Card.Text>Kek</Card.Text>
              <Button variant="primary">Тест</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="/img/1.png" />
            <Card.Body>
              <Card.Title>Test</Card.Title>
              <Card.Text>Kek</Card.Text>
              <Button variant="primary">Тест</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="/img/1.png" />
            <Card.Body>
              <Card.Title>Test</Card.Title>
              <Card.Text>Kek</Card.Text>
              <Button variant="primary">Тест</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

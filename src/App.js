import logo from './logo.svg';
import './App.css';
import {Card, Col, Row, Button, Container, Breadcrumb} from "react-bootstrap";

function App({tasks}) {
  return (
    <Container>
      <Breadcrumb>
        <Breadcrumb.Item active>Tasks</Breadcrumb.Item>
      </Breadcrumb>
      <Row>
      {tasks.map(item => {
       return <Col>
          <Card>
            {item.image ? <Card.Img variant="top" src={`img/${item.image}`} /> : null}
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Button variant="primary" href={`item/${item.id}`}>Перейти</Button>
            </Card.Body>
          </Card>
        </Col>
      })}
      </Row>
    </Container>
  );
}

export default App;

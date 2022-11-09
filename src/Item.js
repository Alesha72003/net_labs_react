import { Container, ListGroup, Breadcrumb} from "react-bootstrap";
import { Editor } from '@tinymce/tinymce-react';
import { useParams} from 'react-router-dom';

export default function Item({tasks}) {
    const {id} = useParams();
    const item = tasks[id];
    if (!item) {
        return "Not found"
    }
    return (
        <Container>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Tasks</Breadcrumb.Item>
                <Breadcrumb.Item active>{id}</Breadcrumb.Item>
            </Breadcrumb>
            <ListGroup className="position-absolute top-50 start-50 translate-middle">
                <ListGroup.Item><b>Title: </b>{item.title}</ListGroup.Item>
                <ListGroup.Item><b>Description: </b>{item.description}</ListGroup.Item>
                {item.image ? <ListGroup.Item style={{"display": "flex", "justify-content": "center"}}><img src={`/img/${item.image}`} style={{"max-height": "70vh"}}/></ListGroup.Item> : null}
            </ListGroup>
        </Container>
    );
}

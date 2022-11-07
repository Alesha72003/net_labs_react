import { Container, ListGroup} from "react-bootstrap";
import { Editor } from '@tinymce/tinymce-react';

export default function Item() {
    return (
        <ListGroup className="position-absolute top-50 start-50 translate-middle">
            <ListGroup.Item><b>Title: </b>test</ListGroup.Item>
        </ListGroup>
    );
}

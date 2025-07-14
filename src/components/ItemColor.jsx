import React from 'react';
import {Card, Button} from "react-bootstrap"

const ItemColor = () => {
    return (
            <Card>
      <Card.Header><strong>Nombre color</strong></Card.Header>
      <Card.Body>
        </Card.Body>
        <Card.Footer className='d-flex justify-content-end'>
            <Button variant="danger">Borrar</Button>
        </Card.Footer>
    </Card>
    );
};

export default ItemColor;
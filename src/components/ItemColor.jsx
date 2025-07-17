import React from 'react';
import {Card, Button} from "react-bootstrap"

const ItemColor = ({nombreColor}) => {
    return (
            <Card>
      <Card.Header><strong>{nombreColor}</strong></Card.Header>
      <Card.Body>
        </Card.Body>
        <Card.Footer className='d-flex justify-content-end'>
            <Button className='rounded-0' variant="danger">Borrar</Button>
        </Card.Footer>
    </Card>
    );
};

export default ItemColor;
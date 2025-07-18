import React from 'react';
import {Card, Button} from "react-bootstrap"

const ItemColor = ({nombreColor, borrarColor}) => {
    return (
            <Card className='rounded-0'>
      <Card.Header><strong>{nombreColor}</strong></Card.Header>
      <Card.Body style={{height: "100px", backgroundColor: '#e8f4fd' }}>
        </Card.Body>
        <Card.Footer className='d-flex justify-content-end'>
            <Button className='rounded-0' variant="danger" onClick={()=> borrarColor(nombreColor)}>Borrar</Button>
        </Card.Footer>
    </Card>
    );
};

export default ItemColor;
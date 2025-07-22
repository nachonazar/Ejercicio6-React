import React from 'react';
import {Card, Button} from "react-bootstrap"

const ItemColor = ({nombreColor, borrarColor}) => {
    return (
            <Card className='rounded-0'>
      <Card.Header><strong>{nombreColor}</strong></Card.Header>
      <Card.Body>
        <div
              className="mx-5"
              style={{
                width: "120px",
                height: "100px",
                backgroundColor: nombreColor,
                border: "1px solid black",
              }}
            ></div>
        </Card.Body>
        <Card.Footer className='d-flex justify-content-end'>
            <Button className='rounded-0' variant="danger" onClick={() => borrarColor(nombreColor)}>Borrar</Button>
        </Card.Footer>
    </Card>
    );
};

export default ItemColor;
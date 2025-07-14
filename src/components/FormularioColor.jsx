import React from 'react';
import {Card, Button, Form} from "react-bootstrap"


const FormularioColor = () => {
    return (
        <>
        <Card>
      <Card.Header>Administrar colores</Card.Header>
      <Card.Body>
        <Form.Control type="text" placeholder="Ingrese un color ej: Blue" readOnly />
        </Card.Body>
        <Card.Footer className='d-flex justify-content-end'>
            <Button variant="primary">Guardar</Button>
        </Card.Footer>
    </Card>
    </>
    );
};

export default FormularioColor;
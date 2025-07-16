import React, { useState } from 'react';
import {Card, Button, Form} from "react-bootstrap"


const FormularioColor = () => {
    const [color, setColor] = useState("")
    const [colores, setColores] = useState([])
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("aqui deberia guardar el color")
         //tomar el color que esta en el state color y guardarlo en el state colores (array)
         //colores.push(color)
         setColores([...colores, color])
         //limpiar el formulario
         setColor("");
    }
    
    return (
        <>
        <Card>
      <Card.Header>Administrar colores</Card.Header>
      <Form onSubmit={handleSubmit}>
      <Card.Body>
        <Form.Control type="text" placeholder="Ingrese un color ej: Blue" onChange={(e)=> setColor(e.target.value)} value={color}/>
        </Card.Body>
        <Card.Footer className='d-flex justify-content-end'>
            <Button className='rounded-0' variant="primary" type='submit'>Guardar</Button>
        </Card.Footer>
        </Form>
    </Card>
    </>
    );
};

export default FormularioColor;
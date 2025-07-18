import React, { useState } from 'react';
import {Card, Button, Form} from "react-bootstrap"
import ListaColores from './ListaColores';


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

    const borrarColor = (nombreColor) => {
        const coloresFiltrados = colores.filter((item)=> item!==nombreColor)
        //actualizar el estado colores
        setColores(coloresFiltrados)
    }
    
    return (
        <>
        <Card className='rounded-0'>
      <Card.Header style={{height: "60px"}}>Administrar colores</Card.Header>
      <Form onSubmit={handleSubmit}>
      <Card.Body className='d-flex' style={{ backgroundColor: '#e8f4fd' }}>
        <div className='mx-3'
        style={{
          width: "120px",
          height: "100px",
          backgroundColor: "#3f0fb5",
        }}
      ></div>
        <Form.Control className='rounded-0 mx-3 mt-2' style={{ height: "50px", width: "75%" }} type="text" placeholder="Ingrese un color ej: Blue" onChange={(e)=> setColor(e.target.value)} value={color}/>
        </Card.Body>
        <Card.Footer className='d-flex justify-content-end align-items-end' style={{height: "90px"}}>
            <Button className='rounded-0' variant="primary" type='submit'>Guardar</Button>
        </Card.Footer>
        </Form>
    </Card>
    <ListaColores colores={colores} borrarColor={borrarColor}></ListaColores>
    </>
    );
};

export default FormularioColor;
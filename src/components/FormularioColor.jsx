import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Card, Button, Form } from "react-bootstrap";
import ListaColores from "./ListaColores";

const FormularioColor = () => {
  const coloresLocalstorage =
    JSON.parse(localStorage.getItem("listaColores")) || [];
  const [colores, setColores] = useState(coloresLocalstorage);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    localStorage.setItem("listaColores", JSON.stringify(colores));
  }, [colores]);

  const agregarColores = (data) => {
    console.log("aqui deberia guardar el color");
    console.log(data)
    //tomar el color que esta en el state color y guardarlo en el state colores (array)
    //colores.push(color)
    setColores([...colores, data.inputColor])
    //limpiar el formulario
    reset();
  };

  const borrarColor = (nombreColor) => {
    const coloresFiltrados = colores.filter((item) => item !== nombreColor);
    //actualizar el estado colores
    setColores(coloresFiltrados);
  };

  return (
    <>
      <Card className="rounded-0">
        <Card.Header style={{ height: "60px" }}>
          Administrar colores
        </Card.Header>
        <Form onSubmit={handleSubmit(agregarColores)}>
          <Card.Body className="d-flex" style={{ backgroundColor: "#e8f4fd" }}>
            <div
              className="mx-3"
              style={{
                width: "120px",
                height: "100px",
                backgroundColor: "#3f0fb5",
                border: "1px solid black",
              }}
            ></div>
            <div className="mx-3 mt-2" style={{ flexGrow: 1 }}>
            <Form.Control
              className="rounded-0 mx-3 mt-2 mb-2"
              style={{ height: "50px", width: "75%" }}
              type="text"
              placeholder="Ingrese un color ej: Blue"
              onChange={(e) => setColor(e.target.value)}
              {...register("inputColor", {
                required: "El color es un dato obligatorio",
                minLength: {
                  value: 3,
                  message:
                    "El nombre del color debe tener al menos 3 caracteres",
                },
                maxLength: {
                  value: 50,
                  message:
                    "El nombre del color debe tener como máximo 50 caracteres",
                },
                pattern: {
                  value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,50}$/,
                  message:
                    "El nombre del color solo debe contener letras y espacios",
                },
              })}
            />
            {errors.inputColor && (
      <Form.Text className="text-danger mx-3">{errors.inputColor.message}</Form.Text>
    )}
    </div>
          </Card.Body>
          <Card.Footer
            className="d-flex justify-content-end align-items-end"
            style={{ height: "90px" }}
          >
            <Button className="rounded-0" variant="primary" type="submit">
              Guardar
            </Button>
          </Card.Footer>
        </Form>
      </Card>
      <ListaColores colores={colores} borrarColor={borrarColor}></ListaColores>
    </>
  );
};

export default FormularioColor;

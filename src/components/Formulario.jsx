import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import ListaCitas from "./ListaCitas";

const Formulario = () => {
  const [citas, setCitas] = useState([]);
  const [show, setShow] = useState(true);

  let citasLista = {
    nombreMascota: "",
    nombreDueño: "",
    fecha: "",
    hora: "",
    sintomas: "",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCitas([...citas, citasLista]);
    if (citas !== []) {
      setShow(false);
    }
  };

  const handleChange = (e) => {
    citasLista[e.target.name] = e.target.value;
  };

  const borrarCitas = (citaBorrar) => {
    let listaCitasFiltrada = citas.filter(
      (itemCita) => itemCita !== citaBorrar
    );
    setCitas(listaCitasFiltrada);
    if (citas.length == 1) {
      setShow(true);
    }
  };

  return (
    <>
      <Form
        className="p-0 border border-3 shadow p-3 mb-5 bg-body rounded"
        onSubmit={handleSubmit}
      >
        <Form.Label className="p-3 fs-3">
          Llenar el formulario para crear una cita.
        </Form.Label>

        <Form.Group
          className="p-3 border border-start-0 border-end-0 border-3"
          style={{ backgroundColor: "lightblue" }}
        >
          <Form.Group className="d-flex mb-3" controlId="formMascota">
            <Form.Label className="me-2">Nombre de la mascota:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre de la mascota"
              name="nombreMascota"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="d-flex mb-3" controlId="formDueño">
            <Form.Label className="me-4">Nombre del dueño:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre del dueño"
              name="nombreDueño"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3 d-flex" controlId="formFechaHora">
            <Form.Label className="me-4">Fecha:</Form.Label>
            <Form.Control type="date" name="fecha" onChange={handleChange} />
            <Form.Label className="me-4 ms-4">Hora:</Form.Label>
            <Form.Control type="time" name="hora" onChange={handleChange} />
          </Form.Group>

          <Form.Group className="d-flex mb-3" controlId="formSintomas">
            <Form.Label className="me-4">Síntomas:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Describir síntomas"
              name="sintomas"
              onChange={handleChange}
            />
          </Form.Group>
        </Form.Group>

        <Form.Group className="d-flex justify-content-center p-3">
          <Button className="btn btn-primary" variant="primary" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>

      {show ? (
        <div className="container" style={{ backgroundColor: "lightblue" }}>
          <h3 className="m-3 p-4 text-center">No hay citas</h3>
        </div>
      ) : (
        <div className="d-flex flex-wrap">
          <ListaCitas
            propsCitas={citas}
            propBorrarCita={borrarCitas}
          ></ListaCitas>
        </div>
      )}
    </>
  );
};

export default Formulario;

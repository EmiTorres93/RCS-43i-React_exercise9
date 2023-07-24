import { Form, Button } from "react-bootstrap";

const Formulario = () => {
  return (
    <>
      <Form className="p-0 border border-3 shadow p-3 mb-5 bg-body rounded">
        <Form.Label className="p-3 fs-3">
          Llenar el formulario para crear una cita.
        </Form.Label>

        <Form.Group
          className="p-3 border border-start-0 border-end-0 border-3"
          style={{ backgroundColor: "lightblue" }}
        >
          <Form.Group className="d-flex mb-3" controlId="formMascota">
            <Form.Label className="me-2">Nombre de la mascota:</Form.Label>
            <Form.Control type="text" placeholder="Nombre de la mascota" />
          </Form.Group>

          <Form.Group className="d-flex mb-3" controlId="formDueño">
            <Form.Label className="me-4">Nombre del dueño:</Form.Label>
            <Form.Control type="text" placeholder="Nombre del dueño" />
          </Form.Group>

          <Form.Group className="mb-3 d-flex" controlId="formFechaHora">
            <Form.Label className="me-4">Fecha:</Form.Label>
            <Form.Control type="date" placeholder="dd/mm/yyyy" />
            <Form.Label className="me-4 ms-4">Hora:</Form.Label>
            <Form.Control type="time" />
          </Form.Group>

          <Form.Group className="d-flex mb-3" controlId="formSintomas">
            <Form.Label className="me-4">Síntomas:</Form.Label>
            <Form.Control type="text" placeholder="Describir síntomas" />
          </Form.Group>
        </Form.Group>

        <Form.Group className="d-flex justify-content-center p-3">
          <Button className="btn btn-primary" variant="primary" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default Formulario;

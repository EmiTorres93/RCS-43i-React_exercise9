import { Card, Button } from "react-bootstrap";

const ItemCita = (propsCita) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <div className="d-flex">
          <div
            className="m-2 border rounded-circle"
            style={{ backgroundColor: "lightblue", width: "80px" }}
          ></div>
          <div className="p-3">
            <Card.Title>Nombre: {propsCita["nombreMascota"]}</Card.Title>
            <Card.Title>Dueño: {propsCita["nombreDueño"]}</Card.Title>
          </div>
        </div>
        <Card.Body style={{ backgroundColor: "lightblue" }}>
          <div className="d-flex my-2">
            <Card.Title className="px-2">Fecha:</Card.Title>
            <Card.Text
              className="px-2 border border-1"
              style={{ backgroundColor: "white" }}
            >
              {propsCita["fecha"]}
            </Card.Text>
          </div>
          <div className="d-flex my-2">
            <Card.Title className="px-2">Hora:</Card.Title>
            <Card.Text
              className="px-2 border border-1"
              style={{ backgroundColor: "white" }}
            >
              {propsCita["hora"]}
            </Card.Text>
          </div>
          <div className="d-flex my-2">
            <Card.Title className="px-2">Síntomas:</Card.Title>
            <Card.Text
              className="px-2 border border-1"
              style={{ backgroundColor: "white" }}
            >
              {propsCita["sintomas"]}
            </Card.Text>
          </div>
        </Card.Body>
        <div className="d-flex justify-content-end">
          <Button variant="primary" className="m-3 btn btn-danger">
            Eliminar
          </Button>
        </div>
      </Card>
    </>
  );
};

export default ItemCita;
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from "./components/Formulario";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Container>
        <h1 className="text-center m-5">
          Administrador pacientes de Veterinaria
        </h1>
        <Formulario></Formulario>
      </Container>
    </>
  );
}

export default App;

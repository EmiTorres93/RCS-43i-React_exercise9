import ItemCita from "./ItemCita";

const ListaCitas = ({ propsCitas }) => {
  return (
    <>
      {propsCitas.map((cita, index) => (
        <ItemCita
          key={index}
          propsCita={cita}
          nombreMascota={cita["nombreMascota"]}
          nombreDueño={cita["nombreDueño"]}
          fecha={cita["fecha"]}
          hora={cita["hora"]}
          sintomas={cita["sintomas"]}
        ></ItemCita>
      ))}
      ;
    </>
  );
};

export default ListaCitas;

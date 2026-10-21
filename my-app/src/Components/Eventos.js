import Button from "./Eventos/Button";

function Eventos() {
  function meuEvento() {
    console.log(`Opa! Fui ativado`);
  }

  function segundoEvento() {
    console.log("Segundo evento ativado");
  }
  return (
    <div>
      <p>Clique para disparar um evento</p>
      <Button event={meuEvento} text="Primeiro Evento" />
      <Button event={segundoEvento} text="Segundo Evento" />
    </div>
  );
}

export default Eventos;

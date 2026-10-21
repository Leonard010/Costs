function SeuNome({ setNome }) {
  return (
    <div>
      <p>Digite o seu nome:</p>
      <input
        text="text"
        placeholder="Qual é o seu nome: "
        onChange={(e) => setNome(e.target.value)}
      />
    </div>
  );
}

export default SeuNome;

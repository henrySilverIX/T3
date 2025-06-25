export default function ListaServicos(props) {
  const estilo = `collection-item active ${props.tema}`;
  return (
    <div className="collection">
      <a className="collection-item">Corte de Cabelo</a>
      <a className={estilo}>Manicure e Pedicure</a>
      <a className="collection-item">Design de Sobrancelhas</a>
      <a className="collection-item">Barba e Bigode</a>
    </div>
  );
}
export default function ListaProdutos(props) {
  const estilo = `collection-item active ${props.tema}`;
  return (
    <div className="collection">
      <a className="collection-item">Shampoo</a>
      <a className={estilo}>Creme Hidratante</a>
      <a className="collection-item">Óleo de Barba</a>
      <a className="collection-item">Máscara Capilar</a>
    </div>
  );
}

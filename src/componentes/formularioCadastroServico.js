import { useState } from "react";

export default function FormularioCadastroServico(props) {
  const estiloBotao = `btn waves-effect waves-light ${props.tema}`;
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Serviço cadastrado: ${nome} - R$${preco}`);
    setNome("");
    setPreco("");
  };

  return (
    <div className="row">
      <form className="col s12" onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-field col s6">
            <input
              id="nome_servico"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="validate"
            />
            <label htmlFor="nome_servico" className={nome ? "active" : ""}>
              Nome do Serviço
            </label>
          </div>
          <div className="input-field col s6">
            <input
              id="preco_servico"
              type="number"
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
              className="validate"
            />
            <label htmlFor="preco_servico" className={preco ? "active" : ""}>
              Preço (R$)
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <button className={estiloBotao} type="submit">
              Cadastrar Serviço <i className="material-icons right">send</i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

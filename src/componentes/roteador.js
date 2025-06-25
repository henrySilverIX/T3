import { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaClientes from "./listaClientes";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import ListaProdutos from "./listaProdutos";
import FormularioCadastroServico from "./formularioCadastroServico";
import ListaServicos from "./listaServicos";

export default function Roteador() {
  const [tela, setTela] = useState("Clientes");

  const seletorView = (valor, e) => {
    e.preventDefault();
    setTela(valor);
  };

  const tema = "purple lighten-4";
  const botoes = ["Clientes", "Produtos", "Serviços"];

  return (
    <>
      <BarraNavegacao seletorView={seletorView} tema={tema} botoes={botoes} />
      {tela === "Clientes" && (
        <>
          <FormularioCadastroCliente tema={tema} />
          <ListaClientes tema={tema} />
        </>
      )}
      {tela === "Produtos" && (
        <>
          <FormularioCadastroProduto tema={tema} />
          <ListaProdutos tema={tema} />
        </>
      )}
      {tela === "Serviços" && (
        <>
          <FormularioCadastroServico tema={tema} />
          <ListaServicos tema={tema} />
        </>
      )}
    </>
  );
}

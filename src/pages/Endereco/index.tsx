//importando bibliotecas
import { useState } from "react";
//importando estilos
import "./endereco-style.css";
import "../../styles/colorgrade.css";
// importando imagens
import menu from "../../assets/menu.svg";
import notificacoes from "../../assets/notificacao.svg";
import profile from "../../assets/profile.jpg";
import busca from "../../assets/search.svg";

export function Endereco() {

  const [localizar, setLocalizar] =  useState({
    cep: "não informado",
    logradouro: "não localizado",
    bairro: "não localizado",
    localidade: "não localizado",
    uf: "não localizado",
  });

  function LocalizarCep(e) {
    // Previnindo que a página fique recarregando
    e.preventDefault();
    // Pegando o cep informado e adicionando na constante
    const valor = e.target.elements.cep.value;
    // limpando o resultado apenas para numeros 
    // verificando se tem 8 digitos
    if (valor?.length !== 8) {
      return;
    }
    // conectando com a api
    fetch(`https://viacep.com.br/ws/${valor}/json/`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      setLocalizar(data)
    })
  }

  return (
      <div id="content">
        <header>
          <div className="container">
            <img src={menu} alt="menu" />
            <div className="alinhado-direitaa">
              <img src={notificacoes} alt="notificações" />
              <img src={profile} alt="imagem de perfil" id="profile" />
            </div>
          </div>
        </header>
        <main>
          <form onSubmit={LocalizarCep} id="buscar-cep">
            <input type="text" name="cep" placeholder="Insire seu cep" maxLength={8} required/>
            <button type="submit">
              <img src={busca} alt="Buscar" />
            </button>
          </form>
          <div id="resultado-busca">
            <h1>Endereço</h1>
            <div className="resultado">
              <h2>CEP</h2>
              <p>{localizar.cep}</p>
            </div>
            <div className="resultado">
              <h2>Endereço</h2>
              <p>{localizar.logradouro}</p>
            </div>
            <div className="resultado">
              <h2>Bairro</h2>
              <p>{localizar.bairro}</p>
            </div>
            <div className="resultado">
              <h2>Cidade</h2>
              <p>{localizar.localidade}</p>
            </div>
            <div className="resultado">
              <h2>Estado</h2>
              <p>{localizar.uf}</p>
            </div>
          </div>
        </main>
      </div>
    )
}
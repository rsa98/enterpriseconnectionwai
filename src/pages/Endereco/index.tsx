//importando bibliotecas

//importando stilos e imagens
import menu from "../../assets/menu.svg";
import notificacoes from "../../assets/notificacao.svg";
import profile from "../../assets/profile.jpg";
import busca from "../../assets/search.svg";
import "./style.css";

//variaveis
let cep = "12345-678";
let endereco = "Rua Pedro Borges da Silva";
let bairro = "Faria Lima";
let cidade = "Itapevi";
let estado = "São Paulo";

export function Endereco() {

  function LocalizarCep(e) {
    // Previnindo que a página fique recarregando
    e.preventDefault();
    // Pegando o cep informado e adicionando na constante
    const cep = e.target.elements.cep.value;
    // limpando o resultado apenas para numeros 
    // verificando se tem 8 digitos
    console.log(cep);
    if (cep?.length !== 8) {
      return;
    }
    // conectando com a api
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res) => res.json())
    .then((data) => console.log(data))
  
  }

    return (
      <div id="content">
        <header>
          <div className="container">
            <img src={menu} alt="menu" />
            <div className="alinhado-direita">
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
              <p>{cep}</p>
            </div>
            <div className="resultado">
              <h2>Endereço</h2>
              <p>{endereco}</p>
            </div>
            <div className="resultado">
              <h2>Bairro</h2>
              <p>{bairro}</p>
            </div>
            <div className="resultado">
              <h2>Cidade</h2>
              <p>{cidade}</p>
            </div>
            <div className="resultado">
              <h2>Estado</h2>
              <p>{estado}</p>
            </div>
          </div>
        </main>
      </div>
    )
}
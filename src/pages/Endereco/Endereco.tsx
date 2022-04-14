import menu from "../../assets/menu.svg";
import notificacoes from "../../assets/notificacao.svg";
import profile from "../../assets/profile.jpg";
import "./style.css";

function Endereco() {
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
          esta é a main
        </main>
      </div>
    )
  }
  
  export default Endereco
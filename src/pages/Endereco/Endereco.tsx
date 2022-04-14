import menu from "../../assets/menu.svg";
import notificacoes from "../../assets/notificacao.svg";


function Endereco() {
    return (
      <div id="content">
        <header>
          <img src={menu} alt="menu" />
          <img src={notificacoes} alt="notificações" />
          <img src="" alt="imagem de perfil" id="profile" />
        </header>
        <main>
          esta é a main
        </main>
      </div>
    )
  }
  
  export default Endereco
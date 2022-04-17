// importacao de bibliotecast

// importacao de estilo e imagens
import logo from "../../assets/logo-xg.svg";
import googleLogo from "../../assets/google-logo.svg";
import "./style.css";

export function Login() {
    return (
        <div className="content">
            <div className="cover">
                <img src={logo} alt="Who am I?" />
            </div>
            <div className="container">
                <button className="login-google">
                    <img src={googleLogo} alt="Google" />
                    Entrar com Google
                </button>
                <div className="divisor">
                    <span className="linha-divisora">

                    </span>
                    <p>ou entre com</p>
                    <span className="linha-divisora">

                    </span>
                </div>
                <form action="">
                    <input type="text" placeholder="E-mail" required/>
                    <input type="password" placeholder="Senha" required/>
                    <button type="submit" className="entrar">Entrar</button>
                </form>
                <div className="area-link">
                    <p>Não consegue acessar? <a href="#">Esqueci a senha.</a></p>
                </div>
                <div className="area-link">
                    <p>Ainda não tem um perfil? <a href="#">Criar conta</a></p>
                </div>
            </div>
        </div>
    )
}
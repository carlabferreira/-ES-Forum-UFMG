import { useNavigate } from "react-router-dom";
import left_arrow from "../icons/left.png";

function AdminDashboard({ user, logout }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user");
        logout();
        navigate("/");
    };

    return (
      <div className="container">
        <h1>Bem-vindo, Técnico {user.nome || user.email}!</h1>
        <button className="button" onClick={handleLogout}>Logout</button>
        <button className="button" onClick={() => navigate("/criar-tag")}>Criar Tag</button>
        <button className="button" onClick={() => navigate("/criar-categoria")}>Criar Categoria</button>
        <div className="register-redirect">
          <p>
            <button className="link-cadastro" onClick={() => navigate("/")}>
              <img src={left_arrow} id="arrow" alt="Voltar"/>
              Voltar para a Página Inicial
            </button>
          </p>
        </div>
      </div>
    );
}

export default AdminDashboard;


import logo from "../assets/logo.jpg";
import fotoAutenticacion from "../assets/foto_autenticacion.jpg";
import "../App.css";

const LogIn = () => {
    
  return (
    <div className="register-container">
      <div className="form-container">
        <img src={logo} alt="Logo Aparta+" className="image" />
        <h2 className="iniciar-h2">Iniciar Sesión</h2>
        <form className="register-form">
          <label htmlFor="email"  >Correo</label>
          <input type="email" id="email"  placeholder="Introduce tu correo" />

          <label htmlFor="password" className="input-password" >Contraseña</label>
          <input
            type="password"
            id="password"
            placeholder="Introduce tu contraseña"
          />

          <div className="form-links">
            <a href="/reset" className="form-link">
              ¿Olvidaste tu contraseña?
            </a>
            <a href="/signUp" className="form-link">
              ¿No tienes una cuenta?
            </a>
          </div>

          <button type="submit" className="register-button">
            Iniciar Sesión
          </button>
        </form>
      </div>
      <div className="image-container">
        <img
          src={fotoAutenticacion}
          alt="Building"
          className="background-image"
        />
        <div className="image-overlay"></div> 
      </div>
      <link rel="stylesheet" href="/src/style/iniciar-sesion.css" />
    </div>
  );
};

export default LogIn;

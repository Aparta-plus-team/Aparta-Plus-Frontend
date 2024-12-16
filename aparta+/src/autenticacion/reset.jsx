
import logo from "../assets/logo.jpg";
import fotoAutenticacion from "../assets/foto_autenticacion.jpg";
import "../App.css";

const Reset = () => {
    
  return (
    <div className="register-container">
      <div className="form-container">
        <img src={logo} alt="Logo Aparta+" className="image" />
        <h2 className="reset-h2">Restablecer Contraseña</h2>
        <form className="register-form">
          <label htmlFor="email"  >Correo</label>
          <input type="email" id="email"  placeholder="Introduce tu correo" />


          <div className="form-links">
            <a href="/login" className="form-link">
            ¿Recuerdas la contraseña? Iniciar sesión
            </a>
          </div>

          <button type="submit" className="register-button">
            Enviar
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

export default Reset;

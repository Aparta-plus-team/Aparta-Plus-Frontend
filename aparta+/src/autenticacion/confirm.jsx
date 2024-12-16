
import logo from "../assets/logo.jpg";
import fotoAutenticacion from "../assets/foto_autenticacion.jpg";
import "./autenticacion.css";


const LogIn = () => {
    
  return (
    <div className="register-container">
      <div className="form-container">
        <img src={logo} alt="Logo Aparta+" className="image" />
        <h2 className="reset-h2">Restablecer Contraseña</h2>
        <form className="register-form">
          <label htmlFor="email"  >Contraseña</label>
          <input type="email" id="email"  placeholder="Introduce tu contraseña" />

          <label htmlFor="password" className="input-password" ><i className="baseline-confirmation_number"></i> Contraseña</label>
          <input
            type="password"
            id="password"
            placeholder="confirma tu contraseña"
          />

          <button type="submit" className="register-button">
            Guardar
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

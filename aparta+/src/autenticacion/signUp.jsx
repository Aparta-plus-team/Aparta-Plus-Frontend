
import logo from "../assets/logo.jpg";
import fotoAutenticacion from "../assets/foto_autenticacion.jpg";
import "./autenticacion.css";


const SignUp = () => {


  return (
      <div className="register-container">
        <link rel="stylesheet" href="/src/style/registro.css" />
      <div className="form-container">
        <img src={logo} alt="Logo Aparta+" className="logo" />
        <h2>Regístrate</h2>
        <form className="register-form">
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" placeholder="Introduce tu nombre" />

          <label htmlFor="email">Correo</label>
          <input type="email" id="email" placeholder="Introduce tu correo" />

          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            placeholder="Introduce tu contraseña"
          />

          <label htmlFor="confirm-password">Confirma Contraseña</label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirma tu contraseña"
          />

          <button type="submit" className="register-button">
            Registrar
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
      
    </div>

    
  );
};

export default SignUp;

import logo from "../assets/logo.jpg";
import fotoAutenticacion from "../assets/foto_autenticacion.jpg";
import "./autenticacion.css";

const Reset = () => {
  return (
    <div className="register-container">
      <div className="form-container">
        <img src={logo} alt="Logo Aparta+" className="image" />
        <h2 className="reset-h2">Restablecer Contraseña</h2>
        <form className="register-form">
          <p className="texto-p">
            Te hemos enviado un correo con el codigo para cambiar tu contraseña.
          </p>
          <input type="email" id="email" placeholder="Introduce el codigo" />

          <div className="form-links">
            <a className="comentario">¿No recibió el correo?</a>

            <a href="/login" className="form-link">
              Reenviar código
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

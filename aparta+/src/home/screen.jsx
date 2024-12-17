import "./sytle.css";
import logo from "../assets/logo.jpg"; // Importa el logo
import sala from "../assets/sala.jpg"; // Importa la imagen de la sala
import aptBlanco from "../assets/apt-blanca.jpg";
import aptAzul from "../assets/apt-azul.jpg";
import cocina from "../assets/cocina.jpg";

const Screen = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <img src={logo} alt="Aparta+" className="about-logo" />
      </header>
      <div className="about-content">
        <div className="about-text">
          <h2>¿Quiénes Somos?</h2>
          <p>
          Aparta+ se concibe como una herramienta práctica para administradores de bienes raíces,
          permitiéndoles gestionar propiedades, contratos y pagos con mayor agilidad, 
          al mismo tiempo que ofrecen una experiencia más
          conveniente y profesional a sus inquilinos. 
          </p>
          <p>
          Una solución de bienes raíces enfocada en automatizar procesos administrativos clave como la generación de facturas, 
          la recolección de pagos y el manejo de estadísticas relacionadas con propiedades e inquilinos.
          </p>
          <div className="about-buttons">
            <a href="/signUp" className="btn btn-green">
              Regístrate
            </a>
            <a href="/login" className="btn btn-blue">
              Iniciar Sesión
            </a>
          </div>
        </div>
        <div className="about-images">
          <img src={sala} alt="sala" className="image-top" />
          <img src={aptBlanco} alt="apt-blanco" className="image-right" />
          <img src={aptAzul} alt="apt-Azul" className="image-left" />
          <img src={cocina} alt="Cocina" className="image-bottom" />
        </div>
      </div>
    </div>
  );
};

export default Screen;

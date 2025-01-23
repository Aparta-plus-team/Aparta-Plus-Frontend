import { useState } from "react";
import { useNavigate } from "react-router-dom";  // Importar useNavigate
import PropTypes from "prop-types";  // Importar PropTypes
import logo from "&/logo.jpg";
import "+/header.component.scss";

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();  // Crear una instancia de navigate

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleLogout = () => {
    console.log("Cerrando sesión...");
    localStorage.removeItem("userId");
    localStorage.removeItem("username");
    localStorage.removeItem("avatarLetter");
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    navigate("/login");
  };

  return (
    <div className="header">
      <img
        src={logo}
        alt="Logo Aparta+"
        onClick={() => navigate("/dashboard")}
        className="account-logo cursor-pointer"
      />
      <div className="avatar-container cursor-pointer">
        <div
          className="avatar-circle"
          onClick={toggleDropdown}
          style={{
            backgroundColor: localStorage.getItem("avatarColor"),  // Color gris para el avatar
            color: "white",  // Asegurarse de que la letra sea blanca
          }}
        >
          {localStorage.getItem("avatarLetter")}
        </div>
        {showDropdown && (
          <div className="dropdown-menu">
            <button onClick={() => navigate("/account")}>Mi cuenta</button>
            <button onClick={handleLogout}>Cerrar sesión</button>
          </div>
        )}
      </div>
    </div>
  );
}

// Validación de propiedades
Header.propTypes = {
  color: PropTypes.string,  // Se espera que 'color' sea una cadena
  letter: PropTypes.string, // Se espera que 'letter' sea una cadena
};

export default Header;

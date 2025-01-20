
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";  // Importar useNavigate
import PropTypes from "prop-types";  // Importar PropTypes
import logo from "&/logo.jpg";
import "+/header.component.scss";

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [storedLetter, setStoredLetter] = useState("");  // Estado para almacenar la letra
  const [storedColor, setStoredColor] = useState("");    // Estado para almacenar el color
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

  // Leer desde localStorage cuando el componente se monta
  useEffect(() => {
    const savedColor = localStorage.getItem("avatarColor");
    const savedLetter = localStorage.getItem("avatarLetter");
    
    if (savedColor) setStoredColor(savedColor);
    if (savedLetter) setStoredLetter(savedLetter);
  }, []); // El useEffect se ejecuta solo una vez cuando el componente se monta

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
            backgroundColor: storedColor,  // Usar el color guardado
            color: "white",  // Asegurarse de que la letra sea blanca
          }}
        >
          {storedLetter} {/* Usar la letra guardada */}
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

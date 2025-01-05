import { useState } from "react";
import { useNavigate } from "react-router-dom";  // Importar useNavigate
import logo from "../assets/logo.jpg";
import "./header.css";

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();  // Crear una instancia de navigate

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleLogout = () => {
    console.log("Cerrando sesión...");
    navigate("/login");  
  };

  return (
    <div className="header">
      <img src={logo} alt="Logo Aparta+" className="account-logo" />
      <div className="avatar-container">
        <div className="avatar-circle" onClick={toggleDropdown}>
          K
        </div>
        {showDropdown && (
          <div className="dropdown-menu">
            <button onClick={() => navigate("/account")}>Mi cuenta</button>  {/* Redirigir a Mi cuenta */}
            <button onClick={handleLogout}>Cerrar sesión</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;

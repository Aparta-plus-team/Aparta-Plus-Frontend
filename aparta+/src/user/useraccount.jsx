
import logo from "../assets/logo.jpg";
import "./useraccount.css";

function AccountPage() {
  return (
    <div className="account-page-container">
      
      <div className="sidebar">
          <button onClick={() => window.history.back()} className="back-btn">
            ←
          </button>
      </div>

      <div className="header">
        <img src={logo} alt="Logo Aparta+" className="account-logo" />
        <div className="avatar-circle">
          K
        </div>
      </div>

      <div className="main-content">

        <h1 className="title">Mi cuenta</h1>

        <div className="profile-section">
          <div className="profile-picture">K</div>
          <div className="profile-info">
            <h2 className="profile-name">Keven Shein</h2>
            <p className="profile-email">kevenshein@gmail.com</p>
          </div>
        </div>

          {/* Formulario de edición */}
          <div className="form-container">
            <div className="form-row">
              <div className="form-group">
                <label>Nombre</label>
                <input type="text" value="Keven" />
              </div>
              <div className="form-group">
                <label>Apellido</label>
                <input type="text" value="Shein" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Género</label>
                <input type="text" value = "Masculino" />
              </div>
              <div className="form-group">
                <label>Teléfono</label>
                <input type="text" value="809-000-0000" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Correo</label>
                <input type="email" value="kevenshein@gmail.com" />
              </div>
              <div className="form-group">
                <label>Contraseña</label>
                <input type="password" value="********" />
              </div>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="button-group">
            <button className="cancel-btn">Cancelar</button>
            <button className="save-btn">Guardar</button>
          </div>
        </div>
    </div>
  );
}

export default AccountPage;

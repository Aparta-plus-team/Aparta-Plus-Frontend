import "+/useraccount.scss";
import Header from "*/header";
import Sidebar from "*/accountSidebar";
import { useNavigate } from "react-router-dom";

function AccountPage() {
  const navigate = useNavigate();

  const handleSave = () => {
    console.log("Guardando cambios...");
    setTimeout(() => {
      navigate("/dashboard");
    }, 2000);
  };

  return (
    <div className="dashboard flex flex-col h-svh">
      {/* Header debe estar fuera del contenido principal para que sea fijo en la parte superior */}
      <Header />
      <div className="principal-content">
        {/* Sidebar */}
        <Sidebar />

        {/* Contenido principal */}

        <div className="h-full w-full overflow-y-scroll">
          <div className="main-content h-full">
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
                  <input type="text" value="Masculino" />
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
              <button className="cancel-btn" onClick={() => navigate("/dashboard")}>Cancelar</button>
              <button className="save-btn" onClick={handleSave}>Guardar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountPage;

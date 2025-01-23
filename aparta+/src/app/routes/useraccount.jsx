import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "+/useraccount.scss";
import Input from "*/Input";
import Button from "*/Button";
import MainView from "*/mainView";
import ComboBox from "*/ComboBox";

function AccountPage() {
  const navigate = useNavigate();

  // Estado para los valores del formulario
  const [formData, setFormData] = useState({
    firstName: "Keven",
    lastName: "Shein",
    gender: "Masculino",
    phone: "809-000-0000",
    email: "kevenshein@gmail.com",
    password: "********",
  });

  // Estado para el color de fondo aleatorio y la primera letra
  const [backgroundColor, setBackgroundColor] = useState("");
  const [initialLetter, setInitialLetter] = useState(formData.firstName[0]);

  // Generar un color aleatorio solo cuando se guarda
  const generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBackgroundColor(randomColor);
    setInitialLetter(formData.firstName[0]); // Primer letra del nombre
  };

  // Manejador de cambios en los inputs
  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Manejador de guardado
  const handleSave = () => {
    console.log("Guardando cambios...", formData);
    generateRandomColor(); // Cambiar color y letra cuando se guarda

    // Guardar en localStorage
    localStorage.setItem("avatarColor", backgroundColor); // Guardar color
    localStorage.setItem("avatarLetter", initialLetter); // Guardar letra

    setTimeout(() => {
      navigate("/dashboard");
    }, 2000);
  };

  // Manejador de cancelar
  const handleCancel = () => {
    navigate("/dashboard");
  };

  return (
    <MainView sidebarType="thin">
      <div className="h-full w-full">
        <div className="main-content h-full">
          <h1 className="title">Mi cuenta</h1>
          <div className="profile-section">
            <div
              className="profile-picture"
              style={{ backgroundColor: backgroundColor }}
            >
              {formData.firstName[0]} {/* Usamos la primera letra del nombre */}
            </div>
            <div className="profile-info">
              <h2 className="profile-name">
                {formData.firstName} {formData.lastName}
              </h2>
              <p className="profile-email">{formData.email}</p>
            </div>
          </div>

          {/* Formulario de edición con el componente Input */}
          <div className="form-container">
            <div className="form-row">
              <Input
                content="Nombre"
                value={formData.firstName}
                width="400px"
                onChange={(value) => handleChange("firstName", value)}
              />
              <Input
                content="Correo"
                value={formData.email}
                width="400px"
                onChange={(value) => handleChange("email", value)}
              />
            </div>

            <div className="form-row">
              <ComboBox 
                title="Género"
                content="Genero"
                options={["Masculino", "Femenino"]}
                onChange={(e) => console.log(e)}
                width="400px"
              />
              <Input
                content="Teléfono"
                value={formData.phone}
                width="400px"
                onChange={(value) => handleChange("phone", value)}
              />
            </div>

            <div className="form-row">
              {/* Contenedor del campo de contraseña con enlace */}
              <div className="password-container">
                <Input
                  isPassword={true}
                  content="Contraseña"
                  value="********"
                  width="365px"
                  disabled
                />
                {/* Enlace en lugar del botón */}
                <a href="/reset" className="edit-password-link">
                  Editar
                </a>
              </div>
            </div>
          </div>

          <div className="button-group flex gap-4 mt-4">
            <Button
              text="Cancelar"
              onClick={handleCancel} // Llamar a la función cancelar
              color="blue"
              width="150px"
            />
            <Button
              text="Guardar"
              onClick={handleSave} // Llamar a la función guardar
              color="green"
              width="150px"
            />
          </div>
        </div>
      </div>
    </MainView>
  );
}

export default AccountPage;

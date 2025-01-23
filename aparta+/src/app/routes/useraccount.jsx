import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import gql from "graphql-tag";
import "+/useraccount.scss";
import Input from "*/Input";
import Button from "*/Button";
import MainView from "*/mainView";

// GraphQL queries and mutations
const GET_USER_INFO = gql`
  query GetUserInfo($userId: UUID) {
    usuarios(where: { usuarioid: { eq: $userId } }) {
      items {
        usuarioid
        usuarionombre
        usuariotelefono
        usuariocorreo
      }
    }
  }
`;

const UPDATE_USER_INFO = gql`
  mutation UpdateUserInfo($userId: String!, $name: String!, $phoneNumber: String!) {
    changeUserInfo(input: { name: $name, phoneNumber: $phoneNumber, userId: $userId }) {
      id
      username
      email
    }
  }
`;

function AccountPage() {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId"); // Replace with actual user ID

  // States
  const [formData, setFormData] = useState({
    firstName: "",
    phone: "",
    email: "",
  });
  const [backgroundColor, setBackgroundColor] = useState(localStorage.getItem("avatarColor"));
  const [initialLetter, setInitialLetter] = useState("");

  // Apollo hooks
  const { data, loading, error } = useQuery(GET_USER_INFO, {
    variables: { userId },
  });
  const [updateUserInfo] = useMutation(UPDATE_USER_INFO);

  // Fill form with fetched data
  useEffect(() => {
    if (data?.usuarios?.items[0]) {
      const user = data.usuarios.items[0];
      setFormData({
        firstName: user.usuarionombre || "",
        phone: user.usuariotelefono || "",
        email: user.usuariocorreo || "",
      });
      setInitialLetter(user.usuarionombre?.[0] || "");
    }
  }, [data]);

  // Generate random color
  const generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    localStorage.setItem("avatarColor", randomColor);
    localStorage.setItem("avatarLetter", formData.firstName[0]);
    setBackgroundColor(randomColor);
  };

  // Handle input changes
  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Handle save
  const handleSave = async () => {
    try {
      console.log("Guardando cambios...", formData);
      await updateUserInfo({
        variables: {
          userId,
          name: formData.firstName,
          phoneNumber: formData.phone,
        },
      });
      generateRandomColor();
      setTimeout(() => navigate("/dashboard"), 2000);
    } catch (e) {
      console.error("Error al actualizar el usuario:", e);
    }
  };

  // Handle cancel
  const handleCancel = () => {
    navigate("/dashboard");
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los datos del usuario</p>;

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
              {initialLetter.toUpperCase()}
            </div>
            <div className="profile-info">
              <h2 className="profile-name">{formData.firstName}</h2>
              <p className="profile-email">{formData.email}</p>
            </div>
          </div>

          {/* Form */}
          <div className="form-container">
            <div className="form-row">
              <Input
                content="Nombre"
                value={formData.firstName}
                width="400px"
                onChange={(value) => handleChange("firstName", value)}
              />
              <Input
                content="Teléfono"
                value={formData.phone}
                width="400px"
                onChange={(value) => handleChange("phone", value)}
              />
            </div>

            <div className="form-row flex flex-row items-center justify-center">
              <div className="password-container">
                <Input
                  isPassword={false}
                  content="Correo electrónico"
                  value={formData.email}
                  width="400px"
                  disabled
                />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="button-group flex gap-4 mt-4">
            <Button
              text="Cancelar"
              onClick={handleCancel}
              color="blue"
              width="150px"
            />
            <Button
              text="Guardar"
              onClick={handleSave}
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

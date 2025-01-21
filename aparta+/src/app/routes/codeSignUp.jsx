import logo from "&/logo.jpg";
import fotoAutenticacion from "&/foto_autenticacion.jpg";
import "+/autenticacion.scss";
import { useEffect, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";

// Mutación GraphQL para confirmar usuario
const CONFIRM_USER = gql`
  mutation ConfirmUser($confirmationCode: String!, $email: String!) {
    confirmUser(input: { confirmationCode: $confirmationCode, email: $email })
  }
`;

const CodeSignUp = () => {
  const { email } = useParams();
  const [confirmationCode, setConfirmationCode] = useState("");
  const [confirmUser] = useMutation(CONFIRM_USER);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleSubmit = async () => {
    try {
      // Llamada a la mutación para confirmar usuario
      const { data } = await confirmUser({
        variables: { confirmationCode, email },
      });

      console.log("✅ Respuesta del servidor:", data);

      if (data) {
        // Redirige al login después de la confirmación exitosa
        navigate("/login");
      } else {
        setError("❌ Error:", data?.confirmUser?.message);
      }
    } catch (err) {
      setError("❌ Codigo incorrecto");

      if (err.graphQLErrors?.length > 0) {
        console.error("📌 GraphQL Errors:", err.graphQLErrors);
      }

      if (err.networkError) {
        console.error("🌐 Network Error:", err.networkError);
      }
    }
  };

  return (
    <div className="register-container">
      <div className="form-container">
        <img src={logo} alt="Logo Aparta+" className="image" />
        <h2 className="reset-h2">Verificar usuario</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <p className="texto-p">
            Te hemos enviado un correo con el código para verificar tu usuario.
          </p>

          <label htmlFor="confirmationCode">Código de Verificación</label>
          <input
            type="text"
            id="confirmationCode"
            placeholder="Introduce el código"
            value={confirmationCode}
            onChange={(e) => setConfirmationCode(e.target.value)}
          />

          {error && (
            <p className="error-message text-red-600">
              {error}
            </p>
          )}

          <div className="form-links">
            <a className="comentario">¿No recibió el código?</a>

            <a href="/resend-code" className="form-link">
              Reenviar código
            </a>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="register-button"
          >
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

export default CodeSignUp;

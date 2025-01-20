import { useEffect, useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import logo from "&/logo.jpg";
import fotoAutenticacion from "&/foto_autenticacion.jpg";
import "+/autenticacion.scss";

// Mutación GraphQL
const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(input: { email: $email, password: $password })
  }
`;

const VERIFY_USER = gql`
  mutation userConfirmed($email: String!) {
    userConfirmed(email: $email)
  }
`;

const GET_USER = gql`
  mutation qwe($token: String!) {
    userByToken(token: $token) {
      email
      id
      username
    }
  }
`;

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser, { loading, error }] = useMutation(LOGIN_USER);
  const [verifyUser] = useMutation(VERIFY_USER);
  const [getUser] = useMutation(GET_USER);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleVerify = async () => {
    try {
      const { data } = await verifyUser({
        variables: { email },
      });
      return data;
    } catch (err) {
      console.error("❌ Error en la verificación:", err);
      throw err;
    }
  };

  const handleGetUser = async (token) => {
    try {
      const { data } = await getUser({
        variables: { token },
      });
      return data;
    } catch (err) {
      console.error("❌ Error en la verificación:", err);
      throw err;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Enviando datos:", { email, password });

    if (!email || !password) {
      console.error("❌ Error: Email y password son requeridos.");
      return;
    }

    try {
      // Llamada a la mutación
      const { data } = await loginUser({
        variables: { email, password },
      });

      console.log("✅ Respuesta del servidor:", data);

      // Si se recibe un token, guarda en localStorage y redirige al dashboard
      if (data?.loginUser && (await handleVerify())) {
        const userData = await handleGetUser(data.loginUser);

        localStorage.setItem("userId", userData.userByToken.id);
        localStorage.setItem("username", userData.userByToken.username);
        localStorage.setItem("avatarLetter", userData.userByToken.username[0]);
        localStorage.setItem("token", data.loginUser); // Guarda el token
        localStorage.setItem("email", email); // Guarda el email
        navigate("/dashboard"); // Redirección al dashboard
      } else {
        console.error("❌ Error: No se recibió un token del servidor.");
        navigate("/confirmSignUp/" + email); // Redirección al dashboard
      }
    } catch (err) {

      //! I Chia tiene que arreglar el login para que envie un mensaje de login fallido en vez de un error

      console.error("❌ Error de autenticación:", err);
      localStorage.setItem("email", email); // Guarda el email
      navigate("/confirmSignUp/" + email); // Redirección al dashboard

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
        <h2 className="iniciar-h2">Iniciar Sesión</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Correo</label>
          <input
            type="email"
            id="email"
            placeholder="Introduce tu correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password" className="input-password">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            placeholder="Introduce tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && (
            <p className="error-message text-red-600">
              Correo o contraseña incorrecto
            </p>
          )}

          <div className="form-links">
            <a href="/reset" className="form-link">
              ¿Olvidaste tu contraseña?
            </a>
            <a href="/signUp" className="form-link">
              ¿No tienes una cuenta?
            </a>
          </div>

          <button
            type="submit"
            className="register-button text-center"
            disabled={loading}
          >
            {loading ? "Iniciando..." : "Iniciar Sesión"}
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
    </div>
  );
};

export default LogIn;

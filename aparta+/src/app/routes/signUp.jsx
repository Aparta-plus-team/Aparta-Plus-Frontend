import logo from "&/logo.jpg";
import fotoAutenticacion from "&/foto_autenticacion.jpg";
import "+/autenticacion.scss";
import { useEffect, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

// Mutación GraphQL
const REGISTER_USER = gql`
  mutation RegisterUser(
    $email: String!
    $name: String!
    $password: String!
    $phoneNumber: String!
    $username: String!
  ) {
    registerUser(
      input: {
        email: $email
        name: $name
        password: $password
        phoneNumber: $phoneNumber
        username: $username
      }
    )
  }
`;

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [registerUser] = useMutation(REGISTER_USER);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword || !phoneNumber) {
      setError("❌ Todos los campos son requeridos.");
      return;
    }

    if (password !== confirmPassword) {
      setError("❌ Las contraseñas no coinciden.");
      return;
    }

    try {
      localStorage.setItem("email", email);
      const { data } = await registerUser({
        variables: {
          email,
          name,
          password,
          phoneNumber,
          username: email,
        },
      });

      console.log("✅ Usuario registrado con éxito:", data);
      console.log(data);

      // Redirección a una pantalla de éxito o al dashboard
      navigate("/confirmSignUp/" + email);
    } catch (err) {
      console.error("❌ Error al registrar usuario:", err);

      if (err.graphQLErrors?.length > 0) {
        setError("📌 " + err.graphQLErrors[0].message);
      }

      if (err.networkError) {
        setError("🌐 Network Error:", err.networkError);
      }
    }
  };

  return (
    <div className="register-container">
      <link rel="stylesheet" href="/src/style/registro.css" />
      <div className="form-container">
        <img src={logo} alt="Logo Aparta+" className="logo" />
        <h2>Regístrate</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            placeholder="Introduce tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email">Correo</label>
          <input
            type="email"
            id="email"
            placeholder="Introduce tu correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="phoneNumber">Número de Teléfono</label>
          <input
            type="tel"
            id="phoneNumber"
            placeholder="Introduce tu número de teléfono"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            placeholder="Introduce tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label htmlFor="confirm-password">Confirma Contraseña</label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirma tu contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {error && <p className="error-message text-red-600">{error}</p>}

          <button type="submit" className="register-button">
            Registrar
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

export default SignUp;

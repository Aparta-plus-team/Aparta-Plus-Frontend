
// import logo from "&/logo.jpg";
// import fotoAutenticacion from "&/foto_autenticacion.jpg";
// import "+/autenticacion.scss";

// const LogIn = () => {
    
//   return (
//     <div className="register-container">
//       <div className="form-container">
//         <img src={logo} alt="Logo Aparta+" className="image" />
//         <h2 className="iniciar-h2">Iniciar Sesión</h2>
//         <form className="register-form">
//           <label htmlFor="email"  >Correo</label>
//           <input type="email" id="email"  placeholder="Introduce tu correo" />

//           <label htmlFor="password" className="input-password" >Contraseña</label>
//           <input
//             type="password"
//             id="password"
//             placeholder="Introduce tu contraseña"
//           />

//           <div className="form-links">
//             <a href="/reset" className="form-link">
//               ¿Olvidaste tu contraseña?
//             </a>
//             <a href="/signUp" className="form-link">
//               ¿No tienes una cuenta?
//             </a>
//           </div>

//           <a type="submit" className="register-button text-center" href="/dashboard">
//             Iniciar Sesión
//           </a>
//         </form>
//       </div>
//       <div className="image-container">
//         <img
//           src={fotoAutenticacion}
//           alt="Building"
//           className="background-image"
//         />
//         <div className="image-overlay"></div> 
//       </div>
//       <link rel="stylesheet" href="/src/style/iniciar-sesion.css" />
//     </div>
//   );
// };

// export default LogIn;


import { useState } from "react";
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

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser, { loading, error }] = useMutation(LOGIN_USER);
  const navigate = useNavigate();

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
      if (data?.loginUser) {
        localStorage.setItem("token", data.loginUser); // Guarda el token
        navigate("/dashboard"); // Redirección al dashboard
      } else {
        console.error("❌ Error: No se recibió un token del servidor.");
      }
    } catch (err) {
      console.error("❌ Error de autenticación:", err);

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

          {error && <p className="error-message">Error: {error.message}</p>}

          <div className="form-links">
            <a href="/reset" className="form-link">
              ¿Olvidaste tu contraseña?
            </a>
            <a href="/signUp" className="form-link">
              ¿No tienes una cuenta?
            </a>
          </div>

          <button type="submit" className="register-button text-center" disabled={loading}>
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

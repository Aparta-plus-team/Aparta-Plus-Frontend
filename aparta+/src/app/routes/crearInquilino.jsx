import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import MainView from "*/mainView";
import Input from "*/input";
import Button from "*/button";
import ComboBox from "*/comboBox";

// Definir la mutación para crear un inquilino
const CREAR_INQUILINO = gql`
  mutation crearInquilino(
    $nombre: String!
    $telefono: String!
    $correo: String!
    $genero: Boolean!
    $estado: Boolean!
  ) {
    createInquilino(
      inquilinoNombre: $nombre
      inquilinoTelefono: $telefono
      inquilinoCorreo: $correo
      inquilinoGenero: $genero
      estado: $estado
    ) {
      inquilinoid
      inquilinonombre
      inquilinotelefono
      inquilinocorreo
      inquilinogenero
      estado
    }
  }
`;

export default function FormularioInquilino() {
  const navegar = useNavigate();
  const [crearInquilino] = useMutation(CREAR_INQUILINO);

  const [datosFormulario, setDatosFormulario] = useState({
    nombre: "",
    apellido: "", // Solo localmente, no se envía a la BD
    genero: "",
    correo: "",
    telefono: "",
    estado: true, // Por defecto, estado en false (Atrasado)
  });

  const manejarCambio = (campo, valor) => {
    setDatosFormulario({ ...datosFormulario, [campo]: valor.toLowerCase() });
  };

  const manejarGuardar = async () => {
    try {
      await crearInquilino({
        variables: {
          nombre: datosFormulario.nombre,
          telefono: datosFormulario.telefono,
          correo: datosFormulario.correo,
          genero: datosFormulario.genero === "femenino", // 0 = Masculino (false), 1 = Femenino (true)
          estado: datosFormulario.estado, // true = Pagado, false = Atrasado
        },
      });

      console.log("Nuevo inquilino añadido:", datosFormulario);
      navegar("/inquilinos");
    } catch (error) {
      console.error("Error al crear inquilino:", error);
    }
  };

  return (
    <MainView sidebarType="thin">
      <div className="h-full w-full overflow-y-scroll">
        <div className="main-content h-full px-8">
          <div className="mt-40">
            <h1 className="text-4xl font-bold">Añadir Inquilino</h1>
          </div>

          <div className="form-container max-w-4xl">
            <div className="form-row flex gap-8 mb-8">
              <Input 
                content="Nombre" 
                value={datosFormulario.nombre} 
                onChange={(valor) => manejarCambio("nombre", valor)} 
                width="400px" 
                fontSize="16px" 
              />
              <Input 
                content="Género (Masculino / Femenino)" 
                value={datosFormulario.genero} 
                onChange={(valor) => manejarCambio("genero", valor)} 
                width="400px" 
                fontSize="16px" 
              />
            </div>

            <div className="form-row flex gap-8 mb-8">
              <Input 
                content="Correo" 
                value={datosFormulario.correo} 
                onChange={(valor) => manejarCambio("correo", valor)} 
                width="400px" 
                fontSize="16px" 
              />
              <Input 
                content="Teléfono" 
                value={datosFormulario.telefono} 
                onChange={(valor) => manejarCambio("telefono", valor)} 
                width="400px" 
                fontSize="16px" 
              />
            </div>
          </div>

          <div className="button-group flex gap-4 justify-end mt-8">
            <Button
              text="Cancelar"
              color="blue"
              onClick={() => navegar("/inquilinos")}
              width="150px"
              height="45px"
              fontSize="16px"
            />
            <Button
              text="Guardar"
              color="green"
              onClick={manejarGuardar}
              width="150px"
              height="45px"
              fontSize="16px"
            />
          </div>
        </div>
      </div>
    </MainView>
  );
}

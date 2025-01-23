


import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";
import MainView from "*/mainView";
import Input from "*/input";
import Button from "*/button";
// import propiedadId from "*/propertyCard";

const CREAR_APARTAMENTO = gql`
  mutation crearApartamento(
    $codigo: String!
    $numHabitaciones: Int!
    $tieneParqueo: Boolean!
    $numBanos: Int!
    $propiedadId: UUID!
  ) {
    createInmueble(
      codigo: $codigo
      ocupacion: false
      tieneParqueo: $tieneParqueo
      numBanos: $numBanos
      numHabitaciones: $numHabitaciones
      propiedadId: $propiedadId
    ) {
      codigo
      fechacreacion
      inmuebleid
      numbanos
      numhabitaciones
      ocupacion
      propiedadid
      tieneparqueo
    }
  }
`;


export default function CrearApartamento() {
  const navegar = useNavigate();
  const { propiedadId } = useParams(); // Extraer propiedadId desde la URL
  const [error, setError] = useState("");

  const [datosFormulario, setDatosFormulario] = useState({
    codigo: "",
    habitaciones: "",
    parqueo: "",
    cantidadBano: "",
  });

  const [crearApartamento, { loading }] = useMutation(CREAR_APARTAMENTO, {
    onCompleted: () => {
      navegar(`/verpropiedades/${propiedadId}`);
    },
    onError: (error) => {
      setError(error.message);
    },
  });

  const manejarCambio = (campo, valor) => {
    setDatosFormulario({ ...datosFormulario, [campo]: valor });
    setError("");
  };

  const validarFormulario = () => {
    if (!datosFormulario.codigo.trim()) return "El código es requerido";
    if (!datosFormulario.habitaciones || isNaN(datosFormulario.habitaciones))
      return "El número de habitaciones debe ser un valor numérico válido";
    if (!datosFormulario.parqueo)
      return "Debe especificar si tiene parqueo (Si o No)";
    if (!datosFormulario.cantidadBano || isNaN(datosFormulario.cantidadBano))
      return "El número de baños debe ser un valor numérico válido";

    const parqueo = datosFormulario.parqueo.toLowerCase();
    if (parqueo !== "si" && parqueo !== "no")
      return "El parqueo debe ser 'Si' o 'No'";

    return null;
  };

  const manejarGuardar = () => {

    console.log("manejarGuardar ejecutado"); // Para verificar que la función se ejecuta
    console.log("Propiedad ID:",propiedadId);

    const error = validarFormulario();
    if (error) {
      setError(error);
      return;
    }

    if (!propiedadId) {
      setError("El ID de la propiedad no se encontró. Por favor, regrese e intente nuevamente.");
      return;
    }

    const parqueoBoolean = datosFormulario.parqueo.toLowerCase() === "si";

    const variables = {
      codigo: datosFormulario.codigo,
      numHabitaciones: parseInt(datosFormulario.habitaciones, 10),
      tieneParqueo: parqueoBoolean,
      numBanos: parseInt(datosFormulario.cantidadBano, 10),
      propiedadId,
    };

    console.log("Variables enviadas a la mutación:", variables);

    crearApartamento({ variables });
  };

  return (
    <MainView sidebarType="thin">
      <div className="min-h-screen bg-[#F8F9FA] flex items-center">
        <div className="w-full px-8">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold text-[#2D2D2D] mb-6">
              Crear Apartamento
            </h1>

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                {error}
              </div>
            )}

            <h2 className="text-xl font-semibold text-[#2D2D2D] mb-6">
              Información del apartamento
            </h2>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <Input
                content="Codigo"
                value={datosFormulario.codigo}
                onChange={(valor) => manejarCambio("codigo", valor)}
                width="100%"
                fontSize="16px"
                placeholder="Codigo del apartamento"
              />
              <Input
                content="Habitaciones"
                value={datosFormulario.habitaciones}
                onChange={(valor) => manejarCambio("habitaciones", valor)}
                width="100%"
                fontSize="16px"
                placeholder="Cantidad de Habitaciones"
                type="number"
              />
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <Input
                content="Parqueo"
                value={datosFormulario.parqueo}
                onChange={(valor) => manejarCambio("parqueo", valor)}
                width="100%"
                fontSize="16px"
                placeholder="Si o No"
              />
              <Input
                content="Cantidad de Baño"
                value={datosFormulario.cantidadBano}
                onChange={(valor) => manejarCambio("cantidadBano", valor)}
                width="100%"
                fontSize="16px"
                placeholder="Cantidad de baño"
                type="number"
              />
            </div>

            <div className="flex justify-end gap-4">
              <Button
                text="Cancelar"
                color="blue"
                onClick={() => navegar("/property")}
                width="150px"
                height="45px"
                fontSize="16px"
                disabled={loading}
              />
              <Button
                text={loading ? "Creando..." : "Crear"}
                color="green"
                onClick={manejarGuardar}
                width="150px"
                height="45px"
                fontSize="16px"
                disabled={loading}
              />
            </div>
          </div>
        </div>
      </div>
    </MainView>
  );
}

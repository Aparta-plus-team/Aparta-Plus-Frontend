import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainView from "*/mainView";
import Input from "*/input";
import Button from "*/button";

export default function CrearApartamento() {
  const navegar = useNavigate();

  const [datosFormulario, setDatosFormulario] = useState({
    codigo: "",
    habitaciones: "",
    parqueo: "",
    cantidadBano: ""
  });

  const manejarCambio = (campo, valor) => {
    setDatosFormulario({ ...datosFormulario, [campo]: valor });
  };

  const manejarGuardar = () => {
    console.log("Nuevo apartamento añadido:", datosFormulario);
    navegar("/apartamentos");
  };

  return (
    <MainView sidebarType="thin">
      <div className="min-h-screen bg-[#F8F9FA] flex items-center">
        <div className="w-full px-8">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold text-[#2D2D2D] mb-6">
              Crear Apartamento
            </h1>

            <h2 className="text-xl font-semibold text-[#2D2D2D] mb-6">
              Información de propiedad
            </h2>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <Input
                content="Codigo"
                value={datosFormulario.codigo}
                onChange={(valor) => manejarCambio("codigo", valor)}
                width="100%"
                fontSize="16px"
                placeholder="Codigo del apamento"
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
                onClick={() => navegar("/apartamentos")}
                width="150px"
                height="45px"
                fontSize="16px"
              />
              <Button
                text="Crear"
                color="green"
                onClick={manejarGuardar}
                width="150px"
                height="45px"
                fontSize="16px"
              />
            </div>
          </div>
        </div>
      </div>
    </MainView>
  );
}
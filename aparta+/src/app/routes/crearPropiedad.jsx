

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainView from "*/mainView";
import Input from "*/input";
import Button from "*/button";
import UploadImage from "*/uploadImg";

export default function FormularioPropiedad() {
  const navegar = useNavigate();

  const [datosFormulario, setDatosFormulario] = useState({
    nombre: "",
    ubicacion: "",
    imagen: null,
  });

  const manejarCambio = (campo, valor) => {
    setDatosFormulario({ ...datosFormulario, [campo]: valor });
  };

  const manejarGuardar = () => {
    console.log("Nueva propiedad añadida:", datosFormulario);
    navegar("/propiedades");
  };

  return (
    <MainView sidebarType="thin">
      <div className="min-h-screen bg-[#F8F9FA] flex items-center">
        <div className="w-full px-8 py-12">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold text-[#2D2D2D] mb-6">
              Crear Propiedad
            </h1>

            <h2 className="text-xl font-semibold text-[#2D2D2D] mb-6">
              Información de propiedad
            </h2>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <Input
                content="Nombre de la Propiedad"
                value={datosFormulario.nombre}
                onChange={(valor) => manejarCambio("nombre", valor)}
                width="60%"
                fontSize="16px"
                placeholder="Introduce el Nombre"
              />
              <Input
                content="Ubicación"
                value={datosFormulario.ubicacion}
                onChange={(valor) => manejarCambio("ubicacion", valor)}
                width="60%"
                fontSize="16px"
                placeholder="Introduce tu Ubicación"
              />
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-[#2D2D2D] mb-4">
                Subir Foto De Propiedad
              </h2>
              <div className="border-2 border-dashed border-[#E5E7EB] rounded-lg bg-[#F8FCFF]">
                <UploadImage
                  onUpload={(imagen) => manejarCambio("imagen", imagen)}
                  text="Arrastra tu imagen aquí"
                  buttonText="Buscar"
                  containerStyle={{
                    width: "100%",
                    height: "200px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
              </div>
            </div>

            <div
              className="button-group flex gap-4 mt-8"
              style={{ marginLeft: "30px" }}
            >
              <Button
                text="Cancelar"
                color="blue"
                onClick={() => navegar("/property")}
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
      </div>
    </MainView>
  );
}

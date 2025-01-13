import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainView from "*/mainView";
import Input from "*/input";
import Button from "*/button";

export default function EditarFormularioInquilino() {
  const navegar = useNavigate();
  const { id } = useParams(); 
  const esEdicion = Boolean(id);

  const [datosFormulario, setDatosFormulario] = useState({
    nombre: "",
    apellido: "",
    genero: "",
    correo: "",
    apartamento: "",
    telefono: "",
  });

  useEffect(() => {
    if (esEdicion) {
      const datosSimulados = {
        nombre: "Keven",
        apellido: "Shein",
        genero: "Masculino",
        correo: "keven.g@gmail.com",
        apartamento: "Apartamento Taiwané",
        telefono: "809-000-0000",
      };
      setDatosFormulario(datosSimulados);
    }
  }, [id, esEdicion]);

  const manejarCambio = (campo, valor) => {
    setDatosFormulario({ ...datosFormulario, [campo]: valor });
  };

  const manejarGuardar = () => {
    console.log("Datos actualizados:", datosFormulario);
    navegar("/inquilinos");
  };

  return (
    <MainView sidebarType="thin">
      <div className="h-full w-full overflow-y-scroll">
        <div className="main-content h-full px-8">
          <div className="mt-24 mb-16">
            <h1 className="text-4xl font-bold">
              Editar Inquilino
            </h1>
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
                content="Apellido" 
                value={datosFormulario.apellido} 
                onChange={(valor) => manejarCambio("apellido", valor)} 
                width="400px" 
                fontSize="16px" 
              />
            </div>

            <div className="form-row flex gap-8 mb-8">
              <Input 
                content="Género" 
                value={datosFormulario.genero} 
                onChange={(valor) => manejarCambio("genero", valor)} 
                width="400px" 
                fontSize="16px" 
              />
              <Input 
                content="Correo" 
                value={datosFormulario.correo} 
                onChange={(valor) => manejarCambio("correo", valor)} 
                width="400px" 
                fontSize="16px" 
              />
            </div>

            <div className="form-row flex gap-8 mb-8">
              <Input 
                content="Apartamento Asociado" 
                value={datosFormulario.apartamento} 
                onChange={(valor) => manejarCambio("apartamento", valor)} 
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
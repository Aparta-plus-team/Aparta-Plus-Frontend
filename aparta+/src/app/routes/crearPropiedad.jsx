// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import MainView from "*/mainView";
// import Input from "*/input";
// import Button from "*/button";
// import UploadDocuments from "*/uploadDocs";
// import UploadImage from "*/uploadImg";

// export default function FormularioPropiedad() {
//   const navegar = useNavigate();

//   const [datosFormulario, setDatosFormulario] = useState({
//     ubicacion: "",
//     documentos: [],
//     imagen: null,
//   });

//   const manejarCambio = (campo, valor) => {
//     setDatosFormulario({ ...datosFormulario, [campo]: valor });
//   };

//   const manejarGuardar = () => {
//     console.log("Nueva propiedad añadida:", datosFormulario);
//     navegar("/propiedades");
//   };

//   return (
//     <MainView sidebarType="thin">
//       <div className="h-full w-full overflow-y-scroll">
//         <div className="main-content h-full px-8">
//           <div className="mt-10 mb-16 ">
//             <h1 className="text-4xl font-bold">Añadir Propiedad</h1>
//           </div>

//           <div className="form-container max-w-4xl">
//             <div className="form-row flex gap-8 mb-8">
//               <Input
//                 content="Ubicación"
//                 value={datosFormulario.ubicacion}
//                 onChange={(valor) => manejarCambio("ubicacion", valor)}
//                 width="400px"
//                 fontSize="16px"
//               />
//             </div>

//             <div className="form-section mb-2">
//               <h2 className="text-xl font-semibold mb-4">Subir Documentos</h2>
//               <UploadDocuments
//                 onUpload={(archivos) => manejarCambio("documentos", archivos)}
//               />
//             </div>

//             <div className="form-section">
//               <h2 className="text-xl font-semibold mb-4">Subir Imagen</h2>
//               <UploadImage
//                 onUpload={(imagen) => manejarCambio("imagen", imagen)}
//               />
//             </div>
//           </div>

//           <div className="button-group flex gap-4 justify-end mt-8">
//             <Button
//               text="Cancelar"
//               color="blue"
//               onClick={() => navegar("/propiedades")}
//               width="150px"
//               height="45px"
//               fontSize="16px"
//             />
//             <Button
//               text="Guardar"
//               color="green"
//               onClick={manejarGuardar}
//               width="150px"
//               height="45px"
//               fontSize="16px"
//             />
//           </div>
//         </div>
//       </div>
//     </MainView>
//   );
// }

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainView from "*/mainView";
import Input from "*/input";
import Button from "*/button";
import UploadDocuments from "*/uploadDocs";
import UploadImage from "*/uploadImg";

export default function FormularioPropiedad() {
  const navegar = useNavigate();

  const [datosFormulario, setDatosFormulario] = useState({
    ubicacion: "",
    documentos: [],
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
      <div className="h-full w-full overflow-y-scroll ">
        <div className="h-full px-8 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-left">Crear Propiedad</h1>
          </div>

          <div className="max-w-4xl">
            <div className="flex gap-8 mb-8">
              <Input
                content="Ubicación"
                value={datosFormulario.ubicacion}
                onChange={(valor) => manejarCambio("ubicacion", valor)}
                width="400px"
                fontSize="16px"
              />
            </div>

            <div className="mb-8 w-50 h-70">
              <h2 className="text-xl font-semibold mb-4">Adjuntar Documento</h2>
              <div>
                <UploadDocuments
                  onUpload={(archivos) => manejarCambio("documentos", archivos)}
                />
              </div>
            </div>

            <div className="mb-8 w-50 h-70">
              <h2 className="text-xl font-semibold mb-4">
                Subir Foto De Propiedad
              </h2>
              <UploadImage
                onUpload={(imagen) => manejarCambio("imagen", imagen)}
              />
            </div>
          </div>

          <div className="button-group flex gap-3 ">
            <Button
              text="Cancelar"
              color="blue"
              onClick={() => navegar("/propiedades")}
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

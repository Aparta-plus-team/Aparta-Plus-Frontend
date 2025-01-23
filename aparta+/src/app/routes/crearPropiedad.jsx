import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";
import MainView from "*/mainView";
import Input from "*/input";
import Button from "*/button";
import UploadImage from "*/uploadImg";
import ComboBox from "*/comboBox";

// GraphQL Mutations
const CREAR_APARTAMENTO = gql`
  mutation CrearApartamento($input: CreatePropertyInput!) {
    createProperty(input: $input) {
      propiedadid
    }
  }
`;

const UPLOAD_IMAGES = gql`
  mutation UploadImages($propertyId: String!, $file: Upload!) {
    uploadImages(propertyId: $propertyId, file: $file) {
      key
      url
    }
  }
`;

const UPLOAD_PORTRAIT = gql`
  mutation UploadPortrait($file: Upload!, $propertyId: String!) {
    uploadPortrait(file: $file, propertyId: $propertyId) {
      key
      url
    }
  }
`;

export default function FormularioPropiedad() {
  const navigate = useNavigate();

  const [datosFormulario, setDatosFormulario] = useState({
    nombre: "",
    ubicacion: "",
    portada: null,
    imagenes: [],
  });

  const [crearApartamento] = useMutation(CREAR_APARTAMENTO);
  const [uploadImages] = useMutation(UPLOAD_IMAGES);
  const [uploadPortrait] = useMutation(UPLOAD_PORTRAIT);

  const manejarCambio = (campo, valor) => {
    setDatosFormulario({ ...datosFormulario, [campo]: valor });
  };
  
  const manejarGuardar = async () => {
    try {
      // Crear propiedad
      const { data } = await crearApartamento({
        variables: {
          input: {
            nombre: datosFormulario.nombre,
            ubicacion: datosFormulario.ubicacion,
            usuarioid: localStorage.getItem("userId"), // Cambia este valor según corresponda
          },
        },
      });

      const propiedadId = data.createProperty.propiedadid;

      console.log(datosFormulario);

      // Subir portada
      if (datosFormulario.portada) {
        const file = new Blob([datosFormulario.portada.file], { type: "text/plain" });
        await uploadPortrait({
          variables: {
            file: file,
            propertyId: propiedadId,
          },
        });
      }

      // Subir imágenes
      if (datosFormulario.imagenes.length > 0) {
        for (const imagen of datosFormulario.imagenes) {
          const file = new Blob([imagen.file], { type: "text/plain" });
          await uploadImages({
            variables: {
              propertyId: propiedadId,
              file: file,
            },
          });
        }
      }

      console.log("Propiedad creada exitosamente.");
      navigate("/property");
    } catch (error) {
      console.error("Error al guardar la propiedad:", error);
    }
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
              <ComboBox
                title="Ubicación"
                content="Ubicacion"
                options={[
                  "Azua de Compostela",
                  "Estebanía",
                  "Guayabal",
                  "Las Charcas",
                  // ...más opciones aquí
                ]}
                onChange={(valor) => manejarCambio("ubicacion", valor)}
                width="100%"
              />
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-[#2D2D2D] mb-4">
                Subir Foto De Propiedad
              </h2>
              <div className="border-2 border-dashed border-[#E5E7EB] rounded-lg bg-[#F8FCFF] flex flex-row gap-8">
                <UploadImage
                  variant="portada"
                  onUpload={(imagen) =>
                    manejarCambio("portada", imagen[0] || null)
                  }
                  text="Portada de la propiedad"
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
                <UploadImage
                  variant="gallery"
                  onUpload={(imagenes) =>
                    manejarCambio("imagenes", imagenes || [])
                  }
                  text="Imagenes de la propiedad"
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
                onClick={() => navigate("/property")}
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

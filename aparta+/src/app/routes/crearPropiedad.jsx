import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainView from "*/mainView";
import Input from "*/input";
import Button from "*/button";
import UploadImage from "*/uploadImg";
import ComboBox from "*/comboBox";
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
              <ComboBox
                title="Ubicación"
                content="Genero"
                options={[
                  "Azua de Compostela",
                  "Estebanía",
                  "Guayabal",
                  "Las Charcas",
                  "Las Yayas de Viajama",
                  "Padre Las Casas",
                  "Peralta",
                  "Pueblo Viejo",
                  "Sabana Yegua",
                  "Tábara Arriba",
                  "Baní",
                  "Matanzas",
                  "Nizao",
                  "Villa Bisonó (Navarrete)",
                  "Villa González",
                  "Santiago de los Caballeros",
                  "Esperanza",
                  "Laguna Salada",
                  "Mao",
                  "Bonao",
                  "Maimón",
                  "Piedra Blanca",
                  "Comendador",
                  "El Llano",
                  "Hondo Valle",
                  "Juan Santiago",
                  "Pedro Santana",
                  "Enriquillo",
                  "La Ciénaga",
                  "Paraíso",
                  "Polo",
                  "Santa Cruz de Barahona",
                  "Vicente Noble",
                  "Cotuí",
                  "Cevicos",
                  "Fantino",
                  "La Mata",
                  "Dajabón",
                  "El Pino",
                  "Loma de Cabrera",
                  "Partido",
                  "Restauración",
                  "San Francisco de Macorís",
                  "Arenoso",
                  "Castillo",
                  "Eugenio María de Hostos",
                  "Las Guáranas",
                  "Pimentel",
                  "Villa Riva",
                  "Santo Domingo Este",
                  "Santo Domingo Norte",
                  "Santo Domingo Oeste",
                  "Boca Chica",
                  "Los Alcarrizos",
                  "Pedro Brand",
                  "San Antonio de Guerra",
                  "El Seibo",
                  "Miches",
                  "Comendador",
                  "El Llano",
                  "Hondo Valle",
                  "Juan Santiago",
                  "Pedro Santana",
                  "San Pedro de Macorís",
                  "Consuelo",
                  "Guayacanes",
                  "Quisqueya",
                  "Ramón Santana",
                  "Hato Mayor del Rey",
                  "El Valle",
                  "Sabana de la Mar",
                  "Hermanas Mirabal",
                  "Salcedo",
                  "Tenares",
                  "Villa Tapia",
                  "La Romana",
                  "Guaymate",
                  "Villa Hermosa",
                  "La Vega",
                  "Constanza",
                  "Jarabacoa",
                  "Jima Abajo",
                  "Moca",
                  "Cayetano Germosén",
                  "Gaspar Hernández",
                  "Jamao al Norte",
                  "Monte Cristi",
                  "Castañuelas",
                  "Guayubín",
                  "Las Matas de Santa Cruz",
                  "Manzanillo",
                  "Pepillo Salcedo",
                  "Villa Vásquez",
                  "Monte Plata",
                  "Bayaguana",
                  "Peralvillo",
                  "Sabana Grande de Boyá",
                  "Yamasá",
                  "Samaná",
                  "Las Terrenas",
                  "Sánchez",
                  "San Cristóbal",
                  "Bajos de Haina",
                  "Cambita Garabitos",
                  "Los Cacaos",
                  "Sabana Grande de Palenque",
                  "San Gregorio de Nigua",
                  "Villa Altagracia",
                  "Yaguate",
                  "San José de Ocoa",
                  "Sabana Larga",
                  "Rancho Arriba",
                  "San Juan de la Maguana",
                  "Bohechío",
                  "El Cercado",
                  "Juan de Herrera",
                  "Las Matas de Farfán",
                  "Vallejuelo",
                  "Santiago Rodríguez",
                  "Monción",
                  "San Ignacio de Sabaneta",
                  "Villa Los Almácigos",
                  "Puerto Plata",
                  "Altamira",
                  "Guananico",
                  "Imbert",
                  "Los Hidalgos",
                  "Luperón",
                  "Sosúa",
                  "Villa Isabela",
                  "Valverde",
                  "Esperanza",
                  "Laguna Salada",
                  "Mao",
                  "Distrito Nacional (Santo Domingo)",
                ]}
                onChange={(e) => console.log(e)}
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

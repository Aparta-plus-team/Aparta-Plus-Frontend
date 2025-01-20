
import { useState } from "react"; // Importar useState
import { useQuery, gql } from "@apollo/client";
import Searchbar from "*/searchbar";
import TablaInquilinos from "*/tablaInquilinos";
import "+/inquilinos.scss";
import MainView from "*/mainView";

// Definir el query GraphQL para obtener los inquilinos
const GET_INQUILINOS = gql`
  query verInquilino {
    inquilinos {
      items {
        inquilinoid
        inquilinonombre
        inquilinocorreo
        inquilinotelefono
        estado
      }
    }
  }
`;

const InquilinosPage = () => {
  // Definir estado para inquilinos, término de búsqueda y los inquilinos filtrados
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredInquilinos, setFilteredInquilinos] = useState([]);

  // Ejecutar el query con useQuery de Apollo
  const { loading, error, data } = useQuery(GET_INQUILINOS);

  if (loading) return <p>Cargando inquilinos...</p>;
  if (error) return <p>Error al cargar inquilinos: {error.message}</p>;

  // Mapear los datos correctamente para `TablaInquilinos`
  const inquilinos = data?.inquilinos?.items.map((item) => ({
    id: item.inquilinoid,
    nombre: item.inquilinonombre,
    correo: item.inquilinocorreo,
    telefono: item.inquilinotelefono,
    estado: item.estado,
  })) || [];

  // Función para manejar la búsqueda
  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm); // Actualizar el término de búsqueda

    // Filtrar los inquilinos basados en el término de búsqueda
    const filtered = inquilinos.filter((inquilino) =>
      inquilino.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquilino.correo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquilino.telefono.includes(searchTerm) ||
      (inquilino.estado ? "Alquilado" : "Libre").toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredInquilinos(filtered); // Actualizar el estado con los inquilinos filtrados
  };

  // Mostrar inquilinos filtrados, o todos si no hay filtro
  const displayInquilinos = searchTerm ? filteredInquilinos : inquilinos;

  return (
    <MainView sidebarType="full">
      <main className="layout__main">
        <div className="layout__content">
          <div className="inquilinos-container">
            <div className="inquilinos-header">
              <h1>Administrar Inquilinos</h1>
              <div className="inquilinos-actions">
                {/* Pasa la función onSearch */}
                <Searchbar placeholder="Buscar inquilino" onSearch={handleSearch} />
                <a href="/crearinquilino">
                  <button className="add-button">Añadir un inquilino +</button>
                </a>
              </div>
            </div>

            <div className="table-container">
              <div className="table-header">
                <div className="header-cell">Nombre</div>
                <div className="header-cell">Correo electrónico</div>
                <div className="header-cell">Teléfono</div>
                <div className="header-cell">Estado</div>
                <div className="header-cell">Acciones</div>
              </div>
              {/* Aquí pasamos los inquilinos filtrados o todos los inquilinos */}
              <TablaInquilinos inquilinos={displayInquilinos} />
            </div>
          </div>
        </div>
      </main>
    </MainView>
  );
};

export default InquilinosPage;

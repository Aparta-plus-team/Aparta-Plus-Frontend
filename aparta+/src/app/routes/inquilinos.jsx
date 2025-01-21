
import { useQuery, gql } from "@apollo/client";
import Searchbar from "*/searchbar";
import TablaInquilinos from "*/tablaInquilinos";
import "+/inquilinos.scss";
import MainView from "*/mainView";

// Definir el query GraphQL para obtener los inquilinos
const GET_INQUILINOS = gql`
  query verInquilino {
    inquilinos{
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

  return (
    <MainView sidebarType="full">
      <main className="layout__main">
        <div className="layout__content">
          <div className="inquilinos-container">
            <div className="inquilinos-header">
              <h1>Administrar Inquilinos</h1>
              <div className="inquilinos-actions">
                <Searchbar placeholder="Buscar inquilino" />
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
              <TablaInquilinos inquilinos={inquilinos} />
            </div>
          </div>
        </div>
      </main>
    </MainView>
  );
};

export default InquilinosPage;


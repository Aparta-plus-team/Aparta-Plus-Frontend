

import { useState } from "react";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Searchbar from "*/searchbar";
import PropertyCard from "*/propertyCard";
import "+/properties.scss";
import MainView from "*/mainView";

// Consulta GraphQL para obtener las propiedades
const GET_PROPIEDADES = gql`
  query verPropiedadCarta {
  propiedads {
    items {
      nombre
      ubicacion
      propiedadid
      inmuebles {
        numbanos
        numhabitaciones
        inmuebleid
        tieneparqueo
      }
    }
  }
}
`;

const Property = () => {
  const { loading, error, data } = useQuery(GET_PROPIEDADES);
  const [search, setSearch] = useState(""); // Estado para la búsqueda

  // Verificamos si hay datos antes de aplicar el filtro
  const propiedades = data?.propiedads?.items || [];

  // Filtrar propiedades según la búsqueda
  const filteredProperties = propiedades.filter((prop) =>
    prop.nombre?.toLowerCase().includes(search.toLowerCase()) // Filtra por nombre de la propiedad
  );

  // Función para actualizar el estado de la búsqueda
  const handleSearch = (searchValue) => {
    setSearch(searchValue);
  };

  return (
    <MainView sidebarType="full">
      <div className="property__content">
        {/* Sección de bienvenida y barra de búsqueda */}
        <div className="property__header">
          <h1 className="property__welcome">WELCOME AQUILEN’T!</h1>
          <div className="property__actions">
            {/* Pasa la función handleSearch al Searchbar */}
            <Searchbar
              placeholder="Buscar propiedad..."
              onSearch={handleSearch} // Esto actualizará el estado de search
            />
            <a href="/crearpropiedad">
              <button className="property__add-property">
                Añadir una propiedad +
              </button>
            </a>
          </div>
        </div>

        {/* Manejando estados de carga y error */}
        {loading ? (
          <p>Cargando propiedades...</p>
        ) : error ? (
          <p>Error al cargar propiedades</p>
        ) : filteredProperties.length > 0 ? (
          // Renderizar las propiedades filtradas
          <div className="property__properties">
            {filteredProperties.map((propiedad) => (
              <PropertyCard key={propiedad.propiedadid} {...propiedad} />
            ))}
          </div>
        ) : (
          <p>No se encontraron propiedades.</p>
        )}
      </div>
    </MainView>
  );
};

export default Property;

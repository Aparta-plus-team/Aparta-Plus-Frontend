import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client"; // *** NUEVO ***
import gql from "graphql-tag";
import Searchbar from "*/searchbar";
import PropertyCard from "*/propertyCard";
import "+/properties.scss";
import MainView from "*/mainView";
import Button from "*/button";

// Consulta GraphQL para obtener las propiedades
const GET_PROPIEDADES = gql`
  query verPropiedadCarta($usuarioid: UUID) {
    propiedads(
      take: 50
      where: { usuarioid: { eq: $usuarioid }, estado: { eq: true } }
    ) {
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
        portadaurl
      }
    }
  }
`;

// *** NUEVO ***
// Mutación para descargar el reporte de ingreso y morosidad
const DESCARGAR_REPORTE_INGRESO_MOROSIDAD = gql`
  mutation ReporteIngresoMorosidad($year: String!, $userId: String!) {
    descargarReporteIngresoMorosidad(year: $year, userId: $userId)
  }
`;

const Property = () => {
  const { loading, error, data } = useQuery(GET_PROPIEDADES, {
    variables: { usuarioid: localStorage.getItem("userId") }, // Pasamos el ID del usuario
  });
  const [search, setSearch] = useState(""); // Estado para la búsqueda

  // *** NUEVO ***
  // Hook para ejecutar la mutación de descarga de reporte
  const [descargarReporteIngresoMorosidad] = useMutation(
    DESCARGAR_REPORTE_INGRESO_MOROSIDAD
  );

  // Verificamos si hay datos antes de aplicar el filtro
  const propiedades = data?.propiedads?.items || [];

  // Filtrar propiedades según la búsqueda
  const filteredProperties = propiedades.filter(
    (prop) =>
      prop.nombre?.toLowerCase().includes(search.toLowerCase()) // Filtra por nombre de la propiedad
  );

  // Función para actualizar el estado de la búsqueda
  const handleSearch = (searchValue) => {
    setSearch(searchValue);
  };

  // *** NUEVO ***
  // Función para manejar la descarga del reporte
  const handleDescargarReporte = async () => {
    try {
      const { data } = await descargarReporteIngresoMorosidad({
        variables: {
          year: "2025", // Ajusta el valor del año según necesites
          userId: localStorage.getItem("userId"), // Se pasa el userId
        },
      });
      console.log("Reporte descargado:", data);
      // Aquí podrías manejar la respuesta, por ejemplo si te retorna una URL para descargar.
    } catch (error) {
      console.error("Error al descargar reporte", error);
    }
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

            {/* *** NUEVO: ajustamos el onClick para invocar la mutación */}
            <Button
              text={"Descargar Reporte"}
              color="green"
              width="200px"
              onClick={handleDescargarReporte}
            />
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
              <PropertyCard
                key={propiedad.propiedadid}
                nombre={propiedad.nombre}
                portadaurl={propiedad.portadaurl}
                ubicacion={propiedad.ubicacion}
                propiedadid={propiedad.propiedadid}
                inmuebles={propiedad.inmuebles}
                tipo="propiedad" // Indicamos que es una propiedad
                id={propiedad.propiedadid} // Pasamos el ID único
              />
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
